import Link from 'next/link'
import styles from '@/styles/Nav.module.css'

export default function Nav() {
    return (
        <nav className={styles.wrapper}>
            <div className={styles.links}>
                <Link href="/">
                    <a>Início</a>
                </Link>
                <Link href="/meus-projetos">
                    <a>Meus Projetos</a>
                </Link>
            </div>
        </nav>
    )
}