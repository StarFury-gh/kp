import { Link } from "react-router-dom";

import { Button, Checkbox, Input } from "@/shared/ui";

const socialProviders = ["Яндекс ID", "VK ID", "Google"];
const strengthSegments = [0, 1, 2, 3];

interface RegisterFormProps {
  onSubmit: (e: React.SubmitEvent) => void;
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
  agree: boolean;
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
  onAgreeChange: (checked: boolean) => void;
}

function RegisterForm(props: RegisterFormProps) {
  return (
    <form
      onSubmit={props.onSubmit}
      className="flex w-full max-w-[400px] flex-col gap-6 rounded-2xl border border-border bg-bg-sec p-8"
    >
      {/* Заголовок формы */}
      <div className="flex flex-col items-start gap-4">
        <img src="/icons/CreatePersonIcon.svg" alt="" />
        <h2 className="heading-lg">Создать аккаунт</h2>
        <p className="max-w-60 text-sm text-tsecondary">
          Сохраняйте конфигурации и возвращайтесь к ним в любое время.
        </p>
      </div>

      {/* Поля формы */}
      <div className="flex w-full flex-col gap-4">
        <Input
          type="text"
          name="name"
          label="Имя"
          placeholder="Как к вам обращаться"
          value={props.name}
          onChange={props.onNameChange}
        />
        <Input
          type="email"
          name="email"
          label="Email"
          placeholder="you@example.com"
          value={props.email}
          onChange={props.onEmailChange}
        />
        <div className="flex flex-col gap-2">
          <Input
            type="password"
            name="password"
            label="Пароль"
            placeholder="Придумайте пароль"
            value={props.password}
            onChange={props.onPasswordChange}
          />
          {/* индикатор надёжности пароля */}
          <div className="flex w-full gap-2">
            {strengthSegments.map((segment) => (
              <div key={segment} className="h-1 flex-1 rounded-lg bg-border" />
            ))}
          </div>
          <p className="text-xs text-tsecondary">Не менее 8 символов</p>
        </div>
        <Input
          type="password"
          name="passwordConfirm"
          label="Повторите пароль"
          placeholder="Повторите пароль"
          value={props.passwordConfirm}
          onChange={props.onPasswordConfirmChange}
        />
      </div>

      {/* Опции формы */}
      <label className="flex cursor-pointer items-start gap-2">
        <Checkbox checked={props.agree} onChange={props.onAgreeChange} />
        <span className="text-sm text-tsecondary">
          Принимаю условия и политику конфиденциальности
        </span>
      </label>

      <Button type="submit" className="w-full">
        Зарегистрироваться
      </Button>

      {/* Ссылка на вход */}
      <p className="flex w-full justify-center gap-2 text-xs">
        <span className="text-tsecondary">Уже есть аккаунт?</span>
        <Link
          to="/login"
          className="text-primary transition-colors hover:text-primary-hover"
        >
          Войти
        </Link>
      </p>

      {/* Разделитель соцсетей */}
      <div className="flex w-full items-center gap-4">
        <div className="h-px flex-1 bg-border" />
        <p className="text-xs text-tprimary">или</p>
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

export default RegisterForm;
