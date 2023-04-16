import { FormEvent, useEffect, useState } from "react";
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

const Login = () => {
  const provider = new GoogleAuthProvider();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [user, setUser] = useState<object>({});
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  useEffect(() => {
    getRedirectResult(auth)
      .then((result: UserCredential | null) => {
        if (result) {
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential?.accessToken;
          setUser(result.user);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.customData.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
      });
  }, [auth]);

  const submitForm = (event: FormEvent) => {
    event.preventDefault();
  };

  const loginWithGoogle = async () => {
    signInWithRedirect(auth, provider);
  };

  return (
    <div className="login">
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
        <div className="heading-tertiary m-sm center-text">
          {`- Or ${isNewUser ? "Register" : "Login"} with -`}
        </div>
        <GoogleButton
          className="login__google"
          type="light"
          label={isNewUser ? "Register with Google" : "Sign in with Google"}
          onClick={loginWithGoogle}
        />
      </form>
    </div>
  );
};

export default Login;
