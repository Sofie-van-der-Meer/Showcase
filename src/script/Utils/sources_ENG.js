export default {
    home: {
        headername:   "Home",
        sections:     [
            {
                id:             "Home_Welkom",
                img:            "../src/assets/images/black-white.jpg",
                imgAlt:         "black and white photo of Sofie van der Meer",
                title:          "Hello I'm \n Sofie van der Meer",
                description:    "Welcome to this platform, where you get a hint of my expertise and capabilities as a Junior Full-Stack Developer.",
                textBtn:        "Contact me",
                urlBtn:         "mailto:sofievandermeer@outlook.com"
            },
            {
                id:             "Home_Introduction",
                img:            "../src/assets/images/black-white.jpg",
                imgAlt:         "black and white photo of Sofie van der Meer",
                title:          "Creative Full-Stack developer",
                description:    "I am driven by curiosity and ambition. My analytical skills, combined with my creativity, allow me to craft solutions such as 2D and 3D visuals that are both innovative and precise, reflecting my attention to detail and problem-solving abilities.",
                textBtn:        "Get to know me",
                urlBtn:         "about.html"
            },
            {
                id:         "Home_Projects",
                projects:   [
                    {
                        img:            "../src/assets/images/prularia/prularia_logo.png",
                        imgAlt:         "crown, logo of project Prularia",
                        title:          "Prularia",
                        description:    "As a team of 9 developers, we built an e-commerce platform to gain hands-on experience with the principles of Scrum and Agile methodologies.",
                        languages:      ["JavaScript", "PHP", "CSS"],
                        langratio:      [47, 39, 12],
                        library:        ["Bootstrap"],
                        urlBtn:         "project.html#prularia"
                    },
                    {
                        img:            "../src/assets/icons/pizza.svg",
                        imgAlt:         "pizzaslice, logo of project Pizzaria",
                        title:          "Pizzaria",
                        description:    "This project is an e-commerce web application designed for users to explore and order a variety of pizzas.",
                        languages:      ["PHP", "CSS"],
                        langratio:      [97, 3],
                        urlBtn:         "project.html#pizzaria"
                    },
                    {
                        img:            "../src/assets/icons/bullets.svg",
                        imgAlt:         "9 circles forming a box, logo of project Bubbles in Color",
                        title:          "Bubbles in Color",
                        description:    "In this interactive game, users can color a variety of bubbles, offering a fun and creative experience.",
                        languages:      ["JavaScript", "HTML", "CSS"],
                        langratio:      [0, 0, 0],
                        library:        ["THREE.js"],
                        urlBtn:         "project.html#bubbles-in-color"
                    }
                ]
            }
        ]
    },
    about: {
        headername:       "About Me",
        // url:              "/public/about.html",
        sections:         [
            {
                id:                 "About_Top",
                img:                "../src/assets/images/black-white.jpg",
                imgAlt:             "black and white photo of Sofie van der Meer",
                title:              "Sofie van der Meer",
                subtitle:           "Junior Full-Stack developer",
                availability_1:     "Available from 1st March 2025",
                availability_2:     "Open to internship/IBO"
            },
            {
                id:                 "About_Me",
                profile:            "A curious and ambitious developer with a strong analytical mindset and a passion for creative solutions. \n \n Eager to learn and thrive in Full-Stack development, looking for a position where creative thinking and problem solving can be fully utilized. \n \n Ready to become your next Full-Stack Developer!",
                urlBtn:             "mailto:sofievandermeer@outlook.com", 
                textBtn:            "sofievandermeer@outlook.com", 
                availability:       "Available from 1st March 2025, open to internship/IBO.",
                related_interests:  ["Virtual Realty", "2D & 3D Visuals"]            },
            {
                id:         "About_Hard-Skills",
                title:      "hard skills",
                projects:   [
                    {
                        Programming_Languages:      ["PHP", "JS", "HTML", "CSS"],
                        // Framework_And_Libraries:    ["Bootstrap", "THREE.js"],
                        Libraries:                  ["Bootstrap", "THREE.js"],
                        Development_Methodologies:  ["BEM", "OOP", "MVC", "Mobile First Design", "Agile Scrum"]
                    }
                ] 
            },
            {
                id:         "About_Soft-Skills",
                title:      "soft skills",
                projects:   [
                    {
                        Creativity:       ["Artistic", "Innovative", "Eye for Detail", "Perfectionist"],
                        Problem_Solving:  ["Analytical", "Solution-Oriented"],
                        Growth:           ["Eager to Learn", "Curious", "Autodidactic"],
                        Driven:           ["Ambitious", "Perseverance" ]
                    } 
                ] 
            },
            {
                id:         "About_Education",
                title:      "education",
                projects:   [
                    {
                        school:   "VDAB",
                        study:    "Full-Stack Developer",
                        year:     "2024 - 2025"
                    },
                    {
                        school:   "CleanTechPunt Houthalen",
                        study:    "Cleantech Ambassador",
                        year:     "2023"
                    },
                    {
                        school:   "Erasmushogeschool Brussel",
                        study:    "Bachelor in Landscape & Garden Architecture",
                        year:     "2014 - 2018"
                    }
                ]
            },
            {
                id:         "About_Work",
                title:      "professional experience",
                projects:   [
                    {
                        company:  "Agency Nature & Forests",
                        job:      "Expert Public Procurement & Landscape Architect",
                        year:     "2020 - 2023"
                    },
                    {
                        company:  "Flemish Land Agency",
                        job:      "Case Manager for Rural Areas",
                        year:     "2019"
                    },
                    {
                        company:  "Tielens Tuinen",
                        job:      "Garden Architect & Estimator",
                        year:     "2018 - 2019"
                    },
                    {
                        company:  "Regional Landscapes Hesbaye & Voeren",
                        job:      "Internship",
                        year:     "2017"
                    }
                ]
            },
            {
                id:         "About_Bottom",
                urlBtn_1:   "../src/assets/CV_Sofie-van-der-Meer_ENG.pdf",
                textBtn_1:  "Download my CV",
                urlBtn_2:   "mailto:sofievandermeer@outlook.com", 
                textBtn_2:  "send me an email", 
            }
        ]
    },
    projects: {
        headername: "Projects",
        sections:   [
            {   id:             "Projects_Top",
                title:          "Projects",
                description:    "Below are some of the projects I have developed"

            },
            {
                id:         "Projects_List",
                projects:   [
                    {
                        id:             "#prularia",
                        img:            "../src/assets/images/prularia/prularia_logo.png",
                        imgAlt:         "crown, logo of project Prularia",
                        title:          "Prularia",
                        description:    "As a team of 9 developers, we built an e-commerce platform to gain hands-on experience with the principles of Scrum and Agile methodologies.",
                        languages:      ["JavaScript", "PHP", "CSS"],
                        langratio:      [47, 39, 12],
                        library:        ["Bootstrap"],
                        urlBtn:         "project.html#prularia",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "e-commerce",
                                img:            "../src/assets/images/prularia/prularia_logo.png",
                                imgAlt:         "crown, logo of project Prularia",
                                title:          "Prularia",
                                languages:      ["JavaScript", "PHP", "CSS"],
                                library:        ["Bootstrap"],
                                date:           "November 2024",
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "Developing a webshop for a client provided a unique opportunity to apply the Scrum Agile methodology in practice. Together with eight other student developers from across Flanders, we worked on this project, where we not only enhanced our technical skills but also learned how to collaborate effectively as a team. The challenge was not only about building the webshop, but also understanding and applying the Scrum approach.",
                                challenges:     "We faced the challenge of developing a functional and user-friendly webshop within a limited timeframe. Visitors needed to easily browse products and add them to their shopping cart without the requirement to log in. We developed separate pages for customer registration, login, and order placement. Additionally, we ensured that the webshop complied with GDPR requirements, which meant implementing secure password encryption and obtaining explicit consent for cookie usage. Furthermore, we set priorities for each sprint, as the available time was limited.",
                                result:         "The project resulted in a functional webshop. The first two sprints delivered a working webshop, where customers could browse products, add them to their cart, and place orders. We implemented the core functionalities, such as order placement, and refined both the visual and functional aspects of the webshop. With more time, we would have developed product pages with additional information, profile management, and order status tracking in the third sprint. \n\n Throughout the process, we actively utilized the Scrum methodology, with daily stand-up meetings and the Scrum board to track progress. We worked as a close-knit team, made joint decisions, and supported each other as needed.",
                                what_the_scrum_coach_says:    
                                                "“Sofie proved to be a motivated and engaged participant during the SCRUM project. She effectively applied the practical tips from the instructors in the scrum exercise, highlighting her eagerness to learn. During the daily scrum meetings, she kept the focus sharp and was able to explain her coding work in a concise and clear manner. Her proactive attitude stood out; she frequently took the initiative to start conversations and encourage collaboration. Moreover, she placed great importance on delivering a finished and high-quality product at the end of each sprint, underscoring her result-oriented mindset and sense of responsibility.”",
                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.prularia.Sofie-van-der-Meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Prularia",
                                img_01:         "../src/assets/images/prularia/page-down.png",
                                img_02:         "../src/assets/images/prularia/icons.png",
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
                                id:             "Project_Bottom",
                                previous:       "project.html#treasure-hunt",
                                next:           "project.html#pizzaria"
                            }
                        ]
                    },
                    {
                        id:           "#pizzaria",
                        img:          "../src/assets/icons/pizza.svg",
                        imgAlt:       "pizzaslice, logo of project Pizzaria",
                        title:        "Pizzaria",
                        description:  "This project is an e-commerce web application designed for users to explore and order a variety of pizzas.",
                        languages:    ["PHP", "CSS"],
                        langratio:    [97, 3],
                        urlBtn:       "project.html#pizzaria",
                        sections:     [
                            {
                                id:             "Project_Top",
                                websiteType:    "e-commerce",
                                img:            "../src/assets/icons/pizza.svg",
                                imgAlt:         "pizzaslice, logo of project Pizzaria",
                                title:          "Pizzaria",
                                languages:      ["PHP", "CSS"],
                                date:           "August 2024",
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "This project was the final assignment for the PHP course and involved building a pizza ordering web application. The goal was to create a user-friendly website where customers could easily view and order pizzas. The web application utilized various techniques and concepts that I learned throughout the course.",
                                approach:       "In the first phase of the project, I performed an extensive normalization, set up the database in SQL, and implemented it to ensure that all necessary data was properly stored. After working on the normalization, I received feedback from my instructor that it was too detailed for the limited time I had. I decided to focus on the key tables, such as orders, customers, locations, and order lines, and not further develop the other tables (such as promotions and payment methods). \n\n Next, I developed the application following the MVC structure, keeping the application logic separate from the user interface. I also worked on error handling to ensure the app managed invalid user input properly. Before writing any code, I created a list of possible exceptions to have an overview of expected errors.",
                                result:         "The result is a functional pizza ordering application that allows users to easily select pizzas, add them to their cart, and place their orders. The application retrieves products from the database and displays them neatly on the website. Users can register, log in, adjust the quantity of items, change their contact and delivery address, and complete their order. The user interface is simple yet functional, making it clear for customers how to place their order.",
                

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
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
                        imgAlt:       "9 circles forming a box, logo of project Bubbles in Color",
                        title:        "Bubbles in Color",
                        description:  "In this interactive game, users can color a variety of bubbles, offering a fun and creative experience.",
                        languages:    ["JavaScript", "HTML", "CSS"],
                        langratio:    [0, 0, 0],
                        library:      ["THREE.js"],
                        urlBtn:       "project.html#bubbles-in-color",
                        sections:     [
                            {
                                id:             "Project_Top",
                                websiteType:    "game",
                                img:            "../src/assets/icons/bullets.svg",
                                imgAlt:         "9 circles forming a box, logo of project Bubbles in Color",
                                title:          "Bubbles in Color",
                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                date:           "February 2025",
                                notPublished:   "This project is currently under development and is expected to be published soon."
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
                        imgAlt:         "sitting cat, logo of project Treasure Hunt",
                        title:          "Treasure Hunt",
                        description:    "In this exciting treasure hunt game, players embark on an adventurous quest to uncover hidden treasures.",
                        languages:      ["JavaScript", "HTML", "CSS"],
                        langratio:      [0, 0, 0],
                        library:        ["THREE.js"],
                        urlBtn:         "project.html#treasure-hunt",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "game",
                                img:            "../src/assets/icons/cat.svg",
                                imgAlt:         "sitting cat, logo of project Treasure Hunt",
                                title:          "Treasure Hunt",
                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                date:           "February 2025",
                                notPublished:   "This project is currently under development and is expected to be published soon."
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