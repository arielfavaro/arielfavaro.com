import Head from 'next/head'
import CardProject from '@/components/CardProject'
import CardProjectComingSoon from '@/components/CardProjectComingSoon'

export default function MeusProjetos() {
    return (
        <div>
            <Head>
                <title>Meus Projetos - Desenvolvedor Web - Ariel</title>
            </Head>
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
        </div>
    )
}