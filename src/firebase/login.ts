import { User, signInWithEmailAndPassword } from "firebase/auth";
import { getAuth } from ".";


const auth = getAuth();

export async function getUser(): Promise<User | null> {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      resolve(user);
    });
  });
}

export async function signInWithEmail(email: string, password: string) {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    return user;
  }
  catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error(errorCode, errorMessage);
    return false;
  }
}
