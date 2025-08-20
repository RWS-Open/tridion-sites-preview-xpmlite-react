export interface IComponentProps {
    "title": string,
    "itemId": number,
    "publicationId": number,
    "itemType": number,
    "headline": string,
    "articleBody": IArticleBody[]
}
interface IArticleBody {
    "subheading": string | null,
    "content": IContent,
    "media": null,
    "caption": null,
    "__typename": string
}

interface IContent {
    "html": string | null
}