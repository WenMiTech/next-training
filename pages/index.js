import Link from 'next/link';

const Index = () => {

    return (
        <div>
            <h1>Welcome next.js</h1>
            {/* no effect */}
            <Link href="/about" style={{ fontSize: 20 }}><a>about</a></Link>
            <Link href="/about"><button>about</button></Link>
        </div>
    )
}

export default Index;