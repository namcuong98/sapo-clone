import Link from "next/link";
import { ModeToggle } from "./mode-toggle";
import ButtonLogout from "./buttton-logout";

export default function Header() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/login">Đăng Nhập</Link>
        </li>
        <li>
          <Link href="/register">Đăng Ký</Link>
        </li>
        <li>
          <ButtonLogout />
        </li>
      </ul>
      <ModeToggle />
    </div>
  );
}
