import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from ".";

const db = getFirestore();

export async function getUserInfo(uid: string) {
  const docRef = doc(db, "usuarios", uid);
  const docSnap = await getDoc(docRef);
  const userInfo = docSnap.data();

  return userInfo;
}

export async function getCompanyInfo(uid: string) {
  const docRef = doc(db, "empresas", uid);
  const docSnap = await getDoc(docRef);
  const companyInfo = docSnap.data();

  return companyInfo;
}