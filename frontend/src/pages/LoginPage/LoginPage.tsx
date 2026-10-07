import { useState } from "react";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(email, password.length);
  };

  return (
    <div className="w-full">
      <LoginForm
        onSubmit={submitLogin}
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}

export default LoginPage;
