import { getPostData } from "@/service/posts";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
    const { slug } = await params; // ✅ await으로 Promise 해제
    console.log("slug 값:", slug);

    const post = await getPostData(slug);

    return (
        <>
            <h1>{post.title}</h1>
            <pre>{post.content}</pre>
        </>
    );
}