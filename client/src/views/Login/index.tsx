import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  UserCredential
} from "firebase/auth";
import { auth } from "../../firebase/init";

import SwitchInput from "../../components/Inputs/SwitchInput";
import TextInput from "../../components/Inputs/TextInput";
import "./styles.scss";
import Button from "../../components/Inputs/Button";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<object>({});
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  useEffect(() => {
    async function fetchGoogleCredentials() {
      try {
        setLoading(true);
        const result: UserCredential | null = await getRedirectResult(auth);

        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;

          console.log(result);
          setUser(result.user);

          if (!!token) {
            navigate("/");
          }
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchGoogleCredentials();
  }, [auth]);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  const loginWithGoogle = async () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="login">
      {loading ? (
        <div>Loading</div>
      ) : (
        <form className="login__form" onSubmit={submitForm}>
          <div className="heading-secondary">
            {isNewUser ? "Register" : "Login"}
          </div>
          <TextInput
            type="email"
            name="email"
            label="Email"
            value={email}
            onChange={(val) => setEmail(String(val))}
          />
          <TextInput
            type="password"
            name="password"
            label="Password"
            value={password}
            onChange={(val) => setPassword(String(val))}
          />
          {isNewUser && (
            <TextInput
              type="password"
              name="confirmPassword"
              label="Confirm Password"
              value={confirmPassword}
              onChange={(val) => setConfirmPassword(String(val))}
            />
          )}
          <SwitchInput
            label="New user"
            value={isNewUser}
            onChange={(val) => setIsNewUser(Boolean(val))}
          />
          <Button classes="mt-sm btn--block">
            {isNewUser ? "Register" : "Sign in"}{" "}
          </Button>
          <div className="heading-tertiary m-sm center-text">
            {`- Or ${isNewUser ? "Register" : "Login"} with -`}
          </div>
          <GoogleButton
            className="login__google"
            type="light"
            onClick={loginWithGoogle}
          />
        </form>
      )}
    </div>
  );
};

export default Login;
