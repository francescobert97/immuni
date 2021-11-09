import { LanguageType } from "../enums.enum";
import { IHomeE } from "./home.models";

export const HOMECONTENTI:IHomeE[] = [
    {
        languageType: LanguageType.ITALIAN,
        showLanguage: true,
        contents: 
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
                graphics: {
                    title: 'Grafica',
                    subtitle: 'Risorse grafiche ufficiali disponibili per il download',
                    buttonLabel: 'Scarica',
                    img: 'https://www.immuni.italia.it/press-illustration.8a70a8d38a187acb5ff2.png'
                },
                number: [

                ],
                faq: 
                    {
                        search: {
                            title: 'Hai qualche domanda?',
                            searchLabel: 'Cerca argomento'
                        },
                        questions: [
                            {
                                question: `Cos'è Immuni`,
                                answer: `Immuni è un’app creata per aiutarci a combattere le epidemie, a partire da quella del Covid-19.
                                Grazie anche alla funzionalità di contact tracing, quando un utente scopre di essere positivo al virus, Immuni gli consente di allertare in modo anonimo le persone con cui è stato a stretto contatto e che potrebbe quindi aver contagiato. Venendo informate tempestivamente (potenzialmente ancor prima di sviluppare i sintomi del Covid-19),
                                 queste persone possono contattare il loro medico di medicina generale per approfondire la loro situazione clinica. Possono inoltre evitare di contagiare altri, contribuendo a ridurre la diffusione del coronavirus.`
                            },
                            {
                                question: `Come funziona il sistema di contact tracing di Immuni?`,
                                answer: `Immuni avverte gli utenti che sono stati a stretto contatto con una persona risultata poi positiva inviando loro un messaggio di allerta che include una serie di consigli su come affrontare la situazione.

                                Immuni riesce a determinare che è avvenuto un contatto a rischio fra due utenti senza sapere chi siano i due utenti o dove si siano incontrati. L’app non raccoglie dati che permettono di risalire all’identità di chi la usa. Non chiede, né è in grado di ottenere, dati sensibili come nome, cognome, data di nascita, indirizzo, numero di telefono o indirizzo e-mail. Inoltre, per determinare il contatto, Immuni sfrutta la tecnologia Bluetooth Low Energy e non utilizza dati di geolocalizzazione di alcun genere, inclusi quelli del GPS.
                                
                                Ecco un esempio semplificato di come funziona il sistema di contact tracing di Immuni. Consideriamo Alice e Marco, due ipotetici utenti. Quando è installata sui loro smartphone, Immuni emette un segnale Bluetooth che include un codice casuale. Quando Alice si avvicina a Marco, i loro smartphone si scambiano questi codici e li registrano nella propria memoria, tenendo così traccia di quel contatto. Registrano anche quanto è durato il contatto e la potenza del segnale ricevuto, indicatore approssimativo della distanza tra i due smartphone.
                                
                                I codici sono generati casualmente e non contengono alcuna informazione sul dispositivo o l’utente. Inoltre, cambiano diverse volte ogni ora, in modo da proteggere ulteriormente la privacy. Non è in alcun modo possibile risalire all’identità dell’utente a partire dai suoi codici casuali.
                                
                                Supponiamo che, successivamente, Marco risulti positivo al coronavirus. Con l’aiuto dell’operatore sanitario che gli ha comunicato l’esito del test, Marco potrà segnalare la sua positività a Immuni, condividendo i suoi codici casuali e allertando le persone con cui è stato a stretto contatto.
                                
                                Immuni scarica periodicamente i codici casuali condivisi dagli utenti che sono risultati positivi al virus. Così facendo può controllare se c’è una corrispondenza tra questi codici e quelli registrati nei giorni precedenti. Nel caso del nostro esempio, l’app di Alice troverà il codice casuale di Marco, verificherà se la durata e la distanza del contatto siano state tali da poterlo considerare a rischio e, se questo è il caso, avvertirà Alice.`
                            },
                            {
                                question: `L'app traccia i miei spostamenti?`,
                                answer: `No. Immuni non è in grado di sapere dove vai né chi incontri. Il sistema di contact tracing sfrutta la tecnologia Bluetooth Low Energy e non raccoglie dati di geolocalizzazione di alcun genere, inclusi quelli del GPS.`
                            },
                            {
                                question: `Come viene tutelata la mia privacy?`,
                                answer: `Nello sviluppo di Immuni è stata dedicata grande attenzione alla tutela della privacy. Molte misure sono state adottate per proteggerla, eccone alcune:
                                • L’app non raccoglie dati che permettono di risalire alla tua identità. Non chiede, né è in grado di ottenere, il tuo nome, cognome, data di nascita, indirizzo, numero di telefono o e-mail.
                                • I tuoi spostamenti non sono tracciati né tracciabili in alcun modo.
                                • I codici casuali che gli smartphone si scambiano tramite Bluetooth non contengono né informazioni sul tuo dispositivo, né tanto meno su di te.
                                • Per maggior tutela della tua privacy questi codici casuali cambiano numerose volte ogni ora.
                                • I dati salvati sul tuo smartphone e le connessioni tra l’app e il server sono cifrati.
                                • Tutti i dati salvati sul dispositivo o sul server saranno cancellati quando non più necessari e in ogni caso prima del 31 dicembre 2020.
                                • I tuoi dati sono raccolti dal Ministero della Salute e verranno usati solo per contenere l’epidemia del Covid-19 o ai fini della ricerca scientifica.
                                • I dati sono salvati su server in Italia e gestiti da soggetti pubblici.`
                            },
                            {
                                question: `Il codice è open source?`,
                                answer: `Sì, il codice è open source e disponibile su GitHub. La licenza è la GNU Affero General Public License version 3.`
                            },
                            {
                                question: `Perchè è importante scaricare Immuni?`,
                                answer: `Con Immuni abbiamo un’arma in più per limitare la diffusione del coronavirus. Più persone la scaricano, più quest’arma diventa efficace.`
                            },
                            {
                                question: `Cosa succede se l'app viene utilizzata da un numero limitato di persone?`,
                                answer: `Anche se la diffusione di Immuni fosse limitata, può comunque contribuire a salvare vite e a contenere il virus, soprattutto se affiancata ad altre misure come il distanziamento sociale e il tracciamento di contatti manuale. Immuni ha già avvertito numerose persone di contatti a rischio con utenti poi risultati positivi. Grazie a questa informazione, queste persone hanno avuto la possibilità di spezzare la catena dei contagi, contribuendo a limitare la diffusione del virus e a salvare vite.`
                            },
                            {
                                question: `Come posso controllare se sto usando l'app in modo corretto?`,
                                answer: `Apri l’app e controlla che nella sezione Home ci sia scritto “Servizio attivo”. In questo caso non devi fare altro, Immuni sta già funzionando correttamente. In caso contrario, premi sul tasto “Riattiva Immuni” e segui le istruzioni per ripristinare il funzionamento.

                                Qualche altro consiglio importante per assicurarti che Immuni sia davvero efficace:
                                • Quando esci di casa, porta sempre con te lo smartphone sul quale hai installato l’app.
                                • Non disabilitare il Bluetooth.
                                • Non disinstallare l’app.
                                • Quando Immuni ti manda una notifica, leggila, apri l’app e segui le indicazioni fornite. Per esempio, se l’app ti chiede di fare un aggiornamento, non rimandare e scarica la versione aggiornata.
                                • Se ti arriva la notifica di un contatto a rischio, segui le indicazioni e chiama immediatamente il tuo medico di famiglia.`
                            },
                            {
                                question: `L'app fa diagnosi mediche o dà consigli medici?`,
                                answer: `No: Immuni non fa e non può fare diagnosi. Sulla base dello storico della tua esposizione a persone potenzialmente contagiose, Immuni fornisce alcune raccomandazioni su come comportarsi. Ma l’app non è un dispositivo medico e non può in alcun caso sostituire un medico.`
                            },
                            {
                                question: `Dove posso scaricare l'app Immuni? Quali dispositivi e sistemi operativi sono supportati?`,
                                answer: `A seconda del tuo smartphone puoi scaricare Immuni da App Store, AppGallery o Google Play. Verifica qui sotto se il tuo smartphone supporta Immuni.

                                → App Store
                                Il tuo iPhone deve avere una versione di iOS pari o superiore alla 13.5. I modelli supportati sono: 11, 11 Pro, 11 Pro Max, Xr, Xs, Xs Max, X, 8, 8 Plus, 7, 7 Plus, 6s, 6s Plus, SE. Aggiorna iOS all’ultima versione disponibile prima di effettuare il download di Immuni.
                                
                                → Google Play
                                Il tuo smartphone Android deve soddisfare tutti e tre i seguenti requisiti:
                                • Bluetooth Low Energy
                                • Android versione 6 (Marshmallow, API 23) o superiore
                                • Google Play Services versione 20.18.13 o superiore
                                
                                → AppGallery
                                • Huawei smartphone supportati (MATE 40 PRO, P Smart 2021, P40 Pro+, P Smart S, P40 Lite 5G, Y5p, Y6p, P40 Pro, P40, P40 Lite E, Mate Xs, P40 Lite, Mate30 Pro o modelli più recenti)
                                • HMS core 5.1.0.300 o superiore
                                
                                Aggiorna Android e Google Play Services, HMS Core all’ultima versione prima di effettuare il download di Immuni.`
                            },
                            {
                                question: `Le istruzioni fornite dall'app sono attendibili?`,
                                answer: `Le raccomandazioni fornite dall’app dipendono dalla durata della tua esposizione a utenti potenzialmente contagiosi e dalla distanza fra il tuo smartphone e quello di questi utenti durante l’esposizione.

                                Si tratta di un numero limitato di informazioni, peraltro mai perfette, in quanto il segnale Bluetooth Low Energy è influenzato da vari fattori di disturbo. Quindi, la valutazione non sarà sempre impeccabile. Per esempio, se l’app ti raccomanda di isolarti, non significa che sicuramente hai il Covid-19. Significa piuttosto che, sulla base delle informazioni a disposizione dell’app, l’isolamento è la cosa più sicura da fare per te e per chi ti sta accanto.
                                
                                È quindi importante che tu segua le indicazioni fornite dall’app, per il bene tuo, dei tuoi cari e della comunità. Non esitare a consultare il tuo medico di medicina generale in caso l’app ti avverta di un contatto a rischio.`
                            },
                            {
                                question: `Il mio smartphone  non supporta Immuni perchè? Cosa posso fare a riguardo?`,
                                answer: `Immuni sfrutta il sistema per le notifiche di esposizione sviluppato da Apple, Google e Huawei. Si tratta di una tecnologia condivisa a livello internazionale (Germania, Giappone, Olanda e decine di altri paesi al mondo ne fanno uso) che permette all’app di funzionare al meglio sulla maggioranza dei dispositivi. A causa di limiti tecnici, questa tecnologia non è disponibile su versioni precedenti di iOS, Android e Google Play Services. Se le cose dovessero cambiare, ne daremo immediata comunicazione.`
                            },
                            {
                                question: `L'app fa scaricare la batteria del mio smartphone più velocemente?`,
                                answer: `Non dovresti notare differenze nella durata della tua batteria. Immuni infatti usa il Bluetooth Low Energy, una tecnologia a basso consumo energetico. È la stessa tecnologia che tiene le cuffie senza fili costantemente connesse agli smartphone. L’impatto sulla batteria è minimo e l’utilizzo dell’app non causa surriscaldamenti o altri fenomeni inusuali.`
                            },
                            {
                                question: ``,
                                answer: `Devi avere almeno 14 anni per usare Immuni. Se hai almeno 14 anni ma meno di 18, per usare l'app devi avere il permesso di almeno uno dei tuoi genitori o di chi esercita la tua rappresentanza legale e avvisarli immediatamente nel caso dovessi ricevere la notifica di allerta di essere stato a contatto stretto con una persona poi risultata positiva al Covid-19.`
                            },
                            {
                                question: ``,
                                answer: `No. Con Immuni non crei un profilo come in tante altre app. Pertanto, se installi l’app su un nuovo dispositivo, non c’è modo per Immuni di riconoscere che sei sempre tu.`
                            },
                            {
                                question: ``,
                                answer: `Sì. Immuni è l’app di contact tracing del Governo Italiano, nata dalla collaborazione tra Presidenza del Consiglio dei Ministri, Ministro della Salute, Ministro per l’Innovazione Tecnologica e la Digitalizzazione, Regioni, Commissario straordinario per l’emergenza Covid-19 e le società pubbliche Sogei e PagoPa.

                                Per Immuni, il governo italiano si avvale di una licenza perpetua e irrevocabile su tutto il codice, le grafiche, i testi e la documentazione concessa a titolo gratuito da Bending Spoons S.p.A. Bending Spoons S.p.A. ha continuato a fornire un servizio di documentazione, design e sviluppo software, sempre a titolo completamente gratuito e senza autorità decisionale o accesso ai dati degli utenti, fino al 13 ottobre 2020.
                                
                                Nello sviluppare il sistema sono state seguite le indicazioni del Garante per la protezione dei dati personali, riponendo massima attenzione alla privacy degli utenti.`
                            },
                            {
                                question: `?`,
                                answer: `No. Immuni è un’app completamente gratuita.`
                            },
                            {
                                question: `?`,
                                answer: `Sì, il download e l’uso di Immuni avvengono su base volontaria.

                                Immuni è uno strumento importante nella lotta all’epidemia del Covid-19 e più si diffonde, più è efficace. Ti consigliamo quindi di installarla e di incoraggiare colleghi, parenti e amici a fare lo stesso.`
                            },
                            {
                                question: `?`,
                                answer: `Se Immuni ha rilevato un contatto a rischio, significa che nei giorni scorsi sei stato a stretto contatto con una persona positiva al Covid-19 per più di 15 minuti. Potresti quindi avere contratto il virus, senza però manifestare i sintomi. Fai la tua parte seguendo le raccomandazioni: ridurrai così il rischio per te e i tuoi cari ed eviterai di contagiare altri.`
                            },
                            {
                                question: `?`,
                                answer: `Con Immuni la tua privacy è tutelata. Nessuna di queste informazioni è a disposizione di Immuni.

                                Il sistema è basato sulla tecnologia Bluetooth Low Energy, non registra o condivide informazioni su di te o i tuoi contatti e non utilizza dati di geolocalizzazione di alcun genere, inclusi quelli del GPS. L’app non può quindi determinare né dove sei stato, né con chi.`
                            },
                            {
                                question: `?`,
                                answer: `No. L’app non raccoglie alcun dato che consentirebbe di risalire alla tua identità. Per esempio, non ti chiede e non è in grado di ottenere il tuo nome, cognome, data di nascita, indirizzo, numero di telefono o indirizzo email.`
                            },
                            {
                                question: `?`,
                                answer: `Immuni agisce in background. Questo significa che continua a funzionare anche se la chiudi. L’importante è che tu la tenga installata, che il tuo smartphone sia acceso e che il Bluetooth sia attivo. Puoi usare tranquillamente altre app, come fai di solito.`
                            },
                            {
                                question: `?`,
                                answer: `Sì, il Bluetooth deve essere sempre attivo per rilevare i contatti con altri utenti.`
                            },
                            {
                                question: `?`,
                                answer: `Sì, l’importante è lasciare attivo il Bluetooth. In questo modo, Immuni continuerà a funzionare come previsto. Ricordati inoltre di connettere a Internet il tuo smartphone almeno una volta al giorno, per permettere a Immuni di verificare se hai avuto contatti a rischio.`
                            },
                            {
                                question: `?`,
                                answer: `Molto poco. Ogni giorno, l’app scarica i codici casuali degli utenti risultati positivi al Covid-19 per controllare se sei stato a stretto contatto con uno di loro ed eventualmente avvertirti. Questa operazione consuma al massimo qualche megabyte di traffico dati al giorno, più o meno come se caricassi una pagina di un sito web.`
                            },
                            {
                                question: `?`,
                                answer: `È importante aggiornare Immuni quando è disponibile una nuova versione: gli aggiornamenti migliorano l’efficacia dell’app e correggono potenziali difetti. L’app ti invia una notifica solo se ritiene sia necessario effettuare l’aggiornamento, ma sta a te scegliere se farlo o meno.`
                            },
                            {
                                question: `?`,
                                answer: `Immuni per funzionare non richiede una connessione a Internet sempre attiva. L’app ha però bisogno di connettersi almeno una volta al giorno per scaricare le informazioni necessarie per verificare se sei stato esposto a utenti potenzialmente contagiosi. Pertanto, assicurati di connettere il tuo smartphone a Internet almeno una volta al giorno.`
                            },
                            {
                                question: `?`,
                                answer: `L’unico scopo di Immuni è aiutare a far fronte all’epidemia. Il progetto non ha fini di lucro e in nessun caso i tuoi dati verranno venduti o usati per qualsivoglia scopo commerciale, inclusa la profilazione a fini pubblicitari.

                                I dati sono sotto la responsabilità del Ministero della Salute. L’eventuale condivisione delle informazioni rilevate, rigorosamente in forma anonima e aggregata, potrà avvenire per favorire la ricerca scientifica.`
                            },
                            {
                                question: `?`,
                                answer: `Le lingue attualmente supportate dall’app sono l’italiano, l’inglese, il tedesco, il francese e lo spagnolo. L’app usa la stessa lingua che hai impostato sul tuo smartphone, se disponibile, altrimenti l’inglese. Perciò per cambiare la lingua dell’app dovrai cambiare la lingua del tuo dispositivo.`
                            },
                            {
                                question: `?`,
                                answer: `Puoi scaricare Immuni da tutto il mondo.

                                Per motivi di sicurezza, dovrai però trovarti in Italia per poter caricare i tuoi dati nel caso in cui risulti positivo al virus. Sui dispositivi iOS, lo scambio di codici casuali viene disattivato se sei all’estero.
                                
                                Sempre per motivi di sicurezza, le connessioni al server che permette di scaricare i codici casuali di utenti positivi non sono possibili al di fuori del territorio europeo.
                                
                                Al momento Immuni rileva solo i contatti con altri utenti di Immuni. A livello europeo si sta lavorando per permettere alle diverse app nazionali di contact tracing, tra cui Immuni, di comunicare tra loro. Questo permetterà di estendere la funzionalità di contact tracing anche agli stranieri che viaggiano in Italia e agli italiani che viaggiano all’estero, senza la necessità di scaricare ulteriori app.`
                            },
                            {
                                question: `?`,
                                answer: `Il codice monouso è una sequenza alfanumerica di dieci caratteri che viene utilizzata soltanto in caso di positività al virus SARS-CoV-2 e che non identifica in alcun modo l’utente dell’app Immuni.
                                Se sei risultato positivo/a al virus, puoi decidere di caricare sul server di Immuni i dati necessari ad avvertire, in maniera anonima, le persone che sono state a stretto contatto con te da 2 giorni prima dei sintomi (o del tampone se sei asintomatico) e fino ad un massimo di 14 giorni. Per farlo devi dettare il codice monouso che si trova alla voce “segnala positività” di Immuni (all’interno del menù “Impostazioni”) all’operatore sanitario che ti ha comunicato l’esito del tampone, oppure all’operatore telefonico del call center 800 91 24 91 se hai ricevuto il CUN (Codice Univoco Nazionale).
                                Dopo che l’operatore avrà validato il codice monouso, potrai procedere al caricamento del dato di positività. Questa operazione è anche detta “sblocco” di Immuni.`
                            },
                            {
                                question: `?`,
                                answer: `Puoi caricare i tuoi dati soltanto se risulti positivo al coronavirus e se hai effettuato un test tramite tampone molecolare. L’operazione è su base volontaria e permette a Immuni di avvertire le persone con cui sei stato in contatto stretto da 2 giorni prima dei sintomi (o del tampone se sei asintomatico) e fino ad un massimo di 14 giorni.
                                Questa operazione può essere svolta con il supporto dell’operatore sanitario che ti ha comunicato l’esito positivo del tampone, oppure se hai ricevuto il CUN col supporto dell’operatore del call center 800 91 24 91 o in autonomia con la specifica funzione a disposizione nell'APP.`
                            },
                            {
                                question: `?`,
                                answer: `L’operatore sanitario del servizio di prevenzione che ti ha comunicato l’esito del tampone o l’operatore telefonico del call center di Immuni ti chiederà di entrare nella sezione “Impostazioni” e di scegliere “Segnala positività”.
                                Immuni ti mostrerà un codice monouso, una sequenza di dieci caratteri generati in modo casuale.
                                Comunica questo codice all’operatore, che ti darà l’autorizzazione a proseguire
                                Fai clic su “Prosegui”\nImmuni ti mostrerà un riepilogo dei dati che saranno caricati
                                Facendo clic su “Carica i dati”, l’app caricherà i tuoi dati
                                Ti verrà infine chiesto il permesso per accedere ai codici casuali salvati sul tuo dispositivo\nL’app ti mostrerà un messaggio di conferma una volta completato il caricamento.
                                `
                            },
                            {
                                question: `?`,
                                answer: `Se Immuni rileva che sei stato esposto ad un possibile contagio, ti arriverà una notifica. Segui le raccomandazioni che troverai all’interno dell’app, a partire dal contattare il tuo medico di medicina generale per i dovuti approfondimenti. Anche se non sei obbligato a farlo, ti consigliamo di seguire le indicazioni che ti verranno date per proteggere la tua salute e quella degli altri, in particolare di quelli che ti sono più vicini.`
                            },
                            {
                                question: `?`,
                                answer: `Immuni ti avverte di un contatto a rischio soltanto se ti sei trovato per almeno 15 minuti a breve distanza da una persona positiva al Covid-19. È anche necessario che la persona abbia Immuni sul suo smartphone e che scelga di segnalare la sua positività quando le viene comunicato l’esito del tampone. In caso contrario nessuna notifica può essere inviata.

                                Immuni utilizza la potenza del segnale Bluetooth per ricavare una stima della distanza a cui è avvenuto il contatto. I parametri della stima sono stati scelti per avvicinarsi il più possibile alle direttive del Ministero della Salute, che considerano a rischio un contatto avvenuto a una distanza inferiore ai due metri. Numerosi esperimenti di calibrazione sono stati effettuati per rendere la stima più precisa possibile, ma può comunque presentare un margine di errore. Inoltre non considera eventuali barriere o dispositivi di protezione presenti. La ricezione di una notifica di esposizione è in ogni caso impossibile senza una prolungata vicinanza fisica ad una persona positiva al Covid-19.`
                            },
                            {
                                question: `?`,
                                answer: `È probabile che tu non abbia completato il processo di aggiornamento di iOS. Per aggiornare iOS devi compiere due operazioni:
                                1. Scaricare l’ultima versione
                                2. Effettuare l’installazione
                                
                                Per scaricare l’ultima versione di iOS devi essere connesso al Wi-Fi. In caso contrario, il bottone per avviare lo scaricamento sarà disabilitato. Vai in Impostazioni > Generali > Aggiornamento Software. Se hai effettuato lo scaricamento dell'ultima versione di iOS ma non l'installazione, premi “Installa Ora”. Per verificare che l’installazione sia avvenuta correttamente, vai in Impostazioni > Generali > Info. La voce “Versione Software” deve mostrare una versione 13.5 o superiore.`
                            },
                            {
                                question: `?`,
                                answer: `Immuni è completamente gratuita e la puoi scaricare senza indicare un metodo di pagamento.

                                Se Apple o Google ti richiedono una carta di credito è probabile che tu non abbia ancora completato la configurazione del tuo account. Per scaricare gratuitamente Immuni, procedi così:
                                • Su App Store, scegli l’opzione “Nessuno” tra i metodi di pagamento proposti.
                                • Su Google Play, scegli l’opzione “Salta” alla richiesta di un metodo di pagamento.`
                            },
                            {
                                question: `?`,
                                answer: `No, Immuni non ha assolutamente accesso ad alcun dato di geolocalizzazione. Sugli smartphone Android, a causa di una limitazione del sistema operativo, il servizio di geolocalizzazione deve essere abilitato per permettere al sistema di notifiche di esposizione di Google di cercare segnali Bluetooth Low Energy e salvare i codici casuali degli smartphone degli utenti che si trovano intorno a te. Tuttavia, come puoi vedere dalla lista di permessi richiesti da Immuni, l'app non è autorizzata ad accedere ad alcun dato di geolocalizzazione (inclusi i dati del GPS) e non può quindi sapere dove ti trovi.`
                            },
                            {
                                question: `?`,
                                answer: `Si tratta di un difetto del sistema operativo che Apple ha già risolto. Aggiorna il tuo sistema operativo iOS alla versione 13.6 o successiva per evitare che il messaggio compaia di nuovo.`
                            },
                            {
                                question: `?`,
                                answer: `Sì, Immuni ti permette di disattivare temporaneamente la funzionalità, ad esempio mentre sei al lavoro se sei un operatore sanitario a contatto con pazienti Covid-19. Disabilitando Immuni non verranno registrati i contatti con altri utenti.

                                Per farlo, segui questi passaggi:
                                • Apri l’app Immuni.
                                • Scorri verso il basso e tocca l’opzione “Disattiva il servizio” in fondo alla schermata Home.
                                • Segui le istruzioni.
                                
                                Ricordati di riattivare Immuni non appena è possibile:
                                • Apri l’app Immuni.
                                • Tocca l’opzione “Riattiva Immuni” nella parte alta della schermata Home.
                                • Segui le istruzioni.`
                            },
                        ]
                    }
                ,
                download: [

                ]
        }
    },
    {
        languageType: LanguageType.ENGLISH,
        showLanguage: false,
        contents: 
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
                graphics: {
                    title: 'Graphics',
                    subtitle: 'Official graphic assets available for download',
                    buttonLabel: 'Download',
                    img: 'https://www.immuni.italia.it/press-illustration.8a70a8d38a187acb5ff2.png'
                },
                number: [

                ],
                faq: 
                    {
                        search: {
                            title: '¿Tienes alguna pregunta?',
                            searchLabel: 'Buscar tema'
                        },
                        questions: [
                            {
                                question: '',
                                answer: ''
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                        ]
                    },
                download: [

                ]
            }
    },
    {
        languageType: LanguageType.DEUTSCH,
        showLanguage: false,
        contents: 
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
                graphics: {
                    title: 'Grafik',
                    subtitle: 'Offizielle Grafikressourcen, die heruntergeladen werden können',
                    buttonLabel: 'Herunterladen',
                    img: 'https://www.immuni.italia.it/press-illustration.8a70a8d38a187acb5ff2.png'
                },
                number: [

                ],
                faq: 
                    {
                        search: {
                            title: 'Do you have any questions?',
                            searchLabel: 'Search topic'
                        },
                        questions: [
                            {
                                question: '',
                                answer: ''
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                        ]
                    },
                download: [

                ]
            }
    },
    {
        languageType: LanguageType.FRANCAIS,
        showLanguage: false,
        contents: 
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
                graphics: {
                    title: 'Graphisme',
                    subtitle: 'Ressources graphiques officielles à télécharger',
                    buttonLabel: 'Télécharger',
                    img: 'https://www.immuni.italia.it/press-illustration.8a70a8d38a187acb5ff2.png'
                },
                number: [

                ],
                faq: 
                    {
                        search: {
                            title: 'Haben Sie Fragen?',
                            searchLabel: 'Thema suchen...'
                        },
                        questions: [
                            {
                                question: '',
                                answer: ''
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                        ]
                    },
                download: [

                ]
            }
    },
    {
        languageType: LanguageType.ESPANOL,
        showLanguage: false,
        contents: 
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
                graphics: {
                    title: 'Graficos',
                    subtitle: 'Recursos gráficos oficiales disponibles para descargar',
                    buttonLabel: 'Descargar',
                    img: 'https://www.immuni.italia.it/press-illustration.8a70a8d38a187acb5ff2.png'
                },
                number: [

                ],
                faq: 
                    {
                        search: {
                            title: 'Vous avez des questions?',
                            searchLabel: 'Rechercher un thème'
                        },
                        questions: [
                            {
                                question: '',
                                answer: ''
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                            {
                                question: ``,
                                answer: ``
                            },
                        ]
                    },
                download: [

                ]
            }
    },
]