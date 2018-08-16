import firebase from "firebase";
import "firebase/firestore";

const config = {
	apiKey: "AIzaSyAgh5mfxtkiLnD-dnTFl1b6ysgvHJH0y_k",
	authDomain: "wilchesterrealtygroup.firebaseapp.com",
	databaseURL: "https://wilchesterrealtygroup.firebaseio.com",
	projectId: "wilchesterrealtygroup",
	storageBucket: "wilchesterrealtygroup.appspot.com",
	messagingSenderId: "893748138734"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();
firestore.settings({ timestampsInSnapshots: true });

/**
 *
 */
export function getTextBlobs() {
	return firestore
		.collection("textBlobs")
		.get("homePage")
		.then((doc) => {
			if (!doc.empty) {
				return doc.docs[0].data();
			}
		})
		.catch((e) => {
			throw e;
		});
}

/**
 *
 */
export function getPropertyData() {
	return firestore
		.collection("properties")
		.get()
		.then((doc) => {
			return doc.docs.map((property) => {
				const data = property.data();

				data.id = property.id;
				return data;
			});
		})
		.catch((e) => {
			throw e;
		});
}

/**
 *
 * @param {*} property
 */
export function addProperty(property) {
	return firestore
		.collection("properties")
		.add(property)
		.then((docRef) => {
			return docRef.id;
		})
		.catch((e) => {
			throw e;
		});
}

/**
 *
 * @param {*} id
 * @param {*} data
 */
export function updateProperty(id, data) {
	return firestore
		.collection("properties")
		.doc(id)
		.update(data)
		.catch((e) => {
			throw e;
		});
}

/**
 *
 * @param {*} id
 */
export function deleteProperty(id) {
	return firestore
		.collection("properties")
		.doc(id)
		.delete()
		.catch((e) => {
			throw e;
		});
}

/**
 *
 * @param {*} email
 * @param {*} password
 */
export function login(email, password) {
	return firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			alert("Success!");
		})
		.catch((e) => {
			alert(e);
		});
}
