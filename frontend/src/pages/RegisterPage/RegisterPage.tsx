import { useState } from "react";
import RegisterForm from "./components/RegisterForm";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [agree, setAgree] = useState(false);

  const submitRegister = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log({ name, email, password, passwordConfirm });
  };

  return (
    <div className="flex min-h-[calc(100vh-88px)] w-full flex-col items-center justify-center py-16">
      <RegisterForm
        onSubmit={submitRegister}
        name={name}
        email={email}
        password={password}
        passwordConfirm={passwordConfirm}
        agree={agree}
        onNameChange={(e) => setName(e.target.value)}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onPasswordConfirmChange={(e) => setPasswordConfirm(e.target.value)}
        onAgreeChange={(checked) => setAgree(checked)}
      />
    </div>
  );
}

export default RegisterPage;
