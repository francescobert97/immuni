import { LanguageType } from "../enums.enum";
import { IFaq } from "./question.models";


  export interface IHomeE {
    languageType: LanguageType,
    showLanguage: boolean,
    contents:IContentLanguage
  }

  export interface IHome {
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

  export interface IGraphics {
    title: string,
    subtitle: string,
    buttonLabel: string,
    img: string
  }

  export interface IContentLanguage {
    home: IHome[],
    graphics: IGraphics,
    number: IGraphics[],
    faq: IFaq,
    download: IGraphics[]
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