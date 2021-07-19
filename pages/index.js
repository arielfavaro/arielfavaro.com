import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import dynamic from 'next/dynamic'

const FloatingParticles = dynamic(() => import('@/components/FloatingParticles'))

export default function Home() {
    return (
        <div>
            <FloatingParticles />
            <main className={styles.main}>
                <h1 className={styles.mainTitle}>GET READY!</h1>
                <h3 className={styles.description}>Desenvolvimento Web e Mobile</h3>
                <h3 className={styles.description}>Entre em contato</h3>
                <Link href="mailto:contato@arielfavaro.com">
                    <a target="_blank" className={styles.email}>contato@arielfavaro.com</a>
                </Link>
            </main>

        </div>
    )
}
