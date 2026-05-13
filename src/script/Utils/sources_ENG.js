export default {
    home: {
        headername:   "Home",
        sections:     [
            {
                id:             "Home_Welkom",
                img:            "../src/assets/images/black-white.jpg",
                imgAlt:         "black and white photo of Sofie van der Meer",
                title:          "Hello I'm Sofie \n van der Meer",
                description:    "Welcome to my portfolio. Here is a selection of my work in landscape design, creative projects, and explorations across disciplines. \n\n My focus lies in designing environments that contribute to nature, sustainability, and long-term impact.",
                textBtn:        "Contact me",
                urlBtn:         "mailto:sofievandermeer@outlook.com"
            },
            {
                id:             "Home_Introduction",
                img:            "../src/assets/images/black-white.jpg",
                imgAlt:         "black and white photo of Sofie van der Meer",
                title:          "Landscape designer & artist",
                description:    "I’m a landscape designer with a strong connection to nature and the environment. My work focuses on creating spaces that combine aesthetics with climate resilience and biodiversity. \n\n I approach design both analytically and creatively, with a curiosity that extends into areas like art, sustainable building, and nature.",
                textBtn:        "Get to know me",
                urlBtn:         "about.html"
            },
            {
                id:         "Home_Projects",
                projects:   [
                    {
                        img:            "../src/assets/images/landscape_architecture_tower.png",
                        imgAlt:         "Image of a wooden lookout tower that gives a beautiful view over a nature in Diest",
                        title:          "Landscape Design",
                        description:    "A selection of projects developed across different roles — from student work to garden design and larger landscape proposals. My experience ranges from designing wooden lookout towers to shaping public spaces and creating green school environments.\n\nEach project reflects a hands-on approach to designing with nature, scale, and context in mind.",
                        urlBtn:         "projects.html#landscape-design"
                    },
                    {
                        img:            "../src/assets/images/art_lion.png",
                        imgAlt:         "Image of a mural on a black wall, the mural is a mix of two animals: a lion that has ears and antlers of a deer. The mural is made with gold spraypaint, details are made with black and white wall paint.",
                        title:          "Art",
                        description:    "I enjoy drawing, painting, and creating in different ways. This space brings together a selection of artworks I’ve made over time, ranging from sketches to more developed pieces.\n\nA personal exploration of ideas, materials, and expression.",
                        urlBtn:         "projects.html#art"
                    },
                    {
                        img:            "../src/assets/images/tamagotchi/home.png",
                        imgAlt:         "Image of a website-demo. The website promote a fictional product of a blood sugar testing device that acts like a tamagotchi. The tamagotchi itself is a vampire that needs to 'drink' blood to track the bloodsugar.",
                        title:          "Full Stack Development",
                        description:    "Projects developed during my training as a full stack developer, focused on problem-solving, structure, and usability.\n\nA small selection of web applications and technical work.",
                        urlBtn:         "projects.html#development"
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
                subtitle:           "Landscape designer & artist",
                availability_1:     "Open to work",
                availability_2:     "Open to create"
            },
            {
                id:                 "About_Me",
                profile:            "I’m a landscape designer driven by curiosity, creativity, and a strong connection to nature and environment. I believe design plays a key role in addressing challenges such as climate change, biodiversity loss, and the way we shape our surroundings.\n\n My work is rooted in analysis, concept development, and systems thinking. I enjoy understanding how different elements interact, connecting disciplines, and translating complex ideas into clear and meaningful designs. I move easily between the bigger picture and detailed work, exploring concepts on a broader level while refining them with care and precision.\n\nAlongside landscape design, I explore creative work such as drawing, murals, and hands-on projects. This artistic approach strengthens how I think, design, and communicate visually.\n\n I have a strong interest in sustainable architecture and building techniques, which I’ve explored independently over time. This self-driven learning continues to influence how I look at space, materials, and long-term impact.\n\n I also completed a training in full-stack development, driven by my interest in problem-solving and structured ways of working. There, I discovered the Agile approach, working in a transparent, collaborative way with room for feedback and iteration. This experience reshaped how I view teamwork: while I value working independently, I do my best work in an environment where ideas can be shared, discussed, and refined together.\n\n I’m naturally inclined to question, improve, and look beyond standard solutions, always asking how things can be done better, more sustainably, and with greater impact.",
                urlBtn:             "mailto:sofievandermeer@outlook.com", 
                textBtn:            "sofievandermeer@outlook.com", 
                availability:       "Open to work & create",
                related_interests:  ["Bats", "art", "nature", "architecture"]
            },
            {
                id:         "About_Hard-Skills",
                title:      "hard skills",
                projects:   [
                    {
                        skillgroup:         "Softwares",
                        skills:             ["AutoCAD", "Civil 3D", "ArcGIS", "Indesign", "SketchUp", "Blender"]
                    },
                    {
                        skillgroup:         "Languages",
                        skills:             ["Dutch (native)", "English (intermediate)"]
                    },
                    {
                        skillgroup:         "Programming",
                        skills:             ["PHP", "JS", "HTML", "CSS", "Bootstrap", "THREE.js", "Agile Scrum"]
                    }
                ] 
            },
            {
                id:         "About_Soft-Skills",
                title:      "soft skills",
                projects:   [
                    {
                        skillgroup:         "Creativity",
                        skills:             ["Artistic", "Innovative", "Eye for Detail", "Perfectionist"]
                    },
                    {
                        skillgroup:         "Problem Solving",
                        skills:             ["Analytical", "Solution-Oriented", "Critical Thinker"]
                    },
                    {
                        skillgroup:         "Growth",
                        skills:             ["Eager to Learn", "Curious", "Autodidactic"]
                    },
                    {
                        skillgroup:         "Driven",
                        skills:             ["Ambitious", "Perseverance"]
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
                        school:   "Erasmushogeschool Brussel",
                        study:    "Bachelor in Landscape & Garden Architecture",
                        year:     "2014 - 2018"
                    },
                    {
                        school:   "Heilig Graf Turnhout",
                        study:    "Creation & Fashion",
                        year:     "2010 - 2014"
                    }
                ]
            },
            {
                id:         "About_Courses",
                title:      "courses",
                projects:   [
                    {
                        school:   "Climatecontact",
                        study:    "Enlarge your handprint",
                        year:     "2024"
                    },
                    {
                        school:   "CleanTechPunt Houthalen",
                        study:    "Cleantech Ambassador",
                        year:     "2023"
                    },
                    {
                        school:   "Artacademy Heusden-Zolder",
                        study:    "Drawing",
                        year:     "2018 - 2019"
                    },
                    {
                        school:   "Natuurpunt CVN",
                        study:    "Natureguide",
                        year:     "2013"
                    }
                ]
            },
            {
                id:         "About_Volunteering",
                title:      "volunteering",
                projects:   [
                    {
                        school:   "JNM",
                        study:    "Youth League for Nature and Environment",
                        year:     "2012 - now"
                    },
                    {
                        school:   "Natuurpunt Mammel workgroup",
                        study:    "Bats monitoring",
                        year:     "2012 - now"
                    }
                ]
            },
            {
                id:         "About_Work",
                title:      "professional experience",
                projects:   [
                    {
                        company:  "Dignify",
                        job:      "Marketing Solutions - Junior Full Stack Developer",
                        year:     "2025"
                    },
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
                        job:      "Internship - Biodiversity",
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
                description:    "Below are some of the projects I have created across different disciplines",
                fields:       [
                    {   id:             "#landscape-design",
                        description:    "Below are some of the projects I have designed in the field of landscape architecture"

                    },
                    {   id:             "#art",
                        description:    "Below are some of the artworks I have created"

                    },
                    {   id:             "#development",
                        description:    "Below are some of the websites I have developed during my training as a full stack developer"
                    }                    
                ]
            },


            {
                id:         "Projects_List",
                projects:   [
                    {
                        id:             "#tower",
                        field:          "#landscape-design",
                        img:            "../src/assets/icons/cubes-stacked.svg",
                        imgAlt:         "boxes stacked on top of each other, logo of project tower",
                        title:          "tower",
                        description:    "description of the project.",
                        urlBtn:         "project.html#tower",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    ["Landscape design", "Garden Design", "Urban design", "Public design", "Semi-public design"], //sort project
                                img:            "../src/assets/icons/cubes-stacked.svg",
                                imgAlt:         "boxes stacked on top of each other, logo of project tower",
                                title:          "tower",
                                languages:      ["Student", "Internship", "Professional"], //sort projectrole
                                library:        ["EHB", "Tielens Tuinen", "ANB"], //company
                                date:           "Month 20.."
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "introduction of the project, what I did, what I learned, etc.",
                                challenges:     "challenges I faced during the project, how I overcame them, what I learned from them, etc.",
                                approach:       "the approach I took to solve the challenges, how I structured my work, what I learned from it, etc.",
                                result:         "the result of the project, what I achieved, what I learned from it, etc.",
                                img_01:         "",
                                img_02:         "../src/assets/images/map/img.png",
                                imgList:        [
                                    "../src/assets/images/map/img.png",
                                ],
                                colors:         [],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#previous-project",
                                next:           "project.html#next-project"
                            }
                        ]
                    },
                    {
                        id:             "#lion",
                        field:          "#art",
                        img:            "../src/assets/icons/cubes-stacked.svg",
                        imgAlt:         "boxes stacked on top of each other, logo of project lion",
                        title:          "lion",
                        description:    "description of the project.",
                        urlBtn:         "project.html#lion",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    ["Drawing", "Mural", "Mixed media"], //sort project
                                img:            "../src/assets/icons/cubes-stacked.svg",
                                imgAlt:         "boxes stacked on top of each other, logo of project lion",
                                title:          "lion",
                                languages:      ["Student","Personal", "Professional"], //sort projectrole
                                library:        ["@ artacademy Heusden-Zolder", "@ home"], //company
                                date:           "Month 20.."
                            },
                            {
                                id:             "Project_Content",
                                
                                introduction:   "introduction of the project, what I did, what I learned, etc.",
                                challenges:     "challenges I faced during the project, how I overcame them, what I learned from them, etc.",
                                approach:       "the approach I took to solve the challenges, how I structured my work, what I learned from it, etc.",
                                result:         "the result of the project, what I achieved, what I learned from it, etc.",
                                img_01:         "../src/assets/images/map/img.png",
                                img_02:         "../src/assets/images/map/img.png",
                                imgList:        [
                                    "../src/assets/images/map/img.png",
                                ],
                                colors:         ["#F4F4F4", "#000000", "#B41C1C", "#8C8C8C", "#6A4C9C"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#peekaboo",
                                next:           "project.html#prularia"
                            }
                        ]
                    },
                    {
                        id:             "#prularia",
                        field:          "#development",
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
                        field:        "#development",
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
                        field:          "#development",
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
                        field:          "#development",
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
                        field:          "#development",
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