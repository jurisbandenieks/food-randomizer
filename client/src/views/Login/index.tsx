import GoogleLoginButton from "../../components/GoogleLoginButton";
import LoginForm from "../../components/LoginForm";

import "./styles.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login__form">
        <LoginForm />
        <div className="heading-tertiary m-sm center-text">
          - Or Login with -
        </div>
        <GoogleLoginButton />
      </div>
    </div>
  );
};

export default Login;
