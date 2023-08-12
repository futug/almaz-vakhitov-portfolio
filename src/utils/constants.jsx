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
        title: "CryptoGod",
        titleRu: "Криптобог",
        titleTr: "Cryptogod",
        src: `${BASE_YOUTUBE_URL}D3mdttvzUCc${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 2,
        srcJpeg: "./image5.jpg",
        srcWebp: "./image5.webp",
        title: "CS-Logo, Motion design",
        titleRu: "CS-Логотип, Motion дизайн",
        titleTr: "CS-Logo, Hareket tasarımı",
        src: `${BASE_YOUTUBE_URL}bP0VPjFnNYs${YOUTUBE_AUTOPLAY_QUERRY}`,
    },
    {
        id: 3,
        srcJpeg: "./image2.jpg",
        srcWebp: "./image2.webp",
        title: '"Never do this"| Ruslan Polyakov',
        titleRu: '"Bunu asla yapma" | Ruslan Polyakov',
        titleTr: '"Bunu asla yapma" | Ruslan Polyakov',
        src: `${BASE_YOUTUBE_URL}egWJ6UcqSo4${YOUTUBE_AUTOPLAY_QUERRY}`,
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
        nameEng: 'Online store "Concept"',
        nameRu: 'Онлайн-магазин "Концепт"',
        nameTr: 'Çevrimiçi mağaza "Konsept"',
        quoteLink: null,
        quoteEng:
            "I highly recommend its comprehensive services for the ongoing support of our sneaker store. From concept to editing,  animation graphics and voice acting - he provided a holistic and refined appearance of all our marketing materials.",
        quoteRu:
            "Здравствуйте! Хочу рекомендовать данного специалиста. Четкий, быстрый, всю работу делает вовремя. Я очень рад, что мне удалось познакомится с таким специалистом. Буду пользоваться его услугами и в будущем.",
        quoteTr:
            "Merhaba! Bu uzmanı tavsiye etmek istiyorum. Açık, hızlı, tüm işi zamanında yapıyor. Böyle bir uzmanla tanışabildiğim için çok mutluyum. Gelecekte de hizmetlerini kullanacağım.",
    },
    {
        id: 1,
        nameEng: "Evgeny Olegovich",
        nameRu: "Евгений Олегович",
        nameTr: "Evgeny Olegovich",

        quoteLink: null,
        quoteEng:
            "The order was non-standard, the sources from the 360 camera were sorted out by Almaz, he made upscale neural networks, he put additional software to work with Samsung 360. The result meets my expectations.",
        quoteRu:
            "Заказ был не стандартный, исходники с камеры 360. Алмаз разобрался, нейросетями апскейл сделал, дополнительный софт для работы с Samsung 360 поставил. Результат соответствует моим ожиданиям.",
        quoteTr:
            "Sipariş standart değildi, kaynak kayıtları 360 kameradan alındı. Elmas anladı, sinir ağlarıyla apskale yaptı, Samsung 360 ile çalışmak için ek yazılım koydu. Sonuç beklentilerime uyuyor.!",
    },
    {
        id: 2,
        nameEng: "Aida Garifullina",
        nameRu: "Аида Гарифуллина",
        nameTr: "Hades Garifullina",

        quoteLink: "https://vk.com/pale.moonligh_t",
        quoteEng:
            "On the day of the freshman, we needed to mount a video, Almaz was recommended to me as an installation specialist. The result exceeded all expectations! The specialist did his job perfectly and quickly, was constantly in touch, showed ready-made fragments of the video, in order to clarify the opinion. I am very grateful to Almaz for his professionalism! I will advise all my friends!",
        quoteRu:
            "На день первокурсника нам необходимо было смонтировать видеоролик, в качестве специалиста по монтажу мне порекомендовали Алмаза. Результат превзошел все ожидания! Специалист прекрасно и быстро выполнил свою работу, постоянно был на связи, показывал готовые фрагменты видеоролика, с целью уточнения мнения. Я очень благодарна Алмазу за профессионализм! Буду советовать всем своим друзьям!",
        quoteTr:
            "Birinci sınıf öğrencisi gününde videoyu monte etmemiz gerekiyordu, montaj uzmanı olarak bana bir Elmas önerdiler. Sonuç tüm beklentileri aştı! Uzman, işini mükemmel ve hızlı bir şekilde tamamladı, sürekli iletişim halindeydi, görüşün açıklığa kavuşturulması amacıyla videonun hazır parçalarını gösterdi. Profesyonellik için Elmasa çok minnettarım! Tüm arkadaşlarıma tavsiyede bulunacağım!",
    },
    {
        id: 3,
        nameEng: "Oleg Gerasimov",
        nameRu: "Олег Герасимов",
        nameTr: "Oleg Gerasimov",
        quoteLink: "https://vk.com/apjce",
        quoteEng:
            "My group at the university was given the task to shoot a video for the conference. The editor, with whom there was an agreement, disappeared at the last moment. Friends advised Almaz, he made videos for their airsoft team. In a short time, Almaz completed the work and did it as efficiently as possible, taking into account all the wishes and comments. The video was appreciated, and my group and I appreciated the work of Diamond. An excellent specialist, whom I would like to recommend to everyone.",
        quoteRu:
            "Моей группе в университете дали задание снять видеоролик для конференции. Монтажёр, с которым была договоренность, пропал в последний момент. Знакомые посоветовали Алмаза, он делал ролики для их страйкбольной команды. За короткое время Алмаз выполнил работу и сделал это максимально качественно, учитывая все пожелания и замечания. Ролик по достоинству оценили, а я и моя группа по достоинству оценили работу Алмаза. Прекрасный специалист, которого хочется порекомендовать всем.",
        quoteTr:
            "Üniversitedeki grubuma konferans için bir video çekmek için bir görev verildi. Anlaştığı montajcı son anda ortadan kayboldu. Tanıdıklar Diamond'a tavsiyede bulundu, airsoft takımları için videolar yapıyordu. Kısa sürede Elmas işi yaptı ve tüm istek ve yorumları dikkate alarak mümkün olduğunca verimli bir şekilde yaptı. Videoyu takdir ettiler, ben ve grubum Elmasın çalışmalarını takdir ettik. Herkese tavsiye etmek istediğim harika bir uzman.",
    },
    {
        id: 4,
        nameEng: "Artem Mikheev",
        nameRu: "Артём Михеев",
        nameTr: "Artem Mikheev",
        quoteLink: "https://vk.com/m1hey_sugarvillage",
        quoteEng:
            "Salute to everyone!There was a time when we shot one project on YouTube together with Almaz, the whole editing was on Almaz! A cool dude and a master of his craft! There was always a cool picture and at the same time with its own creative approach! Now in the working moments, if you need the installation of advertising or video lessons... only to the Diamond! Respect Dude.",
        quoteRu:
            "Всем салют!Было время вместе с Алмазом снимали один проект на ютубе, весь монтаж лежал на Алмазе! Крутой чувак и мастер своего дела! Всегда была крутая картинка и в тот же момент со своим креативным подходом! Сейчас в рабочих моментах, если необходим монтаж рекламы или видео-уроки... только к Алмазу! Респект Чувак.",
        quoteTr:
            "Herkese selam!Elmasla birlikte bir zamanlar YouTube'da bir proje çekildi, tüm kurulum Elmasın üzerindeydi! Havalı bir adam ve işinin ustası! Her zaman yaratıcı yaklaşımınızla aynı anda havalı bir resim vardı ve aynı anda! Şimdi iş anlarında, reklamların veya video eğitimlerinin kurulumuna ihtiyacınız varsa... sadece Elmasa! Saygıdeğer Dostum.",
    },
    {
        id: 5,
        nameEng: 'Youtube-channel "Annoyed triangle"',
        nameRu: 'Ютуб-канал "Недовольный треугольник"',
        nameTr: 'Youtube kanalı "Rahatsız Üçgen"',
        quoteEng:
            "His dedication to quality makes our content outstanding, and I am sure that our channel will be a great success in the future thanks to his efforts and creativity. He is an excellent communicator and is always ready to take into account our comments and wishes.  The like is huge.",
        quoteRu:
            "Его преданность качеству делает наш контент выдающимся, и я уверен, что в будущем наш канал ждёт большой успех благодаря его усилиям и творчеству. Он является отличным коммуникатором и всегда готов учесть наши замечания и пожелания.  Лайк огромный.",
        quoteTr:
            "Kaliteye olan bağlılığı içeriğimizi olağanüstü kılıyor ve çabaları ve yaratıcılığı sayesinde kanalımızın gelecekte büyük bir başarı olacağından eminim. O mükemmel bir iletişimcidir ve yorumlarımızı ve isteklerimizi dikkate almaya her zaman hazırdır.  Benzerleri çok büyük.",
    },
];
