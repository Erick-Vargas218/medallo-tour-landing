/* ============================================================
   MEDALLO TOUR — Landing Page
   - Idioma ES/EN (ES por defecto)
   - Tema claro/oscuro
   - Enlaces de WhatsApp con mensaje prellenado que indica
     que el cliente viene del sitio web
   - Modal "Ver detalles" con la ficha completa de cada tour
   ============================================================ */

(function () {
  'use strict';

  /* ---------- WhatsApp ---------- */

  var WA_PHONE = '573246478239';

  // Nombre del tour por idioma, usado en el mensaje prellenado
  var WA_TOURS = {
    c13:   { es: 'Tour Comuna 13',                    en: 'Comuna 13 Tour' },
    city:  { es: 'City Tour',                         en: 'City Tour' },
    combo: { es: 'Combo City Tour + Comuna 13',       en: 'City Tour + Comuna 13 Combo' },
    gua:   { es: 'Tour Guatapé',                      en: 'Guatapé Tour' },
    chiva: { es: 'Chiva Rumbera',                     en: 'Chiva Rumbera (party bus)' },
    noche: { es: 'Noche Paisa Tour',                  en: 'Noche Paisa Tour' },
    shop:  { es: 'Shopping Paisa Tour',               en: 'Shopping Paisa Tour' },
    sil:   { es: 'Tour Silleteros',                   en: 'Silleteros Tour' },
    sfe:   { es: 'Tour Santa Fe de Antioquia',        en: 'Santa Fe de Antioquia Tour' },
    jar:   { es: 'Tour Jardín de Antioquia',          en: 'Jardín de Antioquia Tour' },
    par:   { es: 'Tour Parapente',                    en: 'Paragliding Tour' },
    nap:   { es: 'Tour Hacienda Nápoles · Santorini', en: 'Hacienda Nápoles · Santorini Tour' },
    pab:   { es: 'Tour de Pablo',                     en: 'Pablo Tour' },
    shu:   { es: 'Transporte Aeropuerto (Shuttle)',   en: 'Airport Shuttle' }
  };

  var WA_MESSAGES = {
    general: {
      es: '¡Hola, Medallo Tour! 👋 Vengo de su sitio web y quiero información sobre sus tours.',
      en: 'Hi, Medallo Tour! 👋 I found you through your website and I would like information about your tours.'
    },
    final: {
      es: '¡Hola, Medallo Tour! 👋 Vengo de su sitio web y quiero reservar un tour.',
      en: 'Hi, Medallo Tour! 👋 I found you through your website and I would like to book a tour.'
    },
    custom: {
      es: '¡Hola, Medallo Tour! 👋 Vengo de su sitio web y quiero armar un plan a mi medida en Medellín.',
      en: 'Hi, Medallo Tour! 👋 I found you through your website and I would like to build a custom plan in Medellín.'
    },
    tour: {
      es: '¡Hola, Medallo Tour! 👋 Vengo de su sitio web y quiero más información sobre el *{tour}*.',
      en: 'Hi, Medallo Tour! 👋 I found you through your website and I would like more information about the *{tour}*.'
    }
  };

  function waHref(key, lang) {
    var msg;
    if (WA_TOURS[key]) {
      msg = WA_MESSAGES.tour[lang].replace('{tour}', WA_TOURS[key][lang]);
    } else {
      msg = (WA_MESSAGES[key] || WA_MESSAGES.general)[lang];
    }
    return 'https://wa.me/' + WA_PHONE + '?text=' + encodeURIComponent(msg);
  }

  function updateWaLinks(lang) {
    document.querySelectorAll('.wa-link').forEach(function (a) {
      a.href = waHref(a.getAttribute('data-wa') || 'general', lang);
    });
  }

  /* ---------- Diccionario ES / EN ---------- */

  var T = {
    'meta.title': [
      'Medallo Tour — Tours y Paquetes Turísticos en Medellín | Comuna 13, Guatapé y más',
      'Medallo Tour — Tours & Travel Packages in Medellín | Comuna 13, Guatapé & more'
    ],

    'nav.home':    ['Inicio', 'Home'],
    'nav.tours':   ['Tours', 'Tours'],
    'nav.why':     ['Nosotros', 'About us'],
    'nav.social':  ['Redes', 'Social'],
    'nav.contact': ['Contacto', 'Contact'],
    'nav.cta':     ['Reservar', 'Book now'],

    'hero.kicker': ['Agencia de tours en Medellín', 'Tour agency in Medellín'],
    'hero.t1':     ['VIVE MEDELLÍN', 'EXPERIENCE MEDELLÍN'],
    'hero.t2':     ['COMO UN VERDADERO PAISA', 'LIKE A TRUE PAISA'],
    'hero.lead':   [
      'Tours y paquetes turísticos por Medellín y Antioquia: Comuna 13, Guatapé, parapente, Hacienda Nápoles y más. Guías locales y reserva inmediata por WhatsApp.',
      'Tours and travel packages across Medellín and Antioquia: Comuna 13, Guatapé, paragliding, Hacienda Nápoles and more. Local guides and instant booking via WhatsApp.'
    ],
    'hero.cta1':   ['Reservar por WhatsApp', 'Book on WhatsApp'],
    'hero.cta2':   ['Ver tours', 'See tours'],
    'hero.badge':  ['La ciudad de la eterna primavera', 'The city of eternal spring'],

    'stats.years':   ['años de experiencia', 'years of experience'],
    'stats.tours.n': ['+5.000', '+5,000'],
    'stats.tours':   ['tours vendidos', 'tours sold'],
    'stats.tiktok':  ['seguidores en TikTok', 'TikTok followers'],

    'tours.kicker': ['Paquetes y servicios', 'Packages & services'],
    'tours.t1':     ['NUESTROS', 'OUR'],
    'tours.t2':     ['TOURS', 'TOURS'],
    'tours.lead':   [
      'Precios por persona en pesos colombianos. Toca “Ver detalles” para conocer todo lo que incluye cada experiencia y reserva por WhatsApp.',
      'Prices per person in Colombian pesos (COP). Tap “See details” to explore everything each experience includes, and book on WhatsApp.'
    ],
    'tours.assist': [
      'Todos nuestros tours incluyen tarjeta de asistencia médica.',
      'All our tours include a medical assistance card.'
    ],

    't.unit':      ['COP · por persona', 'COP · per person'],
    't.unitgroup': ['COP · por persona', 'COP · per person'],
    't.unitpax':   ['COP · por grupo', 'COP · per group'],
    't.from':      ['Desde', 'From'],
    't.book':      ['Reservar', 'Book now'],
    't.details':   ['Ver detalles', 'See details'],
    't.night':     ['Nocturno', 'Night'],
    't.miradores': ['Miradores', 'Viewpoints'],
    't.comboflag': ['Combo · Ahorra $35.000', 'Combo · Save $35,000'],
    't.newflag':   ['Desde el 27 de julio', 'From July 27'],

    'c13.name': ['Tour Comuna 13', 'Comuna 13 Tour'],
    'c13.tag':  ['Vive la historia, siente la cultura.', 'Live the history, feel the culture.'],

    'city.name': ['City Tour', 'City Tour'],
    'city.tag':  ['Descubre los lugares emblemáticos y la cultura local.', 'Discover the city’s landmarks and local culture.'],

    'combo.name': ['City Tour + Comuna 13', 'City Tour + Comuna 13'],
    'combo.tag':  ['Dos experiencias imperdibles en un solo día.', 'Two must-do experiences in a single day.'],

    'gua.name': ['Tour Guatapé', 'Guatapé Tour'],
    'gua.tag':  ['Naturaleza, color y aventura en un solo día.', 'Nature, color and adventure in a single day.'],

    'chiva.name': ['Chiva Rumbera', 'Chiva Rumbera'],
    'chiva.tag':  ['La rumba rodante más paisa: música en vivo, luces y fiesta.', 'The ultimate rolling paisa party: live music, lights and fun.'],

    'noche.name': ['Noche Paisa Tour', 'Noche Paisa Tour'],
    'noche.tag':  ['Miradores, luces de la ciudad y refrigerio típico paisa.', 'Viewpoints, city lights and a typical paisa snack.'],

    'shop.name': ['Shopping Paisa Tour', 'Shopping Paisa Tour'],
    'shop.tag':  ['Las 3 mejores zonas de compras en un solo recorrido.', 'Medellín’s top 3 shopping areas in one route.'],

    'sil.name': ['Tour Silleteros', 'Silleteros Tour'],
    'sil.tag':  ['La tradición de las flores en Santa Elena.', 'The flower-growers’ tradition of Santa Elena.'],

    'sfe.name': ['Tour Santa Fe de Antioquia', 'Santa Fe de Antioquia Tour'],
    'sfe.tag':  ['El encanto colonial de Antioquia.', 'Antioquia’s colonial charm.'],

    'jar.name': ['Jardín de Antioquia', 'Jardín de Antioquia'],
    'jar.tag':  ['Naturaleza, cultura y tradición del Suroeste.', 'Nature, culture and tradition of the Southwest.'],

    'par.name': ['Tour Parapente', 'Paragliding Tour'],
    'par.tag':  ['Adrenalina total y vistas increíbles desde el aire.', 'Pure adrenaline and incredible views from the sky.'],

    'nap.name': ['Hacienda Nápoles · Santorini', 'Hacienda Nápoles · Santorini'],
    'nap.tag':  ['Naturaleza, aventura y diversión para desconectarte.', 'Nature, adventure and fun to disconnect.'],

    'pab.name': ['Tour de Pablo', 'Pablo Tour'],
    'pab.tag':  ['Un recorrido por la historia y la cultura de Medellín.', 'A journey through Medellín’s history and culture.'],

    'shu.name': ['Shuttle Aeropuerto', 'Airport Shuttle'],
    'shu.tag':  ['Del aeropuerto a Medellín, directo y sin estrés.', 'From the airport to Medellín, direct and stress-free.'],

    'custom.title': ['¿BUSCAS OTRO PLAN?', 'LOOKING FOR SOMETHING ELSE?'],
    'custom.lead':  [
      'Cuéntanos qué quieres vivir en Medellín y armamos tu experiencia a la medida.',
      'Tell us what you want to experience in Medellín and we’ll build a custom plan for you.'
    ],
    'custom.btn':   ['Escríbenos', 'Message us'],

    'why.kicker': ['Nosotros', 'About us'],
    'why.t1':     ['¿POR QUÉ', 'WHY'],
    'why.t2':     ['MEDALLO TOUR?', 'MEDALLO TOUR?'],
    'why.lead':   [
      'Más de 3 años mostrando lo mejor de Medellín y Antioquia, con más de 5.000 tours vendidos.',
      'Over 3 years showing the best of Medellín and Antioquia, with more than 5,000 tours sold.'
    ],
    'why1.t': ['Guías 100% locales', '100% local guides'],
    'why1.d': [
      'Paisas que conocen cada rincón de la ciudad y te cuentan la historia real de Medellín.',
      'Paisas who know every corner of the city and tell you the real story of Medellín.'
    ],
    'why2.t': ['Reserva en minutos', 'Book in minutes'],
    'why2.d': [
      'Escríbenos por WhatsApp y confirma tu cupo al instante, sin formularios ni esperas.',
      'Message us on WhatsApp and confirm your spot instantly — no forms, no waiting.'
    ],
    'why3.t': ['Experiencia que respalda', 'Proven experience'],
    'why3.d': [
      'Más de 3 años de operación y más de 5.000 tours vendidos en Medellín y Antioquia.',
      'Over 3 years in operation and more than 5,000 tours sold across Medellín and Antioquia.'
    ],
    'why4.t': ['Todo resuelto', 'Everything covered'],
    'why4.d': [
      'La mayoría de nuestros tours incluyen transporte, recorrido y guía turístico.',
      'Most of our tours include transport, guided route and a tour guide.'
    ],

    'soc.kicker': ['Comunidad', 'Community'],
    'soc.t1':     ['ÚNETE A LA', 'JOIN THE'],
    'soc.t2':     ['COMUNIDAD', 'COMMUNITY'],
    'soc.lead':   [
      'Síguenos y descubre en video cómo se viven nuestros tours.',
      'Follow us and see what our tours look like, on video.'
    ],
    'soc.tt.n':  ['+30.000', '+30,000'],
    'soc.tt.d':  ['seguidores viendo Medellín con nosotros', 'followers exploring Medellín with us'],
    'soc.tt.b':  ['Seguir en TikTok', 'Follow on TikTok'],
    'soc.ig.d':  ['Fotos y momentos reales de nuestros tours.', 'Real photos and moments from our tours.'],
    'soc.fb.d':  ['Novedades, promociones y comunidad.', 'News, promotions and community.'],
    'soc.follow': ['Seguir', 'Follow'],

    'cta.title': ['¿LISTO PARA RODAR?', 'READY TO ROLL?'],
    'cta.lead':  [
      'Escríbenos por WhatsApp y arma tu plan en Medellín hoy mismo. Respondemos de una.',
      'Message us on WhatsApp and plan your Medellín experience today. We reply right away.'
    ],
    'cta.btn':   ['Reserva tu cupo', 'Book your spot'],

    'foot.desc': [
      'Agencia de tours y paquetes turísticos en Medellín, Colombia. Vive la ciudad como un verdadero paisa.',
      'Tour and travel package agency in Medellín, Colombia. Experience the city like a true paisa.'
    ],
    'foot.links':   ['Enlaces', 'Links'],
    'foot.contact': ['Contacto', 'Contact'],
    'foot.wa':      ['WhatsApp:', 'WhatsApp:'],
    'foot.city':    ['Medellín, Antioquia — Colombia', 'Medellín, Antioquia — Colombia'],
    'foot.rights':  ['Todos los derechos reservados.', 'All rights reserved.'],

    'wa.tip': ['¿Hablamos?', 'Let’s chat!']
  };

  var LANG_INDEX = { es: 0, en: 1 };

  /* ---------- Ficha completa de cada tour (modal "Ver detalles") ----------
     Cada texto es un par [español, inglés]. Fuente: documento oficial
     "tours_extraidos paquetes y servicios" de Medallo Tour.            */

  var LBL = {
    inc:    ['Incluye', 'Includes'],
    exc:    ['No incluye', 'Not included'],
    route:  ['Recorrido', 'Itinerary'],
    tips:   ['Recomendaciones', 'Tips'],
    notes:  ['Ten en cuenta', 'Good to know'],
    book:   ['Reservar este tour', 'Book this tour'],
    assist: ['Incluye tarjeta de asistencia médica', 'Medical assistance card included']
  };

  var DETAILS = {
    c13: {
      img: 'assets/img/comuna13.jpg',
      price: ['$75.000 COP · por persona', '$75,000 COP · per person'],
      meta: [
        { l: ['Horarios', 'Schedule'], v: ['Salidas: 12:00 m – 1:30 pm · 4:30 pm – 5:30 pm', 'Departures: 12:00–1:30 pm · 4:30–5:30 pm'] },
        { l: ['Lugar', 'Location'], v: ['Comuna 13, Medellín', 'Comuna 13, Medellín'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Estación Estadio', 'Estadio metro station'] }
      ],
      desc: [
        'Vive la historia y siente la cultura de la Comuna 13: arte urbano, graffitis, escaleras eléctricas y la transformación social más inspiradora de Medellín, de la mano de guías locales.',
        'Live the history and feel the culture of Comuna 13: street art, graffiti, the outdoor escalators and Medellín’s most inspiring social transformation, guided by locals.'
      ],
      inc: [
        ['Transporte', 'Transport'],
        ['Recorrido guiado', 'Guided route'],
        ['Guía turístico', 'Tour guide']
      ]
    },

    city: {
      img: 'assets/img/city-tour.jpg',
      price: ['$75.000 COP · por persona', '$75,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['8:00 am – 12:00 m', '8:00 am – 12:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Centro de la ciudad, Medellín', 'Downtown Medellín'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Estación Estadio o Parque El Poblado', 'Estadio station or El Poblado Park'] }
      ],
      desc: [
        'Recorrido por la ciudad para descubrir, conocer y vivir su historia, con paso por lugares emblemáticos y cultura local. Una experiencia única pensada para dejar recuerdos que duran para siempre.',
        'A city route to discover, learn and live its history, passing by iconic landmarks and local culture. A unique experience designed to leave memories that last forever.'
      ],
      inc: [
        ['Transporte', 'Transport'],
        ['Recorrido guiado', 'Guided route'],
        ['Guía turístico', 'Tour guide']
      ]
    },

    combo: {
      img: 'assets/img/comuna13.jpg',
      price: ['$115.000 COP · por persona', '$115,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['8:00 am – 5:00 pm', '8:00 am – 5:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Centro de Medellín + Comuna 13', 'Downtown Medellín + Comuna 13'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Estación Estadio o Parque El Poblado', 'Estadio station or El Poblado Park'] }
      ],
      desc: [
        'Combo que integra el City Tour con la visita a la Comuna 13, combinando arte urbano, historia y la transformación social del barrio en un solo recorrido. Una experiencia que apoya el turismo local.',
        'A combo that brings together the City Tour and the visit to Comuna 13, combining street art, history and the neighborhood’s social transformation in a single route. An experience that supports local tourism.'
      ],
      inc: [
        ['Transporte', 'Transport'],
        ['Almuerzo', 'Lunch'],
        ['Recorrido guiado', 'Guided route'],
        ['Guía turístico', 'Tour guide']
      ],
      notes: [
        [
          'Por separado, el City Tour y el Tour Comuna 13 cuestan $75.000 COP cada uno ($150.000 en total). Con el combo pagas $115.000 y ahorras $35.000 por persona.',
          'Booked separately, the City Tour and the Comuna 13 Tour cost $75,000 COP each ($150,000 total). With the combo you pay $115,000 and save $35,000 per person.'
        ]
      ]
    },

    gua: {
      img: 'assets/img/guatape.jpg',
      price: ['$129.000 COP · por persona', '$129,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['7:00 am – 5:00 pm', '7:00 am – 5:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Guatapé, Antioquia', 'Guatapé, Antioquia'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Parque El Poblado, Estadio o Centro Comercial', 'El Poblado Park, Estadio or shopping mall'] }
      ],
      desc: [
        'Experiencia inolvidable en Guatapé, combinando naturaleza, color y aventura: la Piedra del Peñol, el embalse y el pueblo de los zócalos más famoso de Colombia.',
        'An unforgettable experience in Guatapé, combining nature, color and adventure: El Peñol rock, the reservoir and Colombia’s most famous painted-facade town.'
      ],
      inc: [
        ['Transporte', 'Transport'],
        ['Almuerzo', 'Lunch'],
        ['Recorrido guiado', 'Guided route'],
        ['Guía turístico', 'Tour guide']
      ]
    },

    chiva: {
      img: 'assets/img/chiva-rumbera.jpg',
      price: ['$75.000 COP · por persona', '$75,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['Salidas 7:00 pm u 8:30 pm · regreso 10:00 – 11:00 pm', 'Departs 7:00 or 8:30 pm · returns 10:00–11:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Medellín y alrededores (destino a elección)', 'Medellín & surroundings (destination of your choice)'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Calle 70', 'Calle 70'] }
      ],
      desc: [
        'Recorrido nocturno en chiva rumbera (bus tradicional colombiano) con música en vivo, sonido profesional, luces LED y ambiente de rumba garantizado, con destino a elección dentro de Medellín y alrededores.',
        'A night ride on a chiva rumbera (traditional Colombian party bus) with live music, professional sound, LED lights and a guaranteed party atmosphere, heading to the destination of your choice around Medellín.'
      ],
      inc: [
        ['Música en vivo', 'Live music'],
        ['Sonido premium', 'Premium sound system'],
        ['Luces LED', 'LED lights'],
        ['Ambiente rumbero garantizado', 'Guaranteed party vibe'],
        ['Comodidad y seguridad', 'Comfort & safety']
      ],
      notes: [
        ['Ideal para cumpleaños, eventos y celebraciones.', 'Perfect for birthdays, events and celebrations.']
      ]
    },

    noche: {
      img: 'assets/img/noche-paisa.jpg',
      price: ['Desde $85.000 COP · por persona', 'From $85,000 COP · per person'],
      meta: [
        { l: ['Duración', 'Duration'], v: ['5 horas · recorrido 100% nocturno', '5 hours · fully at night'] },
        { l: ['Lugar', 'Location'], v: ['Pueblito Paisa → Mirador El Cielo', 'Pueblito Paisa → El Cielo viewpoint'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Recogida en tu hospedaje (Poblado, Laureles, Centro y más)', 'Pickup at your stay (Poblado, Laureles, Downtown & more)'] }
      ],
      desc: [
        'Recorrido nocturno por Pueblito Paisa y el Mirador El Cielo, dos de los miradores más visitados de Medellín, con tiempo relajado para fotos y un refrigerio típico paisa incluido. Opera los 7 días de la semana.',
        'A night route through Pueblito Paisa and the El Cielo viewpoint, two of Medellín’s most visited lookouts, with relaxed time for photos and a typical paisa snack included. Runs 7 days a week.'
      ],
      route: [
        ['Pueblito Paisa: recorrido y fotos panorámicas', 'Pueblito Paisa: walk and panoramic photos'],
        ['Mirador El Cielo: mirador + refrigerio', 'El Cielo: viewpoint + snack'],
        ['Regreso a tu hospedaje', 'Return to your accommodation']
      ],
      inc: [
        ['Transporte ida y regreso con recogida en el hospedaje', 'Round-trip transport with hotel pickup'],
        ['Refrigerio típico “Noche Paisa”: chocolate o aguapanela caliente, o canelazo con aguardiente', 'Typical “Noche Paisa” snack: hot chocolate, aguapanela or canelazo with aguardiente'],
        ['Guía / conductor acompañante', 'Guide / driver companion']
      ],
      exc: [
        ['Atracciones de pago del Mirador El Cielo (columpio, cauchera): por cuenta y riesgo del pasajero', 'Paid attractions at El Cielo (swing, slingshot): at the passenger’s own cost and risk']
      ],
      tips: [
        ['Lleva chaqueta o abrigo ligero: las noches en los miradores son frescas.', 'Bring a jacket or light coat: nights at the viewpoints are chilly.']
      ]
    },

    shop: {
      img: 'assets/img/shopping-paisa.jpg',
      price: ['Desde $85.000 COP · por persona', 'From $85,000 COP · per person'],
      meta: [
        { l: ['Duración', 'Duration'], v: ['≈ 5 h 45 min (medio día)', '≈ 5h 45min (half day)'] },
        { l: ['Lugar', 'Location'], v: ['El Hueco → Guayabal → Mayorca Mega Plaza (Sabaneta)', 'El Hueco → Guayabal → Mayorca Mega Plaza (Sabaneta)'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Recogida en tu hospedaje, según la ruta del día', 'Pickup at your stay, depending on the day’s route'] }
      ],
      desc: [
        'Recorrido de medio día por las 3 zonas comerciales más completas de Medellín — mayoreo popular, outlets de marca y mall con marcas internacionales — en un solo vehículo, con recogida y regreso al hospedaje.',
        'A half-day route through Medellín’s 3 most complete shopping areas — wholesale bargains, brand outlets and a mall with international brands — in a single vehicle, with pickup and drop-off at your stay.'
      ],
      route: [
        ['El Hueco: compras de mayoreo y precio popular', 'El Hueco: wholesale and bargain shopping'],
        ['Guayabal: outlets de marca (Outlet Cra. 65 + Mall Guayabal)', 'Guayabal: brand outlets (Cra. 65 Outlet + Guayabal Mall)'],
        ['Mayorca Mega Plaza: marcas internacionales', 'Mayorca Mega Plaza: international brands'],
        ['Regreso a tu hospedaje', 'Return to your accommodation']
      ],
      inc: [
        ['Transporte ida y regreso con recogida en el hospedaje', 'Round-trip transport with hotel pickup'],
        ['Vehículo-bodega móvil para guardar tus compras entre paradas', 'Mobile storage vehicle to keep your purchases between stops'],
        ['Parada de hidratación / refrigerio', 'Hydration / snack stop'],
        ['Conductor-guía que orienta sobre zonas, precios y tallas colombianas', 'Driver-guide advising on areas, prices and Colombian sizing']
      ],
      exc: [
        ['Almuerzo: corre por cuenta del cliente', 'Lunch: at the client’s own expense']
      ],
      tips: [
        ['Lleva efectivo: muchos locales de El Hueco no reciben tarjeta.', 'Bring cash: many shops in El Hueco don’t take cards.'],
        ['Lleva una maleta extra o plegable para tus compras.', 'Bring an extra or foldable bag for your purchases.'],
        ['Usa ropa cómoda y calzado cerrado.', 'Wear comfortable clothes and closed shoes.']
      ],
      notes: [
        ['No opera los domingos (El Hueco está cerrado).', 'Not available on Sundays (El Hueco is closed).']
      ]
    },

    sil: {
      img: 'assets/img/silleteros.png',
      price: ['$129.000 COP · por persona', '$129,000 COP · per person'],
      meta: [
        { l: ['Horarios', 'Schedule'], v: ['Dos salidas: 7:45 am – 12:00 m · 1:45 pm – 5:00 pm', 'Two departures: 7:45 am–12:00 pm · 1:45–5:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Santa Elena, Medellín', 'Santa Elena, Medellín'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Estación Estadio', 'Estadio metro station'] }
      ],
      desc: [
        'Tour cultural silletero con visita al monumento de las flores, el parque de Santa Elena y una finca silletera, incluyendo la elaboración de silletas y una charla sobre las flores.',
        'A cultural silletero tour visiting the flower monument, Santa Elena’s main park and a silletero farm, including silleta-making and a talk about the flowers.'
      ],
      route: [
        ['Visita al monumento de las flores', 'Visit to the flower monument'],
        ['Visita al parque de Santa Elena', 'Visit to Santa Elena’s park'],
        ['Recorrido en finca silletera', 'Tour of a silletero farm'],
        ['Elaboración de silletas', 'Silleta-making workshop'],
        ['Charla sobre las flores', 'Talk about the flowers'],
        ['Recorrido por el jardín', 'Garden walk']
      ],
      inc: [
        ['Transporte ida y regreso', 'Round-trip transport'],
        ['Sombrero y mulera', 'Traditional hat and mulera scarf'],
        ['Refrigerio típico', 'Typical snack'],
        ['Guía acompañante', 'Accompanying guide']
      ],
      notes: [
        ['Disponible por tiempo limitado a partir del 27 de julio.', 'Available for a limited time starting July 27.']
      ]
    },

    sfe: {
      img: 'assets/img/santa-fe.jpg',
      price: ['Desde $120.000 COP · por persona', 'From $120,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['8:00 am – 5:00 pm', '8:00 am – 5:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Santa Fe de Antioquia', 'Santa Fe de Antioquia'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Jardín, Estación Estadio o Parque El Poblado', 'Jardín, Estadio station or El Poblado Park'] }
      ],
      desc: [
        'Viaje al encanto colonial de Antioquia: calles empedradas, arquitectura histórica y el clima cálido de Santa Fe de Antioquia, con transporte, almuerzo, recorrido y guía turístico.',
        'A trip to Antioquia’s colonial charm: cobblestone streets, historic architecture and the warm weather of Santa Fe de Antioquia, with transport, lunch, guided route and tour guide.'
      ],
      inc: [
        ['Transporte', 'Transport'],
        ['Almuerzo', 'Lunch'],
        ['Recorrido guiado', 'Guided route'],
        ['Guía turístico', 'Tour guide']
      ],
      notes: [
        ['Salidas solo sujetas a disponibilidad.', 'Departures subject to availability.']
      ]
    },

    jar: {
      img: 'assets/img/jardin-antioquia.jpg',
      price: ['$145.000 COP · por persona', '$145,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['5:30 am – 5:00 pm', '5:30 am – 5:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Jardín, Antioquia (Suroeste antioqueño)', 'Jardín, Antioquia (Southwest Antioquia)'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Estación Estadio o Parque El Poblado', 'Estadio station or El Poblado Park'] }
      ],
      desc: [
        'Tour al municipio de Jardín, uno de los pueblos más bellos de Colombia, con enfoque en naturaleza, cultura y tradición en el corazón del Suroeste antioqueño.',
        'A tour to the town of Jardín, one of Colombia’s most beautiful villages, focused on nature, culture and tradition in the heart of Southwest Antioquia.'
      ],
      inc: [
        ['Transporte', 'Transport'],
        ['Recorrido guiado', 'Guided route'],
        ['Guía turístico', 'Tour guide']
      ],
      notes: [
        ['Sujeto a disponibilidad.', 'Subject to availability.']
      ]
    },

    par: {
      img: 'assets/img/parapente.jpg',
      price: ['Desde $220.000 COP · por persona · 15 minutos de vuelo', 'From $220,000 COP · per person · 15-minute flight'],
      meta: [
        { l: ['Duración', 'Duration'], v: ['15 minutos de vuelo', '15-minute flight'] },
        { l: ['Lugar', 'Location'], v: ['San Félix', 'San Félix'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['San Félix (punto del vuelo) o recogida en el hospedaje por un costo adicional', 'San Félix (flight site) or hotel pickup for an extra fee'] }
      ],
      desc: [
        'Experiencia de parapente que combina vistas increíbles, naturaleza y adrenalina total: la sensación de volar y vivir la aventura desde las alturas sobre el Valle de Aburrá.',
        'A paragliding experience combining incredible views, nature and pure adrenaline: the feeling of flying and living the adventure high above the Aburrá Valley.'
      ],
      notes: [
        ['El precio varía según el tiempo de vuelo: hay dos opciones de tarifa.', 'The price varies with flight time: there are two rate options.']
      ]
    },

    nap: {
      img: 'assets/img/hacienda-napoles.jpg',
      price: ['Básico $259.000 · Safari $299.000 COP · por persona', 'Basic $259,000 · Safari $299,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['4:00 am – 5:00 pm', '4:00 am – 5:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Hacienda Nápoles / Santorini', 'Hacienda Nápoles / Santorini'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Parque El Poblado, Estadio o C.C. El Punto de la Oriental', 'El Poblado Park, Estadio or El Punto de la Oriental mall'] }
      ],
      desc: [
        'Experiencia de naturaleza, aventura y diversión en Hacienda Nápoles y Santorini, con paisajes, animales exóticos, recorridos al aire libre y espacios únicos para desconectarse.',
        'An experience of nature, adventure and fun at Hacienda Nápoles and Santorini, with landscapes, exotic animals, open-air routes and unique spaces to disconnect.'
      ],
      notes: [
        ['Hay dos opciones de tarifa: Básico ($259.000) y Safari ($299.000).', 'There are two rate options: Basic ($259,000) and Safari ($299,000).']
      ]
    },

    pab: {
      img: 'assets/img/tour-de-pablo.jpg',
      price: ['$410.000 COP · por persona', '$410,000 COP · per person'],
      meta: [
        { l: ['Horario', 'Schedule'], v: ['7:00 am – 3:00 pm', '7:00 am – 3:00 pm'] },
        { l: ['Lugar', 'Location'], v: ['Medellín', 'Medellín'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Recogida en tu hospedaje', 'Pickup at your accommodation'] }
      ],
      desc: [
        'Recorrido por la historia y la cultura de Medellín, con visita al Museo Pablo Escobar, el Barrio Pablo Escobar y el Cementerio Jardines Montesacro.',
        'A journey through Medellín’s history and culture, visiting the Pablo Escobar Museum, the Pablo Escobar neighborhood and the Jardines Montesacro cemetery.'
      ],
      inc: [
        ['Museo Pablo Escobar (no incluye el fee de entrada)', 'Pablo Escobar Museum (entrance fee not included)'],
        ['Barrio Pablo Escobar', 'Pablo Escobar neighborhood'],
        ['Cementerio Jardines Montesacro', 'Jardines Montesacro cemetery'],
        ['Recogida en el hospedaje', 'Hotel pickup']
      ]
    },

    shu: {
      img: 'assets/img/shuttle-aeropuerto.jpg',
      price: ['Desde $165.000 COP · según cantidad de pasajeros (PAX)', 'From $165,000 COP · depending on group size (PAX)'],
      meta: [
        { l: ['Duración', 'Duration'], v: ['1 hora', '1 hour'] },
        { l: ['Ruta', 'Route'], v: ['Aeropuerto JMC → Medellín (no incluye Envigado)', 'JMC Airport → Medellín (Envigado not included)'] },
        { l: ['Punto de salida', 'Meeting point'], v: ['Aeropuerto: te recogen a la llegada de tu vuelo', 'Airport: pickup right when your flight lands'] }
      ],
      desc: [
        'Servicio de shuttle desde el aeropuerto directo a la ciudad de Medellín. La empresa se contacta directamente contigo para coordinar la recogida; el precio varía según la cantidad de pasajeros del grupo.',
        'Shuttle service from the airport straight to Medellín. The company contacts you directly to coordinate the pickup; the price varies with the number of passengers in your group.'
      ],
      inc: [
        ['Transporte directo del aeropuerto a Medellín', 'Direct transport from the airport to Medellín'],
        ['Coordinación directa con la persona encargada de recogerte', 'Direct coordination with the person picking you up']
      ],
      tips: [
        ['Ten a mano la dirección de tu hospedaje y el itinerario o número de vuelo.', 'Have your accommodation address and flight itinerary or number ready.']
      ],
      pax: {
        caption: ['Tarifas según cantidad de pasajeros (PAX)', 'Rates by number of passengers (PAX)'],
        head: [['Pasajeros', 'Passengers'], ['Precio por trayecto', 'Price per trip']],
        rows: [
          [['1 – 4 PAX', '1 – 4 PAX'], ['$165.000 COP', '$165,000 COP']],
          [['1 – 7 PAX', '1 – 7 PAX'], ['$300.000 COP', '$300,000 COP']],
          [['1 – 10 PAX', '1 – 10 PAX'], ['$375.000 COP', '$375,000 COP']],
          [['1 – 15 PAX', '1 – 15 PAX'], ['$440.000 COP', '$440,000 COP']],
          [['1 – 19 PAX', '1 – 19 PAX'], ['$500.000 COP', '$500,000 COP']]
        ]
      }
    }
  };

  /* ---------- Modal "Ver detalles" ---------- */

  var modal = document.getElementById('tourModal');
  var tmImg = document.getElementById('tmImg');
  var tmBody = document.getElementById('tmBody');
  var openKey = null;
  var lastFocus = null;
  var currentLang = 'es';

  var WA_ICON = '<svg class="icon-wa" viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true"><use href="#wa-path"/></svg>';

  function listHtml(cls, items, idx) {
    var lis = items.map(function (it) { return '<li>' + it[idx] + '</li>'; }).join('');
    return '<ul class="' + cls + '">' + lis + '</ul>';
  }

  function renderModal() {
    if (!openKey || !DETAILS[openKey]) return;

    var d = DETAILS[openKey];
    var idx = LANG_INDEX[currentLang] || 0;
    var name = T[openKey + '.name'] ? T[openKey + '.name'][idx] : openKey;
    var html = '';

    html += '<h3 class="tm-title" id="tmTitle">' + name + '</h3>';
    html += '<p class="tm-price">' + d.price[idx] + '</p>';

    html += '<div class="tm-meta">' + d.meta.map(function (m) {
      return '<div><span class="tm-meta-l">' + m.l[idx] + '</span><span class="tm-meta-v">' + m.v[idx] + '</span></div>';
    }).join('') + '</div>';

    html += '<p class="tm-desc">' + d.desc[idx] + '</p>';

    if (d.route) {
      html += '<p class="tm-h">' + LBL.route[idx] + '</p><ol class="tm-route">' +
        d.route.map(function (r) { return '<li>' + r[idx] + '</li>'; }).join('') + '</ol>';
    }

    if (d.inc) {
      html += '<p class="tm-h">' + LBL.inc[idx] + '</p>' + listHtml('tm-list', d.inc, idx);
    }

    if (d.exc) {
      html += '<p class="tm-h">' + LBL.exc[idx] + '</p>' + listHtml('tm-list tm-exc', d.exc, idx);
    }

    if (d.tips) {
      html += '<p class="tm-h">' + LBL.tips[idx] + '</p>' + listHtml('tm-list', d.tips, idx);
    }

    if (d.pax) {
      html += '<p class="tm-h">' + d.pax.caption[idx] + '</p>';
      html += '<div class="tm-table-wrap"><table class="tm-table"><thead><tr>' +
        d.pax.head.map(function (h) { return '<th>' + h[idx] + '</th>'; }).join('') +
        '</tr></thead><tbody>' +
        d.pax.rows.map(function (row) {
          return '<tr>' + row.map(function (cell, i) {
            return '<td>' + (i === 1 ? '<strong>' + cell[idx] + '</strong>' : cell[idx]) + '</td>';
          }).join('') + '</tr>';
        }).join('') +
        '</tbody></table></div>';
    }

    if (d.notes) {
      html += '<p class="tm-h">' + LBL.notes[idx] + '</p>' +
        d.notes.map(function (n) { return '<p class="tm-note">' + n[idx] + '</p>'; }).join('');
    }

    html += '<p class="tm-assist">' +
      '<svg viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M12 8v6M9 11h6"/></svg>' +
      LBL.assist[idx] + '</p>';

    html += '<a class="btn btn-red tm-cta" href="' + waHref(openKey, currentLang) + '" target="_blank" rel="noopener">' +
      WA_ICON + '<span>' + LBL.book[idx] + '</span></a>';

    tmImg.src = d.img;
    tmImg.alt = name;
    tmBody.innerHTML = html;
    tmBody.scrollTop = 0;
  }

  function openModal(key) {
    openKey = key;
    lastFocus = document.activeElement;
    renderModal();
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    modal.querySelector('.tour-modal-close').focus();
  }

  function closeModal() {
    openKey = null;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  document.querySelectorAll('.tour-details').forEach(function (btn) {
    btn.addEventListener('click', function () {
      openModal(btn.getAttribute('data-tour'));
    });
  });

  modal.addEventListener('click', function (e) {
    if (e.target.closest('[data-close]')) closeModal();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && openKey) closeModal();
  });

  /* ---------- Idioma ---------- */

  function applyLang(lang) {
    var idx = LANG_INDEX[lang] !== undefined ? LANG_INDEX[lang] : 0;
    currentLang = lang;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (T[key]) {
        el.textContent = T[key][idx];
      } else if (window.console) {
        console.warn('i18n: clave sin traducción →', key);
      }
    });

    document.documentElement.lang = lang;
    document.title = T['meta.title'][idx];

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      var active = btn.getAttribute('data-lang') === lang;
      btn.classList.toggle('is-active', active);
      btn.setAttribute('aria-pressed', String(active));
    });

    updateWaLinks(lang);

    // Si el modal está abierto, se vuelve a pintar en el nuevo idioma
    if (openKey) renderModal();

    try { localStorage.setItem('mt-lang', lang); } catch (e) { /* modo privado */ }
  }

  /* ---------- Tema claro / oscuro ---------- */

  function applyTheme(theme) {
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute('content', theme === 'dark' ? '#131210' : '#FCD116');
    try { localStorage.setItem('mt-theme', theme); } catch (e) { /* modo privado */ }
  }

  /* ---------- Inicialización ---------- */

  var THEME_DEFAULT_VERSION = 'dark-default-2026-07';

  var storedLang = null, storedTheme = null, storedThemeDefaultVersion = null;
  try {
    storedLang = localStorage.getItem('mt-lang');
    storedTheme = localStorage.getItem('mt-theme');
    storedThemeDefaultVersion = localStorage.getItem('mt-theme-default-version');
  } catch (e) { /* modo privado */ }

  // Permite compartir enlaces con idioma/tema fijados: ?lang=en&theme=dark
  var params = new URLSearchParams(window.location.search);
  var urlLang = params.get('lang');
  var urlTheme = params.get('theme');

  // Español por defecto; tema oscuro por defecto
  if (storedThemeDefaultVersion !== THEME_DEFAULT_VERSION && storedTheme === 'light') {
    storedTheme = null;
  }

  var lang = urlLang === 'en' || urlLang === 'es' ? urlLang : (storedLang === 'en' ? 'en' : 'es');
  var theme = urlTheme === 'dark' || urlTheme === 'light' ? urlTheme : (storedTheme === 'dark' || storedTheme === 'light' ? storedTheme : 'dark');

  applyTheme(theme);
  try { localStorage.setItem('mt-theme-default-version', THEME_DEFAULT_VERSION); } catch (e) { /* modo privado */ }
  applyLang(lang);

  document.querySelectorAll('.lang-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      applyLang(btn.getAttribute('data-lang'));
    });
  });

  document.getElementById('themeToggle').addEventListener('click', function () {
    var isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    applyTheme(isDark ? 'light' : 'dark');
  });

  /* ---------- Menú móvil ---------- */

  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  navToggle.addEventListener('click', function () {
    var open = mainNav.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', open);
    navToggle.setAttribute('aria-expanded', String(open));
  });

  mainNav.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      mainNav.classList.remove('is-open');
      navToggle.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });

  /* ---------- Header con sombra al hacer scroll ---------- */

  var header = document.getElementById('siteHeader');

  function onScroll() {
    header.classList.toggle('is-scrolled', window.scrollY > 8);
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Animaciones de entrada ---------- */

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduceMotion && 'IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });
  } else {
    document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('in'); });
  }

})();
