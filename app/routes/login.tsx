import { json } from "@remix-run/node";

import Auth from "../components/Auth";
import { login } from "../data/auth.server";
import { isValidEmail, isValidPassword } from "../util/validation.server";

function LoginRoute() {
  return <Auth mode="login" />;
}

export default LoginRoute;

export async function action({ request }) {
  const formData = await request.formData();
  const credentials = Object.fromEntries(formData) as {
    email: string;
    password: string;
  };

  if (
    !isValidEmail(credentials.email) ||
    !isValidPassword(credentials.password)
  ) {
    return json({ message: "Invalid credentials entered." }, { status: 400 });
  }

  return login(credentials);
}
