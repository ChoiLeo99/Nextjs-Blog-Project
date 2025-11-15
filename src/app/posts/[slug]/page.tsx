import MarkdownViewer from "@/components/MarkdownViewer";
import { getPostData } from "@/service/posts";

type Props = {
    params: Promise<{ slug: string }>;
};

export default async function PostPage({ params }: Props) {
    const { slug } = await params;

    const post = await getPostData(slug);

    return (
        <>
            <h1>{post.title}</h1>
            <MarkdownViewer content={post.content} />
        </>
    );
}