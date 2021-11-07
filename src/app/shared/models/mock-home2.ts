import { LanguageType } from "../enums.enum";
import { IHomeE } from "./home.models";

export const HOMECONTENTI:IHomeE[] = [
    {
        languageType: LanguageType.ITALIAN,
        showLanguage: true,
        contentItalian: [
            {
                style: 'startTogether',
                title: 'Ripartiamo insieme',
                subtitle: '',
                paragraph: [
                    {
                        paragraph:'Tornare a vivere normalmente è possibile. Immuni ci aiuta a farlo prima e senza rinunciare alla privacy.' ,
                    }
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/hero-illustration.120b1e94f69a23426302.png'
                    }
                ],
                backgroundColor: '',
                buttonLabel: '',
                buttonColor: '',
            },
            {
                style: 'protectYourself',
                title: '',
                subtitle: 'Proteggi te stesso, la tua famiglia e gli altri.',
                paragraph: [
                    
                ],
                img: [
                    
                ],
                backgroundColor: '',
                buttonLabel: 'Scarica l app',
                buttonColor: '',
            },
            {
                style: 'news',
                title: 'NOVITÀ',
                subtitle: 'EU Digital Green Certificate.',
                paragraph: [
                    {
                        paragraph:'Puoi acquisire la Certificazione verde COVID-19 utilizzando l’App Immuni attraverso l’apposita sezione “EU digital COVID certificate” visibile nella schermata iniziale della APP.La Certificazione verde COVID–19 viene mostrata a video e il QR code salvato nel dispositivo mobile in modo che possa essere visualizzato e mostrato anche in modalità offline.',
                    }
                ],
                link:'Visita il sito https://www.dgc.gov.it/',
                img: [
                    
                ],
                backgroundColor: '',
                buttonColor: '',
            },
            {
                style: 'whatIsImmuni',
                title: 'CHE COS È IMMUNI',
                subtitle: 'Uno strumento in più per spezzare la catena del contagio',
                paragraph: [
                    {
                        paragraph:'Immuni è un app creata per aiutarci a combattere l epidemia di COVID-19. L app utilizza la tecnologia per avvertire gli utenti che hanno avuto un esposizione a rischio, anche se sono asintomatici.'
                    }
                ],
                img: [
                   
                ],
                backgroundColor: '',
            },
            {
                style: 'whyInstallImmuni',
                title: 'PERCHÉ INSTALLARE IMMUNI',
                subtitle: 'Proteggiamo noi stessi e i nostri cari',
                paragraph: [
                    {
                        paragraph:'Gli utenti che vengono avvertiti dall’app di un possibile contagio possono isolarsi per evitare di contagiare altri. Così facendo, aiutano a contenere l epidemia e a favorire un rapido ritorno alla normalità.',
                    },
                    {
                        paragraph:'Venendo informati tempestivamente, gli utenti possono contattare il proprio medico di medicina generale e ridurre così il rischio di complicanze.'
                    }
                ],
                img: [
                    {
                        image: 'https://www.immuni.italia.it/feat-illustration-it.4e9ccf0b45fec9733372.png',
                        position: 'absolute',
                        width: 33,
                        height: 56,
                        y: -30.4,
                        x: 33,
                    },
                    {
                        image:'https://www.immuni.italia.it/window-day-illustration.ad67bc504207e1c47be9.png',
                        position: 'absolute',
                        width: 22,
                        height: 26,
                        y: 33,
                        x: 11,
                    },
                    {
                        image:'https://www.immuni.italia.it/window-night-illustration.9204be65fd9db59c033e.png',
                        position: 'absolute',
                        width: 22,
                        height: 26,
                        y: 33,
                        x: 64,
                    },
                    {
                        image:'https://www.immuni.italia.it/old-people-illustration.de9a5807de3c73946daf.png',
                        position: 'absolute',
                        width: 22.5,
                        height: 22.5,
                        y: 59,
                        x: 57,
                    }
                ],
                backgroundColor: '',
                buttonColor: '',
            },
            {
                style: 'tecnology',
                title: 'TECNOLOGIA',
                subtitle: 'Innovazione al servizio della comunità',
                paragraph: [
                    {
                        paragraph:'A chi si è trovato a stretto contatto con un utente risultato positivo al virus del COVID-19, l’app invia una notifica che lo avverte del potenziale rischio di essere stato contagiato. Grazie all’uso della tecnologia Bluetooth Low Energy, questo avviene senza raccogliere dati sull’identità o la posizione dell’utente.',
                        
                    }
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/bluetooth-illustration.11051dee1f9c18bf9a2c.png',
                        position: 'absolute',
                        width: 33,
                        height: 33,
                        y: 35,
                        x: 33,
            
                    }
                ],
                backgroundColor: '',
                buttonColor: '',
            },
            {
                style: 'safety',
                title: 'SICUREZZA',
                subtitle: 'La tua privacy è tutelata',
                paragraph: [
                    {
                        paragraph:'Immuni è stata progettata e sviluppata ponendo grande attenzione alla tutela della privacy. I dati, raccolti e gestiti dal Ministero della Salute e da soggetti pubblici, sono salvati su server che si trovano in Italia. I dati e le connessioni dell app con il server sono protetti.',
                    },
                    {
                        paragraph:'Immuni non raccoglie:'
                    }
                ],
                img: [
                    
                ],
                backgroundColor: '',
                buttonColor: '',
                card: [
                      {
                        img: 'https://www.immuni.italia.it/identity.c9efc38b2faca471dfcf.png',
                        paragraph: 'Il tuo nome, cognome o data di nascita'
                      },
                      {
                        img: 'https://www.immuni.italia.it/phone.59011ce952bc38d5fc2a.png',
                        paragraph: 'Il tuo numero di telefono'
                      },
                      {
                        img: 'https://www.immuni.italia.it/email.b775a3c863346df8293f.png',
                        paragraph: 'Il tuo indirizzo email'
                      },
                      {
                        img: 'https://www.immuni.italia.it/people.c72765073dbe7a659499.png',
                        paragraph: 'L’identità delle persone che incontri'
                      },
                      {
                        img: 'https://www.immuni.italia.it/location.24307ae57dbf29ee0ea3.png',
                        paragraph: 'La tua posizione o i tuoi movimenti'
                      }
                ]
            },
            {
                style: 'reportPositivity',
                title: 'NOVITÀ',
                subtitle: 'Segnala positività',
                paragraph: [
                    {
                        paragraph:'Segnalando la tua positività tramite app Immuni gli utenti con cui sei entrato in contatto verranno informati tempestivamente. Potranno così contattare subito il medico di medicina generale e ridurre il rischio di complicanze o di ulteriori contagi.'
                    }
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/rep-positivity.55e85b0b2a6f9270b5e5.png',
                        width: 22,
                        height: 25,
                    }
                ],
                backgroundColor: '',
                buttonLabel: 'Scopri come effettuare la segnalazione',
                buttonColor: '',
            },
            {
                style: 'wantYouKnowMore',
                title: 'Vuoi saperne di più?',
                subtitle: '',
                paragraph: [
                    
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/man-faq.46665fe340598895d79d.png',
                        position: 'absolute',
                        width: 12,
                        height: 25,
                        y: 0,
                        x: 18,
                    },
                    {
                        image:'https://www.immuni.italia.it/girl-faq.d84670e3fbc3de73687c.png',
                        position: 'absolute',
                        width: 12,
                        height: 25,
                        y: 0,
                        x: 71,
                    },
                ],
                backgroundColor: '',
                buttonLabel: 'Leggi le domande frequenti',
            },

        ] 
    },
    {
        languageType: LanguageType.ENGLISH,
        showLanguage: false,
        contentItalian: [
            {
                style: 'startTogether',
                title: 'Let’s start afresh together',
                subtitle: '',
                paragraph: [
                    {
                        paragraph:'Living a normal life once again is possible. Immuni helps us reach this goal faster and without compromising our privacy.' ,
                    }
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/hero-illustration.120b1e94f69a23426302.png'
                    }
                ],
                backgroundColor: '',
                buttonLabel: '',
                buttonColor: '',
            },
            {
                style: 'protectYourself',
                title: '',
                subtitle: 'Protect yourself, your family and others.',
                paragraph: [
                    
                ],
                img: [
                    
                ],
                backgroundColor: '',
                buttonLabel: 'Download the app',
                buttonColor: '',
            },
            {
                style: 'news',
                title: 'NEWS',
                subtitle: 'EU Digital Green Certificate.',
                paragraph: [
                    {
                        paragraph:'You can acquire the green COVID-19 certification using the Immuni App through the appropriate section “EU digital COVID certificate” visible on the home screen of the APP.The green certification COVID–19 is shown on the screen and the QR code saved in the mobile device so that it can be viewed and shown even in offline mode.',
                    }
                ],
                link:'Visit the website https://www.dgc.gov.it/',
                img: [
                    
                ],
                backgroundColor: '',
                buttonColor: '',
            },
            {
                style: 'whatIsImmuni',
                title: 'WHAT IS IMMUNI?',
                subtitle: 'One more tool to break the chain of contagion',
                paragraph: [
                    {
                        paragraph:'Immuni is an app that helps us fight the COVID-19 epidemic. The app uses technology to alert the users who have had a risky exposure—even if they are asymptomatic.'
                    }
                ],
                img: [
                   
                ],
                backgroundColor: '',
            },
            {
                style: 'whyInstallImmuni',
                title: 'WHY YOU SHOULD INSTALL IMMUNI',
                subtitle: 'Protection for ourselves and our loved ones',
                paragraph: [
                    {
                        paragraph:'Users who have been notified by the app of a possible infection can isolate themselves to avoid infecting other people. By doing so, they help contain the epidemic and speed up the return to a normal life.',
                    },
                    {
                        paragraph:'By being alerted early, the users can contact their general practitioner and, therefore, lower the risk of serious consequences.'
                    }
                ],
                img: [
                    {
                        image: 'https://www.immuni.italia.it/feat-illustration-it.4e9ccf0b45fec9733372.png',
                        position: 'absolute',
                        width: 33,
                        height: 56,
                        y: -30.4,
                        x: 33,
                    },
                    {
                        image:'https://www.immuni.italia.it/window-day-illustration.ad67bc504207e1c47be9.png',
                        position: 'absolute',
                        width: 22,
                        height: 26,
                        y: 33,
                        x: 11,
                    },
                    {
                        image:'https://www.immuni.italia.it/window-night-illustration.9204be65fd9db59c033e.png',
                        position: 'absolute',
                        width: 22,
                        height: 26,
                        y: 33,
                        x: 64,
                    },
                    {
                        image:'https://www.immuni.italia.it/old-people-illustration.de9a5807de3c73946daf.png',
                        position: 'absolute',
                        width: 22.5,
                        height: 22.5,
                        y: 59,
                        x: 57,
                    }
                ],
                backgroundColor: '',
                buttonColor: '',
            },
            {
                style: 'tecnology',
                title: 'TECHNOLOGY',
                subtitle: 'Innovation to serve the community',
                paragraph: [
                    {
                        paragraph:'The app sends a notification to people who were in close contact with a user who tested positive for the COVID-19 virus, alerting them of the risk of infection. Thanks to Bluetooth Low Energy technology, this takes place without the app gathering any data on the identity or the location of its users.',
                        
                    }
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/bluetooth-illustration.11051dee1f9c18bf9a2c.png',
                        position: 'absolute',
                        width: 33,
                        height: 33,
                        y: 35,
                        x: 33,
            
                    }
                ],
                backgroundColor: '',
                buttonColor: '',
            },
            {
                style: 'safety',
                title: 'SAFETY',
                subtitle: 'Your privacy is protected',
                paragraph: [
                    {
                        paragraph:'Immuni has been designed and developed while taking great care to safeguard user privacy. Any data, collected and managed by the Ministry of Health and by public bodies, is stored on servers located in Italy. All the data and app connections with the server are protected.',
                    },
                    {
                        paragraph:'Immuni does not gather:'
                    }
                ],
                img: [
                    
                ],
                backgroundColor: '',
                buttonColor: '',
                card: [
                      {
                        img: 'https://www.immuni.italia.it/identity.c9efc38b2faca471dfcf.png',
                        paragraph: 'Your first name, last name, or date of birth'
                      },
                      {
                        img: 'https://www.immuni.italia.it/phone.59011ce952bc38d5fc2a.png',
                        paragraph: 'Your telephone number'
                      },
                      {
                        img: 'https://www.immuni.italia.it/email.b775a3c863346df8293f.png',
                        paragraph: 'Your email address'
                      },
                      {
                        img: 'https://www.immuni.italia.it/people.c72765073dbe7a659499.png',
                        paragraph: 'The identity of the people you meet'
                      },
                      {
                        img: 'https://www.immuni.italia.it/location.24307ae57dbf29ee0ea3.png',
                        paragraph: 'Your location or your movements'
                      }
                ]
            },
            {
                style: 'reportPositivity',
                title: 'NEWS',
                subtitle: 'Report positivity',
                paragraph: [
                    {
                        paragraph:'By reporting your positive test result, via the Immuni app, the users you have come into contact with will be promptly informed. In this way they will be able to contact your general practitioner immediately and reduce the risk of complications and or further infections.'
                    }
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/rep-positivity.55e85b0b2a6f9270b5e5.png',
                        width: 22,
                        height: 25,
                    }
                ],
                backgroundColor: '',
                buttonLabel: 'Learn how out how to make a report',
                buttonColor: '',
            },
            {
                style: 'wantYouKnowMore',
                title: 'Want to know more?',
                subtitle: '',
                paragraph: [
                    
                ],
                img: [
                    {
                        image:'https://www.immuni.italia.it/man-faq.46665fe340598895d79d.png',
                        position: 'absolute',
                        width: 12,
                        height: 25,
                        y: 0,
                        x: 18,
                    },
                    {
                        image:'https://www.immuni.italia.it/girl-faq.d84670e3fbc3de73687c.png',
                        position: 'absolute',
                        width: 12,
                        height: 25,
                        y: 0,
                        x: 71,
                    },
                ],
                backgroundColor: '',
                buttonLabel: 'Take a look at the FAQ section',
            },

        ] 
    }
]