export default {
    home: {
        headername:   "Home",
        sections:     [
            {
                id:           "Home_Welkom",
                img:          "../src/assets/images/black-white.jpg",
                imgAlt:       "zwart-wit foto van Sofie van der Meer",
                title:        "Hey ik ben \n Sofie van der Meer",
                description:  "Welkom op dit platform, waar je een glimp krijgt van mijn skills en capaciteiten als Junior Full-Stack Developer.",
                textBtn:      "Contacteer mij",
                urlBtn:       "mailto:sofievandermeer@outlook.com"
            },
            {
                id:           "Home_Introduction",
                img:          "../src/assets/images/black-white.jpg",
                imgAlt:       "zwart-wit foto van Sofie van der Meer",
                title:        "Creatieve Full-Stack developer",
                description:  "Ik word gedreven door nieuwsgierigheid en ambitie. Mijn analytische vaardigheden, gecombineerd met mijn creativiteit, stellen me in staat om oplossingen te creëren, zoals 2D- en 3D-visuals, die zowel innovatief als nauwkeurig zijn, en mijn aandacht voor detail en probleemoplossend vermogen weerspiegelen.",
                textBtn:      "Leer mij beter kennen",
                urlBtn:       "about.html"
            },
            {
                id:           "Home_Projects",
                projects:     [
                    {
                        img:          "../src/assets/images/prularia/prularia_logo.png",
                        imgAlt:       "kroon, logo van project Prularia",
                        title:        "Prularia",
                        description:  "Als een team van 9 ontwikkelaars hebben we een e-commerceplatform gebouwd om praktijkervaring op te doen met de principes van Scrum en Agile-methodologieën.",
                        languages:    ["JavaScript", "PHP", "CSS"],
                        langratio:    [47, 39, 12],
                        library:      ["Bootstrap"],
                        urlBtn:       "project.html#prularia"
                    },
                    {
                        img:          "../src/assets/icons/pizza.svg",
                        imgAlt:       "pizzastuk, logo van project Pizzaria",
                        title:        "Pizzaria",
                        description:  "Dit project is een e-commerce webapplicatie die gebruikers de mogelijkheid biedt om een verscheidenheid aan pizza's te verkennen en te bestellen.",
                        languages:    ["PHP", "CSS"],
                        langRatio:    [97, 3],
                        urlBtn:       "project.html#pizzaria"
                    },
                    {
                        img:          "../src/assets/icons/bullets.svg",
                        imgAlt:       "9 cirkels die een vierkant vormen, logo van project Bubbles in Color",
                        title:        "Bubbles in Color",
                        description:  "In dit interactieve spel kunnen gebruikers een verscheidenheid aan bubbels kleuren, wat zorgt voor een leuke en creatieve ervaring.",
                        languages:    ["JavaScript", "HTML", "CSS"],
                        langRatio:    [0, 0, 0],
                        library:      ["THREE.js"],
                        urlBtn:       "project.html#bubbles-in-color"
                    }
                ]
            }
        ]
    },
    about: {
        headername:     "over mij",
        sections:       [
            {
                id:                 "About_Top",
                img:                "../src/assets/images/black-white.jpg",
                imgAlt:             "zwart-wit foto van Sofie van der Meer",
                title:              "Sofie van der Meer",
                subtitle:           "Junior Full-Stack developer",
                availability_1:     "Beschikbaar vanaf 1 maart ‘25",
                availability_2:     "sta open voor stage/IBO"
            },
            {
                id:                 "About_Me",
                profile:            "Een nieuwsgierige en ambitieuze developer met een sterk analytisch denkvermogen en een passie voor creatieve oplossingen. \n\n Leergierig en vastbesloten om te groeien in Full-Stack development, op zoek naar een positie waar creatief denken en probleemoplossend vermogen volledig benut kunnen worden. \n\n Klaar om jouw volgende Full-Stack Developer te worden!",
                urlBtn:             "mailto:sofievandermeer@outlook.com", 
                textBtn:            "sofievandermeer@outlook.com", 
                availability:       "Beschikbaar vanaf 1 maart ‘25, sta open voor stage/IBO.",
                related_interests:  ["Virtual Realty", "2D & 3D Visuals"] 
            },
            {
                id:         "About_Hard-Skills",
                title:      "hard skills",
                projects:   [
                    {
                        Programmeertalen:           ["PHP", "JS", "HTML", "CSS"],
                        // Frameworks_en_bibliotheken: ["Bootstrap", "THREE.js"],
                        Bibliotheken:               ["Bootstrap", "THREE.js"],
                        Development_Methodes:       ["BEM", "OOP", "MVC", "Mobile First Design", "Agile Scrum"]
                    }
                ] 
            },
            {
                id:         "About_Soft-Skills",
                title:      "soft skills",
                projects:   [
                    {
                        Creativiteit:       ["Artistiek", "Innovatief", "Oog voor Detail", "Perfectionist"],
                        Probleemoplossend:  ["Analytisch", "Oplossingsgericht"],
                        Groei:              ["Leergierig", "Nieuwsgierig", "Autodidactisch"],
                        Gedreven:           ["Ambitieus", "Doorzettingsvermogen"]
                    } 
                ] 
            },
            {
                id:         "About_Education",
                title:      "opleiding",
                projects:   [
                    {
                        school: "VDAB",
                        study:  "Full-Stack Developer",
                        year:   "2024 - 2025"
                    },
                    {
                        school: "CleanTechPunt Houthalen",
                        study:  "Cleantech Ambassador",
                        year:   "2023"
                    },
                    {
                        school: "Erasmushogeschool Brussel",
                        study:  "Bachelor in Landschap & Tuinarchitectuur",
                        year:   "2014 - 2018"
                    }
                ]
            },
            {
                id:         "About_Work",
                title:      "werkervaring",
                projects:   [
                    {
                        company:  "Agentschap voor Natuur & Bos",
                        job:      "Deskundige overheidsopdrachten & landschapsarchitect",
                        year:     "2020 - 2023"
                    },
                    {
                        company:  "Vlaamse Landmaatschappij",
                        job:      "Dossierbeheerder Platteland",
                        year:     "2019"
                    },
                    {
                        company:  "Tielens Tuinen",
                        job:      "Tuinarchitect & calculator",
                        year:     "2018 - 2019"
                    },
                    {
                        company:  "Regionale Landschappen Haspengouw & Voeren",
                        job:      "Stage",
                        year:     "2017"
                    }
                ]
            },
            {
                id:         "About_Bottom",
                urlBtn_1:   "../src/assets/CV_Sofie-van-der-Meer_NL.pdf",
                textBtn_1:  "Download mijn CV",
                urlBtn_2:   "mailto:sofievandermeer@outlook.com", 
                textBtn_2:  "contacteer mij", 
            }
        ]
    },
    projects:   {
        headername: "Projecten",
        sections:   [
            {   id:             "Projects_Top",
                title:          "Projecten",
                description:    "Dit is een verzameling van projecten waaraan ik heb gewerkt"

            },
            {
                id:         "Projects_List",
                projects:   [
                    {
                        id:             "#prularia",
                        img:            "../src/assets/images/prularia/prularia_logo.png",
                        imgAlt:         "kroon, logo van project Prularia",
                        title:          "Prularia",
                        description:    "Als een team van 9 ontwikkelaars hebben we een e-commerceplatform gebouwd om praktijkervaring op te doen met de principes van Scrum en Agile-methodologieën.",
                        languages:      ["JavaScript", "PHP", "CSS"],
                        langratio:      [47, 39, 12],
                        library:        ["Bootstrap"],
                        urlBtn:         "project.html#prularia",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "e-commerce",
                                img:            "../src/assets/images/prularia/prularia_logo.png",
                                imgAlt:         "kroon, logo van project Prularia",
                                title:          "Prularia",
                                languages:      ["JavaScript", "PHP", "CSS"],
                                library:        ["Bootstrap"],
                                date:           "november 2024",
                            },
                            {
                                id:             "Project_Content",
                                
                                introductie:    "Het ontwikkelen van een webshop voor een klant bood een unieke gelegenheid om de Scrum Agile-methodiek in de praktijk toe te passen. Samen met acht andere student-developers uit heel Vlaanderen werkten we aan dit project, waarbij we niet alleen onze technische vaardigheden verder ontwikkelden, maar ook leerden hoe we als team effectief konden samenwerken. De uitdaging bestond niet alleen uit het bouwen van de webshop, maar ook in het begrijpen en toepassen van de Scrum-werkwijze.",
                                uitdagingen:    "We stonden voor de uitdaging om een functionele en gebruiksvriendelijke webshop te ontwikkelen binnen een beperkte tijd. Bezoekers moesten gemakkelijk producten kunnen bekijken en aan hun winkelmandje toevoegen, zonder dat inloggen vereist was. We ontwikkelden aparte pagina's voor klantregistratie, inloggen en het plaatsen van bestellingen. Daarnaast zorgden we ervoor dat de webshop voldeed aan de GDPR-vereisten, wat betekende dat we veilige encryptie voor wachtwoorden moesten implementeren en expliciete toestemming voor het gebruik van cookies moesten verkrijgen. Verder stelden we prioriteiten voor elke sprint, aangezien de beschikbare tijd beperkt was.",
                                resultaat:      "Het project resulteerde in een functionele webshop. De eerste twee sprints leverden een werkende webshop op, waarin klanten producten konden bekijken, toevoegen aan hun winkelmandje en bestellingen konden plaatsen. We implementeerden de basisfunctionaliteiten, zoals het plaatsen van bestellingen, en verfijnden zowel de visuele als functionele aspecten van de webshop. Met meer tijd hadden we in de derde sprint productpagina's met extra informatie, profielbeheer en bestelstatus-tracking ontwikkeld. \n Gedurende het proces maakten we actief gebruik van de Scrum-methodiek, met dagelijkse stand-up meetings en het ScrumBord om de voortgang bij te houden. We werkten als een hecht team samen, namen gezamenlijk beslissingen en ondersteunden elkaar waar nodig.",
                                wat_de_scrum_coach_zegt:  
                                                "“Sofie toonde zich als een gemotiveerde en betrokken deelnemer tijdens het SCRUM-project. Ze wist de praktische tips van de lesgevers effectief toe te passen in de scrum-oefening, wat haar leergierigheid benadrukt. Tijdens de daily scrum meetings hield ze de focus scherp en wist ze haar codeerwerk op een beknopte en duidelijke manier toe te lichten. Haar proactieve houding viel op; ze nam regelmatig het initiatief om gesprekken te starten en samenwerking te stimuleren. Daarnaast hechtte ze veel waarde aan het opleveren van een afgewerkt en kwalitatief product op het einde van een sprint, wat haar resultaatgerichtheid en verantwoordelijkheidsgevoel onderstreept.”",
                                textBtn_1:      "Ga naar de website",
                                textBtn_2:      "Ga naar de code",
                                urlBtn_1:       "https://demo.prularia.Sofie-van-der-Meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Prularia",
                                img_01:         "../src/assets/images/prularia/icons.png",
                                img_02:         "../src/assets/images/prularia/page-down.png",
                                imgList:        [
                                    "../src/assets/images/prularia/desktop_login-page.png",
                                    "../src/assets/images/prularia/desktop_shopping-bag.png",
                                    "../src/assets/images/prularia/desktop_shopping-bag-remove.png",
                                    "../src/assets/images/prularia/icons.png",
                                    "../src/assets/images/prularia/shopping-bag.png"
                                ],
                                colors:         ["#abd7a8", "#8ab987", "#63a15e", "#ffffff", "#f5f9f6", "#e8f5e9", "#111510"]
                            },
                            {
                                id:         "Project_Bottom",
                                previous:   "project.html#treasure-hunt",
                                next:       "project.html#pizzaria"
                            }
                        ]
                    },
                    {
                        id:           "#pizzaria",
                        img:          "../src/assets/icons/pizza.svg",
                        imgAlt:       "pizzastuk, logo van project Pizzaria",
                        title:        "Pizzaria",
                        description:  "Dit project is een e-commerce webapplicatie die gebruikers de mogelijkheid biedt om een verscheidenheid aan pizza's te verkennen en te bestellen.",
                        languages:    ["PHP", "CSS"],
                        langratio:    [97, 3],
                        urlBtn:       "project.html#pizzaria",
                        sections:     [
                            {
                                id:             "Project_Top",
                                websiteType:    "e-commerce",
                                img:            "../src/assets/icons/pizza.svg",
                                imgAlt:         "pizzastuk, logo van project Pizzaria",
                                title:          "Pizzaria",
                                languages:      ["PHP", "CSS"],
                                date:           "augustus 2024",
                            },
                            {
                                id:             "Project_Content",
                                
                                introductie:    "Dit project was het eindresultaat van de PHP-cursus en bestond uit het bouwen van een pizzaBestelwebapplicatie. Het doel was om een gebruiksvriendelijke website te creëren waar klanten eenvoudig pizza’s kunnen bekijken en bestellen. De webapplicatie maakte gebruik van verschillende technieken en concepten die ik tijdens de cursus heb geleerd.",
                                aanpak:         "In de eerste fase van het project heb ik een uitgebreide normalisatie uitgevoerd, de databank in SQL opgezet en geïmplementeerd, zodat alle benodigde gegevens goed in de database werden opgeslagen. Na het uitwerken van de normalisatie kreeg ik feedback van mijn docent dat het te gedetailleerd was voor de beperkte tijd die ik had. Ik besloot me te concentreren op de belangrijkste tabellen, zoals bestellingen, klanten, locaties en bestellijnen, en de andere tabellen (zoals promoties en betaalmethoden) niet verder uit te werken. \n Vervolgens heb ik de applicatie ontwikkeld volgens de MVC-structuur, waarbij de logica van de applicatie gescheiden werd van de gebruikersinterface. Daarnaast heb ik gewerkt aan foutafhandeling, zodat de app goed omging met eventuele ongeldige invoer van de gebruiker. Voorafgaand aan het schrijven van de code maakte ik een lijst van mogelijke uitzonderingen om een overzicht te krijgen van de te verwachten fouten.",
                                resultaat:      "Het resultaat is een werkende pizzaBestelapplicatie die gebruikers in staat stelt om eenvoudig pizza’s te kiezen, aan hun winkelwagentje toe te voegen en hun bestellingen te plaatsen. De applicatie haalt de producten uit de databank en toont ze netjes op de website. Gebruikers kunnen zich registreren, inloggen, de hoeveelheid van producten aanpassen, hun contact- en leveringsadres wijzigen, en de bestelling afronden. De gebruikersinterface is eenvoudig maar functioneel, waardoor het voor klanten duidelijk is hoe ze hun bestelling kunnen plaatsen.",

                                textBtn_1:      "Ga naar de website",
                                textBtn_2:      "Ga naar de code",
                                urlBtn_1:       "https://demo.pizzaria.Sofie-van-der-Meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Pizzaria",
                                img_01:         "../src/assets/images/pizzaria/structure.png",
                                img_02:         "../src/assets/images/pizzaria/add-to-shoppingcart.png",
                                imgList:        [
                                    "../src/assets/images/pizzaria/home-page.png",
                                    "../src/assets/images/pizzaria/add-to-shoppingcart.png",
                                    "../src/assets/images/pizzaria/order-page.png",
                                    "../src/assets/images/pizzaria/order-page_change-contactdetails.png",
                                    "../src/assets/images/pizzaria/register-page.png",
                                    "../src/assets/images/pizzaria/sql.svg",
                                    "../src/assets/images/pizzaria/structure.png"
                                ],
                                colors:         ["#f5deb3", "#fffff0", "#ff0000", "#ffffff", "#000000"]
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#prularia",
                                next:           "project.html#bubbles-in-color"
                            }
                        ]
                    },
                    {
                        id:           "#bubbles-in-color",
                        img:          "../src/assets/icons/bullets.svg",
                        imgAlt:       "9 cirkels die een vierkant vormen, logo van project Bubbles in Color",
                        title:        "Bubbles in Color",
                        description:  "In dit interactieve spel kunnen gebruikers een verscheidenheid aan bubbels kleuren, wat zorgt voor een leuke en creatieve ervaring.",
                        languages:    ["JavaScript", "HTML", "CSS"],
                        langratio:    [0, 0, 0],
                        library:      ["THREE.js"],
                        urlBtn:       "project.html#bubbles-in-color",
                        sections:     [
                            {
                                id:             "Project_Top",
                                websiteType:    "game",
                                img:            "../src/assets/icons/bullets.svg",
                                imgAlt:         "9 cirkels die een vierkant vormen, logo van project Bubbles in Color",
                                title:          "Bubbles in Color",
                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                date:           "februari 2025",
                                notPublished:   "Dit project is momenteel in ontwikkeling en wordt binnenkort gepubliceerd."
                            },
                            {
                                id:             "Project_Content",
                                
                                // introduction:   "",
                                // challenges:     "",
                                // result:         "",

                                // textBtn_1:      "Go live",
                                // textBtn_2:      "View code",
                                // urlBtn_1:       "https://demo.bubbles-in-color.Sofie-van-der-Meer.be/",
                                // urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Bubbles-In-Color",
                                // img_01:         "../src/assets/images/bubbles-in-color/img.png",
                                // img_02:         "../src/assets/images/bubbles-in-color/img.png",
                                // imgList:        [],
                                // colors:         []
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#pizzaria",
                                next:           "project.html#treasure-hunt"
                            }
                        ]
                    },
                    {
                        id:             "#treasure-hunt",
                        img:            "../src/assets/icons/cat.svg",
                        imgAlt:         "zittende kat, logo van project Treasure Hunt",
                        title:          "Treasure Hunt",
                        description:    "In dit spannende schattenjachtspel gaan spelers op een avontuurlijke zoektocht om verborgen schatten te ontdekken.",
                        languages:      ["JavaScript", "HTML", "CSS"],
                        langratio:      [0, 0, 0],
                        library:        ["THREE.js"],
                        urlBtn:         "project.html#treasure-hunt",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "game",
                                img:            "../src/assets/icons/cat.svg",
                                imgAlt:         "zittende kat, logo van project Treasure Hunt",
                                title:          "Treasure Hunt",
                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                date:           "februari 2025",
                                notPublished:   "Dit project is momenteel in ontwikkeling en wordt binnenkort gepubliceerd."
                            },
                            {
                                id:             "Project_Content",
                                
                                // introduction:   "",
                                // challenges:     "",
                                // result:         "",

                                // textBtn_1:      "Go live",
                                // textBtn_2:      "View code",
                                // urlBtn_1:       "https://demo.treasure-hunt.Sofie-van-der-Meer.be/",
                                // urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Treasure-Hunt",
                                // img_01:         "../src/assets/images/treasure-hunt/img.png",
                                // img_02:         "../src/assets/images/treasure-hunt/img.png",
                                // imgList:        [],
                                // colors:         []
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#bubbles-in-color",
                                next:           "project.html#prularia"
                            }
                        ]
                    }
                ]
            }
        ]
    }   
}
