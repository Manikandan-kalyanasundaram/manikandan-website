import type { Site, Metadata, Socials } from "@/types";

export const SITE: Site = {
    NAME: "Manikandan Kalyanasundaram",
    EMAIL: "manikandanvisualdesigner@gmail.com",
    NUM_POSTS_ON_HOMEPAGE: 3,
    NUM_WORKS_ON_HOMEPAGE: 3,
    NUM_PROJECTS_ON_HOMEPAGE: 1,
};

export const HOME: Metadata = {
    TITLE: "Home",
    DESCRIPTION:
        "I am fullstack software developer, have experience in building complex webapplication",
};

export const ABOUT: Metadata = {
    TITLE: "About",
    DESCRIPTION:
        "About Lakshmanshankar, Journey, Experience, Education, Skills and Interests",
};

export const BLOG: Metadata = {
    TITLE: "Blog",
    DESCRIPTION: "I wrote about react, Linux and software design",
};

export const WORK: Metadata = {
    TITLE: "Work",
    DESCRIPTION: "Where I have worked and what I have done.",
};

export const PROJECTS: Metadata = {
    TITLE: "Projects",
    DESCRIPTION: "A collection of my projects, with links to repositories and demos.",
};

export const SOCIALS: Socials = [
    {
        NAME: "github",
        HREF: "https://github.com/manikandan-kalyanasundaram/",
    },
    {
        NAME: "behance",
        HREF: "https://www.behance.net/Manikandan_kalyan",
    },
    {
        NAME: "linkedin",
        HREF: "https://www.linkedin.com/in/manikandan-kalyanasundaram-a567b6243/",
    },
    {
        NAME: "dribble",
        HREF: "https://dribble.com/Manikandan_Kalyanasundaram",
    },
];
