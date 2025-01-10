export default {
    'home': {
        headername:   "Home",
        url:          "index.html",
        sections:     [
            {
                id:             "Home_Welkom",
                img:            "../src/assets/images/black-white.jpg",
                title:          "Hello I'm Sofie van der Meer",
                description:    "Welcome to this platform, where you get a hint of my expertise and capabilities as a Junior Full-Stack Developer.",
                textBtn:        "Contact me",
                urlBtn:         "/public/contact.html"
            },
            {
                id:             "Home_Introduction",
                img:            "../src/assets/images/black-white.jpg",
                title:          "I'm Sofie",
                subtitle:       "Creative Full-Stack developer",
                description:    "I am driven by curiosity and ambition. My analytical skills, combined with my creativity, allow me to craft solutions such as 2D and 3D visuals that are both innovative and precise, reflecting my attention to detail and problem-solving abilities.",
                textBtn:        "Get to know me",
                urlBtn:         "/public/about.html"
            },
            {
                id:           "Home_Projects",
                projects:     [
                    {
                        img:          "../src/assets/images/prularia/prularia_logo.png",
                        title:        "Prularia",
                        description:  "As a team of 9 developers, we built an e-commerce platform to gain hands-on experience with the principles of Scrum and Agile methodologies.",
                        languages:    ["JavaScript", "PHP", "CSS"],
                        langratio:    [47, 39, 12],
                        library:      ["Bootstrap"],
                        urlBtn:      "../src/components/pages/projects/prularia.html"
                    },
                    {
                        img:          "../src/assets/icons/pizza.svg",
                        title:        "Pizzaria",
                        description:  "This project is an e-commerce web application designed for users to explore and order a variety of pizzas.",
                        languages:    ["PHP", "CSS"],
                        langratio:    [97, 3],
                        urlBtn:       "/public/projects/pizzaria.html"
                    },
                    {
                        img:          "../src/assets/icons/ellipsis.svg",
                        title:        "Bubbles in Color",
                        description:  "In this interactive game, users can color a variety of bubbles, offering a fun and creative experience.",
                        languages:    ["JavaScript", "HTML", "CSS"],
                        langratio:    [0, 0, 0],
                        library:      ["Three.js"],
                        urlBtn:       "/public/projects/bubbles-in-color.html"
                    }
                ]
            }
        ]
    },
    about: {
        headername:       "About Me",
        url:              "/public/about.html",
        sections:         {
            Contact:          {
                email:        "sofievandermeer@outlook.com",
                website:      "www.Sofie-van-der-Meer.be",
                linkedin:     "linkedin.com/in/Sofie-van-der-Meer",
                github:       "github.com/Sofie-van-der-Meer"
            },
            Profile:      "A curious and ambitious developer with a strong analytical mindset and a passion for creative solutions. Eager to learn and thrive in Full-Stack development, looking for a position where creative thinking and problem solving can be fully utilized. Ready to become your next Full-Stack Developer!",
            Hard_Skills:  {
                Programming_Languages:        ["PHP", "JavaScript (JS)", "HTML", "CSS"],
                Framework_And_Libraries:        ["Bootstrap", "THREE.js"],
                Development_Methodologies:    ["BEM", "OOP", "MVC", "Mobile First Design", "Agile Scrum"]
            },
            Soft_Skills: {
                Creativity:       ["Artistic", "Innovative", "Eye for Detail", "Perfectionist"],
                Problem_Solving:  ["Analytical", "Solution-Oriented"],
                Growth:           ["Eager to Learn", "Curious", "Autodidactic"],
                Driven:           ["Ambitious", "Perseverance" ]
            },
            Education: [
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
            ],
            Professional_Experiences: [
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
                    company:  "Regional Landscape Hesbaye & Voeren",
                    job:      "Internship",
                    year:     "2017"
                }
            ],
            Other_Details:    {
                availability:         "Available from 1st March 2025, open to internship/IBO.",
                Related_Interests:    ["Virtual Realty", "2D & 3D Visuals"]
            },
            CV: {
                urlBtn: "CV_Sofie-van-der-Meer_ENG.pdf",
                urlText: "Download my CV"
            }        
        }
    },
    projects: {
        headername:     "Projects",
        projectList:    [
        {        
            headername:   "Project",
            url:          "/public/projects/project.html/#prularia",
            img:          "../src/assets/images/prularia/prularia_logo.png",
            title:        "Prularia",
            description:  "As a team of 9 developers, we built an e-commerce platform to gain hands-on experience with the principles of Scrum and Agile methodologies.",
            languages:    ["JavaScript", "PHP", "CSS"],
            langratio:   [47, 39, 12],
            library:      ["Bootstrap"],
            websiteType: "e-commerce",
            date:         "november 2024",
            urlBtn:      {
                live:     "url go live",
                github:   "https://github.com/Sofie-van-der-Meer/Prularia"
            },
            sections:     {
                introduction: "Developing a webshop for a client provided a unique opportunity to apply the Scrum Agile methodology in practice. Together with eight other student developers from across Flanders, we worked on this project, where we not only enhanced our technical skills but also learned how to collaborate effectively as a team. The challenge was not only about building the webshop, but also understanding and applying the Scrum approach.",
                challenges:   "We faced the challenge of developing a functional and user-friendly webshop within a limited timeframe. Visitors needed to easily browse products and add them to their shopping cart without the requirement to log in. We developed separate pages for customer registration, login, and order placement. Additionally, we ensured that the webshop complied with GDPR requirements, which meant implementing secure password encryption and obtaining explicit consent for cookie usage. Furthermore, we set priorities for each sprint, as the available time was limited.",
                result:       "The project resulted in a functional webshop. The first two sprints delivered a working webshop, where customers could browse products, add them to their cart, and place orders. We implemented the core functionalities, such as order placement, and refined both the visual and functional aspects of the webshop. With more time, we would have developed product pages with additional information, profile management, and order status tracking in the third sprint. /n Throughout the process, we actively utilized the Scrum methodology, with daily stand-up meetings and the Scrum board to track progress. We worked as a close-knit team, made joint decisions, and supported each other as needed.",
                what_the_scrum_coach_says:    
                                "“Sofie was always actively engaged during meetings. She listened attentively and asked questions when things were unclear. The Scrum Master role was taken on by a different team member each day, and Sofie excelled in this role, always ready to support the team. During the stand-up meetings, she was good at setting priorities. For instance, she suggested not discussing a more complex issue in detail at that moment but instead addressing it in a separate meeting with the involved developers.”"
            },
            colors:       ["#abd7a8", "#8ab987", "#63a15e", "#ffffff", "#f5f9f6", "#e8f5e9", "#111510"]
        },
        {
            headername:   "Project",
            url:          "/public/projects/project/#pizzaria",
            img:          "../src/assets/icons/pizza.svg",
            title:        "Pizzaria",
            description:  "This project is an e-commerce web application designed for users to explore and order a variety of pizzas.",
            languages:    ["PHP", "CSS"],
            langratio:   [97, 3],
            websiteType: "e-commerce",
            date:         "augustus 2024",
            urlBtn:      {
                live:     "url go live",
                github:   "https://github.com/Sofie-van-der-Meer/Pizzaria"
            },
            sections:     {
                introduction: "This project was the final assignment for the PHP course and involved building a pizza ordering web application. The goal was to create a user-friendly website where customers could easily view and order pizzas. The web application utilized various techniques and concepts that I learned throughout the course.",
                approach:     "In the first phase of the project, I performed an extensive normalization, set up the database in SQL, and implemented it to ensure that all necessary data was properly stored. After working on the normalization, I received feedback from my instructor that it was too detailed for the limited time I had. I decided to focus on the key tables, such as orders, customers, locations, and order lines, and not further develop the other tables (such as promotions and payment methods). n/ Next, I developed the application following the MVC structure, keeping the application logic separate from the user interface. I also worked on error handling to ensure the app managed invalid user input properly. Before writing any code, I created a list of possible exceptions to have an overview of expected errors.",
                result:       "The result is a functional pizza ordering application that allows users to easily select pizzas, add them to their cart, and place their orders. The application retrieves products from the database and displays them neatly on the website. Users can register, log in, adjust the quantity of items, change their contact and delivery address, and complete their order. The user interface is simple yet functional, making it clear for customers how to place their order."
            },
            colors:       ["wheat", "#fffff0", "red", "white", "black"]
        },
        {
            headername:   "Project",
            url:          "/public/projects/project/#bubbles-in-color",
            img:          "../src/assets/icons/ellipsis.svg",
            title:        "Bubbles in Color",
            description:  "In this interactive game, users can color a variety of bubbles, offering a fun and creative experience.",
            languages:    ["JavaScript", "HTML", "CSS"],
            langratio:   [0, 0, 0],
            library:      ["THREE.js"],
            websiteType: "game",
            date:         "januari 2025",
            urlBtn:      {
                live:     "url go live",
                github:   "https://github.com/Sofie-van-der-Meer/Bubbles-in-Color"
            },
            sections:     {
                error:         "This project is currently under development and is expected to be published soon."
            }
        },
        {
            headername:    "Project",
            url:           "/public/projects/project/#treasure-hunt",
            img:           "../src/assets/icons/ellipsis.svg",
            title:         "Treasure Hunt",
            description:   "In this exciting treasure hunt game, players embark on an adventurous quest to uncover hidden treasures.",
            languages:     ["JavaScript", "HTML", "CSS"],
            langratio:     [0, 0, 0],
            library:       ["THREE.js"],
            websiteType:   "game",
            date:          "januari 2025",
            urlBtn:        {
                live:      "url go live",
                github:    "https://github.com/Sofie-van-der-Meer/Treasure-Hunt"
            },
            sections:      {
                error:     "This project is currently under development and is expected to be published soon."
            }
        }
    ]} ,
    contact: {
            headername:   "Contact me",
            url:          "/public/contact.html",
            title:        "Let's Talk",
            subtitle:     [
                "Fill in the form below, or reach out to me directly", 
                "sofievandermeer@outlook.com", 
                "(click to copy)", 
                "prefer contact form?"
            ],
            contactform:  [
                "First Name",
                "Last Name",
                "Email",
                "Company",
                "Let's Talk"
            ]
    }    
}