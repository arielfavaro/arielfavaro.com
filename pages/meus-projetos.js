import Head from 'next/head'
import dynamic from 'next/dynamic'
import CardProject from '@/components/CardProject'
import CardProjectComingSoon from '@/components/CardProjectComingSoon'
import ModalProjeto from '@/components/ModalProjeto'

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'))

export default function MeusProjetos() {
    return (
        <div>
            <Head>
                <title>Meus Projetos - Desenvolvedor Web - Ariel</title>
            </Head>
            <FloatingParticles />
            <section className="container">
                <h1 className="text-center text-5xl text-primary font-black mb-3">Meus Projetos</h1>

                <div className="flex flex-wrap justify-center gap-4 py-8">
                    <CardProject
                        title="Gerador de Link para whats"
                        description="Crie link curto para whats com QR Code de maneira fácil e compartilhe com seus clientes."
                        link="https://app.linkwpp.com/"
                        icon="geradorlinkwhatsapp-icon.png"
                    />
                    <CardProjectComingSoon />
                </div>
            </section>
            <ModalProjeto projectTitle='Cerâmica Silveira' description='alou teste' />
        </div>
    )
}