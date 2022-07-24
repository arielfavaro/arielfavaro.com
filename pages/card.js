import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Card.module.css'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from "react-icons/hi"
import Image from 'next/image'
import { contactInfo } from '@/lib/contactInfo'

export default function Card({ avatar_url, bio }) {

    const whatsappMessageText = encodeURI('Olá, vim do cartão de visita')

    return (
        <>
            <Head>
                <title>Ariel Favaro</title>
                <meta name="robots" content="noindex, nofollow" />
                <link key="canonical" rel="canonical" href="https://arielfavaro.com/card" />
            </Head>
            <main className='container'>
                <div className={styles.card}>
                    <div className='flex justify-center'>
                        <Image
                            src={avatar_url}
                            width={128}
                            height={128}
                            alt=''
                            className='rounded-full'
                        />
                    </div>
                    <div className='flex flex-col items-center justify-center py-2'>
                        <h2 className='text-xl font-bold'>Ariel Favaro</h2>
                        <h3 className='w-64 text-gray-200'>Web Developer</h3>
                    </div>
                    <div className='flex gap-x-4 justify-center py-2'>
                        {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
                        <a
                            href='/api/card'
                            rel='nofollow'
                            className='bg-primary rounded-full px-4 py-2 hover:shadow-xl'
                            // download='vcard.vcf'
                        >
                            Salvar na Agenda
                        </a>
                    </div>
                    <div className={styles.socialWrapper}>
                        {contactInfo.phoneWhatsapp &&
                            <Link href={`https://wa.me/${contactInfo.phoneWhatsapp}?text=${whatsappMessageText}`}>
                                <a target="_blank" rel="noopener" className={styles.social} aria-label="Linkedin">
                                    <FaWhatsapp />
                                </a>
                            </Link>
                        }
                        <Link href={`mailto:${contactInfo.email}`}>
                            <a target="_blank" rel="noopener" className={styles.social} aria-label="Email">
                                <HiMail />
                            </a>
                        </Link>
                        <Link href={contactInfo.linkedin}>
                            <a target="_blank" rel="noopener" className={styles.social} aria-label="Linkedin">
                                <FaLinkedinIn />
                            </a>
                        </Link>
                        <Link href={contactInfo.github}>
                            <a target="_blank" rel="noopener" className={styles.social} aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}

export async function getStaticProps() {

    const response = await fetch('https://api.github.com/users/arielfavaro')
    const profileData = await response.json()

    const { avatar_url, location, bio } = profileData

    return {
        props: {
            avatar_url,
            bio
        }
    }
}