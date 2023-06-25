import { getUserInfo } from "@firebase/database";
import { getUser } from "@firebase/login";
import Root from "@pages";
import Dashboard from "@pages/[org-slug]/dashboard";
import Login from "@pages/login";
import {
  LoaderFunctionArgs,
  createBrowserRouter,
  redirect,
} from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: UnauthLoader,
  },
  {
    path: "/login",
    element: <Login />,
    loader: LoginLoader,
  },
  {
    path: "/:orgSlug",
    loader: ({ params }) => {
      return redirect(`/${params.orgSlug}/dashboard`);
    },
  },
  {
    path: "/:orgSlug/dashboard",
    element: <Dashboard />,
    loader: AuthLoader,
  },
]);

async function UnauthLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUser();

  if (!user) {
    return redirect("/login");
  }

  const userInfo = await getUserInfo(user.uid);

  if (!userInfo) {
    return redirect("/login");
  }

  return redirect(`/${userInfo.companyId}`);
}

async function LoginLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const userInfo = await getUserInfo(user.uid);

  if (!userInfo) {
    return null;
  }

  return redirect(`/${userInfo.companyId}`);
}

async function AuthLoader({ request, params }: LoaderFunctionArgs) {
  const { orgSlug } = params;

  const user = await getUser();

  if (!user) {
    return redirect("/login");
  }

  const userInfo = await getUserInfo(user.uid);

  if (!userInfo) {
    return redirect("/login");
  }

  // Verificar se o usuário está logado e sua organização é a mesma da URL
  if (orgSlug !== userInfo.companyId) {
    return redirect(`/${userInfo.companyId}/dashboard`);
  }

  return null;
}
