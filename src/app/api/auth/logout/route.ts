import authApiRequest from "@/apiRequests/auth"
import { HttpError } from "@/lib/http"
import { cookies } from "next/headers"

export async function POST(request: Request) {
    const res = await request.json()
    const force = res.force as boolean | undefined
    if (force) {
        return Response.json({
            message: 'Buộc đăng xuất thành công'
        }, {
            status: 200,
            headers: {
                // Xoá cookie sessionToken
                'Set-Cookie' : `sessionToken=; Path=/; HttpOnly; Max-Age=0`
            }
        })
    }
    const cookieStore = cookies()
    const sessionToken = cookieStore.get("sessionToken")
    if (!sessionToken) {
        return Response.json(
            {message: 'không nhận được session token'},
            {status: 401}
        )
    }
    try {
        const result = await authApiRequest.logoutFromNextServertoServer(sessionToken.value)
        return Response.json(result.payload, {
            status: 200,
            headers: {
                // Xoá cookie sessionToken
                'Set-Cookie' : `sessionToken=; Path=/; HttpOnly`
            }
        })
    } catch (error) {
        if (error instanceof HttpError) {
            return Response.json(error.payload, {
                status: error.status
            })
        } else {
            return Response.json(
                {
                    message: 'Lỗi không xác định'
                },
                {
                    status: 500
                }
            )
        }
    }

}