import Header from "@/components/Header";
import BlogCard from "@/components/BlogCard";

// 1. Hàm fetch dữ liệu trực tiếp trong Server Component [cite: 89-90]
async function getPosts() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }
    return res.json();
}

export default async function HomePage() {
    // fetch data
    const posts = await getPosts();

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <Header />

            <main className="max-w-7xl mx-auto py-10">
                <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">
                    Featured Articles
                </h1>

                {/* Grid Layout Responsive*/}
                {/* grid-cols-1 (Mobile), sm:grid-cols-2 (Tablet), lg:grid-cols-3 (Desktop) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

                    {/*Only allow 12 posts */}
                    {posts.slice(0, 12).map((post) => (
                        <BlogCard key={post.id} post={post} />
                    ))}
                </div>
            </main>
        </div>
    );
}