import { withRouter } from 'next/router';
import Layout from './Layout'
import fetch from 'isomorphic-unfetch'
//withRouter can access router data
// router.query 获取url查询参数  如：?title=XXX
const Post = (props) => (
    <Layout>
        <h1>{props.show.name}</h1>
        <p>{props.show.summary.replace(/<[/]?p>/g, '')}</p>
        <img src={props.show.image.medium} />
    </Layout>
);

// context thing

Post.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
    const show = await res.json();
    //log on server side
    console.log(`show info :`, show);

    return { show };
}
export default Post;