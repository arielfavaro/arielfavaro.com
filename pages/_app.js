import '@/styles/globals.css'
import Head from 'next/head'
import Nav from '@/components/Nav'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Desenvolvimento de aplicações Web de ponta que entregam valor e resultados" />
                <meta name="keywords" content="web, development, seo" />
                <link key="canonical" rel="canonical" href="https://arielfavaro.com/" />
                {/* <link rel="icon" href="/favicon.ico" /> */}

                <title>Ari Dev - Desenvolvimento Web</title>

                {/* <link rel="manifest" href="/manifest.json" />

                <link
                    href="/icons/icon192.png"
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                />
                <link
                    href="/icons/icon512.png"
                    rel="icon"
                    type="image/png"
                    sizes="512x512"
                />
                <link rel="apple-touch-icon" href="/icons/icon192.png"></link>
                <meta name="theme-color" content="#d7282f" /> */}
            </Head>
            <Nav />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
