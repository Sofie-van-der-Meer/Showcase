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
                        img:            "../src/assets/icons/gem.svg",
                        imgAlt:         "diamond, logo of project Treasure Hunt",
                        title:          "Treasure Hunt",
                        description:    "In this exciting treasure hunt game, a little fox embarks on a thrilling quest to uncover hidden, yummy treasures.",
                        languages:      ["JavaScript", "HTML", "CSS"],
                        langratio:      [91, 5, 4],
                        library:        ["THREE.js"],
                        urlBtn:         "project.html#treasure-hunt",
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
                availability_1:     "Available from 31st March 2025",
                availability_2:     "Open to internship/IBO"
            },
            {
                id:                 "About_Me",
                profile:            "A curious and ambitious developer with a strong analytical mindset and a passion for creative solutions. \n\n Eager to learn and thrive in Full-Stack development, looking for a position where creative thinking and problem solving can be fully utilized. \n\n Ready to become your next Full-Stack Developer!",
                urlBtn:             "mailto:sofievandermeer@outlook.com", 
                textBtn:            "sofievandermeer@outlook.com", 
                availability:       "Available from 31st March 2025, open to internship/IBO.",
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
                                previous:       "project.html#tamagotchi",
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
                                next:           "project.html#treasure-hunt"
                            }
                        ]
                    },
                    {
                        id:             "#treasure-hunt",
                        img:            "../src/assets/icons/gem.svg",
                        imgAlt:         "diamond, logo of project Treasure Hunt",
                        title:          "Treasure Hunt",
                        description:    "In this exciting treasure hunt game, a little fox embarks on a thrilling quest to uncover hidden, yummy treasures.",
                        languages:      ["JavaScript", "HTML", "CSS"],
                        langratio:      [91, 5, 4],
                        library:        ["THREE.js"],
                        urlBtn:         "project.html#treasure-hunt",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "game",
                                img:            "../src/assets/icons/gem.svg",
                                imgAlt:         "diamond, logo of project Treasure Hunt",
                                title:          "Treasure Hunt",
                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                date:           "February 2025"
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "For my JavaScript course, I was asked to create a game called 'Treasure Hunt'. The goal was to allow the player to move around using event listeners. I saw this as a great chance to create a 3D experience using Three.js, making the game more fun to play.",
                                challenges:     "The first challenge was designing the characters and treasures. I had many ideas, but creating 3D models in Blender was new to me and time-consuming. Because of the limited time, I decided to use an existing 3D model instead. I used a single fox model, and by changing its size, I created both a small fox and a mother fox. \n\n For the JavaScript structure, I used Object-Oriented Programming (OOP) based on the Three.js journey course. This approach gave me a solid starting point to build the game’s logic. \n\n By organizing all the game data into a JavaScript object, I could easily create and manage the game elements using OOP. \n\n \n",
                                approach:       "Once the elements showed up correctly and animations worked, I started improving the gameplay. I created a matrix array to randomly place game elements in different spots each time the game was loaded. This kept the game fresh and exciting with every play. \n\n Next, I worked on the movement of the foxes. My first attempt didn’t work well and was too complicated, but after simplifying the logic, I got it right. I also added new features: the mother fox (enemy) could move randomly or towards a target, and the small fox (hunter) could be controlled both by keyboard and by touch events on mobile devices. Instead of using keys, I added arrow buttons on the screen, allowing players to move the fox by touching these buttons. This made the game more interactive and mobile-friendly.",
                                result:         "After a few days of coding, I created a fun, interactive game. Adding Three.js made the game look great in 3D. It was a rewarding challenge, and I’m excited to explore Three.js more in future projects. \n\n After the game launched, I fixed a small bug related to the responsive design, ensuring the game works well on all devices. Now, everyone can enjoy the game smoothly, no matter their screen size.",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.treasurehunt.sofie-van-der-meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Treasure-Hunt",
                                img_01:         "../src/assets/images/treasure-hunt/gamePlay.png",
                                img_02:         "../src/assets/images/treasure-hunt/introGame_touch-device.png",
                                imgList:        [
                                    "../src/assets/images/treasure-hunt/zoomIntoGame.png",
                                    "../src/assets/images/treasure-hunt/gameStarts_touch-device_2.png",
                                    "../src/assets/images/treasure-hunt/gamePlay.png",
                                    "../src/assets/images/treasure-hunt/lostGame.png"
                                ],
                                colors:         ["#F3FFC6", "#B6174B", "#1C5253", "#C3EB78", "#7F675B"]
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#pizzaria",
                                next:           "project.html#peekaboo"
                            }
                        ]
                    },
                    {
                        id:             "#peekaboo",
                        img:            "../src/assets/icons/hands-holding-child.svg",
                        imgAlt:         "hands holding a child, logo of project Peekaboo",
                        title:          "Peekaboo",
                        description:    "A project where I recreated the BackstageTalks website into Peekaboo, focusing on frontend skills such as dynamic background colors, full-page scrolling, and mobile responsiveness.",
                        languages:      ["JavaScript", "CSS", "HTML"],
                        langratio:      [42, 33, 25],
                        urlBtn:         "project.html#peekaboo",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "e-commerce",
                                img:            "../src/assets/icons/hands-holding-child.svg",
                                imgAlt:         "hands holding a child, logo of project Peekaboo",
                                title:          "Peekaboo",
                                languages:      ["JavaScript", "CSS", "HTML"],
                                date:           "September 2024"
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "After gaining a solid foundation in HTML and CSS during my basic training, I wanted to deepen my knowledge further. That's when I came across the website frontendpractice.com, which offers various projects that you can recreate to improve your frontend skills. I decided to take on the challenge and transform the website BackstageTalks into Peekaboo.",
                                challenges:     "Choosing a project was easy, but finding the right photos that matched the project proved to be a bigger challenge. After some searching, I found a set of photos that worked well together and aligned with the color palette of the example project. I also had to do some research for the typography. Once everything was in place, I could begin the real work.\n With a list of data for each item, I wrote a script to create an article element for each item. This allowed me to easily replicate multiple articles with just a few lines of code. I also added a data attribute to each article element to dynamically adjust the background color. \n\n Frontendpractice offers additional challenges, such as a full-page scroll with background transition and making the website responsive for mobile devices. I didn't shy away from these challenges. For the scroll function, I implemented a feature that changes the background color based on the data attribute of the currently visible article element. I also made a few minor CSS adjustments to ensure the website was fully responsive.",
                                result:         "Although the articles aren’t an exact match to the original, I was still able to create a solid replica of the website. The scroll effect still lags occasionally, which can be a small annoyance for a perfectionist developer like myself. Nevertheless, this project has significantly improved my skills.",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.peekaboo.sofie-van-der-meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Peekaboo",
                                img_01:         "../src/assets/images/peekaboo/model_1.png",
                                img_02:         "../src/assets/images/peekaboo/model_4.png",
                                imgList:        [
                                    "../src/assets/images/peekaboo/model_1.png",
                                    "../src/assets/images/peekaboo/model_4.png",
                                ],
                                colors:         ["#01cfe6", "#e9c201", "#d4d4d4", "#ca5d02", "#f2b8ce"]
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#treasure-hunt",
                                next:           "project.html#tamagotchi"
                            }
                        ]
                    },
                    {
                        id:             "#tamagotchi",
                        img:            "../src/assets/icons/cubes-stacked.svg",
                        imgAlt:         "boxes stacked on top of each other, logo of project tamagotchi",
                        title:          "tamagotchi",
                        description:    "For this project, I used Three.js to visualize an insulin monitor with Tamagotchi-like features, where a bloodthirsty vampire serves as the pet.",
                        languages:      ["JavaScript", "HTML", "CSS"],
                        langratio:      [57, 29, 14],
                        library:        ["THREE.js"],
                        urlBtn:         "project.html#tamagotchi",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    "showcase",
                                img:            "../src/assets/icons/cubes-stacked.svg",
                                imgAlt:         "boxes stacked on top of each other, logo of project tamagotchi",
                                title:          "tamagotchi",
                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                date:           "Februari 2025"
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "For this project, I participated in the February Three.js Challenge, organized by Three.js Journey. The Tamagotchi theme inspired me to combine a blood-drinking vampire with an insulin measurement device that features an interactive Tamagotchi-like function. This project gave me the opportunity to experiment with Three.js and Blender.",
                                challenges:     "I had many creative ideas and wanted to challenge myself in both 3D modeling and interactive rendering, but time quickly became my biggest constraint. I had plans to add Tamagotchi-style animations, which would have made the interaction even more fun, but due to the limited time, I was unable to implement them.",
                                approach:       "To bring my ideas to life, I used Blender to design the insulin measurement device, as well as the icons and the vampire character. I experimented with various shapes and materials in Blender to give the project a unique and creative look. Despite the time pressure, I learned a lot from every step of the process. \n\nAdditionally, I wanted to create a website where the 3D renders and models would be integrated. I chose a layout from Frontend Practice to refresh my HTML and CSS skills. While this was beneficial for my front-end development, it also meant I had less time to focus on the 3D renders and modeling, which were the core elements of the project.",
                                result:         "The project didn’t turn out exactly as I had originally envisioned, as time constraints limited the animations. However, I managed to complete some key elements. \n\n I created three Three.js renders: \n\n <ul class='list--list-style-type-shown'><li>The first render allows users to rotate and zoom in on the 3D view of the insulin measurement device..</li> <li>The second render shows the vampire in a detailed 3D environment, but without effects or animations.</li> <li>The third render lets users change the color of the device’s cover, offering a fun customization option.</li></ul>\n\nAdditionally, I created two Blender images featuring the vampire and the bat characters, both with hair particles, marking my first attempt at using this effect in Blender.\n\n Overall, the Three.js Challenge was a valuable learning experience. Although I couldn’t implement all the features I originally planned, I’m proud of the progress I made. This project helped me advance my skills, and I look forward to continuing my journey with the Three.js Journey course to expand my knowledge and learn more advanced techniques.",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.vampitest.sofie-van-der-meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Tamagotchi",
                                img_01:         "../src/assets/images/tamagotchi/home-title.png",
                                img_02:         "../src/assets/images/tamagotchi/batbat.png",
                                imgList:        [
                                    "../src/assets/images/tamagotchi/home.png",
                                    "../src/assets/images/tamagotchi/device-cover-black.png",
                                    "../src/assets/images/tamagotchi/device-cover-purple.png",
                                    "../src/assets/images/tamagotchi/home-title.png",
                                    "../src/assets/images/tamagotchi/device-cover-red.png",
                                    "../src/assets/images/tamagotchi/batbat.png",
                                    "../src/assets/images/tamagotchi/vampire.png",
                                ],
                                colors:         ["#F4F4F4", "#000000", "#B41C1C", "#8C8C8C", "#6A4C9C"]
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#peekaboo",
                                next:           "project.html#prularia"
                            }
                        ]
                    }
                ]
            }
        ]
    }    
}