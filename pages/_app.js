import '@/styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Desenvolvimento Web e Mobile" />
                <meta name="keywords" content="web, development, seo, ecommerce, loja virtual, loja online, desenvolvido de sistemas, desenvolvido de sites, desenvolvido de app, website, webdesign, site, publicidade, marketing, desenvolvimento site, desenvolvimento, desenvolver site, blog, aplicativos, aplicativo, agencia publicidade, agencia, porto ferreira, sao carlos, sao paulo, dev, ariel, ariel favaro, site responsivo" />
                <link key="canonical" rel="canonical" href="https://arielfavaro.com/" />
                {/* <link rel="icon" href="/favicon.ico" /> */}

                <title>Ari Dev - Desenvolvimento Web e Mobile</title>

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

            <Component {...pageProps} />
        </>
    )
}

export default MyApp
