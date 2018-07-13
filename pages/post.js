import { withRouter } from 'next/router';
import Layout from './Layout'

//withRouter can access router data
// router.query 获取url查询参数  如：?title=XXX
const Page = withRouter((props) => (
    <Layout>
        <h1>{props.router.query.title}</h1>
        <p>This is  the blog post content</p>
    </Layout>
))

export default Page;