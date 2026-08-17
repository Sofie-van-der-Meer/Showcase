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
                        img:            "../src/assets/images/development/tamagotchi/home.png",
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
                        school:   "Erasmus Brussels University",
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
                        school:   "Art Academy Heusden-Zolder",
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
                ],
                
                textBtn_1:      "Landscape Design",
                textBtn_2:      "Art",
                textBtn_3:      "Development",
                textBtn_4:      "All works",
                urlBtn_1:       "projects.html#landscape-design",
                urlBtn_2:       "projects.html#art",
                urlBtn_3:       "projects.html#development",
                urlBtn_4:       "projects.html",
            },
            {
                id:         "Projects_List",
                projects:   [
                    // landscape design
                        // De Plas
                    {
                        id:             "#de-plas",
                        field:          "#landscape-design",
                        img:            "../src/assets/images/landscapedesign/De_Plas/Watersportzone.png",
                        imgAlt:         "Design of the watersports area in Recreational Domain De Plas.",
                        title:          "De Plas",
                        description:    "Redesigned Recreational Domain De Plas into a future-proof destination that seamlessly combines recreation, nature, accessibility, and event infrastructure.",
                        urlBtn:         "project.html#de-plas",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/landscapedesign/De_Plas/Watersportzone.png",
                                imgAlt:         "Design of the watersports area in Recreational Domain De Plas.",
                                title:          "De Plas",
                                projecttype:    ["Landscape", "public space"],
                                

                                date:           "2020 - 2023",
                                // duration:    "",
                                location:       "Binnenvaartstraat, Houthalen-Helchteren, Limburg",
                                role:           "Landscape architect",
                                client:         "Agency for nature and forests (ANB), the town Houthalen-Helchteren and other partners",
                                company:        "Agency for nature and forests (ANB)",
                                // languages:   [""],
                                // library:     [""],
                                // medium:      "",
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                        
                                text_01:        "The redevelopment of Recreational Domain De Plas in Houthalen-Helchteren focused on transforming an outdated recreation area into an attractive, accessible, and future-proof destination. The site contained aging infrastructure, extensive worn asphalt surfaces, and a fragmented spatial layout that reduced both its visual appeal and user experience. As landscape architect, I was responsible for the design process from concept development through to the final design. The project provided valuable experience in balancing recreation, nature conservation, accessibility, and event infrastructure within a single landscape vision while collaborating closely with rangers, site managers, municipal services, and project partners.",
                                text_02:        "One of the main challenges was responding to the site's many and sometimes conflicting requirements. The domain had to accommodate everyday recreational use, protect surrounding natural areas, support ecological development, and continue functioning as a venue for large-scale events such as Extrema Outdoor. Accessibility was another important consideration, requiring the creation of routes that could be enjoyed by all visitors while respecting sensitive natural habitats. In addition, the design had to integrate existing topography, water edges, circulation routes, and operational needs without compromising the overall landscape experience.",
                                text_03:        "I developed the project through an iterative design process, starting with hand sketches and gradually refining the concept into detailed technical plans in AutoCAD. Regular site visits and design discussions with stakeholders helped ensure that the proposals remained both realistic and aligned with operational requirements. Using Civil 3D and survey data, I calculated earthworks and adjusted the design to work efficiently with the existing terrain. Key interventions included reshaping shorelines to improve safety and ecological value, creating an accessible walking loop, redesigning parking areas with stronger landscape integration, and developing infrastructure that supports event logistics while preserving open recreational space.",
                                text_04:        "The result is a comprehensive landscape design that strengthens the recreational identity of De Plas while improving accessibility, safety, ecological quality, and visitor experience. The design creates a more coherent and attractive environment, encourages visitors to remain within the recreation domain rather than placing pressure on nearby sensitive nature areas, and provides infrastructure that supports both daily use and major events. The project further strengthened my skills in large-scale landscape planning, stakeholder coordination, technical design development, and balancing ecological and recreational objectives.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                img_01:         "../src/assets/images/landscapedesign/De_Plas/Onthaal_En_Zwemzone.png",
                                img_02:         "../src/assets/images/landscapedesign/De_Plas/Watersportzone.png",
                                imgList:        [
                                    "../src/assets/images/landscapedesign/De_Plas/Onthaal_En_Parking.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Paintball_En_Eventementenzone.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Zone_Voor_Paintballveld.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Eventementenzone.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Onthaal_En_Zwemzone.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Parking.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Watersportzone.png",
                                    "../src/assets/images/landscapedesign/De_Plas/Busrotonde.png",
                                ],
                                colors:         [],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#school-velm",
                                next:           "project.html#lookout-platforms"
                            }
                        ]
                    },
                        // lookout platforms
                    {
                        id:             "#lookout-platforms",
                        field:          "#landscape-design",
                        img:            "../src/assets/images/landscapedesign/Lookout_Platforms/view-on-top.jpg",
                        imgAlt:         "View of the nature reservate Webbekomsbroek, on top of the lookout platform.",
                        title:          "Lookout platforms",
                        description:    "Design of two viewing platforms at the locks in the Webbekomsbroek nature reserve.",
                        urlBtn:         "project.html#lookout-platforms",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/landscapedesign/Lookout_Platforms/P2_front-side_finished.jpg",
                                imgAlt:         "The front side of the wooden lookout platform. There is an intrance for the main level and a staircase to go on top of the platform.",
                                title:          "Lookout platforms",
                                projecttype:    ["public space"],

                                date:           "2022 - 2023",
                                // duration:    "",
                                location:       "Webbekomsbroek Nature Reserve, Diest, Flemish-Brabant",
                                role:           ["Landscape architect"],
                                client:         "Locale forest ranger, ANB",
                                company:        "Agency for nature and forests (ANB)",

                                // languages:   [""],
                                // library:     [""],
                                // medium:      "",
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01: "Following the completion of the lookout tower in Borgloon, I was commissioned to design two viewing platforms at the locks in the Webbekomsbroek nature reserve near Diest. The goal was to better integrate the technical infrastructure into the landscape while creating high-quality viewpoints for visitors to enjoy the surrounding nature. As landscape architect, I was responsible for the entire process, from concept design and stakeholder consultations to tender documentation and construction supervision. This project allowed me to further develop my experience in designing recreational infrastructure within a natural environment.",
                                text_02: "One of the main challenges was balancing visitor experience with the technical requirements of the lock infrastructure. During the initial design phase, I explored the possibility of placing a platform on top of the technical building. However, the roof needed to remain accessible for maintenance and future replacement of equipment. Another challenge was creating platforms that were accessible and comfortable for a wide range of visitors while ensuring that the structures remained visually integrated within the landscape.",
                                text_03: "Through a series of design sketches, I explored different options for the location and construction of the platforms. After discussions with stakeholders, the decision was made to position the platforms alongside the lock structures rather than on top of them. This approach also created the opportunity to incorporate sheltered resting areas beneath the platforms. The design was carefully adapted to its surroundings, with particular attention given to accessibility, views, and material selection. In collaboration with a structural engineer, the timber and steel components were further developed and technically detailed for construction.",
                                text_04: "The result is a pair of viewing platforms that successfully integrate technical infrastructure into the landscape while offering visitors attractive viewpoints over the Webbekomsbroek nature reserve. By combining accessibility, functionality, and a thoughtful material palette, the platforms enhance both the visitor experience and the character of the site. The project strengthened my skills in designing landscape structures and translating complex technical and environmental requirements into a coherent and buildable design.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                img_01:         "../src/assets/images/landscapedesign/Lookout_Platforms/view-on-top.jpg",
                                img_02:         "../src/assets/images/landscapedesign/Lookout_Platforms/P2_front-side_finished.jpg",
                                imgList:        [
                                    "../src/assets/images/landscapedesign/Lookout_Platforms/P2_front_finished.jpg",
                                    "../src/assets/images/landscapedesign/Lookout_Platforms/P2_front-side_finished.jpg",
                                    "../src/assets/images/landscapedesign/Lookout_Platforms/view-on-top.jpg",
                                    // "../src/assets/images/landscapedesign/Lookout_Platforms/P1_front_work-in-progress.jpg",
                                    "../src/assets/images/landscapedesign/Lookout_Platforms/P1_front-side_finished.jpg",
                                    "../src/assets/images/landscapedesign/Lookout_Platforms/P1_side_finished.jpg"
                                ],
                                colors:         [],

                                textBtn_1:      "Lookout tower in Borgloon",
                                textBtn_2:      "",
                                urlBtn_1:       "project.html#tower",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#de-plas",
                                next:           "project.html#zoet-water"
                            }
                        ]
                    },
                        // Zoet Water
                    {
                        id:             "#zoet-water",
                        field:          "#landscape-design",
                        img:            "../src/assets/images/landscapedesign/Zoet_Water/Illustration.jpg",
                        imgAlt:         "Plan of the Zoet Water ponds in Oud-Heverlee, with the Vaalbeek flowing alongside the ponds.",
                        title:          "Zoet Water",
                        description:    "As a landscape architect, I contributed to the development of a future vision for the Zoet Water ponds in Oud-Heverlee as part of a multidisciplinary project team.",
                        urlBtn:         "project.html#zoet-water",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/landscapedesign/Zoet_Water/Illustration.jpg",
                                imgAlt:         "Plan of the Zoet Water ponds in Oud-Heverlee, with the Vaalbeek stream flowing through the site.",
                                title:          "Zoet Water",
                                projecttype:    ["Landscape", "public space"],

                                date:           "2022 - 2023",
                                // duration:    "",
                                location:       "Zoet Water, Oud-Heverlee, Flemish-Brabant",
                                role:           "Landscape architect",
                                client:         "Flemish-Brabant, the town Oud-Heverlee and other partners",
                                company:        "Agency for nature and forests (ANB)",

                                // languages:   [""],
                                // library:     [""],
                                // medium:      "",
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "As a landscape architect, I contributed to the development of a future vision for the Zoet Water ponds in Oud-Heverlee as part of a multidisciplinary project team. The project aimed to improve the ecological quality of the ponds while strengthening the site as a gateway to the Brabantse Wouden. This project provided me with valuable experience in large-scale ecological restoration, where ecology, recreation, multidisciplinary collaboration, and technical feasibility all come together.",
                                text_02:     "The ecological quality of the ponds had been under pressure for many years. Due to the existing cascade system of the Vaalbeek, fish migration was impossible, and several pond edges were in poor condition. One of the main challenges was finding a solution that would improve the ecological functioning of the area while remaining technically feasible. Factors such as elevation differences, water levels, available space, and budget constraints had to be carefully considered throughout the design process.",
                                text_03:       "The concept was developed collaboratively within the project team, where different scenarios for the reconfiguration of the Vaalbeek were explored. Ultimately, the decision was made to separate the stream from the ponds and allow it to flow again in its own channel. As part of the design team, I contributed to the further development of the landscape design. During the final phase of my involvement, I used cross-sections to study how the stream could meander through the site and how elevation differences could be resolved to support fish migration. In addition, I carried out earthworks calculations in Civil 3D to determine how much soil could be reused on-site and how much additional material would be required.",
                                text_04:         "The result was an approved concept design that provided a strong foundation for the future restoration of the area. By separating the Vaalbeek from the ponds, the project introduced a sustainable solution that improves the ecological quality of the water system and restores opportunities for fish migration. At the same time, space was created for recreational elements that bring visitors closer to the water and surrounding nature. This project further strengthened my skills in multidisciplinary collaboration, technical analysis, and translating ecological objectives into a landscape design.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                img_01:         "../src/assets/images/landscapedesign/Zoet_Water/Illustration.jpg",
                                img_02:         "../src/assets/images/landscapedesign/Zoet_Water/240114_luchtfoto_plan.jpg",
                                imgList:        [
                                    "../src/assets/images/landscapedesign/Zoet_Water/Illustration.jpg",
                                    "../src/assets/images/landscapedesign/Zoet_Water/240114_luchtfoto_plan.jpg"
                                ],
                                colors:         [],

                                textBtn_1:      "News article about the project",
                                textBtn_2:      "",
                                urlBtn_1:       "https://pers.vlaamsbrabant.be/startschot-voor-het-ecologisch-herstel-van-de-vijvers-van-het-zoet-water-in-oud-heverlee",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#lookout-platforms",
                                next:           "project.html#tower"
                            }
                        ]
                    },
                        // Lookout tower
                    {
                        id:             "#tower",
                        field:          "#landscape-design",
                        img:            "../src/assets/images/landscapedesign/Tower/Sideview_1.jpg",
                        imgAlt:         "Side view of the wooden lookout tower in Borgloon, Limburg.",
                        title:          "Standard model lookout towers",
                        description:    "Flexible standard models for lookout towers that can be adapted to the specific context of different nature reserves. The first implementation was a single-level tower constructed in 2021.",
                        urlBtn:         "project.html#tower",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/landscapedesign/Tower/Sideview_1.jpg",
                                imgAlt:         "Side view of the wooden lookout tower in Borgloon, Limburg.",
                                title:          "Standard model lookout towers",
                                projecttype:    ["public space"],

                                date:           "2020 - 2023",
                                // duration:    "",
                                location:       "Vilsterbron, Tongeren-Borgloon, Limburg",
                                role:           "Landscape architect",
                                client:         "Locale forest ranger, ANB",
                                company:        "Agency for nature and forests (ANB)",

                                // languages:   [""],
                                // library:     [""],
                                // medium:      "",
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "Within the Agency for Nature and Forests, rangers regularly requested lookout towers for nature reserves. At that time, only a standard design for bird hides was available, so my team leader asked me to develop a reusable design for lookout towers. The goal was to create a solution that could be applied across different nature reserves. The project resulted in a modular design with variations in height and width, depending on the context. The viewing tower in Borgloon became the first realised application of this concept.",
                                text_02:     "The main challenge was to develop a single coherent design that was flexible enough to function in different nature reserves, while remaining sufficiently standardised to allow reuse. In addition, the design had to meet high requirements in terms of structural stability, safety, accessibility, and durability, while offering variations in height to suit different locations.",
                                text_03:       "I started with sketch designs exploring different typologies and height variations, ranging from single-level to multi-level towers. I then developed the structural and spatial concept into a coherent standard model. This included defining the spatial layout, staircase configuration, viewing openings, and the detailing of the wooden façade cladding. Material choices were aligned with the organisation’s existing guidelines. In collaboration with a structural engineer, the structural components were further dimensioned, where the engineer was responsible for calculating columns, beams, and metal connections, while I mainly defined the spatial and architectural design. The final concept was presented to rangers and received positive feedback.",
                                text_04:         "The project resulted in a flexible standard model for lookout towers that can be adapted to the specific context of different nature reserves. The first implementation took place in Borgloon, where a single-level tower was constructed in 2021. After that, the model was further applied and explored for other locations with different site conditions. This project strengthened my experience in developing reusable design concepts, technically detailing structures, and collaborating with engineers.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                img_01:         "../src/assets/images/landscapedesign/Tower/View_on_top_2.jpg",
                                img_02:         "../src/assets/images/landscapedesign/Tower/Sideview_1.jpg",
                                imgList:        [
                                    "../src/assets/images/landscapedesign/Tower/Frontview.jpg",
                                    "../src/assets/images/landscapedesign/Tower/Sideview_1.jpg",
                                    "../src/assets/images/landscapedesign/Tower/Sideview_2.jpg",
                                    "../src/assets/images/landscapedesign/Tower/Plan_sidesections.png",
                                    "../src/assets/images/landscapedesign/Tower/Plan_floorsections_small_tower.png",
                                    "../src/assets/images/landscapedesign/Tower/Plan_floorsections_wide_tower.png",
                                    "../src/assets/images/landscapedesign/Tower/Staircase.jpg",
                                    "../src/assets/images/landscapedesign/Tower/Detail_lookout_windows.jpg",
                                    "../src/assets/images/landscapedesign/Tower/Detail_staircase.jpg",
                                    "../src/assets/images/landscapedesign/Tower/View_on_top_1.jpg",
                                    "../src/assets/images/landscapedesign/Tower/View_on_top_2.jpg"
                                ],
                                colors:         [],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#zoet-water",
                                next:           "project.html#elzenhof"
                            }
                        ]
                    },
                        // Elzenhof
                    {
                        id:             "#elzenhof",
                        field:          "#landscape-design",
                        img:            "../src/assets/images/landscapedesign/Elzenhof/3D_beeld.png",
                        imgAlt:         "3D visualization of the design for the Elzenhof site in Nieuwland, Aarschot.",
                        title:          "Elzenhof - Nieuwland",
                        description:    "This studentproject explores how an existing industrial area within a valley landscape can be redesigned into a more biodiverse and landscape-integrated environment.",
                        urlBtn:         "project.html#elzenhof",
                        sections:       [
                            {                               
                                id:             "Project_Top",
                                img:            "../src/assets/images/landscapedesign/Elzenhof/3D_beeld.png",
                                imgAlt:         "3D visualization of the design for the Elzenhof site in Nieuwland, Aarschot.",
                                title:          "Elzenhof - Nieuwland",
                                projecttype:    ["Landscape", "public space", "Semi-public space"],

                                date:           "February 2017 - June 2017",
                                // duration:    "",
                                location:       "Industrial area Nieuwland, Aarschot, Flemish-Brabant",
                                role:           "Student",
                                client:         "",
                                company:        "Erasmus Brussels University (EhB)",

                                // languages:   [""],
                                // library:     [""],
                                // medium:      "",
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:        "For the school project Elzenhof, I developed a design for a site located in the Nieuwland industrial area in Aarschot. The project explores how an existing industrial area within a valley landscape can be redesigned into a more biodiverse and landscape-integrated environment.",
                                text_02:        "The site is located in a valley area with flood sensitivity, which formed an important design constraint. In addition, the area consisted of a typical industrial landscape with limited ecological cohesion. The challenge was to reconcile water management, industrial activity, and landscape quality within a single coherent design approach.",
                                text_03:        "The design is structured around water as the main organizing element. It introduces ponds and water surfaces to buffer excess water during wet periods, combined with natural water purification systems. Along the roads, rain gardens with avenue trees were integrated to support infiltration. A green zone around the industrial buildings connects the adjacent Elzenhof forest park with the industrial area, supported by walking paths and green linkages. The existing buildings were also considered in the design, with attention to sustainable materials such as wooden façades, extensive glazing for natural light, green façades, and solar panels on the roofs.",
                                text_04:        "The result is a conceptual design in which a conventional industrial area is reimagined as a green and water-resilient landscape. By combining water buffering, infiltration strategies, and green structures with a renewed approach to the built environment, a more coherent and future-oriented industrial landscape is created that integrates with the surrounding context.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                img_01:         "../src/assets/images/landscapedesign/Elzenhof/Detailsnede_Nieuwlandlaan.png",
                                img_02:         "../src/assets/images/landscapedesign/Elzenhof/Detailsnede_Nieuwlandpark.png",
                                imgList:        [
                                    "../src/assets/images/landscapedesign/Elzenhof/Ontwerpvoorstel.png",
                                    "../src/assets/images/landscapedesign/Elzenhof/3D_beeld.png",
                                    "../src/assets/images/landscapedesign/Elzenhof/Detailsnede_Nieuwlandlaan.png",
                                    "../src/assets/images/landscapedesign/Elzenhof/Detailsnede_Nieuwlandpark.png",
                                ],
                                colors:         [],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#tower",
                                next:           "project.html#school-velm"
                            }
                        ]
                    },
                        // School Velm
                    {
                        id:             "#school-velm",
                        field:          "#landscape-design",
                        img:            "../src/assets/images/landscapedesign/School_Velm/Grondplan.jpg",
                        imgAlt:         "Plan of the school playground in Velm, with the new design for the playground.",
                        title:          "School playground",
                        description:    "The school playground in Velm was redesigned to create a greener and more interactive outdoor environment for the pupils, incorporating play, nature, and learning elements.",
                        urlBtn:         "project.html#school-velm",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/landscapedesign/School_Velm/Grondplan.jpg",
                                imgAlt:         "Plan of the school playground in Velm, with the new design for the playground.",
                                title:          "School playground",
                                projecttype:    ["semi-public space"],

                                date:           "October 2017 - December 2017",
                                // duration:    "",
                                location:       "Primary school 't Vlindertje, Battelestraat 18, Sint-Truiden, Limburg",
                                role:           ["intern", "landscape architect"],
                                client:         "Primary school 't Vlindertje",
                                company:        "Regional Landscapes Hesbaye & Voeren (RLHV)",

                                // languages:   [""],
                                // library:     [""],
                                // medium:      "",
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "The school playground consisted of a paved area and a large grass surface, with a number of trees and other existing vegetation along the edge of the site. The school’s goal was to further green the playground and make it more interactive for the pupils.",
                                text_02:     "The existing playground offered limited variation in use, with a strong focus on hard surfaces and open grass areas. The challenge was to transform it into a more diverse and engaging outdoor environment that combines play, nature, and learning, while working within the constraints of the existing site structure.",
                                text_03:       "The design introduces additional trees, including oak, maple, hornbeam, and walnut trees. Fruit trees such as plum, apple, and pear are planted in a structured grid, forming a small orchard with picnic tables. New play elements are added, including willow huts and tunnels, a sandpit, a mud kitchen, and a stage. A central amphitheatre provides a space for presentations, performances, and group activities. The football field is reduced in size and relocated, with extensive grass management around it to slow down the ball when it leaves the pitch. A slide is repositioned on a steeper slope within the playground. An educational zone is also introduced, including a vegetable garden, an outdoor kitchen, picnic areas, a fruit hedge, and a small water feature for nature-related learning. A narrow path connects the different parts of the playground, allowing teachers to move across the entire site.",
                                text_04:         "The result is a greener and more diverse school playground that combines play, education, and nature. The design creates a varied outdoor environment that encourages children to explore, learn, and interact within a natural setting.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                img_01:         "../src/assets/images/landscapedesign/School_Velm/Concept.png",
                                img_02:         "../src/assets/images/landscapedesign/School_Velm/Grondplan.jpg",
                                imgList:        [
                                    "../src/assets/images/landscapedesign/School_Velm/Concept.png",
                                    "../src/assets/images/landscapedesign/School_Velm/Grondplan.jpg",
                                ],
                                colors:         [],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#elzenhof",
                                next:           "project.html#de-plas"
                            }
                        ]
                    },
                        // Cuypergaerde
                    // {
                    //     id:             "#cuypergaerde",
                    //     field:          "#landscape-design",
                    //     img:            "../src/assets/icons/cubes-stacked.svg",
                    //     imgAlt:         "boxes stacked on top of each other, logo of project tower",
                    //     title:          "tower",
                    //     description:    "description of the project.",
                    //     urlBtn:         "project.html#cuypergaerde",
                    //     sections:       [
                    //         {
                    //             id:             "Project_Top",
                    //             websiteType:    ["Landscape design", "Garden Design", "Urban design", "Public design", "Semi-public design"], //sort project
                    //             img:            "../src/assets/icons/cubes-stacked.svg",
                    //             imgAlt:         "boxes stacked on top of each other, logo of project tower",
                    //             title:          "tower",
                    //             languages:      ["Student", "Internship", "Professional"], //sort projectrole
                    //             library:        ["EhB", "Tielens Tuinen", "ANB"], //company
                    //             date:           "Month 20.."
                    //         },
                    //         {
                    //             id:             "Project_Content",
                                
                    //             text_01:   "introduction of the project, what I did, what I learned, etc.",
                    //             text_02:     "challenges I faced during the project, how I overcame them, what I learned from them, etc.",
                    //             text_03:       "the approach I took to solve the challenges, how I structured my work, what I learned from it, etc.",
                    //             text_04:         "the result of the project, what I achieved, what I learned from it, etc.",
                    //             img_01:         "",
                    //             img_02:         "../src/assets/images/map/img.png",
                    //             imgList:        [
                    //                 "../src/assets/images/map/img.png",
                    //             ],
                    //             colors:         [],

                    //             textBtn_1:      "",
                    //             textBtn_2:      "",
                    //             urlBtn_1:       "",
                    //             urlBtn_2:       "",
                    //         },
                    //         {
                    //             id:             "Project_Bottom",
                    //             previous:       "project.html#previous-project",
                    //             next:           "project.html#next-project"
                    //         }
                    //     ]
                    // },
                        // Egelpad
                    // {
                    //     id:             "#tower",
                    //     field:          "#landscape-design",
                    //     img:            "../src/assets/icons/cubes-stacked.svg",
                    //     imgAlt:         "boxes stacked on top of each other, logo of project tower",
                    //     title:          "tower",
                    //     description:    "description of the project.",
                    //     urlBtn:         "project.html#tower",
                    //     sections:       [
                    //         {
                    //             id:             "Project_Top",
                    //             websiteType:    ["Landscape design", "Garden Design", "Urban design", "Public design", "Semi-public design"], //sort project
                    //             img:            "../src/assets/icons/cubes-stacked.svg",
                    //             imgAlt:         "boxes stacked on top of each other, logo of project tower",
                    //             title:          "tower",
                    //             languages:      ["Student", "Internship", "Professional"], //sort projectrole
                    //             library:        ["EhB", "Tielens Tuinen", "ANB"], //company
                    //             date:           "Month 20.."
                    //         },
                    //         {
                    //             id:             "Project_Content",
                                
                    //             text_01:   "introduction of the project, what I did, what I learned, etc.",
                    //             text_02:     "challenges I faced during the project, how I overcame them, what I learned from them, etc.",
                    //             text_03:       "the approach I took to solve the challenges, how I structured my work, what I learned from it, etc.",
                    //             text_04:         "the result of the project, what I achieved, what I learned from it, etc.",
                    //             img_01:         "",
                    //             img_02:         "../src/assets/images/map/img.png",
                    //             imgList:        [
                    //                 "../src/assets/images/map/img.png",
                    //             ],
                    //             colors:         [],

                    //             textBtn_1:      "",
                    //             textBtn_2:      "",
                    //             urlBtn_1:       "",
                    //             urlBtn_2:       "",
                    //         },
                    //         {
                    //             id:             "Project_Bottom",
                    //             previous:       "project.html#previous-project",
                    //             next:           "project.html#next-project"
                    //         }
                    //     ]
                    // },
                    // Art Projects
                        // Baphomet
                    {
                        id:             "#baphomet",
                        field:          "#art",
                        img:            "/src/assets/images/art/Baphomet/IMG_20260709_183402.jpg",
                        imgAlt:         "Claysculpture of the horns for the cosplay character Baphomet.",
                        title:          "Baphomet",
                        description:    "I'm currently working on a cosplay project where I am creating a costume of the character Baphomet. The project involves sculpting the horns and other elements of the costume.",
                        urlBtn:         "project.html#baphomet",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "/src/assets/images/art/Baphomet/IMG_20260709_183402.jpg",
                                imgAlt:         "Claysculpture of the horns for the cosplay character Baphomet.",
                                title:          "Baphomet",
                                projecttype:    ["Cosplay"],

                                date:           "July 2026 - August 2026",
                                // duration:    "",
                                // location:    "",
                                role:           ["Artist"],
                                client:         "Personal work",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["drawing", "sculpture", "textiles", "mixed media"],
                                materials:      ["Plasticine clay", "silicone", "polyurethane resin", "EVA foam", "cotton"],
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This project is my second year participating in cosplay and is currently still in development. After attending my first cosplay event last year, I wanted to challenge myself by creating a more ambitious look while exploring new techniques within prop making and costume design. \n\n As I am exploring a future as a professional artist, this project gives me the opportunity to experiment with sculpting, mould making, and casting techniques that can also be applied to future creations.",
                                text_02:     "The idea for this cosplay comes from the general appearance of Baphomet and a Pinterest image featuring dramatic Baphomet-inspired face paint. I was inspired by the strong visual impact of the makeup and wanted to create my own interpretation. \n\n During my journey into alternative, gothic, metalhead, and darker aesthetics, I discovered new sides of my own style and interests. This exploration is one of the reasons why I feel drawn to the imagery of Baphomet: the combination of mystery, symbolism, and dark fantasy strongly connects with the aesthetic I have been developing. \n\n The final look will consist of sculpted horns, ears, wings, facial hair, and a dark whimsical gothic style. The clothing is still being explored and will depend on the time available before the cosplay event.",
                                text_03:       "The horns are currently the most developed part of the project. I created an internal structure using wood and metal wire, then built up the shape with plasticine clay. One horn has the complete basic form, while the other is still being developed. The next step will be adding realistic horn textures before creating moulds and lightweight casts. \n\n For the wings, I started designing a construction that can attach to a gothic harness I recently bought. The harness inspired me to reuse it as a possible base structure for the wings. Currently, only the first foam base layers have been created; the attachment system, internal support, feathers, and details still need to be developed. \n\n I also designed the makeup by drawing on a copy of my own face, using the Baphomet reference and goat features as inspiration. For the beard, I collected hair from my own haircut and am exploring how to combine it with fibres from a black wig.",
                                text_04:         "There is still a lot to finish before the cosplay event. The horns need their final details before mould making can begin, and the wings require most of their construction and finishing work. \n\n The clothing will depend on the time available. Ideally, I would like to create parts of the outfit myself using the sewing skills I developed while studying fashion and creation as a teenager. If time becomes limited, I will combine existing pieces from my wardrobe. \n\n This project is an experiment in combining cosplay, prop making, sculpting, and costume design while developing new techniques for future artwork.",
                                text_title_01:  "introduction",
                                text_title_02:  "concept & inspiration",
                                text_title_03:  "current progress",
                                text_title_04:  "what's next",

                                img_01:         "/src/assets/images/art/Baphomet/IMG_20260704_192408.jpg",
                                img_02:         "/src/assets/images/art/Baphomet/IMG_20260709_183347.jpg",
                                imgList:        [
                                    "/src/assets/images/art/Baphomet/IMG_20260704_192340.jpg",
                                    "/src/assets/images/art/Baphomet/IMG_20260704_192408.jpg",
                                    "/src/assets/images/art/Baphomet/IMG_20260709_183347.jpg",
                                    "/src/assets/images/art/Baphomet/IMG_20260709_183357.jpg",
                                    "/src/assets/images/art/Baphomet/IMG_20260709_183402.jpg",
                                    "/src/assets/images/art/Baphomet/IMG_20260709_183417.jpg",
                                ],
                                colors:         [],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#boy",
                                next:           "project.html#dragon"
                            }
                        ]
                    },
                        // Dragon
                    {
                        id:             "#dragon",
                        field:          "#art",
                        img:            "/src/assets/images/art/Dragon/IMG_20260605_185825.jpg",
                        imgAlt:         "Mural of a dragon, the dragon breads fire, the lighting of the fire refelcts on the dragons scales.",
                        title:          "Dragon",
                        description:    "For a family member I created a mural of a dragon, the dragon breads fire, the lighting of the fire refelcts on the dragons scales.",
                        urlBtn:         "project.html#dragon",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "/src/assets/images/art/Dragon/IMG_20260605_185825.jpg",
                                imgAlt:         "Mural of a dragon, the dragon breads fire, the lighting of the fire refelcts on the dragons scales.",
                                title:          "Dragon",
                                projecttype:    ["Mural"],

                                date:           "April 2026 - June 2026",
                                duration:       "5 days",
                                // location:       "",
                                role:           ["Artist"],
                                client:         "Personal work",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["painting"],
                                materials:      ["Wall paint (custom hand-mixed) colours"],
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This wall mural was created for my youngest nephew after I had painted a mural for his older brother a few years earlier. Since he loves dragons, my sister asked if I could create a dragon mural for his bedroom as well.\n\nBesides creating the mural, the project gave me valuable experience in planning a smaller wall mural over multiple sessions. Since I could only paint while my nephew wasn't using his room, I learned to organise the work efficiently and gained a better understanding of the time involved in completing a mural like this.",
                                text_02:     "Instead of painting a static dragon, I imagined a scene where the dragon was breathing fire, with the flames illuminating its face and scales. I liked the idea of telling a small story rather than simply painting the animal itself. My sister liked the concept as well, but asked me to make sure the dragon wouldn't look too frightening for a young child.\n\nSince I had never drawn dragons before, I searched for reference images to better understand their anatomy and appearance. I selected two designs that matched the scene I had in mind, and my nephew's family chose the one they liked best.",
                                text_03:       "",
                                text_04:         "",
                                text_title_01:  "introduction",
                                text_title_02:  "concept & inspiration",
                                text_title_03:  "",
                                text_title_04:  "",

                                img_01:         "../src/assets/images/art/Dragon/IMG_20260605_185825_cropped.jpg",
                                // img_02:         "../src/assets/images/art/Dragon/IMG_20260605_185825.jpg",
                                imgList:        [
                                    "../src/assets/images/art/Dragon/IMG_20260417_114501.jpg",
                                    "../src/assets/images/art/Dragon/IMG_20260417_182422.jpg",
                                    "../src/assets/images/art/Dragon/IMG_20260424_194309.jpg",
                                    "../src/assets/images/art/Dragon/IMG_20260508_192212.jpg",
                                    "../src/assets/images/art/Dragon/IMG_20260515_133209.jpg",
                                    "../src/assets/images/art/Dragon/IMG_20260515_181346.jpg",
                                    "../src/assets/images/art/Dragon/IMG_20260605_185825.jpg"
                                ],
                                colors:         ["#354751", "#302E43", "#C28E2B", "#A6482C", "#7D6A3F"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#baphomet",
                                next:           "project.html#forest"
                            }
                        ]
                    },
                        // Forest
                    {
                        id:             "#forest",
                        field:          "#art",
                        img:            "../src/assets/images/art/Forest/IMG_20260329_092812.jpg",
                        imgAlt:         "Large forest mural depicting a sunlit forest filled with native wildlife, including a fox, roe deer, birds, and other woodland animals.",
                        title:          "Forest in Summertime",
                        description:    "As a birthday gift for my mother, I created a large forest mural depicting a sunlit forest filled with native wildlife, including a fox, roe deer, birds, and a mouse.",
                        urlBtn:         "project.html#forest",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/art/Forest/IMG_20260329_092921.jpg",
                                imgAlt:         "Large forest mural depicting a sunlit forest filled with native wildlife, including a fox, roe deer, birds, and other woodland animals.",
                                title:          "Forest in Summertime",
                                projecttype: ["Mural"],

                                date:           "February - March 2026",
                                duration:       "2 months",
                                location:       "Private residence",
                                role:           ["Artist"],
                                client:         "Personal work",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["painting"],
                                materials:      ["Wall paint (custom hand-mixed) colours"],
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This mural was created as a birthday present for my mother's 60th birthday. She loves nature and wildlife and originally wanted a painting of an owl on the plain white wall of her bathroom. Around that time I was considering exploring mural painting professionally, so this project became the perfect opportunity to experiment, gain experience, and challenge myself with a large-scale artwork. \n\n Rather than painting a single owl, we quickly agreed that transforming the entire wall into a forest scene would create a much more immersive atmosphere.",
                                text_02:     "The mural depicts a peaceful forest filled with native wildlife, including a fox, roe deer, birds, a mouse, mushrooms, ferns, and other woodland details. The composition is built around the golden spiral, guiding the viewer's eye through the scene towards the sunlight shining through the trees. \n\n As the design developed, we decided to continue the composition onto a second wall, allowing the fox to become part of a larger scene instead of feeling confined to a single surface. Finding the right composition was initially difficult, especially with the bathroom window interrupting the main wall. The breakthrough came unexpectedly when I visualised the entire scene in my head one evening and immediately sketched the layout before I could forget it.",
                                text_03:       "Before starting, I watched several mural artists to better understand how large wall paintings are approached. One workflow particularly inspired me, as it closely resembled the process of creating a digital painting: beginning with large colour blocks before gradually refining the details. \n\n To make colour mixing more flexible, I had a paint shop mix a selection of base wall paint colours that are commonly used in traditional painting. Instead of relying on ready-made colours, I mixed every shade myself throughout the project, which was a valuable learning experience. \n\n Unlike many of my previous artworks, I didn't simply copy a reference image. Instead, I combined multiple references while continuously adjusting the composition as the mural evolved. For example, the fox's pose was created from several photographs because I couldn't find a reference that matched exactly what I envisioned. I also studied real birch trees outdoors to better understand how sunlight affects their bark before painting them into the mural.",
                                text_04:         "This project took considerably longer than I originally expected and wasn't finished in time for my mother's birthday. Even so, I didn't want to compromise on the level of detail. Small discoveries, such as the hidden ant hill beneath the bathroom cabinet or the mouse hiding in the undergrowth, reward viewers who take the time to explore the mural. \n\n I'm incredibly proud of the final result. It perfectly matches my mother's love for nature and has become a unique centrepiece in her home. The project taught me a great deal about composition, colour mixing, large-scale planning, and working without relying entirely on a single reference image. Although it confirmed that I enjoy creating murals, it also made me realise just how much time highly detailed wall paintings require, and that I would probably approach projects of this scale differently in the future.",
                                text_title_01:  "introduction",
                                text_title_02:  "concept & inspiration",
                                text_title_03:  "creation process",
                                text_title_04:  "reflection",
                                                                
                                img_01:         "../src/assets/images/art/Forest/IMG_20260329_092812.jpg",
                                img_02:         "../src/assets/images/art/Forest/IMG_20260329_092921.jpg",
                                imgList:        [
                                    "../src/assets/images/art/Forest/IMG_20260329_092739.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092751.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092805.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092812.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092831.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092842.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092854.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092921.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092936.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_092947.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_093009.jpg",
                                    "../src/assets/images/art/Forest/IMG_20260329_093026.jpg"
                                ],
                                video:          "../src/assets/images/art/Forest/ForestInSummertime.mp4",
                                colors:         ["#94604A", "#CBC2C3", "#55473E", "#4D6438", "#233A1E", "#BDA670", "#91A067"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#dragon",
                                next:           "project.html#lion"
                            }
                        ]
                    },
                        // Lion
                    {
                        id:             "#lion",
                        field:          "#art",
                        img:            "../src/assets/images/art/Lion/IMG_20251015_083329_cropped.jpg",
                        imgAlt:         "Wall mural of a mythical lion with deer antlers, painted with gold spray paint and detailed using black and white wall paint.",
                        title:          "Mythical Lion",
                        description:    "As part of redesigning my bedroom in a gothic and bohemian style, I created a mural of a mythical creature with the face of a lion and the ears and antlers of a roe deer.",
                        urlBtn:         "project.html#lion",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/art/Lion/IMG_20250920_183045.jpg",
                                imgAlt:         "Wall mural of a mythical lion with deer antlers, painted with gold spray paint and detailed using black and white wall paint.",
                                title:          "Mythical Lion",
                                projecttype:    ["Mural"],

                                date:           "September 2025",
                                duration:       "+- one week",
                                location:       "Private residence",
                                role:           ["Artist"],
                                client:         "Personal work",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["painting"],
                                materials:      ["Gold spray paint", "black and white wall paint"],
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This mural was created as part of the complete redesign of my bedroom. I wanted to move away from the room's original appearance and create a space that better reflected my personal style. Inspired by gothic and bohemian interiors, I painted two walls black and one in a deep green tone, decorated the room with vintage picture frames, and planned several future artworks to complete the space. \n\n The lion mural became the centrepiece of the room, bringing together my love for mythology, nature, and expressive animal portraits.",
                                text_02:     "The idea for this creature came from combining two different inspirations. I've always liked the majestic appearance of lions, especially their long, wild mane, while antlers add a mythical and almost fantasy-like character. By combining the face of a lion with the ears and antlers of a roe deer, I created a creature that feels both powerful and mysterious. \n\n The visual style was inspired by a black, white, and gold lion painting I discovered on Pinterest. I immediately fell in love with the limited colour palette and dramatic contrast, and decided to create my own interpretation using those colours.",
                                text_03:       "To create the mural, I gathered reference photographs of both a lion and a roe deer. Using a projector, I projected the references onto the wall to sketch the initial outlines. Because the two animals came from different photographs, matching their proportions and viewing angles wasn't always straightforward. At the time I hadn't drawn for quite a while, so using a projector gave me the confidence to tackle such a large wall painting. \n\n The first layers were applied with gold spray paint, which was my first time working with this medium. Once the base colours were finished, I added highlights using white wall paint. Unfortunately, the paint was several years old and had become thick and lumpy, making it difficult to apply cleanly. Although it made the detailing more challenging, the uneven texture unexpectedly added an interesting relief to the mural. \n\n While adding the highlights, I noticed another issue. Because I had combined two different reference photos, the light source on the lion and the antlers came from different directions. Rather than leaving the inconsistency, I repainted the lighting on the antlers so that the entire creature was illuminated from a single, believable light source. \n\n The mural was completed through multiple layers of gold, white, and finally black wall paint, gradually refining the details and increasing the overall contrast.",
                                text_04:         "This project was a valuable learning experience. It was my first time incorporating spray paint into an artwork, and I learned how important consistent lighting is when combining multiple reference images into a single composition. \n\n Despite the challenges, I'm very proud of the final result. The mural became the focal point of my redesigned bedroom and perfectly captures the atmosphere I wanted to create. Looking back, it marks an important step in becoming more confident with large-scale murals and experimenting with new materials and techniques.",
                                text_title_01:  "introduction",
                                text_title_02:  "concept & inspiration",
                                text_title_03:  "creation process",
                                text_title_04:  "reflection",

                                img_01:         "../src/assets/images/art/Lion/IMG_20250920_183045.jpg",
                                img_02:         "../src/assets/images/art/Lion/IMG_20250920_183045.jpg",
                                imgList:        [
                                    "../src/assets/images/art/Lion/IMG_20250912_215053.jpg",
                                    "../src/assets/images/art/Lion/IMG_20250913_222856.jpg",
                                    "../src/assets/images/art/Lion/IMG_20250913_223731.jpg",
                                    "../src/assets/images/art/Lion/IMG_20250917_210016.jpg",
                                    "../src/assets/images/art/Lion/IMG_20250920_183045.jpg"
                                ],
                                colors:         ["#F4F4F4", "#000000", "#D4AF37"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#forest",
                                next:           "project.html#bear"
                            }
                        ]
                    },
                        // Bear
                    {
                        id:             "#bear",
                        field:          "#art",
                        img:            "../src/assets/images/art/Bear/IMG_20260720_171134.jpg",
                        imgAlt:         "Pastel drawing of a roaring bear looking to the side, created with pastel on black paper.",
                        title:          "Bear, pastel study",
                        description:    "Created during a drawing course at the Art Academy, this pastel study recreates a reference photograph of a roaring bear.",
                        urlBtn:         "project.html#bear",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/art/Bear/IMG_20260720_171126.jpg",
                                imgAlt:         "Pastel drawing of a roaring bear looking to the side, created with pastel on black paper.",
                                title:          "Bear, pastel study",
                                projecttype:    ["Pastel drawing"],

                                date:           "2019",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Artist"],
                                client:         "Art Academy Heusden-Zolder",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["drawing"],
                                materials:      ["Pastel", "black paper"]
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This pastel drawing was created as part of a drawing course at the Art Academy. The assignment was to recreate a reference photograph of a roaring bear using pastel on black paper.\n\nAlthough it was completed as a study, it remains one of my favourite drawings from the course and is a piece I'm still proud to include in my portfolio.",
                                text_02:     "The drawing was built up on black paper using layers of pastel to gradually develop the fur, lighting, and facial features. Working on a dark surface meant that both the highlights and midtones had to be carefully established to create contrast and volume.\n\nThe focus of the assignment was on observation, colour, texture, and accurately translating the reference image into a finished pastel drawing.",
                                text_03:       "",
                                text_04:         "Looking back, this drawing represents an important moment in my development as an artist. It strengthened my observation skills and gave me valuable experience with pastel as a medium. Even years later, it remains one of the artworks I am most proud of from my time at the Art Academy.",
                                text_title_01:  "introduction",
                                text_title_02:  "approach",
                                text_title_03:  "",
                                text_title_04:  "reflection",

                                img_01:         "../src/assets/images/art/Bear/IMG_20260720_171134.jpg",
                                img_02:         "../src/assets/images/art/Bear/IMG_20260720_171120.jpg",
                                imgList:        [
                                    "../src/assets/images/art/Bear/IMG_20260720_171120.jpg",
                                    "../src/assets/images/art/Bear/IMG_20260720_171126.jpg",
                                    "../src/assets/images/art/Bear/IMG_20260720_171134.jpg",
                                    "../src/assets/images/art/Bear/IMG_20260720_171148.jpg"
                                ],
                                colors:         ["#979272", "#FFFFFF", "#000000", "#997A89", "#B9648B"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#lion",
                                next:           "project.html#bluehues"
                            }
                        ]
                    },
                        // The fall in Blue hues
                    {
                        id:             "#bluehues",
                        field:          "#art",
                        img:            "../src/assets/images/art/BlueHues/IMG_20260721_135512.jpg",
                        imgAlt:         "Artwork where two artists were combined into one artwork, the artwork is made with a blue background and a drawing made with white, brown and black colors.",
                        title:          "The fall in Blue hues",
                        description:    "Created as part of an art history course at the Art Academy, this project combines the artistic influences of Luca Giordano and Pablo Picasso into a single composition.",
                        urlBtn:         "project.html#bluehues",
                        sections:       [
                            {
                                id:             "Project_Top",
                                img:            "../src/assets/images/art/BlueHues/IMG_20260721_135431.jpg",
                                imgAlt:         "Artwork where two artists were combined into one artwork, the artwork is made with a blue background and a drawing made with white, brown and black colors.",
                                title:          "The fall in Blue hues",
                                projecttype:    ["Drawing"],

                                date:           "2019",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Artist"],
                                client:         "Art Academy Heusden-Zolder",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["mixed media"],
                                materials:      ["Conté pencils", "paper with a blue hand-painted background"],
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This artwork was created as part of an art history assignment at the Art Academy. The goal was to combine two artists into a single artwork, regardless of the period they lived in or whether they had ever influenced one another.\n\nFor this project, I combined the work of Luca Giordano and Pablo Picasso, using their artistic styles and historical context as the basis for a new interpretation.",
                                text_02:     "The composition is based on The Fall of the Rebel Angels by Luca Giordano, while the overall atmosphere is inspired by Pablo Picasso's Blue Period. To reinforce this connection, the background was painted in blue before the drawing was developed using Conté pencils.\n\nRather than simply merging two visual styles, I wanted to create a narrative. In my interpretation, Picasso stands at the top of the composition while other artists fall beneath him, echoing the composition of Giordano's painting. The fallen figures, including Salvador Dalí and some of Picasso's former partners, represent my interpretation of the relationships and influence surrounding Picasso.",
                                text_03:       "The Fall of the Rebel Angels (Luca Giordano) and Pablo Picasso's Blue Period.",
                                text_04:         "This assignment challenged me to think beyond technique and instead focus on storytelling through art history. Rather than copying existing artworks, I had to analyse the characteristics of two artists and combine them into a single concept that remained visually connected to both.\n\nLooking back, I still enjoy how the composition, colour palette, and symbolism come together to tell a new story while remaining recognisable as a dialogue between two very different artists.",
                                text_title_01:  "introduction",
                                text_title_02:  "concept",
                                text_title_03:  "inspired by",
                                text_title_04:  "reflection",

                                img_01:         "../src/assets/images/art/BlueHues/IMG_20260721_135512.jpg",
                                img_02:         "../src/assets/images/art/BlueHues/IMG_20260721_135450.jpg",
                                imgList:        [
                                    "../src/assets/images/art/BlueHues/IMG_20260721_135431.jpg",
                                    "../src/assets/images/art/BlueHues/IMG_20260721_135442.jpg",
                                    "../src/assets/images/art/BlueHues/IMG_20260721_135450.jpg",
                                    "../src/assets/images/art/BlueHues/IMG_20260721_135506.jpg",
                                    "../src/assets/images/art/BlueHues/IMG_20260721_135512.jpg"
                                ],
                                colors:         ["#57BDD4", "#4489AA", "#E8E8E6", "#805C4C", "#5A463D", "#4C4D48"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#bear",
                                next:           "project.html#boy"
                            }
                        ]
                    },
                        // Boy
                    {
                        id:             "#boy",
                        field:          "#art",
                        img:            "../src/assets/images/art/Boy/IMG_20260720_170816_cropped.jpg",
                        imgAlt:         "Drawing of a boy standing at a table in the artstyle pointïsme.",
                        title:          "Boy, pointillism study",
                        description:    "Created during a drawing course at the Art Academy, this pointillism study recreates part of an old painting using black fineliner on white paper.",
                        urlBtn:         "project.html#boy",
                        sections:       [
                            {
                                id:             "Project_Top",
                                websiteType:    ["Pointillism Drawing"], //sort project
                                img:            "../src/assets/images/art/Boy/IMG_20260720_170816_cropped.jpg",
                                imgAlt:         "Drawing of a boy standing at a table in the artstyle pointïsme.",
                                title:          "Boy, pointillism study",
                                projecttype:    ["Drawing"],

                                date:           "2019",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Artist"],
                                client:         "Art Academy Heusden-Zolder",
                                // company:     "",

                                // languages:   [""],
                                // library:     [""],
                                medium:         ["drawing"],
                                materials:      ["Black fineliner", "white paper"],
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:        "This drawing was created during a drawing course at the Art Academy. The assignment was to recreate part of an old painting in the style of pointillism using black fineliners on white paper.\n\nAlthough it was completed as a study, I chose to include it in my portfolio because it represents a technique that I genuinely enjoy working with.",
                                text_02:        "The drawing was built entirely from thousands of individual dots. By varying the density of the stippling, I gradually created the values, shadows, and depth of the original painting without using traditional lines or shading.\n\nWorking in pointillism requires patience and consistency, as every area is developed dot by dot until the desired level of contrast is achieved.",
                                text_03:        "",
                                text_04:        "One of the reasons I wanted to include this drawing is because of the technique itself. I find working in pointillism surprisingly relaxing. Although the process is repetitive and time-consuming, I often become completely absorbed in placing one dot after another until the image slowly starts to emerge. For me, the technique feels almost meditative, which is one of the reasons I enjoy returning to it.",
                                text_title_01:  "introduction",
                                text_title_02:  "approach",
                                text_title_03:  "",
                                text_title_04:  "reflection",

                                img_01:         "../src/assets/images/art/Boy/IMG_20260720_170816_cropped.jpg",
                                img_02:         "../src/assets/images/art/Boy/IMG_20260720_170816_cropped.jpg",
                                imgList:        [
                                    "../src/assets/images/art/Boy/IMG_20260720_170816_cropped.jpg",
                                ],
                                colors:         ["#F4F4F4", "#000000"],

                                textBtn_1:      "",
                                textBtn_2:      "",
                                urlBtn_1:       "",
                                urlBtn_2:       "",
                            },
                            {
                                id:             "Project_Bottom",
                                previous:       "project.html#bluehues",
                                next:           "project.html#baphomet"
                            }
                        ]
                    },
                    // development
                        // Prularia
                    {
                        id:             "#prularia",
                        field:          "#development",
                        img:            "../src/assets/icons/crown.png",
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
                                img:            "../src/assets/icons/crown.png",
                                imgAlt:         "crown, logo of project Prularia",
                                title:          "Prularia",
                                projecttype:    ["Website"],

                                date:           "november 2024",
                                duration:       "3 weeks",
                                // location:    "",
                                role:           ["Student", "Full-Stack Developer"],
                                client:         "VDAB",
                                // company:     "",

                                languages:      ["JavaScript", "PHP", "CSS"],
                                library:        ["Bootstrap"],
                                // medium:      [""],
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "Developing a webshop for a client provided a unique opportunity to apply the Scrum Agile methodology in practice. Together with eight other student developers from across Flanders, we worked on this project, where we not only enhanced our technical skills but also learned how to collaborate effectively as a team. The challenge was not only about building the webshop, but also understanding and applying the Scrum approach.",
                                text_02:     "We faced the challenge of developing a functional and user-friendly webshop within a limited timeframe. Visitors needed to easily browse products and add them to their shopping cart without the requirement to log in. We developed separate pages for customer registration, login, and order placement. Additionally, we ensured that the webshop complied with GDPR requirements, which meant implementing secure password encryption and obtaining explicit consent for cookie usage. Furthermore, we set priorities for each sprint, as the available time was limited.",
                                text_04:         "The project resulted in a functional webshop. The first two sprints delivered a working webshop, where customers could browse products, add them to their cart, and place orders. We implemented the core functionalities, such as order placement, and refined both the visual and functional aspects of the webshop. With more time, we would have developed product pages with additional information, profile management, and order status tracking in the third sprint. \n\n Throughout the process, we actively utilized the Scrum methodology, with daily stand-up meetings and the Scrum board to track progress. We worked as a close-knit team, made joint decisions, and supported each other as needed.",
                                what_the_scrum_coach_says:    
                                                "“Sofie proved to be a motivated and engaged participant during the SCRUM project. She effectively applied the practical tips from the instructors in the scrum exercise, highlighting her eagerness to learn. During the daily scrum meetings, she kept the focus sharp and was able to explain her coding work in a concise and clear manner. Her proactive attitude stood out; she frequently took the initiative to start conversations and encourage collaboration. Moreover, she placed great importance on delivering a finished and high-quality product at the end of each sprint, underscoring her result-oriented mindset and sense of responsibility.”",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "result",
                                text_title_04:  "what the scrum coach says",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.prularia.Sofie-van-der-Meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Prularia",
                                img_01:         "../src/assets/images/development/prularia/page-down.png",
                                img_02:         "../src/assets/images/development/prularia/icons.png",
                                imgList:        [
                                    "../src/assets/images/development/prularia/desktop_login-page.png",
                                    "../src/assets/images/development/prularia/desktop_shopping-bag.png",
                                    "../src/assets/images/development/prularia/desktop_shopping-bag-remove.png",
                                    "../src/assets/images/development/prularia/icons.png",
                                    "../src/assets/images/development/prularia/shopping-bag.png"
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
                        // Pizzaria
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
                                img:            "../src/assets/icons/pizza.svg",
                                imgAlt:         "pizzaslice, logo of project Pizzaria",
                                title:          "Pizzaria",
                                projecttype:    ["Website"],

                                date:           "august 2024",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Full-Stack Developer"],
                                client:         "VDAB",
                                // company:     "",

                                languages:      ["PHP", "CSS"],
                                // library:     [""],
                                // medium:      [""],
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "This project was the final assignment for the PHP course and involved building a pizza ordering web application. The goal was to create a user-friendly website where customers could easily view and order pizzas. The web application utilized various techniques and concepts that I learned throughout the course.",
                                text_03:       "In the first phase of the project, I performed an extensive normalization, set up the database in SQL, and implemented it to ensure that all necessary data was properly stored. After working on the normalization, I received feedback from my instructor that it was too detailed for the limited time I had. I decided to focus on the key tables, such as orders, customers, locations, and order lines, and not further develop the other tables (such as promotions and payment methods). \n\n Next, I developed the application following the MVC structure, keeping the application logic separate from the user interface. I also worked on error handling to ensure the app managed invalid user input properly. Before writing any code, I created a list of possible exceptions to have an overview of expected errors.",
                                text_04:         "The result is a functional pizza ordering application that allows users to easily select pizzas, add them to their cart, and place their orders. The application retrieves products from the database and displays them neatly on the website. Users can register, log in, adjust the quantity of items, change their contact and delivery address, and complete their order. The user interface is simple yet functional, making it clear for customers how to place their order.",
                                text_title_01:  "introduction",
                                text_title_02:  "",
                                text_title_03:  "approach",
                                text_title_04:  "result",                

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.pizzaria.Sofie-van-der-Meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Pizzaria",
                                img_01:         "../src/assets/images/development/pizzaria/structure.png",
                                img_02:         "../src/assets/images/development/pizzaria/add-to-shoppingcart.png",
                                imgList:        [
                                    "../src/assets/images/development/pizzaria/home-page.png",
                                    "../src/assets/images/development/pizzaria/add-to-shoppingcart.png",
                                    "../src/assets/images/development/pizzaria/order-page.png",
                                    "../src/assets/images/development/pizzaria/order-page_change-contactdetails.png",
                                    "../src/assets/images/development/pizzaria/register-page.png",
                                    "../src/assets/images/development/pizzaria/sql.svg",
                                    "../src/assets/images/development/pizzaria/structure.png"
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
                        // Treasure Hunt
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
                                img:            "../src/assets/icons/gem.svg",
                                imgAlt:         "diamond, logo of project Treasure Hunt",
                                title:          "Treasure Hunt",
                                projecttype:    ["Game"],

                                date:           "february 2025",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Full-Stack Developer"],
                                client:         "VDAB",
                                // company:     "",

                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                // medium:      [""],
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "For my JavaScript course, I was asked to create a game called 'Treasure Hunt'. The goal was to allow the player to move around using event listeners. I saw this as a great chance to create a 3D experience using Three.js, making the game more fun to play.",
                                text_02:     "The first challenge was designing the characters and treasures. I had many ideas, but creating 3D models in Blender was new to me and time-consuming. Because of the limited time, I decided to use an existing 3D model instead. I used a single fox model, and by changing its size, I created both a small fox and a mother fox. \n\n For the JavaScript structure, I used Object-Oriented Programming (OOP) based on the Three.js journey course. This approach gave me a solid starting point to build the game’s logic. \n\n By organizing all the game data into a JavaScript object, I could easily create and manage the game elements using OOP. \n\n \n",
                                text_03:       "Once the elements showed up correctly and animations worked, I started improving the gameplay. I created a matrix array to randomly place game elements in different spots each time the game was loaded. This kept the game fresh and exciting with every play. \n\n Next, I worked on the movement of the foxes. My first attempt didn’t work well and was too complicated, but after simplifying the logic, I got it right. I also added new features: the mother fox (enemy) could move randomly or towards a target, and the small fox (hunter) could be controlled both by keyboard and by touch events on mobile devices. Instead of using keys, I added arrow buttons on the screen, allowing players to move the fox by touching these buttons. This made the game more interactive and mobile-friendly.",
                                text_04:         "After a few days of coding, I created a fun, interactive game. Adding Three.js made the game look great in 3D. It was a rewarding challenge, and I’m excited to explore Three.js more in future projects. \n\n After the game launched, I fixed a small bug related to the responsive design, ensuring the game works well on all devices. Now, everyone can enjoy the game smoothly, no matter their screen size.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.treasurehunt.sofie-van-der-meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Treasure-Hunt",
                                img_01:         "../src/assets/images/development/treasure-hunt/gamePlay.png",
                                img_02:         "../src/assets/images/development/treasure-hunt/introGame_touch-device.png",
                                imgList:        [
                                    "../src/assets/images/development/treasure-hunt/zoomIntoGame.png",
                                    "../src/assets/images/development/treasure-hunt/gameStarts_touch-device_2.png",
                                    "../src/assets/images/development/treasure-hunt/gamePlay.png",
                                    "../src/assets/images/development/treasure-hunt/lostGame.png"
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
                        // Peekaboo
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
                                img:            "../src/assets/icons/hands-holding-child.svg",
                                imgAlt:         "hands holding a child, logo of project Peekaboo",
                                title:          "Peekaboo",
                                projecttype:    ["Website"],

                                date:           "September 2024",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Full-Stack Developer"],
                                // client:      "",
                                // company:     "",

                                languages:      ["JavaScript", "CSS", "HTML"],
                                // library:     [""],
                                // medium:      [""],
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:   "After gaining a solid foundation in HTML and CSS during my basic training, I wanted to deepen my knowledge further. That's when I came across the website frontendpractice.com, which offers various projects that you can recreate to improve your frontend skills. I decided to take on the challenge and transform the website BackstageTalks into Peekaboo.",
                                text_02:     "Choosing a project was easy, but finding the right photos that matched the project proved to be a bigger challenge. After some searching, I found a set of photos that worked well together and aligned with the color palette of the example project. I also had to do some research for the typography. Once everything was in place, I could begin the real work.\n With a list of data for each item, I wrote a script to create an article element for each item. This allowed me to easily replicate multiple articles with just a few lines of code. I also added a data attribute to each article element to dynamically adjust the background color. \n\n Frontendpractice offers additional challenges, such as a full-page scroll with background transition and making the website responsive for mobile devices. I didn't shy away from these challenges. For the scroll function, I implemented a feature that changes the background color based on the data attribute of the currently visible article element. I also made a few minor CSS adjustments to ensure the website was fully responsive.",
                                text_04:         "Although the articles aren’t an exact match to the original, I was still able to create a solid replica of the website. The scroll effect still lags occasionally, which can be a small annoyance for a perfectionist developer like myself. Nevertheless, this project has significantly improved my skills.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "",
                                text_title_04:  "result",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.peekaboo.sofie-van-der-meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Peekaboo",
                                img_01:         "../src/assets/images/development/peekaboo/model_1.png",
                                img_02:         "../src/assets/images/development/peekaboo/model_4.png",
                                imgList:        [
                                    "../src/assets/images/development/peekaboo/model_1.png",
                                    "../src/assets/images/development/peekaboo/model_4.png",
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
                        // Tamagotchi
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
                                img:            "../src/assets/icons/cubes-stacked.svg",
                                imgAlt:         "boxes stacked on top of each other, logo of project tamagotchi",
                                title:          "tamagotchi",
                                projecttype:    ["Website"],

                                date:           "February 2025",
                                // duration:    "",
                                // location:    "",
                                role:           ["Student", "Full-Stack Developer"],
                                client:         "three.js Journey",
                                // company:     "",

                                languages:      ["JavaScript", "HTML", "CSS"],
                                library:        ["THREE.js"],
                                // medium:      [""],
                                // materials:   "",
                            },
                            {
                                id:             "Project_Content",
                                
                                text_01:        "For this project, I participated in the February Three.js Challenge, organized by Three.js Journey. The Tamagotchi theme inspired me to combine a blood-drinking vampire with an insulin measurement device that features an interactive Tamagotchi-like function. This project gave me the opportunity to experiment with Three.js and Blender.",
                                text_02:        "I had many creative ideas and wanted to challenge myself in both 3D modeling and interactive rendering, but time quickly became my biggest constraint. I had plans to add Tamagotchi-style animations, which would have made the interaction even more fun, but due to the limited time, I was unable to implement them.",
                                text_03:        "To bring my ideas to life, I used Blender to design the insulin measurement device, as well as the icons and the vampire character. I experimented with various shapes and materials in Blender to give the project a unique and creative look. Despite the time pressure, I learned a lot from every step of the process. \n\nAdditionally, I wanted to create a website where the 3D renders and models would be integrated. I chose a layout from Frontend Practice to refresh my HTML and CSS skills. While this was beneficial for my front-end development, it also meant I had less time to focus on the 3D renders and modeling, which were the core elements of the project.",
                                text_04:        "The project didn’t turn out exactly as I had originally envisioned, as time constraints limited the animations. However, I managed to complete some key elements. \n\n I created three Three.js renders: \n\n <ul class='list--list-style-type-shown'><li>The first render allows users to rotate and zoom in on the 3D view of the insulin measurement device..</li> <li>The second render shows the vampire in a detailed 3D environment, but without effects or animations.</li> <li>The third render lets users change the color of the device’s cover, offering a fun customization option.</li></ul>\n\nAdditionally, I created two Blender images featuring the vampire and the bat characters, both with hair particles, marking my first attempt at using this effect in Blender.\n\n Overall, the Three.js Challenge was a valuable learning experience. Although I couldn’t implement all the features I originally planned, I’m proud of the progress I made. This project helped me advance my skills, and I look forward to continuing my journey with the Three.js Journey course to expand my knowledge and learn more advanced techniques.",
                                text_title_01:  "introduction",
                                text_title_02:  "challenges",
                                text_title_03:  "approach",
                                text_title_04:  "result",

                                textBtn_1:      "Go live",
                                textBtn_2:      "View code",
                                urlBtn_1:       "https://demo.vampitest.sofie-van-der-meer.be/",
                                urlBtn_2:       "https://github.com/Sofie-van-der-Meer/Tamagotchi",
                                img_01:         "../src/assets/images/development/tamagotchi/home-title.png",
                                img_02:         "../src/assets/images/development/tamagotchi/batbat.png",
                                imgList:        [
                                    "../src/assets/images/development/tamagotchi/home.png",
                                    "../src/assets/images/development/tamagotchi/device-cover-black.png",
                                    "../src/assets/images/development/tamagotchi/device-cover-purple.png",
                                    "../src/assets/images/development/tamagotchi/home-title.png",
                                    "../src/assets/images/development/tamagotchi/device-cover-red.png",
                                    "../src/assets/images/development/tamagotchi/batbat.png",
                                    "../src/assets/images/development/tamagotchi/vampire.png",
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