export interface BlogSingleItem {
    title: string,
    description: string,
    img: string,
    comments: number,
    view: number,
    date: string,
    id: string
}

export interface BlogAuthorType {
    fullname: string,
    img: string
    description: string,
    telegram: string,
    instagram: string,
    articlesNumber: number
}

export interface BlogType {
    id:string,
    author: BlogAuthorType,
    title: string,
    date: string,
    tags?: Array<{ title: string, id: string }>
    description: string,
    img: string,
    subSections?: Array<{ title: string, id: string, description: string }>
}