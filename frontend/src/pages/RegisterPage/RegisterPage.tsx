import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const submitRegister = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log({ name, email, password, passwordConfirm });
  };

  return (
    <div className="w-full">
      <RegisterForm
        onSubmit={submitRegister}
        name={name}
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        onNameChange={(e) => setName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onPasswordConfirmChange={(e) => setPasswordConfirm(e.target.value)}
      />
    </div>
  );
}

export default RegisterPage;
