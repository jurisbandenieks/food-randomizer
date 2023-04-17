import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { useActions } from "../../hooks/useActions";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useEffect } from "react";
import { auth } from "../../firebase/init";
import GoogleButton from "react-google-button";

const GoogleLoginButton = () => {
  const provider = new GoogleAuthProvider();
  const { googleLogin } = useActions();
  const { loading } = useTypedSelector((state) => state.googleLogin);

  useEffect(() => {
    async function fetchGoogleCredentials() {
      await googleLogin(auth);
    }
    fetchGoogleCredentials();
  }, [auth]);

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <GoogleButton
          className="login__google"
          type="light"
          onClick={() => signInWithRedirect(auth, provider)}
        />
      )}
    </>
  );
};

export default GoogleLoginButton;
