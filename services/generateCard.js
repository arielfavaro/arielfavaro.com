import VCard from 'vcard-creator'

export default function generateCard() {
    const phoneWhatsapp = process.env.NEXT_PUBLIC_PHONE_WHATSAPP ?? null

    const card = new VCard()
    card.addName('Favaro', 'Ariel')
    card.addJobtitle('Web Developer')
    card.addEmail('contato@arielfavaro.com')
    phoneWhatsapp && card.addPhoneNumber(phoneWhatsapp, 'WORK')
    card.addURL('https://arielfavaro.com', 'WORK')

    return card.toString()
}