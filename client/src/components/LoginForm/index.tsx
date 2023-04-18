import { useState } from "react";
import { useActions } from "../../hooks/useActions";
import TextInput from "../Inputs/TextInput";
import SwitchInput from "../Inputs/SwitchInput";
import Button from "../Inputs/Button";

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [isNewUser, setIsNewUser] = useState<boolean>(false);

  const { login } = useActions();

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    login(email, password);
  };

  return (
    <form onSubmit={submitForm}>
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
    </form>
  );
};

export default LoginForm;
