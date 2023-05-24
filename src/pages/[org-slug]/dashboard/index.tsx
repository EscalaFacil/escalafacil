import { signOut } from "@/firebase/login";

export default function Dashboard() {


  return (
    <>
    <p>Dashboard</p>
    <button onClick={async () => {
      await signOut();
      window.location.reload();
      }}>Deslogar</button>
    </>
  );
}