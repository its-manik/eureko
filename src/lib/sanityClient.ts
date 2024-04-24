import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const client = createClient({
    apiVersion: "v2024-02-03",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token: process.env.SANITY_API_TOKEN,
    useCdn: true,
})


const builder = imageUrlBuilder(client)

const urlFor = (source: any) => {
    return builder.image(source)
}

export { client, urlFor }





