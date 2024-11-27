import getCurrentUser from "@/actions/getCurrentUser";
import { NextResponse } from "next/server";
import db from "@/vendor/db";

export async function POST(request: Request) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return NextResponse.error()
    }

    const {name, handle, imageSrc} = await request.json()

    const channel = await db.channel.create({
        data: {
            name, handle, imageSrc, userId: currentUser.id
        }
    })

    return NextResponse.json(channel);
}