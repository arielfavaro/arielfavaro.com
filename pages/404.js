import dynamic from 'next/dynamic'
import Head from 'next/head'
import Link from 'next/link'

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'))

export default function Custom404() {
    return (
        <div>
            <Head>
                <title>404 - Ari Dev</title>
            </Head>
            <FloatingParticles />
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h1 className="text-5xl text-red-500 font-black">Ooops - 404</h1>
                <h3 className="font-extralight text-5xl text-red-500">Houston, we have a problem!</h3>
                <Link href="/">
                    <a className="bg-primary rounded-full my-4 px-4 py-2 text-white">Início</a>
                </Link>
            </div>
        </div>
    )
}