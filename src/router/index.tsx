import { getUserInfo, getCompanyInfo } from "@firebase/database";
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
  if (!user) {
    return redirect("/login");
  }

  // Pega as informações do usuário:
  const userInfo = await getUserInfo(user.uid);
  if (!userInfo) {
    return redirect("/login");
  }

  // Pega as informações da empresa:
  const companyInfo = await getCompanyInfo(userInfo.id_empresa);
  if (!companyInfo) {
    return redirect("/login");
  }

  console.log(companyInfo.slug);

  return redirect(`/${companyInfo.slug}`);
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

  const companyInfo = await getCompanyInfo(userInfo.id_empresa);
  if (!companyInfo) {
    return null;
  }

  return redirect(`/${companyInfo.slug}`);
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

  const companyInfo = await getCompanyInfo(userInfo.id_empresa);
  if (!companyInfo) {
    return redirect("/login");
  }

  if (orgSlug !== companyInfo.slug) {
    return redirect(`/${companyInfo.slug}/dashboard`);
  }

  return null;
}
