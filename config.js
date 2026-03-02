var config = {
    style: 'mapbox://styles/dariuus17/cmm6wmcss003y01qz03nw4ntj',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiZGFyaXV1czE3IiwiYSI6ImNtbTJldWp5cTA2b3YycHNnc3NpZjNkYjQifQ.RZKX_aoTWI6etPS5AnBqwg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Quantum Spain',
    subtitle: 'El impulso definitivo al ecosistema de computación cuántica de España.',
    byline: 'Darío González Diez',
    footer: 'Source: <a href="https://quantumspain-project.es/" target="_blank">Quantum Spain Project</a> . Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'center',
            hidden: false,
            title: 'Quantum Spain: Impulsando la segunda revolución cuántica en España.',
            image: 'https://quantumspain-project.es/wp-content/uploads/2022/08/QuantumSpain_logo_color_2_HD.png',
            description: 'Quantum Spain es el primer ecosistema de simulación y computación cuántica de España. En conjunto con la Red Española de Supercomputación (RES), las instituciones nacionales de investigación más punteras han creado la primera infraestructura de computación cuántica en España, permitiendo así la exploración de las aplicaciones científicas y comerciales de este nuevo paradigma computacional.',
            location: {
                center: [-3.95875, 39.82679],
                zoom: 4.68,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'second-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Proyecto y objetivos de Quantum Spain',
            image: './assets/Objetivos.png',
            description: 'El objetivo principal de Quantum Spain es el impulso y la financiación de una infraestructura competitiva y completa de computación cuántica en España. Con un presupuesto de 22 millones de euros cedidos por el Ministerio para la Transformación Digital y de la Función Pública, este proyecto dota al presente ecosistema cuántico nacional de las herramientas necesarias para desarrollar un sólido tejido científico y tecnológico en torno a la computación cuántica y sus aplicaciones en Inteligencia Artificial. <br><br> Entre los objetivos específicos, destacan la adquisición e instalación de un ordenador cuántico en el Barcelona Supercomputing Center (BSC), de simuladores cuánticos de alto rendimiento en diversos centros, o la cesión del acceso a estas infraestructuras a universidades y centro de investigación nacionales e internacionales. Veamos en detalle alguna de estas infraestructuras.',
            location: {
                center: [-3.95875, 39.82679],
                zoom: 4.68,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Barcelona Supercomputing Center: El corazón de Quantum Spain',
            images: [
                'https://quantumspain-project.es/wp-content/uploads/2025/04/Ordenador-cuantico_Quantum-Spain-1-460x295.jpg',
                'https://quantumspain-project.es/wp-content/uploads/2025/04/Ordenador-Cuantico_Quantum-Spain_4-460x295.jpg',
                'https://quantumspain-project.es/wp-content/uploads/2025/04/Ordenador-Cuantico_Quantum-Spain_2-460x295.png',
                'https://quantumspain-project.es/wp-content/uploads/2025/04/Ordenador-Cuantico_Quantum-Spain_7-460x295.jpg'
            ],
            description: 'Localizado en una antigua capilla, el Barcelona Supercomputing Center (BSC) alberga el ordenador cuántico basado en tecnología supercondutora con qubits de tipo transmón, una de las arquitecturas más consolidadas en computación cuántica en la actualidad. Este ordenador, con una capacidad de 20 qubits, se encuentra entre los más potentes de Europa y es el primero de su tipo en España. Además, el BSC también cuenta con simuladores cuánticos de alto rendimiento, que permiten a los investigadores probar algoritmos cuánticos sin necesidad de acceder al hardware físico.',
            location: {
                center: [2.11553, 41.38969],
                zoom: 16.89,
                pitch: 52,
                bearing: -19.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Instituciones catalanas',
            images: [
                'https://www.magisnet.com/wp-content/uploads/2019/08/ubhistoricoweb.jpg',
                'https://offloadmedia.feverup.com/barcelonasecreta.com/wp-content/uploads/2021/05/18083022/uab.jpg',
                'https://www.scholarships.com.pk/storage/media/0dc754dc-51d9-4dc1-b0e1-0590f53c07b8.webp'
            ],
            description: 'Además del BSC, otras instituciones como la Universitat de Barcelona (UB), la Universitat Autónoma de Barcelona (UAB) o el Institut de Ciències Fotòniques (ICFO) también forman parte del ecosistema de Quantum Spain, contribuyendo a la investigación y desarrollo en computación cuántica. En particular, sus esfuerzos se concentran en tomografía y metrología cuántica, quantum machine learning y algortimos de comunicación y computación cuántica.',
            location: {
                center: [2.06498, 41.35302],
                zoom: 10.82,
                pitch: 50.47,
                bearing: -18.85
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Instituciones madrileñas',
            images: [
                'https://jpi-climate.eu/wp-content/uploads/2022/03/CSIC_02.jpg',
                'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/12/20/16400163339483.jpg'
            ],
            description: 'En la capital española se encuentran el Centro Superior de Investigaciones Científicas (CSIC) y la Universidad Complutense de Madrid (UCM). Mientras el primero desarrolla nuevas plataformas y algoritmos para computación cuántica, el segundo trabaja en holografía cuántica y redes tensoriales para simulación cuántica.',
            location: {
                center: [-3.71736, 40.44073],
                zoom: 13.10,
                pitch: 51.97,
                bearing: 11.55
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Instituciones gallegas',
            images: [
                'https://www.cesga.es/wp-content/uploads/2022/09/FTIII.png',
                'https://mundopositor.info/wp-content/uploads/2021/08/Universidad-de-Samtiago-de-Compostela-1392x734.jpeg'
            ],
            description: 'En el extremo noroeste del país, el Centro de Supercomputación de Galicia (CESGA) y la Universidad de Santiago de Compostela (USC) también forman parte del ecosistema de Quantum Spain. El CESGA se centra en el desarrollo de simuladores cuánticos de alto rendimiento, mientras que la USC investiga en algoritmos cuánticos para optimización y aprendizaje automático, así como en inteligencia artificial cuántica.',
            location: {
                center: [-8.55894, 42.87427],
                zoom: 15.15,
                pitch: 52.47,
                bearing: -37.83
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Instituciones andaluzas',
            images: [
                'https://infoes.examtime.com/files/2014/06/Universidad-de-Sevilla.jpg',
                'https://aventurauniversal.com/wp-content/uploads/2025/08/Universidad-de-Granada.jpg',
                'https://www.uma.es/media/tinyimages/img/image_58.jpeg'
            ],
            description: 'En el sur de España, las Universidades de Sevilla (US), Granada (UGR) y Málaga (UMA) contribuyen al proyecto Quantum Spain, trabajando en ramas como la metrología cuántica, los algoritmos cuánticos o las redes tensoriales.',
            location: {
                center: [-4.65219, 37.22126],
                zoom: 7.44,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'eighth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Instituciones vascas',
            images: [
                'https://www.ucc.ie/en/media/academic/physics/physicsmainwebsite/newsimages/Research_Visit_Bilbao.jpeg',
                'https://www.gipuzkoagaur.com/wp-content/uploads/2022/10/Bildarratz_DIPC5__1_-696x464-1.jpeg'
            ],
            description: 'Finalmente, en territorio vasco, la Universidad del País Vasco (UPV/EHU) y el Donostia International Physics Center (DIPC) también se incluyen en el ecosistema cuántico español, investigando en áreas como la simulación cuántica de materiales, la computación cuántica topológica o los algoritmos cuánticos para optimización de simulaciones generales.',
            location: {
                center: [-2.45914, 43.25403],
                zoom: 8.78,
                pitch: 56,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'ninth-identifier',
            alignment: 'center',
            hidden: false,
            title: 'Segunda Revolución Cuántica y Nueva Estrategia 2025-2030',
            image: 'https://static.esmartcity.es/media/2022/07/espana-digital-2026-1.png',
            description: 'En resumen, el proyecto Quantum Spain ha sido clave para el desarrollo de la industria de la computación cuántica en España, poniéndola así a la vanguardia de la llamada Segunda Revolución Cuántica. <br><br> Sin embargo, el impulso a esta nueva era tecnológica no se detiene aquí. En 2025, el Ministerio para la Transformación Digital y de la Función Pública presentó la Nueva Estrategia Nacional de Computación Cuántica 2025-2030, que busca consolidar el ecosistema cuántico nacional, fortaleciendo la soberanía digital, la competitividad y el desarrollo sostenible. Además, esta estrategia constituye un llamamiento a la cooperación, al diálogo y a la acción coordinada con otros actores. Con un presupuesto de 808 millones de euros, esta estrategia pretende reforzar la investigación y la I+D+i, crear un mercado español cuántico, preparar a la sociedad para un cambio disruptivo y consolidad el ecosistema cuántico nacional.',
            location: {
                center: [-3.95875, 39.82679],
                zoom: 4.68,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
