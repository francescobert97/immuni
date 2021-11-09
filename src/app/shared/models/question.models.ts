export interface ISearch {
    title: string,
    searchLabel: string
}

export interface IQuestion {
    question: string,
    answer: string
}

export interface IFaq {
    search: ISearch,
    questions: IQuestion[]
}