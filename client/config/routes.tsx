import { React } from "../deps.ts";

const Login = () => <div>This is the login</div>;
const Signup = () => <div>This is signup page</div>;
const Secret = () => <div>This is a secret</div>;

export default [
  {
    path: "/",
    name: "Login Page",
    component: Login,
    exact: true,
  },
  {
    path: "/signup",
    name: "Signup Page",
    component: Signup,
    exact: true,
  },
  {
    path: "/secret",
    name: "Home Page",
    component: Secret,
    exact: true,
  },
];
