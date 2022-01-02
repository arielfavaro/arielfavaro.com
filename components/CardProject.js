import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/CardProject.module.css'

export default function CardProject({ title, description, link, icon }) {
    return (
        <Link href={link}>
            <a target="_blank">
                <div className={styles.card}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src={`/images/projects/${icon}`}
                            width={80}
                            height={80}
                            alt={title}
                        />
                    </div>
                    <div className={styles.texts}>
                        <h3 className={styles.title}>{title}</h3>
                        <p>{description}</p>
                        <button className={styles.button}>Visitar</button>
                    </div>
                </div>
            </a>
        </Link>
    )
}