"use client";

import authApiRequest from "@/apiRequests/auth";
import { Button } from "./ui/button";
import { usePathname, useRouter } from "next/navigation";
import { handleErrorApi } from "@/lib/utils";

export default function ButtonLogout() {
  const router = useRouter();
  const pathname = usePathname();
  const handleLogOut = async () => {
    try {
      await authApiRequest.logoutFromNextClienttoNextServer();
      router.push("/login");
    } catch (error) {
      handleErrorApi({ error });
      authApiRequest.logoutFromNextClienttoNextServer(true).then((res) => {
        router.push(`/login?redirectFrom=${pathname}`);
      });
    }
  };
  return (
    <Button size={"sm"} onClick={handleLogOut}>
      Đăng xuất
    </Button>
  );
}
