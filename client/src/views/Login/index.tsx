import GoogleLoginButton from "../../components/GoogleLoginButton";
import LoginForm from "../../components/LoginForm";
import { useTypedSelector } from "../../hooks/useTypedSelector";

import "./styles.scss";

const Login = () => {
  const { loading } = useTypedSelector((state) => state.googleLogin);

  return (
    <div className="login">
      {loading ? (
        <div>Loading</div>
      ) : (
        <div className="login__form">
          <LoginForm />
          <div className="heading-tertiary m-sm center-text">
            - Or Login with -
          </div>
          <GoogleLoginButton />
        </div>
      )}
    </div>
  );
};

export default Login;
