// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import VCard from 'vcard-creator'

export default function handler(req, res) {

    const phoneWhatsapp = process.env.NEXT_PUBLIC_PHONE_WHATSAPP ?? null

    const card = new VCard()
    card.addName('Favaro', 'Ariel')
    card.addJobtitle('Web Developer')
    card.addEmail('contato@arielfavaro.com')
    phoneWhatsapp && card.addPhoneNumber(phoneWhatsapp, 'WORK')
    card.addURL('https://arielfavaro.com', 'WORK')

    res
        .status(200)
        .setHeader('Content-Disposition', 'attachment; filename="contato-arielfavaro.vcf"')
        .setHeader('Content-Type', 'text/vcard; charset=utf-8')
        .setHeader('X-Robots-Tag', 'noindex')
        .send(card.toString())
}
