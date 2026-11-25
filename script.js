
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );
    });

    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("active");
            menuToggle.setAttribute("aria-expanded", "false");
        });
    });

}


// PROJECT INFORMATION

const projects = {

    ux: {
        number: "PROJECT / 001",
        category: "UI/UX DESIGN",
        title: "STUDY <em>BUNNY.</em>",
        intro: "A collaborative UX design project exploring how technology can help college students manage their schedules, prioritize assignments, and find more effective ways to study. What began as a scheduling tool evolved into a broader study-support concept through student interviews.",

        sections: [

            {
                title: "01 / THE PROBLEM",
                content: `
                    <p>Balancing college coursework with work, extracurricular activities, and everyday responsibilities can make finding time to study difficult. As a busy college student myself, I understood how quickly assignments and other commitments could become overwhelming.</p>

                    <p>To better understand these challenges, our team interviewed five college students. Participants described feeling stressed about studying, struggling to find time, and often not knowing what or how to study.</p>

                    <p>These conversations helped us recognize that students needed more than a calendar. They needed a tool that could help them organize their time while also providing direction and resources for their studies.</p>
                `
            },

            {
                title: "02 / MY ROLE",
                content: `
                    <p>Study Bunny is a collaborative project, but I completed most of the design work for our class. My individual contributions included:</p>

                    <ul>
                        <li>Creating the user persona</li>
                        <li>Developing the project mind map</li>
                        <li>Writing the content for the Adobe Express product overview</li>
                        <li>Creating the low-fidelity wireframe</li>
                        <li>Designing the high-fidelity prototype in Adobe XD</li>
                    </ul>

                    <p>My partner created the empathy maps. We worked together on the overall direction of the project.</p>
                `
            },

            {
                title: "03 / DISCOVERY & RESEARCH",
                content: `
                    <p>We interviewed five college students: one sophomore, two juniors, one senior, and one recent graduate. The participants represented nursing, biochemistry, engineering, and computer science.</p>

                    <p>We asked about their existing study tools, how often and how long they studied, and when they typically began preparing for exams.</p>

                    <p>Our interviews revealed several recurring challenges, including limited study time, uncertainty about what to study, and difficulty finding useful study resources.</p>

                    <p>Originally, Study Bunny was intended to recommend study times based on students' schedules and upcoming assignments. However, the interviews showed us that students also needed help figuring out how to study and where to find relevant resources. This feedback helped shape the direction of the project.</p>
                `
            },

            {
                title: "04 / DESIGN & PROTOTYPING",
                content: `
                    <p>We began with a handmade low-fidelity wireframe to establish the layout and overall user flow. I then developed the high-fidelity prototype in Adobe XD, keeping the same general layout while refining its visual presentation.</p>

                    <p>The intended experience includes:</p>

                    <ul>
                        <li><strong>Weekly calendar:</strong> Students identify times when they are unavailable.</li>
                        <li><strong>Assignment entry:</strong> Students enter upcoming assignments and exams.</li>
                        <li><strong>Study scheduling:</strong> The app identifies available gaps in the student's schedule and recommends times to study.</li>
                        <li><strong>Assignment prioritization:</strong> Upcoming deadlines help determine which tasks students should focus on first.</li>
                        <li><strong>Study resources:</strong> The planned system recommends relevant learning resources based on assignment subjects and topics.</li>
                    </ul>

                    <p>The visual design uses muted colors and white space to keep the interface simple and comfortable to look at. The name Study Bunny came from a bunny my partner and I have and the playful sound of the name.</p>
                `
            },

            {
                title: "05 / PLANNED FEATURES",
                content: `
                    <p>One of the features we envision is a resource recommendation system that helps students find materials related to their assignments.</p>

                    <p>For example, when creating a chemistry or math assignment, a student could identify the subject and specific topic. Study Bunny could then recommend relevant Khan Academy lessons, Chemistry Tutor videos, or other learning materials.</p>

                    <p>We envision using AI or another recommendation algorithm to connect students with useful resources. This functionality is still conceptual and has not been implemented in the current prototype.</p>
                `
            },

            {
                title: "06 / CHALLENGES & LESSONS LEARNED",
                content: `
                    <p>The most challenging part of the project was creating the high-fidelity prototype and deciding what the finished product should actually look like. Translating an idea into a complete interface required much more thought than I initially expected.</p>

                    <p>This project also introduced me to the many details and principles involved in UI design. Some design decisions come naturally, while others require a level of consideration I hadn't previously understood. Compared with my earlier work on Zoo Coding, I became much more aware of the small decisions that influence how people interact with an interface.</p>
                `
            },

            {
                title: "07 / CURRENT STATUS",
                content: `
                    <p>Study Bunny is still in development as a concept and prototype. Adobe Express was used to create the product overview, while Adobe XD was required for the high-fidelity prototype.</p>

                    <p>Because the prototype is not a functioning application, its calendar, scheduling recommendations, and resource suggestions do not perform their intended operations yet. User testing has also not taken place.</p>

                    <p>My long-term goal is to develop Study Bunny into a functioning website with real users. I would love to see it grow into a sustainable product, but for now, it remains an idea with a developed prototype and a direction for future development.</p>
                `
            }

        ]
    },


    zoo: {
        number: "PROJECT / 002",
        category: "EDUCATIONAL WEB DEVELOPMENT",
        title: "ZOO <em>CODING.</em>",
        intro: "An interactive educational website designed to introduce fifth-grade students to foundational programming concepts through guided lessons, coding challenges, and animal rewards. Developed by a team of three, Zoo Coding aims to make learning to code more accessible by reducing the emphasis on typing and focusing on understanding programming concepts.",

        sections: [

            {
                title: "01 / THE PROBLEM",
                content: `
                    <p>The idea for Zoo Coding came from my experience volunteering in a second-grade classroom, where I helped teach introductory computer science using BitsBox.</p>

                    <p>I noticed that many students struggled to type because they were still learning where letters were on the keyboard. Instead of focusing on what their code meant, they spent much of their time searching for keys and entering characters.</p>

                    <p>Students often asked me to type for them. Although I wanted to help, I realized that doing the work for them could prevent them from developing their own skills and understanding.</p>

                    <p>This experience made me question how young students were being introduced to programming. I wanted to create something that allowed them to focus on learning how code works rather than struggling with the mechanics of typing.</p>
                `
            },

            {
                title: "02 / THE SOLUTION",
                content: `
                    <p>Zoo Coding is a browser-based educational game that introduces students to programming through a series of guided lessons and interactive challenges.</p>

                    <p>Rather than requiring students to type large amounts of code, the activities focus on applying programming concepts through simplified interactions. Each completed level rewards students with an animal, giving them something to work toward as they progress through the curriculum.</p>

                    <p>The zoo theme and reward system were developed during our team's brainstorming process. I wanted the experience to feel more like a game than a traditional lesson, especially for the fifth-grade students who would be using it.</p>
                `
            },

            {
                title: "03 / TEAM & MY CONTRIBUTIONS",
                content: `
                    <p>Zoo Coding is a collaborative project developed by a team of three students: two Computer Science/Education majors and one Computer Science/Philosophy minor.</p>

                    <p>My individual contributions have focused on the curriculum, lesson structure, visual design, and communication with our client.</p>

                    <ul>
                        <li>Planned the curriculum and outlined the level progression</li>
                        <li>Created four of the fifteen planned levels</li>
                        <li>Established the general structure used throughout the lessons</li>
                        <li>Developed the overall visual styling and level format</li>
                        <li>Coordinated with the fifth-grade teacher throughout development</li>
                    </ul>
                `
            },

            {
                title: "04 / DISCOVERY & CURRICULUM PLANNING",
                content: `
                    <p>To develop the curriculum, I researched existing educational coding platforms for children, including Code.org, and consulted Montana's computer science curriculum.</p>

                    <p>These resources helped guide our selection and organization of programming concepts. The goal was to create a progression that introduces foundational ideas and gradually gives students opportunities to apply what they have learned.</p>

                    <p>The project currently has fifteen levels planned, with eleven completed.</p>
                `
            },

            {
                title: "05 / LESSON DESIGN & DEVELOPMENT",
                content: `
                    <p>I developed a general lesson structure that could be reused throughout the levels. Each lesson follows three main steps:</p>

                    <ul>
                        <li><strong>Introduce:</strong> Give students a brief overview of the programming concept.</li>
                        <li><strong>Demonstrate:</strong> Show students how the concept works through an example.</li>
                        <li><strong>Practice:</strong> Let students apply what they learned through an interactive challenge.</li>
                    </ul>

                    <p>This consistent structure helps students understand each topic before being asked to use it independently. The levels also use a shared visual style to make the experience feel cohesive as students move through the website.</p>

                    <p>The website is built using HTML, CSS, and JavaScript.</p>
                `
            },

            {
                title: "06 / CLIENT COLLABORATION",
                content: `
                    <p>Our client is a fifth-grade teacher who needed an independent learning activity for students who were ready for additional challenges while she worked with English language learners on reading, speaking, and writing.</p>

                    <p>Because our client was not familiar with programming, she gave our team considerable creative freedom. Rather than providing technical requirements, she offered feedback from an educator's perspective, helping us consider whether activities might be too easy or what students would find interesting.</p>

                    <p>One of the biggest challenges was designing for students we had not met. For much of the development process, we had to rely on conversations with their teacher to understand the intended audience. We did not get to speak directly with the students testing our project until approximately three and a half months into development.</p>
                `
            },

            {
                title: "07 / TESTING & FEEDBACK",
                content: `
                    <p>Fifth-grade students have been using Zoo Coding, allowing us to observe how they interact with the lessons and activities.</p>

                    <p>One of the most encouraging observations has been how well students respond to the reduced typing requirements. They can focus on the programming challenges without getting held up by keyboard skills. They have also responded particularly well to the animal rewards, which give them an incentive to keep progressing through the levels.</p>

                    <p>The teacher has shared that the students absolutely love the website and has expressed appreciation for our work. So far, she has not raised any major complaints or specific critiques.</p>
                `
            },

            {
                title: "08 / WHAT I LEARNED",
                content: `
                    <p>Zoo Coding has helped me understand how computer science and education can work together to create more effective learning experiences.</p>

                    <p>It showed me some of the challenges in early computer science education, particularly how easily students can become focused on the mechanics of typing instead of the concepts they are supposed to be learning.</p>

                    <p>It also taught me how challenging it can be to design for an audience you do not know personally. Creating something for fifth graders required me to think beyond my own perspective and consider how students at a very different stage of learning might understand and interact with the material.</p>

                    <p>I hope to carry these lessons into my future career teaching computer science, particularly as I work with older students and continue exploring ways to make programming more accessible.</p>
                `
            },

            {
                title: "09 / CURRENT STATUS",
                content: `
                    <p>Zoo Coding is an ongoing project that will continue through the end of the semester. Fifteen levels are planned, and eleven have been completed so far.</p>

                    <p>Students are already using the website, and their positive response has helped us see the value of creating a learning experience that prioritizes understanding over typing.</p>

                    <p>Our team will continue developing the remaining levels and refining the experience as the project progresses.</p>
                `
            }

        ]
    }

};


// OPEN PROJECTS

const projectOverlay = document.getElementById("projectOverlay");
const projectContent = document.getElementById("projectContent");
const closeProject = document.getElementById("closeProject");

if (projectOverlay && projectContent && closeProject) {

    let previousCard = null;

    document.querySelectorAll(".project-card").forEach(card => {

        card.addEventListener("click", () => {

            const project = projects[card.dataset.project];

            if (!project) return;

            previousCard = card;

            let sectionsHTML = "";

            project.sections.forEach(section => {

                sectionsHTML += `
                    <div class="detail-section">

                        <h3>${section.title}</h3>

                        <div>${section.content}</div>

                    </div>
                `;

            });

            projectContent.innerHTML = `

                <span class="detail-label">
                    ${project.number} / ${project.category}
                </span>

                <h2>${project.title}</h2>

                <p class="detail-intro">
                    ${project.intro}
                </p>

                ${sectionsHTML}

            `;

            projectOverlay.classList.add("active");
            projectOverlay.setAttribute("aria-hidden", "false");

            document.body.style.overflow = "hidden";

            closeProject.focus();

        });

    });


    // CLOSE PROJECT

    function closeProjectDetails() {

        projectOverlay.classList.remove("active");
        projectOverlay.setAttribute("aria-hidden", "true");

        document.body.style.overflow = "";

        if (previousCard) {
            previousCard.focus();
        }

    }


    closeProject.addEventListener("click", closeProjectDetails);


    // CLICK OUTSIDE PROJECT PANEL

    projectOverlay.addEventListener("click", event => {

        if (event.target === projectOverlay) {
            closeProjectDetails();
        }

    });


    // CLOSE WITH ESCAPE KEY

    document.addEventListener("keydown", event => {

        if (
            event.key === "Escape" &&
            projectOverlay.classList.contains("active")
        ) {
            closeProjectDetails();
        }

    });

}
