import { arrayUnion, collection, doc, getDoc, getDocs, query, updateDoc } from "firebase/firestore";
import { formatTitle } from "../../helpers";
import { db } from "../index";

export const getListas = async () => {
	try {
		const q = query(collection(db, "listas"));

		const querySnap = await getDocs(q);

		if (querySnap.empty) {
			throw new Error('No hay listas');
		}

		let listas = [];

		querySnap.forEach((doc) => {
			listas.push(doc.data());
		});

		return {
			succes: true,
			data: listas
		}
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
};

export const createItem = async (data) => {
	try {
		const { tipo, links, title, visitado } = data;

		if (!tipo || links.length === 0 || !title) {
			throw new Error('Faltan datos para crear el item');
		}

		const isValidLinks = links.every(link => link.link && link.title);

		if (!isValidLinks) {
			throw new Error('Los links no tienen el formato correcto');
		}

		const docRef = doc(db, "listas", "3DMRyyqY2lWUPZ52Rc8t");

		const updateData = tipo === 'para_comer'
			? { para_comer: arrayUnion({ title: formatTitle(title), links, visitado }) }
			: { para_visitar: arrayUnion({ title: formatTitle(title), links, visitado }) };

		await updateDoc(docRef, updateData);

		return {
			success: true
		};
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
};

export const updateVisitado = async (tipo, title) => {
	try {
		if (!tipo || !title) {
			throw new Error('Faltan datos para actualizar el item');
		}

		const docRef = doc(db, "listas", "3DMRyyqY2lWUPZ52Rc8t");

		const docSnap = await getDoc(docRef);

		if (!docSnap.exists()) {
			throw new Error('El documento no existe');
		}

		const data = docSnap.data();
		const arrayToUpdate = data[tipo];

		const updatedArray = arrayToUpdate.map(item => {
			if (item.title === title) {
				return { ...item, visitado: !item.visitado };
			}
			return item;
		});

		await updateDoc(docRef, { [tipo]: updatedArray });
		return { success: true };
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
};

export const deleteItem = async (tipo, title) => {
	try {
		if (!tipo || !title) {
			throw new Error('Faltan datos para eliminar el item');
		}

		const docRef = doc(db, "listas", "3DMRyyqY2lWUPZ52Rc8t");

		const docSnap = await getDoc(docRef);

		if (!docSnap.exists()) {
			throw new Error('El documento no existe');
		}

		const data = docSnap.data();
		const arrayToUpdate = data[tipo];

		const updatedArray = arrayToUpdate.filter(item => item.title !== title);

		await updateDoc(docRef, { [tipo]: updatedArray });
		return { success: true };
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
}