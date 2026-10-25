import { useState } from "react";
import LoginForm from "./components/LoginForm";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const submitLogin = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(email, password.length);
  };

  return (
    <div className="flex min-h-[calc(100vh-88px)] w-full flex-col items-center justify-center py-16">
      <LoginForm
        onSubmit={submitLogin}
        email={email}
        password={password}
        rememberMe={rememberMe}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onRememberChange={(checked) => setRememberMe(checked)}
      />
    </div>
  );
}

export default LoginPage;
