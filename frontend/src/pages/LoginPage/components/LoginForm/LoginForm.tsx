import { Link } from "react-router-dom";
import { Input, Button } from "@/shared/ui";

interface LoginFormProps {
  onSubmit: (e: React.SubmitEvent) => void;
  email: string;
  password: string;
  onEmailChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onPasswordChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

function LoginForm(props: LoginFormProps) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="mx-auto w-full max-w-105 flex flex-col gap-6 px-4 py-8"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-tprimary text-2xl font-bold">Вход в аккаунт</h3>
        <p className="text-tsecondary text-sm">
          Введите данные для входа в систему
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <Input
          type="email"
          name="email"
          label="E-mail"
          placeholder="example@mail.ru"
          value={props.email}
          onChange={props.onEmailChange}
        />
        <Input
          type="password"
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          value={props.password}
          onChange={props.onPasswordChange}
        />
      </div>
      <Link
        to="/register"
        className="text-tsecondary/50 hover:text-tsecondary mx-auto"
      >
        Нет аккаунта? Зарегистрируйтесь.
      </Link>
      <Button type="submit">
        <img src="/public/icons/LoginIcon.svg" alt="" />
        Войти
      </Button>
    </form>
  );
}

export default LoginForm;
