"use client";

import authApiRequest from "@/apiRequests/auth";
import { clientSessionToken } from "@/lib/http";

export default function SlideSession() {
  const slideSession = async () => {
    const res = await authApiRequest.slideSessionFromNextClientToNextServer();
    clientSessionToken.expiresAt = res.payload.data.expiresAt;
  };
  return (
    <div>
      <button onClick={slideSession}>Click to slide session</button>
    </div>
  );
}
