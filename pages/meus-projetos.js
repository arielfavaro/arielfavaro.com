import Head from 'next/head'
import dynamic from 'next/dynamic'
import CardProject from '@/components/CardProject'
import CardProjectComingSoon from '@/components/CardProjectComingSoon'

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'))

export default function MeusProjetos() {
    return (
        <div>
            <Head>
                <title>Meus Projetos - Ari Dev</title>
            </Head>
            <FloatingParticles />
            <section className="container">
                <h1 className="text-center text-5xl text-primary font-black">Meus Projetos</h1>

                <div className="flex flex-wrap justify-center gap-4 py-8">
                    <CardProjectComingSoon />
                </div>
            </section>
        </div>
    )
}