import firebase from "firebase";

export const signOut = async () => {
	try {
		await firebase.auth().signOut();
		console.log("logout");
	} catch (e) {
		throw new Error("error signing out");
	}
};