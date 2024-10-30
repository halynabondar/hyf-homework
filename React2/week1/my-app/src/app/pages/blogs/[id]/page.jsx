export default async function Blog({ params }) {
    const data = await params;
    const blog = await fetch(`http://localhost:3000/api/blogs/${data.id}`).then(res => res.json());

    if (blog.error) {
        return <h1>{blog.error}</h1>;
    }

    return <div>
        <h3>{blog.title}</h3>
    </div>;
}