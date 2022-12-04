import { query, orderBy, where, collection, getDocs} from '@firebase/firestore';
import { doc, getDoc } from 'firebase/firestore';
import { db } from './firebaseConfig';

export const firestoreFetch = async (categoryId) => {

    let q;

    if (categoryId) {

        q = query(collection(db, 'productos'), where('idCategory', '==', parseInt(categoryId)));
    } else {
        q = query(collection(db, 'productos'), orderBy('title'));
    }

    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));

    
    return dataFromFirestore;

}

export const firestoreFecthOne = async (idItem) => {

    const docRef = doc (db, "productos", idItem);
    const docSnap = await getDoc(docRef);

    if(docSnap.exists()) {
        return {
            id: idItem,
            ...docSnap.data()
        }
    } else {
        console.log("Documento no encontrado!");
    }

}