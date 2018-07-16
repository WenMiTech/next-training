
import Document, { Head, Main, NextScript } from 'next/document'
export default class extends Document {
    render() {
        return (
            <html>
                <Head>
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel='stylesheet' type='text/css' href='/static/antd-mobile.min.css' />
                </Head>
                <body style={{ margin: 0 }}>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}