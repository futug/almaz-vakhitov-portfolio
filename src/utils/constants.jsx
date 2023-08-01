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
    {
        id: 3,
        srcJpeg: "./image2.jpg",
        srcWebp: "./image2.webp",
        title: "Most Expensive Jordans",
        titleRu: "Самые дорогие Джорданы",
        titleTr: "En Pahalı Jordanlar",
        src: `${BASE_YOUTUBE_URL}yIfV3aLJEnw${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 4,
        srcJpeg: "./image4.jpg",
        srcWebp: "./image4.webp",
        title: "Annoyed Triangle",
        titleRu: "Недовольный треугольник",
        titleTr: "Rahatsız Üçgen",
        src: `${BASE_YOUTUBE_URL}WGhS6-fDSB0${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 5,
        srcJpeg: "./image6.jpg",
        srcWebp: "./image6.webp",
        title: 'Concept" Sneakers Shop',
        titleRu: 'Магазин "Концепт"',
        titleTr: "Spor Ayakkabı Mağazası",
        src: `${BASE_YOUTUBE_URL}zfcG9sTkUCc${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
];

export const FEEDBACK__COMMENTS = [
    {
        id: 0,
        nameEng: 'Artur Murtazin, "Concept" Sneakers Shop',
        nameRu: 'Артур Муртазин, магазин кроссовок "Concept"',
        nameTr: 'Artur Murtazin, "Konsept" Spor Ayakkabı Mağazası',
        quoteEng:
            "I highly recommend its comprehensive services for the ongoing support of our sneaker store. From concept to editing,  animation graphics and voice acting - he provided a holistic and refined appearance of all our marketing materials.",
        quoteRu:
            "Я настоятельно рекомендую его комплексные услуги для постоянной поддержки нашего магазина кроссовок. От концепции до монтажа, анимационной графики и озвучки - он обеспечил целостный и изысканный внешний вид всех наших маркетинговых материалов.",
        quoteTr:
            "Spor ayakkabı mağazamızın sürekli desteği için kapsamlı hizmetlerini şiddetle tavsiye ederim. Konseptten düzenlemeye, animasyon grafiklerine ve ses oyunculuğuna kadar tüm pazarlama materyallerimizin bütünsel ve zarif bir görünümünü sağladı.",
    },
    {
        id: 1,
        nameEng: "Tim",
        nameRu: "Tim",
        nameTr: "Tim",
        quoteEng:
            "Absolutely thrilled with the professional and creative video editing services provided. They brought our project to life and exceeded our expectations!",
        quoteRu:
            "Абсолютно в восторге от предоставляемых профессиональных и креативных услуг по редактированию видео. Они воплотили наш проект в жизнь и превзошли наши ожидания!",
        quoteTr:
            "Sağlanan profesyonel ve yaratıcı video düzenleme hizmetlerinden kesinlikle memnun kaldım. Projemizi hayata geçirdiler ve beklentilerimizi aştılar!",
    },
    {
        id: 2,
        nameEng: 'Oleg Nevemygh, "Annoyed triangle"',
        nameRu: 'Олег Невемых, "Недовольный треугольник"',
        nameTr: 'Oleg Nevemygh, "Rahatsız Üçgen"',
        quoteEng:
            "Reliable and efficient service for editing our video blog. The attention to detail and seamless transitions between clips truly made a difference!",
        quoteRu:
            "Надежный и эффективный сервис для редактирования нашего видеоблога. Внимание к деталям и плавные переходы между клипами действительно изменили ситуацию!",
        quoteTr:
            "Video blogumuzu düzenlemek için güvenilir ve verimli hizmet. Detaylara gösterilen özen ve klipler arasındaki kesintisiz geçişler gerçekten fark yarattı!",
    },
    {
        id: 3,
        nameEng: "Elena, Head of the Marketing Department",
        nameRu: "Елена, глава отдел маркетинга",
        nameTr: "Elena, Pazarlama Departmanı Başkanı",
        quoteEng:
            "Outstanding work on our commercial video! They captured the essence of our brand and delivered a compelling story that resonated with our audience.",
        quoteRu:
            "Выдающаяся работа над нашим рекламным видео! Они уловили суть нашего бренда и представили захватывающую историю, которая нашла отклик у нашей аудитории.",
        quoteTr: "Reklam videomuzda olağanüstü çalışma! Markamızın özünü yakaladılar ve izleyicilerimizle rezonansa giren etkileyici bir hikaye sundular.",
    },
    {
        id: 4,
        nameEng: "Helga, freelance ordering",
        nameRu: "Хелга, фрилансер",
        nameTr: "Helga, serbest sipariş",
        quoteEng:
            "The team's expertise in motion graphics is unmatched. They added a touch of dynamism and energy to our promotional video, making it stand out from the crowd.",
        quoteRu:
            "Опыт команды в области анимационной графики не имеет себе равных. Они добавили нотку динамизма и энергии нашему рекламному ролику, выделив его из толпы.",
        quoteTr: "Ekibin hareketli grafiklerdeki uzmanlığı eşsizdir. Tanıtım videomuza dinamizm ve enerji katarak onu kalabalığın arasından sıyrıldılar.",
    },
];
