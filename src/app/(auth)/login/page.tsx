import LoginForm from "./login-form";

export default function LoginPage() {
  return (
    <>
      <h1 className="text-center font-semibold text-xl">Đăng Nhập</h1>
      <div className="flex justify-center">
        <LoginForm />
      </div>
    </>
  );
}
