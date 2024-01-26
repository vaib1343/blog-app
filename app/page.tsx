import ArticleCard from "@/components/Home/ArticleCard";
import { POST } from "@/data/post";

export default function Home() {
    return (
        <main className="mt-10 px-8 flex flex-col gap-10 ">
            {POST?.map((post) => (
                <ArticleCard
                    key={post.id}
                    title={post.title}
                    body={post.body}
                />
            ))}
        </main>
    );
}
