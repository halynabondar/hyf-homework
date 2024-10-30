import { NextResponse } from 'next/server';
import {blogPosts} from "@/app/api/blogs/data";

export async function GET(request) {
    return NextResponse.json(blogPosts);
}

