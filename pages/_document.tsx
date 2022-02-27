import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Barlow&family=Pacifico&display=swap" rel="stylesheet" />
                </Head>
                <body className=" bg-gradient-to-r from-purple-900 to-blue-700 dark:from-dark-500 dark:to-dark-700 dark:text-white">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument