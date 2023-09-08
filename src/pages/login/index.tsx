import { signInWithEmail } from "@/firebase/login";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "src/logo.svg";
import Button from "../../components/ButtonSystem";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate();

  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const tryLogin = async () => {
    const user = await signInWithEmail(userEmail, userPassword);
    if (user) {
      toast.success("Autenticado!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
      navigate("/");
    } else {
      toast.error("E-mail ou senha incorretos!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <>
      <section className="dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <Link
                to="/login"
                className="flex items-center justify-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
              >
                <img className="w-8 h-8 mr-2" src={logo} alt="logo" />
                EscalaFácil
              </Link>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Faça seu login
              </h1>
              <div className="space-y-4 md:space-y-6">
                <div>
                  {/* <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    E-mail
                  </label> */}
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="nome@empresa.com"
                    required
                    autoComplete="email"
                    value={userEmail}
                    onChange={(e) => setUserEmail(e.target.value)}
                  />
                </div>
                <div>
                  {/* <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Senha
                  </label> */}
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                    value={userPassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                </div>
                {/* <ReCaptcha className="flex items-center justify-center w-full" sitekey="6LdGYQQnAAAAALVG_k1bFfJX2FfjKgfYKVLQ-h_5"/> */}

                <div className="flex items-center justify-between">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                    <Link
                      to="/forget-password"
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    >
                      Esqueceu sua senha?
                    </Link>
                  </p>
                  <div className="flex items-start">
                    <Button message="Entrar" onClick={tryLogin} />
                  </div>
                </div>

                {/* <button
                  onClick={async (e) => { 
                    const user = await signInWithEmail(userEmail, userPassword);
                    console.log(user);
                    if (user) {
                      navigate("/");
                    }
                  }}
                  className="w-full text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Entrar
                </button> */}

                {/* <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Ainda não tem uma conta?{" "}
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Cadastre-se
                  </a>
                </p> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}
