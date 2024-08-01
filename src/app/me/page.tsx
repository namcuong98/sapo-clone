import accountApiRequest from "@/apiRequests/account";
import { cookies } from "next/headers";
import Profile from "./profile";

export default async function MeProfile() {
  const cookieStore = cookies();
  const sessionToken = cookieStore.get("sessionToken");
  const result = await accountApiRequest.me(sessionToken?.value ?? "");

  return (
    <div>
      <h1>Profile</h1>
      <p>Xin chào {result.payload.data.name}</p>
      {/* <Profile /> */}
    </div>
  );
}
