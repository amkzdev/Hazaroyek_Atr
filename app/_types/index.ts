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
    author:BlogAuthorType
}