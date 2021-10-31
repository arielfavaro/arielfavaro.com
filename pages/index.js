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
                <h1 className={styles.mainTitle}>&lt;Hello /&gt;</h1>
                <h2 className={styles.description}>Desenvolvimento de aplicações Web de ponta que entregam valor e resultados</h2>
                <div className={styles.socialWrapper}>
                    <Link href="https://linkedin.com/in/arielfavaro">
                        <a target="_blank" rel="noopener" className={styles.social} aria-label="Linkedin"><FaLinkedinIn /></a>
                    </Link>
                    <Link href="https://github.com/arielfavaro">
                        <a target="_blank" rel="noopener" className={styles.social} aria-label="GitHub"><FaGithub /></a>
                    </Link>
                    <Link href="mailto:contato@arielfavaro.com">
                        <a target="_blank" rel="noopener" className={styles.social} aria-label="Email"><HiMail /></a>
                    </Link>
                </div>
            </main>
        </div>
    )
}
