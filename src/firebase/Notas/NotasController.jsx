import { addDoc, collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { formatTitle, getUser, obtenerFechaActual } from "../../helpers";
import { db } from "../index";

export const getNotas = async () => {
	try {
		const q = query(collection(db, "notas"));

		const querySnap = await getDocs(q);

		if (querySnap.empty) {
			throw new Error('No hay notas');
		}

		let data = [];

		querySnap.forEach((doc) => {
			data.push({
				id: doc.id,
				...doc.data()
			});
		});

		return {
			success: true,
			data
		};
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
};

export const createNota = async (data) => {
	try {
		const { content } = data;

		if (!content) {
			throw new Error('Faltan datos para crear la nota');
		}

		const title = obtenerFechaActual();
		const to = formatTitle(getUser().user);

		const docRef = await addDoc(collection(db, "notas"), {
			content,
			title,
			to,
		});

		if (!docRef.id) {
			throw new Error('Error al crear la nota');
		}

		return {
			success: true
		};
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
}

export const updateNota = async (data) => {
	try {
		const { id, content } = data;

		if (!id || !content) {
			throw new Error('Faltan datos para actualizar la nota');
		}

		const docRef = doc(db, "notas", id);

		await updateDoc(docRef, {
			content
		});

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

export const deleteNota = async (id) => {
	try {
		if (!id) {
			throw new Error('Faltan datos para eliminar la nota');
		}

		const docRef = doc(db, "notas", id);

		await deleteDoc(docRef);

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