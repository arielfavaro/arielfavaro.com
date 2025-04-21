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
                <h1 className="text-center text-5xl text-primary font-black">Meus Projetos</h1>

                <div className="flex flex-wrap justify-center gap-4 pt-4 pb-8">
                    <CardProject
                        title="Códigos Dodo"
                        description="Comunidade para compartilhamento de Dodo Codes em Animal Crossing New Horizons."
                        link="https://codigosdodo.com.br/"
                        icon="codigos-dodo-icon.webp"
                    />
                    <CardProject
                        title="Gerador de Link para whats"
                        description="Crie link curto para whats com QR Code de maneira fácil e compartilhe com seus clientes."
                        link="https://app.linkwpp.com/"
                        icon="geradorlinkwhatsapp-icon.webp"
                    />
                    <CardProject
                        title="Mapa de Bairros"
                        description="Mapa de bairros da minha cidade. Utilizado dados públicos do IBGE CNEFE. Realizado tratamento e clusterização de dados para criação de geometrias convexhull."
                        link="https://bairros-porto-ferreira.vercel.app/"
                        icon="mapa-bairros.webp"
                    />
                    <CardProject
                        title="Creeper Explosion Control"
                        description="Plugin para Minecraft (servidor Paper > 1.20.6) que permite controlar explosões de Creepers. Ele configura a prevenção de danos a blocos, entidades ou ambos."
                        link="https://github.com/arielfavaro/creeper-explosion-control"
                        icon="github-mark-light-120px-plus.webp"
                    />
                    <CardProject
                        title="GitHub Badges"
                        description="Exibir contagem de visitas em seu repositório no GitHub."
                        link="https://github.com/arielfavaro/another-github-badges/"
                        icon="github-mark-light-120px-plus.webp"
                    />
                    <CardProjectComingSoon />
                </div>

                <h2 className="text-center text-3xl text-primary font-black">Showcase</h2>

                <div className="flex flex-wrap justify-center gap-4 pt-4 pb-8">
                    <CardProject
                        title="Caneca Flutuante"
                        description="Caneca flutuante em 3D, com ThreeJs, React Three Fiber."
                        link="http://floating-mug.vercel.app/"
                        icon="caneca-3d.webp"
                    />
                </div>
            </section>
        </div>
    )
}