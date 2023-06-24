import { initializeApp } from 'firebase/app';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	onAuthStateChanged,
} from 'firebase/auth';
import { Auth } from '@firebase/auth';

const config = {
	apiKey: 'AIzaSyCogo48VtRtFfg3jdcv77ig8wtTwURLsVs',
	authDomain: 'bagchecker-b3e3c.firebaseapp.com',
	projectId: 'bagchecker-b3e3c',
	storageBucket: 'bagchecker-b3e3c.appspot.com',
	messagingSenderId: '635690516244',
	appId: '1:635690516244:web:5708d2eb8ec1fcbd9fcc01',
};

// const ImagePreURL = 'https://sebcyde.github.io/Z';
export const app = initializeApp(config);
// export const storage = getStorage(app);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Sign Up New Users
export const SignUpFunction = async (
	auth: Auth,
	email: string,
	password: string,
	Username: string
) => {
	try {
		const UserCred = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const user = UserCred.user;
		console.log('Signed up as:', user);

		await setDoc(doc(db, `Users/${user.uid}`), {
			UserEmail: user.email,
			Username: Username,
			CreationDate: user.metadata.creationTime,
			UID: user.uid,
			Admin: false,
			LastSeen: Date.now(),
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Lists`), {
			Portfolio: ['msft', 'aapl', 'tsla'],
		});

		await setDoc(doc(db, `Users/${user.uid}/MoreInfo/Companies`), {
			Favourites: ['microsoft', 'apple', 'tesla'],
		});

		console.log('User Creation Successful.');
	} catch (error: any) {
		const errorCode = error.code;
		const errorMessage = error.message;
		console.log(`Error ${errorCode}:`, errorMessage);
	}
};

// Sign In Existing Users
export const SignInFunction = async (
	auth: Auth,
	email: string,
	password: string
) => {
	signInWithEmailAndPassword(auth, email, password)
		.then((userCredential) => {
			// Signed in
			const user = userCredential.user;
			console.log('Signed in as:', user);
		})
		.catch((error) => {
			const errorCode = error.code;
			const errorMessage = error.message;
			console.log(`Error ${errorCode}:`, errorMessage);
			alert('Invalid Credentials');
		});
};
