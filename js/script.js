const DATA = {
    projects: [
        {
            id: 1,
            since: "",
            until: "",
            title: "Click To Pray",
            thumbnail: "./assets/ctp/sliderhome-01-min.jpg",
            summary: "Click To Pray es la app de la Red Mundial de Oración del Papa. Te conecta y te mueve junto a miles de personas que..."
        },
        {
            id: 2,
            since: "",
            until: "",
            title: "Inviertis",
            thumbnail: "./assets/i/rebeca-Perez-directora-general-inviertis-1024x659.jpg",
            summary: "En Inviertis hemos creado una plataforma online, con cobertura nacional, de compra-venta de propiedades con inquilinos y rentabilidades superiores al 4% desde el primer dia"
        },
        {
            id: 3,
            since: "",
            until: "",
            title: "IBM - Techint",
            thumbnail: "./assets/ibm/IBM-Reuters.jpg",
            summary: "La plataforma digital de Cuentas a Pagar y Atención a Proveedores de Techint Ingeniería y Construcción."
        },
        {
            id: 4,
            since: "",
            until: "",
            title: "Silexis",
            thumbnail: "./assets/slx/1.jpg",
            summary: "Somos una empresa tecnológica especializada en telemedición, gestión y control del consumo de energía eléctrica."
        },
        {
            id: 5,
            since: "",
            until: "",
            title: "Student",
            thumbnail: "./assets/std/maxresdefault.jpg",
            summary: "Es una aplicación web, destinada al ámbito académico a modo de simulador de causas judiciales basada en la experiencia de..."
        },
        {
            id: 6,
            since: "",
            until: "",
            title: "Buffet",
            thumbnail: "./assets/buffet/slide02_legisBuffet-1-1024x427.jpg",
            summary: "Es una aplicación web desarrollada con la última tecnología existente en el mercado que constituye la herramienta fundamen..."
        },
        {
            id: 7,
            since: "",
            until: "",
            title: "LegisApp",
            thumbnail: "./assets/legisapp/maxresdefault.jpg",
            summary: "LegisApp Lite es una APP liviana, disponible para entornos Android y iOS. En ella, los abogados reciben..."
        },
        

    ]
}

const COMPONENTS = {
    article: ({ title, thumbnail, paragraph }) => `
        <article class="portfolio-article" style="background-image: url('${thumbnail}');">
            <div class="portfolio-article-content">
                <h3>${title}</h3>
                <p>${paragraph}</p>
                <button>Ver mas</button>
            </div>
        </article>
    `
}

const onLoad = () => {
    renderArticles();
}

const renderArticles = () => {
    const { projects } = DATA;
    const {article} = COMPONENTS;
    const portfolioContainer = document.getElementById("portfolio-container");

    for (const project of projects) {
        portfolioContainer.innerHTML += article({ title: project.title, thumbnail: project.thumbnail, paragraph: project.summary });
    }

}


onLoad();