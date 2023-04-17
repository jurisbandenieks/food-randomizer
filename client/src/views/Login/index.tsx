import { lazy, Suspense } from "react";

const LoginForm = lazy(() => import("../../components/LoginForm"));
const GoogleLoginButton = lazy(
  () => import("../../components/GoogleLoginButton")
);

const Login = () => {
  return (
    <div className="login">
      <Suspense fallback={<div>Loading...</div>}>
        {/* <LoginForm /> */}
        <div className="heading-tertiary m-sm center-text">
          - Or Login with -
        </div>
        {/* <GoogleLoginButton /> */}
      </Suspense>
    </div>
  );
};

export default Login;
