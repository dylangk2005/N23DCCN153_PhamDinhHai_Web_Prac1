import Link from "next/link";
import Header from "@/components/Header";

// fetch data
async function getPostDetail(id) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (!res.ok) return null;
    return res.json();
}

export default async function BlogDetail({ params }) {
    // get id (params.id)
    const { id } = await params;
    const post = await getPostDetail(id);

    if (!post) {
        return <div className="text-center py-20">Post not found!</div>;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />

            <main className="max-w-4xl mx-auto py-12 px-6">
                {/* back to blog btn */}
                <Link
                    href="/"
                    className="text-indigo-600 hover:text-indigo-800 font-medium flex items-center mb-8 transition"
                >
                    ← Back to Blog
                </Link>

                {/* post detail */}
                <article className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                    <span className="text-sm text-indigo-500 font-bold uppercase tracking-widest">
                        Article #{post.id}
                    </span>

                    <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-4 mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex items-center gap-3 mb-8 pb-8 border-b border-gray-100">
                        <span className="text-gray-600 font-medium">User ID: {post.userId}</span>
                    </div>

                    <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                        {post.body}
                    </p>
                </article>
            </main>
        </div>
    );
}