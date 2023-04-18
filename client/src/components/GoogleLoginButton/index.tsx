import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { ActionType } from "../../state/action-types/userTypes";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { auth } from "../../firebase/init";
import GoogleButton from "react-google-button";

import "./styles.scss";

const GoogleLoginButton = () => {
  const provider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const { googleLogin } = useActions();
  const { loading, user } = useTypedSelector((state) => state.googleLogin);

  useEffect(() => {
    async function fetchGoogleCredentials() {
      await googleLogin(auth);
    }
    fetchGoogleCredentials();
  }, [auth]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  const googleLoginHandler = async () => {
    dispatch({ type: ActionType.GOOGLE_LOGIN });

    signInWithRedirect(auth, provider);
  };

  return (
    <GoogleButton
      className="login-google"
      type="light"
      onClick={googleLoginHandler}
    />
  );
};

export default GoogleLoginButton;
