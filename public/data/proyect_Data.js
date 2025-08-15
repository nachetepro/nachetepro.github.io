// proyect_Data.js
// Ubicación: /src/data/proyect_Data.js
// Descripción: Contiene el array con los datos completos de los proyectos comunitarios.
// NOTE: Esto no se borra.

const proyectos = [
  {
    id: 1,
    titulo: "Biblioteca Comunitaria",
    descripcion: "Construimos un espacio para leer",
    relato: "En el corazón del barrio, un pequeño grupo de vecinos decidió que era hora de crear un espacio donde la lectura y el aprendizaje fueran accesibles para todos. Así nació la idea de la Biblioteca Comunitaria. Se comenzó con donaciones de libros y muebles reciclados, pero el sueño es mucho más grande: tener un lugar luminoso, con estanterías llenas de historias y mesas donde niños y adultos puedan estudiar, compartir ideas y asistir a talleres culturales. Este proyecto busca fondos para mejorar el espacio, comprar nuevos libros y organizar actividades gratuitas para toda la comunidad.",
    progreso: 45,
    meta: 1000,
    recaudado: 450,
    creador: "Juan Pérez",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    titulo: "Ayuda a Emprendedores",
    descripcion: "Apoyá a emprendedores locales",
    relato: "En nuestra ciudad, cientos de emprendedores sueñan con hacer crecer sus pequeños negocios, pero muchos carecen de capital inicial o asesoramiento. Este proyecto busca financiar cursos, herramientas y mentorías para que panaderos, artesanos, costureras y pequeños productores puedan mejorar su producción, acceder a nuevos mercados y vivir dignamente de su trabajo. Cada aporte ayuda a impulsar sueños que, con un poco de apoyo, pueden transformar economías familiares y fortalecer nuestra comunidad.",
    progreso: 80,
    meta: 2000,
    recaudado: 1600,
    creador: "Ana Gómez",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 3,
    titulo: "Huerta Urbana",
    descripcion: "Cultivamos salud y comunidad",
    relato: "Un grupo de voluntarios decidió recuperar un terreno baldío para convertirlo en una huerta urbana. Aquí, vecinos de todas las edades cultivan hortalizas, frutas y hierbas de manera orgánica, aprendiendo sobre alimentación saludable y cuidado del medio ambiente. La huerta no solo provee alimentos frescos, sino que también se convirtió en un lugar de encuentro y cooperación. Los fondos recaudados se destinarán a comprar herramientas, semillas y construir un sistema de riego sustentable.",
    progreso: 70,
    meta: 1500,
    recaudado: 1050,
    creador: "Carlos Díaz",
    estado: "En planificación",
    imagen: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 4,
    titulo: "Eco-parque",
    descripcion: "Creando un espacio verde para todos",
    relato: "En una zona donde el cemento domina el paisaje, un grupo de vecinos sueña con transformar un terreno abandonado en un eco-parque. Este espacio contará con senderos, juegos infantiles, zonas de picnic y un sector de reforestación con especies nativas. La idea es que sea un lugar de esparcimiento, educación ambiental y encuentro comunitario. Con tu ayuda, podremos comprar plantas, bancos, juegos y paneles informativos para hacerlo realidad.",
    progreso: 60,
    meta: 2500,
    recaudado: 1500,
    creador: "María López",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1486308510493-cb3fa54b1c2d?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 5,
    titulo: "Centro Cultural Juvenil",
    descripcion: "Un espacio para el arte y la música",
    relato: "Muchos jóvenes con talento en música, teatro y artes plásticas no tienen un lugar donde desarrollarse. Este proyecto busca remodelar un antiguo galpón y convertirlo en un centro cultural juvenil, con salas de ensayo, escenario para presentaciones y talleres gratuitos. Queremos que sea un espacio seguro, inclusivo y lleno de oportunidades creativas. El apoyo que recibamos servirá para insonorizar las salas, comprar instrumentos y organizar eventos que acerquen el arte a toda la comunidad.",
    progreso: 40,
    meta: 3000,
    recaudado: 1200,
    creador: "Asociación Cultural Amanecer",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 6,
    titulo: "Refugio para Animales",
    descripcion: "Rescate y cuidado de animales abandonados",
    relato: "Este refugio se encarga de rescatar, rehabilitar y dar en adopción a animales que han sido abandonados o maltratados. Actualmente cuidan de más de 50 perros y gatos, y los gastos de alimentación, vacunas y tratamientos médicos son muy altos. Con tu ayuda, podremos ampliar el espacio, mejorar las instalaciones y ofrecer una mejor calidad de vida a cada animal hasta que encuentre un hogar amoroso.",
    progreso: 85,
    meta: 5000,
    recaudado: 4250,
    creador: "Fundación Patitas Felices",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 7,
    titulo: "Campaña de Donación de Sangre",
    descripcion: "Salva vidas con tu aporte",
    relato: "La donación de sangre es un acto solidario que puede salvar hasta tres vidas por cada donante. Este proyecto organiza campañas mensuales de donación en diferentes barrios, con unidades móviles y personal capacitado. También se busca concientizar a la población sobre la importancia de donar de manera regular. Los fondos recaudados se destinarán a insumos médicos, refrigerios para los donantes y campañas de difusión.",
    progreso: 90,
    meta: 1000,
    recaudado: 900,
    creador: "Cruz Roja Local",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 8,
    titulo: "Programa de Alfabetización Digital",
    descripcion: "Enseñamos tecnología a adultos mayores",
    relato: "En un mundo cada vez más digital, muchos adultos mayores se sienten excluidos por no saber usar una computadora o un celular. Clara y un equipo de voluntarios crearon este programa para enseñarles desde lo más básico: enviar un mensaje, realizar una videollamada o buscar información en internet. Las clases son gratuitas y personalizadas, con mucha paciencia y dedicación. Gracias a esta iniciativa, muchos abuelos ahora pueden comunicarse con sus familias y acceder a trámites en línea. Buscamos recursos para adquirir más tablets y mejorar el espacio de enseñanza.",
    progreso: 65,
    meta: 1200,
    recaudado: 780,
    creador: "Clara Fernández",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1580894740025-2db6a8b9a91a?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 9,
    titulo: "Mural Comunitario",
    descripcion: "Arte para transformar el barrio",
    relato: "En un muro gris y descuidado de la plaza central, un colectivo de artistas vio una oportunidad para dar color y vida al barrio. El proyecto consiste en pintar un gran mural participativo, donde vecinos de todas las edades podrán aportar ideas y pinceladas. Más que una obra de arte, será un símbolo de unión y orgullo comunitario. Ya se realizaron talleres de dibujo y se eligió un diseño inspirado en la historia y la diversidad cultural del lugar. Ahora buscamos financiación para comprar pinturas, andamios y materiales.",
    progreso: 50,
    meta: 800,
    recaudado: 400,
    creador: "Colectivo Colores",
    estado: "En progreso",
    imagen: "https://images.unsplash.com/photo-1501594907352-04cda38eb"
  },
  {
    id: 10,
    titulo: "Recuperación de Senderos Naturales",
    descripcion: "Rescatamos caminos y áreas verdes",
    relato: "En nuestra región existen senderos históricos que han caído en desuso y se han cubierto de maleza. Este proyecto busca recuperarlos para fomentar el turismo ecológico y el deporte al aire libre. Voluntarios y especialistas en medio ambiente trabajarán en la limpieza, señalización y restauración del entorno. También se instalarán carteles educativos para que los visitantes aprendan sobre la flora y fauna local. El objetivo es crear un espacio seguro, accesible y en armonía con la naturaleza.",
    progreso: 30,
    meta: 1800,
    recaudado: 540,
    creador: "Asociación Verde Vida",
    estado: "En planificación",
    imagen: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80"
  }
];

export default proyectos;
