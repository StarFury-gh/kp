import { Link } from "react-router-dom";

import { Input, Button } from "@/shared/ui";

interface RegisterFormProps {
  onSubmit: (e: React.SubmitEvent) => void;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  onNameChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onEmailChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onPasswordChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onPasswordConfirmChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

function RegisterForm(props: RegisterFormProps) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="mx-auto w-full max-w-105 flex flex-col gap-6 px-4 py-8"
    >
      <div className="flex flex-col gap-1.5">
        <h3 className="text-tprimary text-2xl font-bold">Регистрация</h3>
        <p className="text-tsecondary text-sm">
          Создайте аккаунт для доступа к системе
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <Input
          type="text"
          name="name"
          label="Имя"
          placeholder="Иван Иванов"
          value={props.name}
          onChange={props.onNameChange}
        />
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
        <Input
          type="password"
          name="passwordConfirm"
          label="Подтверждение пароля"
          placeholder="Повторите пароль"
          value={props.passwordConfirm}
          onChange={props.onPasswordConfirmChange}
        />
      </div>

      <Link
        to="/login"
        className="text-tsecondary/50 hover:text-tsecondary mx-auto"
      >
        Уже есть аккаунт? Войдите
      </Link>

      <Button type="submit">
        <img src="/public/icons/LoginIcon.svg" alt="" />
        Зарегистрироваться
      </Button>
    </form>
  );
}

export default RegisterForm;
