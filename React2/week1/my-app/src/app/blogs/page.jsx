'use client';

import Link from "next/link";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Page() {
    const router = useRouter();
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("/api/blogs")
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blogs:", error));
    }, []);

    return (
        <>
            <div className="mt-5, ml-5">
                <h1 className="text-4xl">Blogs page</h1>
                <button className="m-3 p-1 bg-white text-black border rounded" onClick={() => router.push('/server')}>Go to
                    the
                    server!
                </button>
                <div className="flex flex-col gap-5">
                    {blogs.map(blog => (
                        <div key={blog.id}>
                            <button>{blog.title}</button>
                            <Link className="m-2.5 bg-white text-black border rounded p-1" href={`/blogs/${blog.id}`}>Go to</Link>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};
