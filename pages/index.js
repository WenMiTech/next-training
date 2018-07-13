import Link from 'next/link';
import Layout from './Layout';
const PostLink = (props) => (
    <li>
        {/* as */}
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)


const Index = () => {

    return (
        <Layout>
            <PostLink id="Hello-Next.js" title="Hello Next.js" />
            <PostLink id="Hello-Next.js 2" title="Hello Next.js 2" />
            <PostLink id="Hello-Next.js 3" title="Hello Next.js 3" />
        </Layout>
    )
}

export default Index;