'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";
import Navbar from "@/app/pages/components/navbar";

export default async function Page() {
    const router = useRouter();

    const blogs = await fetch('http://localhost:3000/api/blogs').then(res => res.json());

    return (
        <>
            <Navbar/>
            <div style={{marginTop: "20px", marginLeft: "20px"}}>
                <h1>Blogs page</h1>
                <button style={{marginTop: "10px", marginBottom: "10px"}} onClick={() => router.push('/server')}>Go to
                    the
                    server!
                </button>
                <div style={{display: "flex", gap: "20px"}}>
                    {blogs.map(blog => (
                        <button key={blog.id}>
                            {blog.title}
                            <Link style={{margin: "10px"}} href={`/pages/blogs/${blog.id}`}>Go to</Link>
                        </button>
                    ))}
                </div>
            </div>
        </>
    )
};
