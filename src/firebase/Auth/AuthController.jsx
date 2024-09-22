import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../index";

export const loginWithFirestore = async (user, password) => {
	try {
		const q = query(collection(db, "usuarios"), where("user", "==", user));

		const querySnap = await getDocs(q);

		if (querySnap.empty) {
			throw new Error('Usuario no encontrado');
		}

		let userData;

		if (querySnap.size > 1) {
			throw new Error('Error de duplicidad de usuarios');
		}

		querySnap.forEach((doc) => {
			userData = doc.data();
		});

		const isMatch = userData.user === user && userData.password === password;

		if (!isMatch) {
			throw new Error('Credenciales incorrectas');
		}

		const expiresAt = new Date().getTime() + 60 * 60 * 1000;
		const guarded = {
			user: userData.user,
			autenticado: true,
			expira: expiresAt,
		}

		return {
			succes: true,
			data: guarded
		}
	} catch (error) {
		return {
			succes: false,
			message: error?.message || 'Error desconocido'
		}
	}
};	