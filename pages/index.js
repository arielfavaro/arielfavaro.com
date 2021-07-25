import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiMail } from "react-icons/hi"

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'))

export default function Home() {
    return (
        <div>
            <FloatingParticles />
            <main className={styles.main}>
                <h1 className={styles.mainTitle}>GET READY!</h1>
                <h3 className={styles.description}>Desenvolvimento Web</h3>
                <h3 className="text-white max-w-sm text-center">Desenvolvimento de aplicações web utilizando as mais recentes tecnologias no mercado.</h3>
                {/* <h3 className={styles.description}>Entre em contato</h3> */}
                {/* <Link href="mailto:contato@arielfavaro.com">
                    <a target="_blank" className={styles.email}>contato@arielfavaro.com</a>
                </Link> */}
                <div className={styles.socialWrapper}>
                    <Link href="https://linkedin.com/in/arielfavaro">
                        <a target="_blank" className={styles.social}><FaLinkedinIn /></a>
                    </Link>
                    <Link href="https://github.com/arielfavaro">
                        <a target="_blank" className={styles.social}><FaGithub /></a>
                    </Link>
                    <Link href="mailto:contato@arielfavaro.com">
                        <a target="_blank" className={styles.social}><HiMail /></a>
                    </Link>
                </div>
            </main>

        </div>
    )
}
