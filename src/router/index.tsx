import { getUserInfo } from "@firebase/database";
import { getUser } from "@firebase/login";
import Root from "@pages";
import Dashboard from "@pages/[org-slug]/dashboard";
import Users from "@pages/[org-slug]/users";
import Reports from "@/pages/[org-slug]/reports/index";
import Login from "@pages/login";
import ForgetPassword from "@pages/forget-password";
import Home from "@/pages/home";

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
    path: "/home",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
    loader: LoginLoader,
  },
  {
    path: "/forget-password",
    element: <ForgetPassword />,
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
  {
    path: "/:orgSlug/users",
    element: <Users />,
    loader: AuthLoader,
  },
  {
    path: "/:orgSlug/reports",
    element: <Reports />,
    loader: AuthLoader,
  },
]);

// Functions:
async function UnauthLoader({ request, params }: LoaderFunctionArgs) {
  const user = await getUser();
  console.log(user);

  if (!user) {
    return redirect("/login");
  }

  // Realiza a verificação das informações do usuário:
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

  if (orgSlug !== userInfo.id_empresa) {
    return redirect(`/${userInfo.id_empresa}/dashboard`);
  }

  return null;
}
