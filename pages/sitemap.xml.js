export default function Sitemap() {
    return null
}

export async function getServerSideProps({ res }) {

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
            <url>
                <loc>https://arielfavaro.com/</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.8</priority>
            </url>
            <url>
                <loc>https://arielfavaro.com/meus-projetos</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>weekly</changefreq>
                <priority>0.5</priority>
            </url>
        </urlset>
    `

    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemap)
    res.end()

    return { props: {} }
}
