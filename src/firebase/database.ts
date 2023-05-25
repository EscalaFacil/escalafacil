import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from ".";


const db = getFirestore();

export async function getUserInfo(uid: string) {

  const docRef = doc(db, "users", uid);
  const docSnap = await getDoc(docRef);
  const userInfo = docSnap.data();

  return userInfo;
}