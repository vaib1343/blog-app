import { POST } from "@/data/post";
import { NextRequest, NextResponse } from "next/server";

export default async function GET(req: NextRequest, res: NextResponse) {
    return Response.json({
        posts: POST,
    });
}
