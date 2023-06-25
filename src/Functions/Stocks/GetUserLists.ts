import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../Config/firebase';

export const GetUserLists = async (UID: string) => {
	const ListsRef = doc(db, 'Users', UID, 'MoreInfo', 'Lists');
	const ListsSnap = await getDoc(ListsRef);

	if (ListsSnap.exists()) {
		console.log('User Lists:', ListsSnap.data());
		return ListsSnap.data();
	} else {
		console.log('No such document!');
	}
};
