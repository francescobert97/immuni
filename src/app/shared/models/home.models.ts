
export interface IStartTogether {
    img: string,
    title: string,
    paragraph: string
  }
  
  export interface IProtectYourself {
    paragraph: string,
    buttonLabel: string,
    buttonColor: string,
    backgroundColor: string
  }
  
  export interface INews {
    img: string,
    title: string,
    subtitle: string,
    paragraph: string,
    link: string
  }
  
  export interface IImmuni {
    title: string,
    subtitle: string,
    paragraph: string
  }
  
  export interface IWhyImmmuni {
    img: string,
    title: string,
    subtitle: string,
    paragraph1: string,
    img2: string,
    img3: string,
    paragraph2: string,
    backgroundColor: string,
    img4: string
  }
  export interface ITecnology {
    title: string,
    subtitle: string,
    img: string,
    paragraph: string
  }
  
  export interface ICard {
    img: string,
    paragraph: string
  }
  export interface ISafety {
    title: string,
    subtitle: string,
    paragraph: string,
    subtitle2: string,
    card: ICard[]
  }
  
  export interface IReport {
    title: string,
    subtitle: string,
    img: string,
    paragraph: string,
    buttonLabel: string,
    buttonColor: string
  }
  
  export interface IWantMore {
    title: string,
    img: string,
    buttonLabel: string,
    buttonColor: string
  }
  
  export interface IHome {
    startTogetherContent: IStartTogether,
    protectYourselfContent: IProtectYourself,
    newsContent: INews,
    immuniContent: IImmuni,
    whyInstallImmuniContent: IWhyImmmuni,
    tecnologyContent: ITecnology,
    safetyContent: ISafety,
    reportPositivityContent: IReport,
    wantToKnowMoreContent: IWantMore 
  }