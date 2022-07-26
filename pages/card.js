import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Card.module.css'
import { FaLinkedinIn, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { HiMail } from "react-icons/hi"
import Image from 'next/image'
import { contactInfo } from '@/lib/contactInfo'
import generateCard from '@/services/generateCard'
import QRCode from "qrcode"
import { useRef, useState } from 'react'

export default function Card() {

    const whatsappMessageText = encodeURI('Olá, vim do cartão de visita')

    const [isGeneratedQrCode, setIsGeneratedQrCode] = useState(false)

    const canvasQrCodeRef = useRef()

    const handleGenerateQrCode = (text) => {
        const qrcode_options = {
            errorCorrectionLevel: 'M',
            type: 'image/png',
            // quality: 0.3,
            margin: 2,
            width: 800,
            // scale: 20,
        }

        QRCode.toCanvas(canvasQrCodeRef.current, text, qrcode_options, error => { })
        canvasQrCodeRef.current.style = {}

        setIsGeneratedQrCode(true)
    }

    return (
        <>
            <Head>
                <title>Ariel Favaro</title>
                <meta name="robots" content="noindex, nofollow" />
                <link key="canonical" rel="canonical" href="https://arielfavaro.com/card" />
            </Head>
            <main className='container'>
                <div className={styles.card}>
                    <div className='flex justify-center -mt-14'>
                        <div className='rounded-full w-32 h-32 overflow-hidden relative' style={{ boxShadow: '0 12px 32px rgb(253 223 167 / 25%)' }}>
                            <Image
                                src='/images/profile.webp'
                                layout='fill'
                                alt=''
                                className=''
                            />
                        </div>
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
                        >
                            Salvar Contato
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
                    <div className='flex flex-col justify-center items-center border-t border-gray-500 py-4 gap-4'>
                        <h4>Compartilhar com QRCode</h4>
                        <div className='flex gap-4'>
                            <button
                                className='rounded-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm'
                                onClick={() => handleGenerateQrCode(generateCard())}
                            >
                                Contato
                            </button>
                            <button
                                className='rounded-full px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm'
                                onClick={() => handleGenerateQrCode(window.location.href)}
                            >
                                Site
                            </button>
                        </div>
                        <div className='lg:w-80'>
                            <canvas
                                className={`max-w-full object-contain object-top ${isGeneratedQrCode ? '' : 'hidden'}`}
                                ref={canvasQrCodeRef}>
                            </canvas>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
