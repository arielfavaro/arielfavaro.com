import Document, { Html, Head, Main, NextScript } from 'next/document'
import { GA_TRACKING_ID } from '@/lib/analytics'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from '@/lib/theme'

class MyDocument extends Document {
    // static async getInitialProps(ctx) {
    //     const initialProps = await Document.getInitialProps(ctx)
    //     return { ...initialProps }
    // }

    render() {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
                    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;200;400;700;900&display=swap" rel="stylesheet" />

                    {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}></script>
                    <script dangerouslySetInnerHTML={{
                        __html: `window.dataLayer = window.dataLayer || [];
                        function gtag() {dataLayer.push(arguments); }
                        gtag('js', new Date());

                        gtag('config', '${GA_TRACKING_ID}');`
                    }}>
                    </script>

                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument