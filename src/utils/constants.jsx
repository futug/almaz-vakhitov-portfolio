const BASE_YOUTUBE_URL = "https://www.youtube.com/embed/";
const YOUTUBE_AUTOPLAY_QUERRY = "?autoplay=1";

export const NAV_LINKS = [
    {
        id: 0,
        name: "about",
        nameRu: "Обо мне",
        nameTr: "Hakkımda",
        link: "#",
    },
    {
        id: 1,
        name: "skills",
        nameRu: "Навыки",
        nameTr: "Talimatlar",
        link: "#",
    },
    {
        id: 2,
        name: "feedback",
        nameRu: "Отзывы",
        nameTr: "Görüşmeler",
        link: "#",
    },
    {
        id: 3,
        name: "contact",
        nameRu: "Контакты",
        nameTr: "İletişim",
        link: "#",
    },
];

export const VIDEO_PREVIEWS_LEFT = [
    {
        id: 0,
        srcJpeg: "./image1.jpg",
        srcWebp: "./image1.webp",
        title: "Annoyed Triangle",
        titleRu: "Недовольный треугольник",
        titleTr: "Rahatsız Üçgen",
        src: `${BASE_YOUTUBE_URL}wk6amUOSkNM${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 1,
        srcJpeg: "./image3.jpg",
        srcWebp: "./image3.webp",
        title: 'Concept" Sneakers Shop',
        titleRu: 'Магазин "Концепт"',
        titleTr: "Spor Ayakkabı Mağazası",
        src: `${BASE_YOUTUBE_URL}bfq3ugWe-zY${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 2,
        srcJpeg: "./image5.jpg",
        srcWebp: "./image5.webp",
        title: "New Balance 530 - Review",
        titleRu: "New Balance 530 - Обзор",
        titleTr: "SNew Balance 530 - Yorum",
        src: `${BASE_YOUTUBE_URL}ZxbpsCjkY5c${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
];

export const VIDEO_PREVIEWS_RIGHT = [
    {
        id: 0,
        srcJpeg: "./image2.jpg",
        srcWebp: "./image2.webp",
        title: "Most Expensive Jordans",
        titleRu: "Самые дорогие Джорданы",
        titleTr: "En Pahalı Jordanlar",
        src: `${BASE_YOUTUBE_URL}yIfV3aLJEnw${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 1,
        srcJpeg: "./image4.jpg",
        srcWebp: "./image4.webp",
        title: "Annoyed Triangle",
        titleRu: "Недовольный треугольник",
        titleTr: "Rahatsız Üçgen",
        src: `${BASE_YOUTUBE_URL}WGhS6-fDSB0${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 3,
        srcJpeg: "./image6.jpg",
        srcWebp: "./image6.webp",
        title: 'Concept" Sneakers Shop',
        titleRu: 'Магазин "Концепт"',
        titleTr: "Spor Ayakkabı Mağazası",
        src: `${BASE_YOUTUBE_URL}zfcG9sTkUCc${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
];
