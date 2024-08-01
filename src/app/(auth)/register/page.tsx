import RegisterForm from "./register-form";

export default function RegisterPage() {
  return (
    <>
      <h1 className="text-center font-semibold text-xl">Đăng Ký</h1>
      <div className="flex justify-center">
        <RegisterForm />
      </div>
    </>
  );
}
