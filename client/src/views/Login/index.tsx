import GoogleLoginButton from "../../components/GoogleLoginButton";
import LoginForm from "../../components/LoginForm";

const Login = () => {
  return (
    <div className="login">
      <LoginForm />
      <div className="heading-tertiary m-sm center-text">- Or Login with -</div>
      <GoogleLoginButton />
    </div>
  );
};

export default Login;
