// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import generateCard from "@/services/generateCard"

export default function handler(req, res) {

    res
        .status(200)
        .setHeader('Content-Disposition', 'attachment; filename="contato-arielfavaro.vcf"')
        .setHeader('Content-Type', 'text/vcard; charset=utf-8')
        .setHeader('X-Robots-Tag', 'noindex')
        .send(generateCard())
}
