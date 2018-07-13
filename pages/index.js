import Link from 'next/link';
import Layout from './Layout';
const PostLink = (props) => (
    <li>
        {/* /post ==> find post.js */}
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)


const Index = () => {

    return (
        <Layout>
            <PostLink title="Hello Next.js" />
            <PostLink title="Hello Next.js 2" />
            <PostLink title="Hello Next.js 3" />
        </Layout>
    )
}

export default Index;