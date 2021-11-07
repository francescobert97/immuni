import { LanguageType } from "../enums.enum";
import { IHomeE } from "./home.models";

export const HOMECONTENTI:IHomeE[] = [
    {
        languageType: LanguageType.ITALIAN,
        showLanguage: true,
        contents: [
            {
                home:  [
                    {
                        style: 'startTogether',
                        title: 'Ripartiamo insieme',
                        subtitle: '',
                        paragraphs: [
                            {
                                paragraph:'Tornare a vivere normalmente è possibile. Immuni ci aiuta a farlo prima e senza rinunciare alla privacy.' ,
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Scarica l app',
                        buttonColor: '',
                    },
                    {
                        style: 'news',
                        title: 'NOVITÀ',
                        subtitle: 'EU Digital Green Certificate.',
                        paragraphs: [
                            {
                                paragraph:'Puoi acquisire la Certificazione verde COVID-19 utilizzando l’App Immuni attraverso l’apposita sezione “EU digital COVID certificate” visibile nella schermata iniziale della APP.La Certificazione verde COVID–19 viene mostrata a video e il QR code salvato nel dispositivo mobile in modo che possa essere visualizzato e mostrato anche in modalità offline.',
                            }
                        ],
                        link:'Visita il sito https://www.dgc.gov.it/',
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                    },
                    {
                        style: 'whatIsImmuni',
                        title: 'CHE COS È IMMUNI',
                        subtitle: 'Uno strumento in più per spezzare la catena del contagio',
                        paragraphs: [
                            {
                                paragraph:'Immuni è un app creata per aiutarci a combattere l epidemia di COVID-19. L app utilizza la tecnologia per avvertire gli utenti che hanno avuto un esposizione a rischio, anche se sono asintomatici.'
                            }
                        ],
                        imgs: [
                        
                        ],
                        backgroundColor: '',
                    },
                    {
                        style: 'whyInstallImmuni',
                        title: 'PERCHÉ INSTALLARE IMMUNI',
                        subtitle: 'Proteggiamo noi stessi e i nostri cari',
                        paragraphs: [
                            {
                                paragraph:'Gli utenti che vengono avvertiti dall’app di un possibile contagio possono isolarsi per evitare di contagiare altri. Così facendo, aiutano a contenere l epidemia e a favorire un rapido ritorno alla normalità.',
                            },
                            {
                                paragraph:'Venendo informati tempestivamente, gli utenti possono contattare il proprio medico di medicina generale e ridurre così il rischio di complicanze.'
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            {
                                paragraph:'A chi si è trovato a stretto contatto con un utente risultato positivo al virus del COVID-19, l’app invia una notifica che lo avverte del potenziale rischio di essere stato contagiato. Grazie all’uso della tecnologia Bluetooth Low Energy, questo avviene senza raccogliere dati sull’identità o la posizione dell’utente.',
                                
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            {
                                paragraph:'Immuni è stata progettata e sviluppata ponendo grande attenzione alla tutela della privacy. I dati, raccolti e gestiti dal Ministero della Salute e da soggetti pubblici, sono salvati su server che si trovano in Italia. I dati e le connessioni dell app con il server sono protetti.',
                            },
                            {
                                paragraph:'Immuni non raccoglie:'
                            }
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                        cards: [
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
                        paragraphs: [
                            {
                                paragraph:'Segnalando la tua positività tramite app Immuni gli utenti con cui sei entrato in contatto verranno informati tempestivamente. Potranno così contattare subito il medico di medicina generale e ridurre il rischio di complicanze o di ulteriori contagi.'
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            
                        ],
                        imgs: [
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
                ],
                graphics: [

                ],
                number: [

                ],
                faq: [

                ],
                download: [

                ]
        }
        ] 
    },
    {
        languageType: LanguageType.ENGLISH,
        showLanguage: false,
        contents: [
            {
                home: [
                    {
                        style: 'startTogether',
                        title: 'Let’s start afresh together',
                        subtitle: '',
                        paragraphs: [
                            {
                                paragraph:'Living a normal life once again is possible. Immuni helps us reach this goal faster and without compromising our privacy.' ,
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Download the app',
                        buttonColor: '',
                    },
                    {
                        style: 'news',
                        title: 'NEWS',
                        subtitle: 'EU Digital Green Certificate.',
                        paragraphs: [
                            {
                                paragraph:'You can acquire the green COVID-19 certification using the Immuni App through the appropriate section “EU digital COVID certificate” visible on the home screen of the APP.The green certification COVID–19 is shown on the screen and the QR code saved in the mobile device so that it can be viewed and shown even in offline mode.',
                            }
                        ],
                        link:'Visit the website https://www.dgc.gov.it/',
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                    },
                    {
                        style: 'whatIsImmuni',
                        title: 'WHAT IS IMMUNI?',
                        subtitle: 'One more tool to break the chain of contagion',
                        paragraphs: [
                            {
                                paragraph:'Immuni is an app that helps us fight the COVID-19 epidemic. The app uses technology to alert the users who have had a risky exposure—even if they are asymptomatic.'
                            }
                        ],
                        imgs: [
                        
                        ],
                        backgroundColor: '',
                    },
                    {
                        style: 'whyInstallImmuni',
                        title: 'WHY YOU SHOULD INSTALL IMMUNI',
                        subtitle: 'Protection for ourselves and our loved ones',
                        paragraphs: [
                            {
                                paragraph:'Users who have been notified by the app of a possible infection can isolate themselves to avoid infecting other people. By doing so, they help contain the epidemic and speed up the return to a normal life.',
                            },
                            {
                                paragraph:'By being alerted early, the users can contact their general practitioner and, therefore, lower the risk of serious consequences.'
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            {
                                paragraph:'The app sends a notification to people who were in close contact with a user who tested positive for the COVID-19 virus, alerting them of the risk of infection. Thanks to Bluetooth Low Energy technology, this takes place without the app gathering any data on the identity or the location of its users.',
                                
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            {
                                paragraph:'Immuni has been designed and developed while taking great care to safeguard user privacy. Any data, collected and managed by the Ministry of Health and by public bodies, is stored on servers located in Italy. All the data and app connections with the server are protected.',
                            },
                            {
                                paragraph:'Immuni does not gather:'
                            }
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                        cards: [
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
                        paragraphs: [
                            {
                                paragraph:'By reporting your positive test result, via the Immuni app, the users you have come into contact with will be promptly informed. In this way they will be able to contact your general practitioner immediately and reduce the risk of complications and or further infections.'
                            }
                        ],
                        imgs: [
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
                        paragraphs: [
                            
                        ],
                        imgs: [
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
            
                ],
                graphics: [

                ],
                number: [

                ],
                faq: [

                ],
                download: [

                ]
            }
        ]
    },
    {
        languageType: LanguageType.DEUTSCH,
        showLanguage: false,
        contents: [
            {
                home: [
                    {
                        style: 'startTogether',
                        title: 'Starten wir gemeinsam neu durch',
                        subtitle: '',
                        paragraphs: [
                            {
                                paragraph: 'Eine Rückkehr zum normalen Leben ist möglich. Mit Immuni gelingt uns das schneller, ohne auf unsere Privatsphäre verzichten zu müssen.' ,
                            }
                        ],
                        imgs: [
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
                        subtitle: 'Schützen Sie sich, Ihre Familie und andere.',
                        paragraphs: [
                            
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonLabel: 'App herunterladen',
                        buttonColor: '',
                    },
                    {
                        style: 'news',
                        title: 'ANKÜNDIGUNGEN',
                        subtitle: 'EU-Digital-Covid-Zertifika.',
                        paragraphs: [
                            {
                                paragraph:'Sie können die grüne COVID-19-Zertifizierung mit der Immune App über den entsprechenden Abschnitt “EU-Digital-Covid-Zertifikat” erwerben, der auf dem Startbildschirm der APP sichtbar ist. Die grüne Zertifizierung COVID–19 wird auf dem Bildschirm angezeigt und der QR-Code im mobilen Gerät gespeichert, sodass er auch im Offline-Modus angezeigt und angezeigt werden kann.',
                            }
                        ],
                        link:'Besuchen Sie die Website https://www.dgc.gov.it/',
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                    },
                    {
                        style: 'whatIsImmuni',
                        title: 'WAS IST IMMUNI?',
                        subtitle: 'Ein weiteres Mittel, um die Ansteckungskette zu durchbrechen',
                        paragraphs: [
                            {
                                paragraph:'Die App wurde entwickelt, um uns im Kampf gegen die COVID-19-Pandemie zu unterstützen. Dank modernster Technologie warnt die App Nutzer, die einem Ansteckungsrisiko ausgesetzt waren, auch wenn sie keine Symptome zeigen.'
                            }
                        ],
                        imgs: [
                        
                        ],
                        backgroundColor: '',
                    },
                    {
                        style: 'whyInstallImmuni',
                        title: 'WARUM IMMUNI INSTALLIEREN?',
                        subtitle: 'PWir schützen uns und unsere Angehörigen',
                        paragraphs: [
                            {
                                paragraph:'Warnt die App einen Nutzer vor einer möglichen Infektion, kann er sich in Isolation begeben und so vermeiden, andere anzustecken. Auf diese Weise trägt man zur Eindämmung der Pandemie bei und unterstützt eine rasche Rückkehr zur Normalität.',
                            },
                            {
                                paragraph:'Da Nutzer sofort verständigt werden, können sie sich an ihren Hausarzt wenden und so das Komplikationsrisiko mindern.'
                            }
                        ],
                        imgs: [
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
                        title: 'DIE TECHNOLOGIE',
                        subtitle: 'Innovation im Sinne der Gemeinschaft',
                        paragraphs: [
                            {
                                paragraph:'Wer engen Kontakt zu einem Nutzer hatte, der positiv auf COVID-19 getestet wurde, erhält von der App eine Warnung hinsichtlich eines potentiellen Infektionsrisikos. Dafür wird die Bluetooth Low Energy-Technologie eingesetzt, die weder Daten über die Identität noch über den Standort der Nutzer sammelt.',
                                
                            }
                        ],
                        imgs: [
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
                        title: 'SICHERHEIT',
                        subtitle: 'Ihre Privatsphäre ist sicher',
                        paragraphs: [
                            {
                                paragraph:'Bei der Entwicklung von Immuni wurde besonders auf den Schutz Ihrer Privatsphäre geachtet. Die Daten werden vom Gesundheitsministerium und öffentlichen Einrichtungen gesammelt und auf Servern in Italien gespeichert. Die Daten und Verbindungen der App zum Server sind geschützt.',
                            },
                            {
                                paragraph:'Immuni sammelt keine der folgenden Informationen:'
                            }
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                        cards: [
                            {
                                img: 'https://www.immuni.italia.it/identity.c9efc38b2faca471dfcf.png',
                                paragraph: 'Ihren Namen, Nachnamen oder Ihr Geburtsdatum'
                            },
                            {
                                img: 'https://www.immuni.italia.it/phone.59011ce952bc38d5fc2a.png',
                                paragraph: 'Ihre Telefonnummer'
                            },
                            {
                                img: 'https://www.immuni.italia.it/email.b775a3c863346df8293f.png',
                                paragraph: 'Ihre E-Mail-Adresse'
                            },
                            {
                                img: 'https://www.immuni.italia.it/people.c72765073dbe7a659499.png',
                                paragraph: 'Die Identität der Menschen, die Sie treffen'
                            },
                            {
                                img: 'https://www.immuni.italia.it/location.24307ae57dbf29ee0ea3.png',
                                paragraph: 'Ihren Aufenthaltsort oder Ihre Bewegungen'
                            }
                        ]
                    },
                    {
                        style: 'reportPositivity',
                        title: 'ANKÜNDIGUNGEN',
                        subtitle: 'Positivität melden',
                        paragraphs: [
                            {
                                paragraph:'Wenn Sie Ihr positives Testergebnis über die Immuni-App melden, werden die Benutzer, mit denen Sie in Kontakt gekommen sind, umgehend informiert. Auf diese Weise können Sie den Hausarzt sofort kontaktieren und das Risiko von Komplikationen oder weiteren Infektionen verringern.'
                            }
                        ],
                        imgs: [
                            {
                                image:'https://www.immuni.italia.it/rep-positivity.55e85b0b2a6f9270b5e5.png',
                                width: 22,
                                height: 25,
                            }
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Finden Sie heraus, wie Sie Bericht erstatten können',
                        buttonColor: '',
                    },
                    {
                        style: 'wantYouKnowMore',
                        title: 'Möchten Sie mehr erfahren?',
                        subtitle: '',
                        paragraphs: [
                            
                        ],
                        imgs: [
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
                        buttonLabel: 'Häufig gestellte Fragen lesen',
                    }
                ],
                graphics: [

                ],
                number: [

                ],
                faq: [

                ],
                download: [

                ]
            }
        ]
    },
    {
        languageType: LanguageType.FRANCAIS,
        showLanguage: false,
        contents: [
            {
                home: [
                    {
                        style: 'startTogether',
                        title: 'Ensemble, contribuons à un retour à la normale',
                        subtitle: '',
                        paragraphs: [
                            {
                                paragraph: 'Retrouver une vie normale est à notre portée. Afin d’y parvenir plus rapidement, Immuni a été créée, dans le respect total de la confidentialité de vos données.' ,
                            }
                        ],
                        imgs: [
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
                        subtitle: 'Protégez- vous, votre famille et les autres.',
                        paragraphs: [
                            
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Télécharger l application',
                        buttonColor: '',
                    },
                    {
                        style: 'news',
                        title: 'NOUVEAUTÉ',
                        subtitle: 'Certificat Covid numérique de l UE',
                        paragraphs: [
                            {
                                paragraph:'Vous pouvez acquérir la certification verte COVID-19 en utilisant l application Immuni, la section appropriée “Certificat Covid numérique de l UE” visible sur l écran initial de l APP.La certification verte COVID–19 est affichée à l écran et le code QR enregistré dans l appareil mobile afin qu il puisse être consulté et affiché même en mode hors ligne.',
                            }
                        ],
                        link:'Visiter le site https://www.dgc.gov.it/',
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                    },
                    {
                        style: 'whatIsImmuni',
                        title: 'DE QUOI S’AGIT-IL IMMUNI?',
                        subtitle: 'Un outil de plus pour briser la chaîne de contagion',
                        paragraphs: [
                            {
                                paragraph:'Immuni est une application créée spécialement pour nous aider à lutter contre l’épidémie de COVID-19. L’application est dotée d’une technologie capable d’avertir les utilisateurs qui ont été exposés à un risque, même s’ils sont asymptomatiques.'
                            }
                        ],
                        imgs: [
                        
                        ],
                        backgroundColor: '',
                    },
                    {
                        style: 'whyInstallImmuni',
                        title: 'POURQUOI INSTALLER IMMUNI',
                        subtitle: 'Protégeons-nous et protégeons nos proches',
                        paragraphs: [
                            {
                                paragraph:'Une fois avertis d’une éventuelle infection par l’application, les utilisateurs peuvent s’isoler pour éviter d’infecter les autres. Ils contribuent ainsi à contenir l’épidémie pour un retour rapide à la normale.',
                            },
                            {
                                paragraph:'Grâce aux notifications en temps réel, les utilisateurs peuvent également contacter leur médecin généraliste rapidement et ainsi réduire les risques de complications.'
                            }
                        ],
                        imgs: [
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
                        title: 'TECHNOLOGIE',
                        subtitle: 'L’innovation au service de la communauté',
                        paragraphs: [
                            {
                                paragraph:'L’application envoie une notification à la personne ayant été en contact étroit avec un utilisateur testé positif au COVID-19 afin de l’avertir du risque potentiel de contracter le virus. La technologie Bluetooth Low Energy permet de réaliser cette prouesse sans collecter de données ni sur l’identité ni sur la localisation de l’utilisateur.',
                                
                            }
                        ],
                        imgs: [
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
                        title: 'SÉCURITÉ',
                        subtitle: 'La confidentialité de vos données est protégée',
                        paragraphs: [
                            {
                                paragraph:'Pendant la conception et le développement d’Immuni, une grande attention a été portée à la protection des données confidentielles. Les données, collectées et gérées par le Ministère de la Santé italien et par des organismes publics, sont enregistrées sur des serveurs basés en Italie. Les données et les connexions de l’application avec le serveur sont protégées.',
                            },
                            {
                                paragraph:'Immuni ne collectera jamais:'
                            }
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                        cards: [
                            {
                                img: 'https://www.immuni.italia.it/identity.c9efc38b2faca471dfcf.png',
                                paragraph: 'Vos nom, prénom ou date de naissance'
                            },
                            {
                                img: 'https://www.immuni.italia.it/phone.59011ce952bc38d5fc2a.png',
                                paragraph: 'Votre numéro de téléphone'
                            },
                            {
                                img: 'https://www.immuni.italia.it/email.b775a3c863346df8293f.png',
                                paragraph: 'Votre adresse e-mail'
                            },
                            {
                                img: 'https://www.immuni.italia.it/people.c72765073dbe7a659499.png',
                                paragraph: 'L’identité des personnes que vous croisez'
                            },
                            {
                                img: 'https://www.immuni.italia.it/location.24307ae57dbf29ee0ea3.png',
                                paragraph: 'Votre position ni vos déplacements'
                            }
                        ]
                    },
                    {
                        style: 'reportPositivity',
                        title: 'NOUVEAUTÉ',
                        subtitle: 'Signaler la positivité',
                        paragraphs: [
                            {
                                paragraph:'En signalant votre positivité avec l application Immuni, les utilisateurs avec lesquels vous êtes entré en contact seront rapidement informés. De cette manière, ils pourront contacter immédiatement le médecin généraliste et réduire le risque de complications ou d autres infections.'
                            }
                        ],
                        imgs: [
                            {
                                image:'https://www.immuni.italia.it/rep-positivity.55e85b0b2a6f9270b5e5.png',
                                width: 22,
                                height: 25,
                            }
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Découvrez comment signaler',
                        buttonColor: '',
                    },
                    {
                        style: 'wantYouKnowMore',
                        title: 'Vous souhaitez en savoir plus ?',
                        subtitle: '',
                        paragraphs: [
                            
                        ],
                        imgs: [
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
                        buttonLabel: 'Consultez la section FAQ',
                    }
                ],
                graphics: [

                ],
                number: [

                ],
                faq: [

                ],
                download: [

                ]
            }
        ]
    },
    {
        languageType: LanguageType.ESPANOL,
        showLanguage: false,
        contents: [
            {
                home: [
                    {
                        style: 'startTogether',
                        title: 'Salgamos adelante juntos',
                        subtitle: '',
                        paragraphs: [
                            {
                                paragraph: 'Volver a la normalidad es posible. Con Immuni, podremos lograrlo antes y sin renunciar a nuestra privacidad.' ,
                            }
                        ],
                        imgs: [
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
                        subtitle: 'Protege a ti mismo, a tu familia y los demás.',
                        paragraphs: [
                            
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Descargate la aplicacion',
                        buttonColor: '',
                    },
                    {
                        style: 'news',
                        title: 'NOVEDAD',
                        subtitle: 'Certificado Covid Digital de la UE',
                        paragraphs: [
                            {
                                paragraph:'Puedes adquirir el certificado verde COVID-19 utilizando la aplicación Immuni a través de la sección correspondiente “Certificado COVID digital de la UE” visible en la pantalla de inicio de la aplicación. El certificado verde COVID-19 se muestra en la pantalla y el código QR se guarda en el dispositivo móvil para que se pueda ver y mostrar incluso en modo fuera de línea.',
                            }
                        ],
                        link:'Visita la página web https://www.dgc.gov.it/',
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                    },
                    {
                        style: 'whatIsImmuni',
                        title: '¿QUÉ ES IMMUNI?',
                        subtitle: 'Una herramienta más para romper la cadena de transmisión',
                        paragraphs: [
                            {
                                paragraph:'Immuni es una aplicación que se ha desarrollado para ayudarnos a combatir la epidemia de la COVID-19. La aplicación se sirve de la tecnología para avisar a los usuarios que han estado expuestos al riesgo, aunque sean asintomáticos.'
                            }
                        ],
                        imgs: [
                        
                        ],
                        backgroundColor: '',
                    },
                    {
                        style: 'whyInstallImmuni',
                        title: 'VENTAJAS DE INSTALAR IMMUNI',
                        subtitle: 'Cuidemos de nosotros mismos y de nuestros seres queridos',
                        paragraphs: [
                            {
                                paragraph:'Cuando la aplicación avisa a los usuarios de un posible contagio, estos se pueden aislar para evitar poner en riesgo a otras personas. De ese modo, ayudan a contener la epidemia y contribuyen a que volvamos a la normalidad cuanto antes.',
                            },
                            {
                                paragraph:'Además, como reciben un aviso de inmediato, los usuarios pueden contactar con su médico de cabecera y reducir así el riesgo de complicaciones.'
                            }
                        ],
                        imgs: [
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
                        title: 'TECHNOLOGIE',
                        subtitle: 'Innovación al servicio de la comunidad',
                        paragraphs: [
                            {
                                paragraph:'Cuando una persona ha estado en contacto cercano con un usuario que haya dado positivo en la COVID-19, la aplicación le envía una notificación para comunicarle que podría haberse contagiado. Gracias al uso de la tecnología Bluetooth Low Energy, todo esto ocurre sin necesidad de recopilar datos sobre la identidad o la ubicación del usuario.',
                                
                            }
                        ],
                        imgs: [
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
                        title: 'SEGURIDAD',
                        subtitle: 'Tu privacidad está garantizada',
                        paragraphs: [
                            {
                                paragraph:'Al diseñar y desarrollar Immuni, una de las prioridades ha sido proteger la privacidad de los usuarios. El Ministerio de Salud y otras entidades públicas se encargan de recopilar y gestionar los datos, que se guardan en servidores en Italia. Los datos y las conexiones de la aplicación con el servidor están protegidos.',
                            },
                            {
                                paragraph:'Immuni no recopila:'
                            }
                        ],
                        imgs: [
                            
                        ],
                        backgroundColor: '',
                        buttonColor: '',
                        cards: [
                            {
                                img: 'https://www.immuni.italia.it/identity.c9efc38b2faca471dfcf.png',
                                paragraph: 'Tu nombre, apellidos o fecha de nacimiento'
                            },
                            {
                                img: 'https://www.immuni.italia.it/phone.59011ce952bc38d5fc2a.png',
                                paragraph: 'Tu número de teléfono'
                            },
                            {
                                img: 'https://www.immuni.italia.it/email.b775a3c863346df8293f.png',
                                paragraph: 'Tu dirección de correo electrónico'
                            },
                            {
                                img: 'https://www.immuni.italia.it/people.c72765073dbe7a659499.png',
                                paragraph: 'La identidad de las personas con las que tienes contacto'
                            },
                            {
                                img: 'https://www.immuni.italia.it/location.24307ae57dbf29ee0ea3.png',
                                paragraph: 'Tu ubicación o tus movimientos'
                            }
                        ]
                    },
                    {
                        style: 'reportPositivity',
                        title: 'NOVEDAD',
                        subtitle: 'Reporta positividad',
                        paragraphs: [
                            {
                                paragraph:'Al informar tu positividad a través de la aplicación Immuni, los usuarios con los que has entrado en contacto serán informados de inmediato. De esta forma podrán contactar de inmediato a tu médico y reducir el riesgo de complicaciones o nuevas infecciones.'
                            }
                        ],
                        imgs: [
                            {
                                image:'https://www.immuni.italia.it/rep-positivity.55e85b0b2a6f9270b5e5.png',
                                width: 22,
                                height: 25,
                            }
                        ],
                        backgroundColor: '',
                        buttonLabel: 'Descubre cómo informar',
                        buttonColor: '',
                    },
                    {
                        style: 'wantYouKnowMore',
                        title: '¿Quieres obtener más información?',
                        subtitle: '',
                        paragraphs: [
                            
                        ],
                        imgs: [
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
                        buttonLabel: 'Lee las preguntas frecuentes',
                    }
                ],
                graphics: [

                ],
                number: [

                ],
                faq: [

                ],
                download: [

                ]
            }
        ]
    },
]