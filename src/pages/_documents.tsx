//arquivo index html principal do react normal - colocar tudo q eh statico, tudo q se repetira em todas as telas

import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>{/*se precisar colocar algo que vai se reoetir em todas as pags*/}
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap" rel="stylesheet" />
                </Head>
                <body>
                    <Main /> {/*as paginas */}
                    <NextScript /> {/*scripts do next */}
                </body>
            </Html>
        )
    }
}