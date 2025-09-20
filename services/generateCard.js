import VCard from 'vcard-creator'

export default function generateCard() {
    const phoneWhatsapp = process.env.NEXT_PUBLIC_PHONE_WHATSAPP ?? null

    const card = new VCard()
    card.addName('Favaro', 'Ariel')
    card.addJobtitle('Web Developer')
    card.addEmail('arieltainan@gmail.com')
    phoneWhatsapp && card.addPhoneNumber(phoneWhatsapp, 'WORK')
    card.addURL('https://ariel.dev.br', 'WORK')

    return card.toString()
}