import { signInWithEmail } from "@/firebase/login";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        placeholder="Usuário"
        value={userEmail}
        onChange={(e) => setUserEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />

      <button
        onClick={async (e) => {
          const user = await signInWithEmail(userEmail, userPassword);
          console.log(user);
          if (user) {
            navigate("/");
          }
        }}
      >
        Entrar
      </button>
    </div>
  );
}
