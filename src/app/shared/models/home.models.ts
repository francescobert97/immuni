import { LanguageType } from "../enums.enum";


  export interface IHomeE {
    languageType: LanguageType,
    showLanguage: boolean,
    contents:IContentLanguage[]
  }

  export interface IContent {
    style: string,
    title: string,
    subtitle: string,
    paragraphs: IParagraph[],
    link?: string,
    imgs?: IImage[],
    backgroundColor?: string,
    buttonLabel?: string,
    buttonColor?: string,
    cards?: ICard[]
  }

  export interface IContentLanguage {
    home: IContent[],
    graphics: IContent[],
    number: IContent[],
    faq: IContent[],
    download: IContent[]
  }

  export interface ICard {
    img: string,
    paragraph: string
  }

  export interface IImage {
    image: string,
    position?: string
    width?: number,
    height?: number,
    y?: number,
    x?: number
  }

  export interface IParagraph {
    paragraph: string,
    alignSelf?: string,
    flexGrow?: number

  }