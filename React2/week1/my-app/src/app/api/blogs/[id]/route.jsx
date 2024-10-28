import { NextResponse } from "next/server";
import {blogPosts} from "@/app/api/blogs/data";

export async function GET(request, { params }) {
    const blogId = (await params).id;
    const blog = blogPosts.find(blog => blog.id.toString() === blogId);

    if (!blog) {
        return NextResponse.json({
            error: "Blog not found"
        });
    }

    return NextResponse.json(blog);
}
