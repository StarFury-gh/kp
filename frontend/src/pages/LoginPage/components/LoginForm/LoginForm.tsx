import { Link } from "react-router-dom";

import { Button, Checkbox, Input } from "@/shared/ui";

const socialProviders = ["Яндекс ID", "VK ID", "Google"];

interface LoginFormProps {
  onSubmit: (e: React.SubmitEvent) => void;
  email: string;
  password: string;
  rememberMe: boolean;
  onEmailChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onPasswordChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onRememberChange: (checked: boolean) => void;
}

function LoginForm(props: LoginFormProps) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex w-full max-w-[400px] flex-col gap-6 rounded-2xl border border-border bg-bg-sec p-8"
    >
      {/* Заголовок формы */}
      <div className="flex flex-col items-start gap-4">
        <img src="/icons/PersonIcon.svg" alt="" />
        <h2 className="heading-lg">Войти в аккаунт</h2>
        <p className="max-w-60 text-sm text-tsecondary">
          Сохраняйте сборки и следите за заказами.
        </p>
      </div>

      {/* Поля формы */}
      <div className="flex w-full flex-col gap-4">
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="you@example.com"
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

      {/* Опции формы */}
      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-2">
          <Checkbox
            checked={props.rememberMe}
            onChange={props.onRememberChange}
          />
          <span className="text-sm text-tprimary">Запомнить меня</span>
        </label>
        <a
          href="#"
          onClick={(e) => e.preventDefault()}
          className="text-xs text-primary transition-colors hover:text-primary-hover"
        >
          Забыли пароль?
        </a>
      </div>

      <Button type="submit" className="w-full">
        Войти
      </Button>

      {/* Ссылка на регистрацию */}
      <p className="flex w-full justify-center gap-2 text-xs">
        <span className="text-tsecondary">Нет аккаунта?</span>
        <Link
          to="/register"
          className="text-primary transition-colors hover:text-primary-hover"
        >
          Зарегистрироваться
        </Link>
      </p>

      {/* Разделитель соцсетей */}
      <div className="flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <p className="text-xs text-tsecondary">или войти через</p>
        <div className="h-px flex-1 bg-border" />
      </div>

      {/* Соцсети */}
      <div className="flex w-full items-start gap-4">
        {socialProviders.map((provider) => (
          <button
            key={provider}
            type="button"
            className="flex h-10 flex-1 items-center justify-center rounded-lg border border-border text-sm text-tprimary transition-colors hover:border-primary/50"
          >
            {provider}
          </button>
        ))}
      </div>
    </form>
  );
}

export default LoginForm;
