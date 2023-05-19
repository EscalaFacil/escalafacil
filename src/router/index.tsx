import Root from "@/Root";
import Dashboard from "@/pages/dashboard";
import Login from "@/pages/login";
import { LoaderFunctionArgs, createBrowserRouter, redirect } from "react-router-dom";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: ":orgSlug/dashboard",
    element: <Dashboard />,
    loader: AuthLoader
  }
]);


async function AuthLoader({ request, params }: LoaderFunctionArgs) {
  const { orgSlug } = params;

  // Verificar se o usuário está logado e sua organização é a mesma da URL
  if (orgSlug !== "teste") {
    return redirect("/login");
  }

  // Realizar o fetch dos dados necessários para a página
  return null;
}