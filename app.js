const municipalityNameMap = {
  "Monterrey": { id: "monterrey", name: "Monterrey" },
  "Apodaca": { id: "apodaca", name: "Apodaca" },
  "Guadalupe": { id: "guadalupe", name: "Guadalupe" },
  "General Escobedo": { id: "escobedo", name: "Escobedo" },
  "San Nicolás de los Garza": { id: "san-nicolas", name: "San Nicolás" },
  "Juárez": { id: "juarez", name: "Juárez" },
  "Santa Catarina": { id: "santa-catarina", name: "Santa Catarina" },
  "García": { id: "garcia", name: "García" },
  "San Pedro Garza García": { id: "san-pedro", name: "San Pedro" }
};

const municipalityOrder = [
  "monterrey",
  "apodaca",
  "guadalupe",
  "escobedo",
  "san-nicolas",
  "juarez",
  "santa-catarina",
  "garcia",
  "san-pedro"
];

const municipalityPopulation = {
  "monterrey": 1142952,
  "apodaca": 635862,
  "guadalupe": 536436,
  "escobedo": 454967,
  "san-nicolas": 412199,
  "juarez": 308285,
  "santa-catarina": 304052,
  "garcia": 234698,
  "san-pedro": 132128
};

const municipalityLabelOffsets = {
  "monterrey": { x: 22, y: 2 },
  "san-pedro": { x: -18, y: -4 }
};

const municipalityNameAliases = {
  "Monterrey": "monterrey",
  "Apodaca": "apodaca",
  "Guadalupe": "guadalupe",
  "Escobedo": "escobedo",
  "General Escobedo": "escobedo",
  "San Nicolás": "san-nicolas",
  "San Nicolás de los Garza": "san-nicolas",
  "Juárez": "juarez",
  "Santa Catarina": "santa-catarina",
  "García": "garcia",
  "San Pedro": "san-pedro",
  "San Pedro Garza García": "san-pedro"
};

const municipalityShapes = (window.METRO9_GEOMETRY || [])
  .map((item) => {
    const meta = municipalityNameMap[item.name];
    return meta
      ? {
          id: meta.id,
          name: meta.name,
          officialName: item.name,
          path: item.path,
          label: item.label
        }
      : null;
  })
  .filter(Boolean)
  .sort((left, right) => municipalityOrder.indexOf(left.id) - municipalityOrder.indexOf(right.id));

const municipalityLookup = Object.fromEntries(municipalityShapes.map((shape) => [shape.id, shape]));

function pointInMunicipality(municipalityId, dx = 0, dy = 0) {
  const municipality = municipalityLookup[municipalityId];
  return {
    x: municipality.label.x + dx,
    y: municipality.label.y + dy
  };
}

const greeneryValues = {
  "apodaca": {
    value: 1.67,
    year: "2011",
    note: "Inventario comparable de áreas verdes por habitante citado por el Congreso de Nuevo León con base en SEMARNAT.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  },
  "escobedo": {
    value: 2.16,
    year: "2011",
    note: "Dato comparable del inventario citado para el núcleo urbano metropolitano.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  },
  "santa-catarina": {
    value: 2.39,
    year: "2011",
    note: "Dato comparable del inventario citado para el núcleo urbano metropolitano.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  },
  "guadalupe": {
    value: 3.23,
    year: "2011",
    note: "Dato comparable del inventario citado para el núcleo urbano metropolitano.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  },
  "monterrey": {
    value: 4.75,
    year: "2011",
    note: "Dato comparable del inventario citado para el núcleo urbano metropolitano.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  },
  "san-nicolas": {
    value: 6.13,
    year: "2011",
    note: "Dato comparable del inventario citado para el núcleo urbano metropolitano.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  },
  "san-pedro": {
    value: 17.99,
    year: "2011",
    note: "Es el municipio con mayor dotación del inventario comparable citado en el documento legislativo.",
    source: {
      label: "Congreso NL / inventario SEMARNAT",
      url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf"
    }
  }
};

const stations = [
  {
    id: "escobedo",
    name: "Norte-Escobedo",
    municipality: "Escobedo",
    short: "Escobedo",
    ...pointInMunicipality("escobedo", -6, -24),
    pm25: 16.32,
    pm10: 44.99,
    o3: null
  },
  {
    id: "garcia",
    name: "Noroeste 2-García",
    municipality: "García",
    short: "García",
    ...pointInMunicipality("garcia", -28, -18),
    pm25: 20.04,
    pm10: 70.73,
    o3: 30.88
  },
  {
    id: "apodaca",
    name: "Noreste 2-Apodaca",
    municipality: "Apodaca",
    short: "Apodaca",
    ...pointInMunicipality("apodaca", 28, -24),
    pm25: 24.88,
    pm10: 62.07,
    o3: null
  },
  {
    id: "san-bernabe",
    name: "Noroeste-San Bernabé",
    municipality: "Monterrey",
    short: "San Bernabé",
    ...pointInMunicipality("monterrey", -46, -12),
    pm25: 23.11,
    pm10: 74.45,
    o3: 26.99
  },
  {
    id: "san-nicolas",
    name: "Noreste-San Nicolás",
    municipality: "San Nicolás",
    short: "San Nicolás",
    ...pointInMunicipality("san-nicolas", 18, -16),
    pm25: 18.06,
    pm10: 57.7,
    o3: null
  },
  {
    id: "juarez",
    name: "Sureste 2-Juárez",
    municipality: "Juárez",
    short: "Juárez",
    ...pointInMunicipality("juarez", 36, -18),
    pm25: 19.33,
    pm10: 58.67,
    o3: 19.07
  },
  {
    id: "santa-catarina",
    name: "Suroeste-Santa Catarina",
    municipality: "Santa Catarina",
    short: "Sta. Catarina",
    ...pointInMunicipality("santa-catarina", -26, 12),
    pm25: 24.96,
    pm10: 67.57,
    o3: 14.77
  },
  {
    id: "pastora",
    name: "Sureste-La Pastora",
    municipality: "Guadalupe",
    short: "La Pastora",
    ...pointInMunicipality("guadalupe", 34, 10),
    pm25: 16.7,
    pm10: 50.63,
    o3: 24.76
  },
  {
    id: "san-pedro",
    name: "Suroeste 2-San Pedro",
    municipality: "San Pedro",
    short: "San Pedro",
    ...pointInMunicipality("san-pedro", 0, -18),
    pm25: 17.55,
    pm10: 55.64,
    o3: 20.17
  },
  {
    id: "obispado",
    name: "Centro-Obispado",
    municipality: "Monterrey",
    short: "Obispado",
    ...pointInMunicipality("monterrey", -6, -2),
    pm25: 20.85,
    pm10: 48.36,
    o3: 23.67
  },
  {
    id: "universidad",
    name: "Norte 2-Universidad",
    municipality: "San Nicolás",
    short: "Universidad",
    ...pointInMunicipality("san-nicolas", -20, -34),
    pm25: 23.3,
    pm10: 60.98,
    o3: 20.8
  },
  {
    id: "pueblo-serena",
    name: "Sur-Pueblo Serena",
    municipality: "Monterrey",
    short: "P. Serena",
    ...pointInMunicipality("monterrey", -4, 56),
    pm25: 9.57,
    pm10: 36.32,
    o3: null
  }
].map((station) => ({
  ...station,
  pressureIndex: Math.round((((station.pm25 / 10) + (station.pm10 / 28)) / 2) * 100)
}));

const alerts = [
  {
    id: "alert-san-pedro",
    name: "San Pedro",
    short: "San Pedro",
    ...pointInMunicipality("san-pedro", 0, -18),
    municipality: "San Pedro",
    pollutant: "O3",
    value: 105,
    unit: "ppb",
    date: "25 feb 2026, 18:00",
    level: "Mala",
    note: "Episodio de ozono elevado en la estación SUROESTE2-SAN PEDRO.",
    source: {
      label: "Mapa Índice Aire y Salud",
      url: "https://aire.nl.gob.mx/icars2020/map_calidad_icars.php"
    }
  },
  {
    id: "alert-garcia",
    name: "García",
    short: "García",
    ...pointInMunicipality("garcia", -28, -18),
    municipality: "García",
    pollutant: "PM2.5",
    value: 27,
    unit: "µg/m³",
    date: "20 nov 2025, 18:00",
    level: "Aceptable",
    note: "Máximo reciente de PM2.5 publicado por el mapa del SIMA en el motor indexado.",
    source: {
      label: "Mapa Índice Aire y Salud",
      url: "https://aire.nl.gob.mx/icars2020/map_calidad_icars.php"
    }
  },
  {
    id: "alert-universidad",
    name: "Universidad",
    short: "Universidad",
    ...pointInMunicipality("san-nicolas", -20, -34),
    municipality: "San Nicolás",
    pollutant: "PM2.5",
    value: 16,
    unit: "µg/m³",
    date: "16 feb 2026, 06:00",
    level: "Aceptable",
    note: "Pico reciente en la estación NORTE2-UNIVERSIDAD.",
    source: {
      label: "Mapa Índice Aire y Salud",
      url: "https://aire.nl.gob.mx/icars2020/map_calidad_icars.php"
    }
  }
];

const climateHistorical = [
  {
    id: "monterrey",
    municipality: "Monterrey",
    coords: "25.6866, -100.3161",
    avgTemp: 21.6,
    avgRain: 585,
    tempTrend: 0.22,
    rainTrend: 21,
    hottestYear: "2023",
    hottestTemp: 22.7,
    rainiestYear: "2013",
    rainiestRain: 907
  },
  {
    id: "apodaca",
    municipality: "Apodaca",
    coords: "25.7810, -100.1880",
    avgTemp: 22.0,
    avgRain: 575,
    tempTrend: 0.47,
    rainTrend: 10,
    hottestYear: "2023",
    hottestTemp: 23.6,
    rainiestYear: "2013",
    rainiestRain: 907
  },
  {
    id: "guadalupe",
    municipality: "Guadalupe",
    coords: "25.6760, -100.2560",
    avgTemp: 21.8,
    avgRain: 585,
    tempTrend: 0.13,
    rainTrend: 21,
    hottestYear: "2011",
    hottestTemp: 22.9,
    rainiestYear: "2013",
    rainiestRain: 907
  },
  {
    id: "escobedo",
    municipality: "Escobedo",
    coords: "25.7950, -100.3140",
    avgTemp: 21.6,
    avgRain: 573,
    tempTrend: 0.45,
    rainTrend: 5,
    hottestYear: "2023",
    hottestTemp: 23.4,
    rainiestYear: "2013",
    rainiestRain: 907
  },
  {
    id: "san-nicolas",
    municipality: "San Nicolás",
    coords: "25.7490, -100.2860",
    avgTemp: 21.9,
    avgRain: 573,
    tempTrend: 0.31,
    rainTrend: 5,
    hottestYear: "2023",
    hottestTemp: 23.4,
    rainiestYear: "2013",
    rainiestRain: 907
  },
  {
    id: "juarez",
    municipality: "Juárez",
    coords: "25.6480, -100.0960",
    avgTemp: 21.9,
    avgRain: 572,
    tempTrend: 0.58,
    rainTrend: 54,
    hottestYear: "2023",
    hottestTemp: 23.8,
    rainiestYear: "2024",
    rainiestRain: 907
  },
  {
    id: "santa-catarina",
    municipality: "Santa Catarina",
    coords: "25.6740, -100.4590",
    avgTemp: 21.1,
    avgRain: 568,
    tempTrend: 0.24,
    rainTrend: 33,
    hottestYear: "2023",
    hottestTemp: 22.4,
    rainiestYear: "2010",
    rainiestRain: 865
  },
  {
    id: "garcia",
    municipality: "García",
    coords: "25.8120, -100.5850",
    avgTemp: 21.4,
    avgRain: 538,
    tempTrend: 0.11,
    rainTrend: -6,
    hottestYear: "2011",
    hottestTemp: 22.5,
    rainiestYear: "2010",
    rainiestRain: 865
  },
  {
    id: "san-pedro",
    municipality: "San Pedro",
    coords: "25.6570, -100.4020",
    avgTemp: 21.1,
    avgRain: 568,
    tempTrend: 0.2,
    rainTrend: 33,
    hottestYear: "2023",
    hottestTemp: 22.4,
    rainiestYear: "2010",
    rainiestRain: 865
  }
];

const noiseFacts = [
  {
    title: "Guadalupe",
    body: "Reglamento cívico con referencia pública reciente: 55 dB de día y 50 dB de noche. El municipio anunció reforzamiento operativo en diciembre de 2025.",
    source: "https://guadalupe.gob.mx/noticia/reforzara-guadalupe-operativo-de-vigilancia-por-vecinos-ruidosos"
  },
  {
    title: "San Nicolás",
    body: "El programa Buenos Vecinos reportó 14,046 llamadas por alto volumen en 2024. Publicaciones municipales y notas locales citan umbrales de 55/50 o 68/65 dB según reglamento y periodo.",
    source: "https://circuloinformativo.com/2024/12/10/buscaran-reducir-llamadas-de-alto-volumen-en-san-nicolas-con-el-programa-buenos-vecinos/"
  },
  {
    title: "Apodaca",
    body: "Operativo municipal de enero de 2020: alrededor de 300 llamadas de fin de semana, 100 reportes atendidos y 50 citatorios por rebasar 50 dB en reuniones y fiestas.",
    source: "https://web.apodaca.gob.mx/refuerza-apodaca-operativos-para-respetar-niveles-de-ruido/"
  },
  {
    title: "Metrópoli",
    body: "Coberturas metropolitanas de 2024 repiten como guía pública 55 dB de día y 50 dB de noche, pero no existe una serie abierta homogénea de medición continua para todos los municipios.",
    source: "https://www.elhorizonte.mx/nuevoleon/aqui-puedes-reportar-a-los-vecinos-ruidosos-en-la-metropoli-regia/7689462171/es5"
  }
];

const findingEntries = [
  {
    title: "La metrópoli no se mide igual en todos lados",
    body: "Algunas variables tienen datos comparables, pero otras solo existen como reportes parciales o contexto público.",
    tag: "Dato clave"
  },
  {
    title: "Las áreas verdes muestran una desigualdad clara",
    body: "San Pedro aparece muy por encima del resto en el inventario disponible, mientras varios municipios quedan lejos de la meta de 9 m²/hab.",
    tag: "Áreas verdes"
  },
  {
    title: "La calidad del aire depende de estaciones",
    body: "PM2.5 y PM10 se leen desde estaciones del SIMA, no como mediciones exactas de cada límite municipal.",
    tag: "Aire"
  },
  {
    title: "El ruido sigue siendo un vacío metropolitano",
    body: "Hay reglamentos y reportes ciudadanos, pero no una red pública continua y comparable para los 9 municipios.",
    tag: "Ruido"
  },
  {
    title: "La falta de datos también es evidencia",
    body: "Para tomar mejores decisiones hacen falta datos abiertos, actualizados y homogéneos sobre clima, arbolado, ruido y salud ambiental.",
    tag: "Datos abiertos"
  }
];

const newsEntries = [
  {
    title: "Investigación sobre emisores industriales",
    topic: "Contaminación industrial",
    sourceName: "Quinto Elemento Lab / The Guardian",
    sourceType: "Investigación periodística",
    date: "2 dic 2025",
    zone: "Área Metropolitana de Monterrey",
    summary:
      "Una investigación basada en reportes oficiales identificó industrias con emisiones relevantes de metales pesados y dióxido de carbono.",
    caution: "Usar con atribución clara; el sitio no emite acusaciones propias.",
    url: "https://quintoelab.org/project/identifican-industrias-emisiones-contaminantes-monterrey"
  },
  {
    title: "RETC registra empresas emisoras en Nuevo León",
    topic: "Emisiones industriales",
    sourceName: "Milenio / RETC Semarnat",
    sourceType: "Nota con base oficial",
    date: "16 feb 2026",
    zone: "Nuevo León",
    summary:
      "La nota reporta 189 empresas con emisiones contaminantes en Nuevo León con información del Registro de Emisiones y Transferencia de Contaminantes.",
    caution: "Cuando sea posible, contrastar con la base RETC original.",
    url: "https://www.milenio.com/comunidad/enlista-semarnat-189-empresas-emiten-contaminantes-nuevo-leon"
  },
  {
    title: "Refinería de Cadereyta bajo seguimiento",
    topic: "Calidad del aire",
    sourceName: "Milenio",
    sourceType: "Cobertura periodística",
    date: "7 abr 2026",
    zone: "Cadereyta / AMM",
    summary:
      "La cobertura mantiene la discusión sobre emisiones de la refinería y su impacto potencial en la calidad del aire metropolitana.",
    caution: "Cadereyta no está dentro de los 9 municipios del mapa, pero puede influir en la zona metropolitana.",
    url: "https://www.milenio.com/comunidad/refineria-cadereyta-contamina-nl-pese-a-inversion-millonaria"
  },
  {
    title: "Derrame químico en La Talaverna",
    topic: "Agua e industria",
    sourceName: "MVS Noticias",
    sourceType: "Cobertura periodística",
    date: "23 abr 2025",
    zone: "Monterrey, San Nicolás, Guadalupe, Apodaca y Pesquería",
    summary:
      "Ternium reconoció un incidente en su planta Churubusco que afectó el arroyo La Talaverna y activó protocolos de limpieza.",
    caution: "Distinguir contaminación de agua de contaminación del aire.",
    url: "https://mvsnoticias.com/nuevo-leon/2025/4/23/ternium-confirma-derrame-quimico-en-arroyo-la-talaverna-689187.html"
  },
  {
    title: "Aire contaminado durante 2025",
    topic: "PM10",
    sourceName: "Excélsior / análisis ciudadano",
    sourceType: "Análisis con datos oficiales",
    date: "19 ene 2026",
    zone: "Zona Metropolitana de Monterrey",
    summary:
      "Un análisis ciudadano con datos SIMA/SINAICA reportó días fuera de norma por PM10 durante más de la mitad de 2025.",
    caution: "Presentarlo como análisis ciudadano que procesa datos oficiales.",
    url: "https://www.excelsior.com.mx/nacional/monterrey-registro-aire-contaminado-mas-mitad-2025"
  },
  {
    title: "Exhorto para reactivar alertas ambientales",
    topic: "Gobernanza ambiental",
    sourceName: "Congreso de Nuevo León",
    sourceType: "Comunicado oficial",
    date: "10 mar 2026",
    zone: "Nuevo León",
    summary:
      "El Congreso exhortó a reactivar alertas ambientales para informar mejor a la ciudadanía ante episodios de mala calidad del aire.",
    caution: "Es un exhorto legislativo, no una política ya implementada.",
    url: "https://www.hcnl.gob.mx/sala_de_prensa/2026/03/exhortan_a_medio_ambiente_reactivar_alertas_ambientales.php"
  },
  {
    title: "Recomendaciones por onda de calor",
    topic: "Calor extremo",
    sourceName: "Gobierno de Nuevo León",
    sourceType: "Comunicado oficial",
    date: "12 may 2025",
    zone: "Nuevo León",
    summary:
      "Protección Civil emitió recomendaciones por altas temperaturas y riesgo de afectaciones a la salud.",
    caution: "Sirve como contexto de riesgo; no sustituye una serie histórica de temperatura.",
    url: "https://www.nl.gob.mx/es/boletines/emite-pcnl-recomendaciones-por-primer-onda-de-calor"
  },
  {
    title: "Programa estatal de arbolado urbano",
    topic: "Áreas verdes",
    sourceName: "Gobierno de Nuevo León",
    sourceType: "Comunicado oficial",
    date: "18 jul 2025",
    zone: "Área Metropolitana de Monterrey",
    summary:
      "El programa Ayudamos con Más Árboles busca entregar árboles nativos y naturalizados para reducir déficit de arbolado e islas de calor.",
    caution: "La entrega de árboles debe complementarse con seguimiento de supervivencia y ubicación.",
    url: "https://www.nl.gob.mx/es/boletines/nuevo-leon-lanza-el-programa-ayudamos-con-mas-arboles"
  }
];

const methodologyEntries = [
  {
    title: "Dato comparable",
    body: "Proviene de una misma fuente y permite comparar municipios o estaciones con una metodología similar."
  },
  {
    title: "Dato por estación",
    body: "Representa un punto de monitoreo del SIMA. Ayuda a entender el territorio, pero no equivale a todo el municipio."
  },
  {
    title: "Aproximación por coordenada",
    body: "Se usa para clima histórico cuando no hay una medición municipal homogénea. Sirve para patrones generales, no para microclimas por colonia."
  },
  {
    title: "Reanalysis o fuente satelital",
    body: "Integra modelos, estaciones y observaciones para estimar temperatura, lluvia o cobertura. Debe leerse como apoyo, no como verdad local exacta."
  },
  {
    title: "Dato de contexto",
    body: "Sirve para explicar una tendencia o problema, aunque no permite una comparación directa entre los 9 municipios."
  },
  {
    title: "Dato parcial",
    body: "Existe solo para algunos municipios, años o fuentes. Se muestra con limitación visible para evitar conclusiones falsas."
  },
  {
    title: "Sin medición propia",
    body: "El proyecto no instala sensores ni sustituye reportes oficiales; reúne, ordena y visualiza información pública existente."
  },
  {
    title: "Actualidad curada",
    body: "Las noticias se incluyen para contexto ciudadano. Cada tarjeta atribuye la fuente y evita presentar señalamientos como conclusiones propias."
  }
];

const sourceGroups = [
  {
    title: "Fuentes descargables",
    description: "Documentos, bases o servicios que pueden guardarse, revisar o procesar fuera del sitio.",
    entries: [
      {
        title: "Marco Geoestadístico NL",
        institution: "INEGI",
        variable: "Límites municipales",
        year: "2025",
        format: "API / JSON",
        type: "Descargable",
        url: "https://gaia.inegi.org.mx/wscatgeo/v2/geo/mgem/19",
        limitation: "Requiere procesar geometrías para usarlas en el mapa.",
        body: "Límites oficiales usados para construir el mapa de los 9 municipios."
      },
      {
        title: "Censo 2020",
        institution: "INEGI",
        variable: "Población municipal",
        year: "2020",
        format: "Excel / CSV / DBF / PDF",
        type: "Descargable",
        url: "https://www.inegi.org.mx/programas/ccpv/2020/",
        limitation: "No refleja cambios posteriores al censo.",
        body: "Fuente para ordenar municipios por población y justificar el alcance territorial."
      },
      {
        title: "Estadísticas SIMA 2018",
        institution: "Gobierno de Nuevo León / SIMA",
        variable: "PM2.5, PM10 y O3",
        year: "2018",
        format: "PDF",
        type: "Descargable",
        url: "https://aire.nl.gob.mx/docs/reportes/estadisticas/Estadisticas_2018.pdf",
        limitation: "Es un corte anual de 2018, no dato en tiempo real.",
        body: "Base comparable para las capas de contaminación y partículas finas."
      },
      {
        title: "Reportes mensuales Aire NL",
        institution: "Gobierno de Nuevo León / SIMA",
        variable: "Calidad del aire, temperatura y lluvia",
        year: "2024-2026",
        format: "PDF",
        type: "Descargable",
        url: "https://aire.nl.gob.mx/rep_mensual.html",
        limitation: "La información no siempre está organizada por municipio.",
        body: "Reportes usados para contexto climático y seguimiento ambiental mensual."
      },
      {
        title: "PIGECA 2023-2033",
        institution: "Gobierno de Nuevo León",
        variable: "Política de calidad del aire",
        year: "2023-2033",
        format: "PDF",
        type: "Descargable",
        url: "https://aire.nl.gob.mx/docs/reportes/PIGECA_2023_2033.pdf",
        limitation: "Documento amplio; no es base de datos directa.",
        body: "Programa oficial para entender acciones y retos de calidad del aire."
      },
      {
        title: "Áreas verdes ZMM",
        institution: "UJAT / revista académica",
        variable: "Áreas verdes urbanas",
        year: "2000-2019",
        format: "PDF académico",
        type: "Descargable",
        url: "https://www.scielo.org.mx/pdf/era/v8n1/2007-901X-era-8-01-e2676.pdf",
        limitation: "Analiza la ZMM; no sustituye inventarios municipales actuales.",
        body: "Estudio que muestra pérdida de áreas verdes urbanas en la zona metropolitana."
      },
      {
        title: "Inventario áreas verdes",
        institution: "Congreso NL / SEMARNAT citado",
        variable: "Áreas verdes por habitante",
        year: "2011",
        format: "PDF oficial",
        type: "Descargable",
        url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf",
        limitation: "Solo incluye cifras comparables para algunos municipios.",
        body: "Fuente usada para comparar metros cuadrados de área verde por habitante."
      },
      {
        title: "Estaciones SIH",
        institution: "CONAGUA / datos.gob.mx",
        variable: "Temperatura y lluvia",
        year: "Actualizable",
        format: "CSV",
        type: "Descargable",
        url: "https://www.datos.gob.mx/dataset/estaciones_sistema_informacion_hidrologica",
        limitation: "Requiere filtrar estaciones, descargar CSV y procesar series históricas.",
        body: "Ficha estable del Sistema de Información Hidrológica para estaciones climatológicas."
      },
      {
        title: "Open-Meteo histórico",
        institution: "Open-Meteo",
        variable: "Temperatura y precipitación",
        year: "1940-presente",
        format: "API / JSON / CSV",
        type: "Descargable",
        url: "https://open-meteo.com/en/docs/historical-weather-api",
        limitation: "Es una aproximación por coordenada; no sustituye una estación local.",
        body: "Fuente base usada para construir el clima histórico aproximado 1991-2024."
      },
      {
        title: "NASA POWER",
        institution: "NASA",
        variable: "Clima y energía solar",
        year: "1981-presente",
        format: "API / CSV / JSON",
        type: "Descargable",
        url: "https://power.larc.nasa.gov/docs/tutorials/service-data-request/api/",
        limitation: "Resolución global; útil para contexto, no para microclima urbano.",
        body: "Referencia alternativa para validar patrones generales de temperatura y lluvia."
      },
      {
        title: "CHIRPS",
        institution: "UCSB / CHC",
        variable: "Precipitación histórica",
        year: "1981-presente",
        format: "Raster / GeoTIFF / NetCDF",
        type: "Descargable",
        url: "https://www.chc.ucsb.edu/data/chirps",
        limitation: "Estimación satelital; no reemplaza pluviómetros locales.",
        body: "Fuente útil para lluvia histórica cuando no hay series municipales homogéneas."
      },
      {
        title: "NASA GPM IMERG",
        institution: "NASA / JAXA",
        variable: "Precipitación satelital",
        year: "2000-presente",
        format: "API / HDF5 / NetCDF",
        type: "Descargable",
        url: "https://gpm.nasa.gov/data/imerg",
        limitation: "Requiere procesamiento técnico y validación local.",
        body: "Apoya análisis de lluvia intensa y eventos hidrometeorológicos."
      },
      {
        title: "Cobertura de suelo México",
        institution: "CONABIO",
        variable: "Cobertura vegetal y suelo",
        year: "2020",
        format: "Mapa / datos geoespaciales",
        type: "Descargable",
        url: "https://www.gob.mx/conabio/prensa/nuevo-mapa-de-la-cobertura-de-suelo-de-mexico?idiom=es",
        limitation: "Escala nacional; requiere recorte y clasificación urbana.",
        body: "Puede apoyar futuras capas de áreas verdes y cobertura vegetal."
      },
      {
        title: "ESA WorldCover",
        institution: "Agencia Espacial Europea",
        variable: "Cobertura terrestre",
        year: "2021",
        format: "GeoTIFF / mapa global",
        type: "Descargable",
        url: "https://worldcover2021.esa.int/download",
        limitation: "Clasificación global; necesita validación en campo o con fuentes locales.",
        body: "Fuente satelital útil para aproximar superficies verdes y urbanizadas."
      }
    ]
  },
  {
    title: "Fuentes consultables",
    description: "Visores o notas institucionales útiles para contexto, aunque sin descarga directa completa.",
    entries: [
      {
        title: "Mapa Aire y Salud",
        institution: "Gobierno de Nuevo León / SIMA",
        variable: "Calidad del aire reciente",
        year: "2026",
        format: "Visor web",
        type: "Consultable",
        url: "https://aire.nl.gob.mx/icars2020/map_calidad_icars.php",
        limitation: "Cambia constantemente y no ofrece descarga histórica directa.",
        body: "Visor público para revisar condiciones recientes de calidad del aire."
      },
      {
        title: "RETC Nuevo León",
        institution: "Aire NL / Gobierno de Nuevo León",
        variable: "Emisiones industriales",
        year: "Actualizable",
        format: "Base consultable",
        type: "Consultable",
        url: "https://aire.nl.gob.mx/retc_info.html",
        limitation: "Depende de reportes de fuentes obligadas y no siempre es fácil de mapear.",
        body: "Fuente para contextualizar emisiones y transferencias de contaminantes."
      },
      {
        title: "Ruido Guadalupe",
        institution: "Municipio de Guadalupe",
        variable: "Ruido urbano",
        year: "2024",
        format: "Nota institucional",
        type: "Consultable",
        url: "https://guadalupe.gob.mx/noticia/autoridades-de-guadalupe-piden-reducir-ruido-en-celebraciones-decembrinas",
        limitation: "No es medición continua ni base de datos.",
        body: "Ejemplo municipal sobre límites y reportes relacionados con ruido."
      },
      {
        title: "Ruido Apodaca",
        institution: "Municipio de Apodaca",
        variable: "Ruido urbano",
        year: "2020",
        format: "Nota institucional",
        type: "Consultable",
        url: "https://web.apodaca.gob.mx/refuerza-apodaca-operativos-para-respetar-niveles-de-ruido/",
        limitation: "Muestra operativos, no datos ambientales continuos.",
        body: "Ejemplo de atención municipal a reportes de ruido vecinal."
      },
      {
        title: "Buenos Vecinos San Nicolás",
        institution: "Municipio / medio local",
        variable: "Ruido urbano",
        year: "2024",
        format: "Nota web",
        type: "Consultable",
        url: "https://circuloinformativo.com/2024/12/10/buscaran-reducir-llamadas-de-alto-volumen-en-san-nicolas-con-el-programa-buenos-vecinos/",
        limitation: "No proviene de una base pública descargable.",
        body: "Referencia sobre reportes ciudadanos de alto volumen en San Nicolás."
      },
      {
        title: "Emisores industriales",
        institution: "Quinto Elemento Lab / The Guardian",
        variable: "Contaminación industrial",
        year: "2025",
        format: "Investigación periodística",
        type: "Consultable",
        url: "https://quintoelab.org/project/identifican-industrias-emisiones-contaminantes-monterrey",
        limitation: "Debe citarse como investigación externa basada en datos oficiales.",
        body: "Contexto reciente para explicar por qué importan las emisiones industriales."
      },
      {
        title: "Alertas ambientales",
        institution: "Congreso de Nuevo León",
        variable: "Gobernanza ambiental",
        year: "2026",
        format: "Comunicado oficial",
        type: "Consultable",
        url: "https://www.hcnl.gob.mx/sala_de_prensa/2026/03/exhortan_a_medio_ambiente_reactivar_alertas_ambientales.php",
        limitation: "Es un exhorto, no una base de datos ambiental.",
        body: "Muestra la necesidad de información clara y oportuna para la ciudadanía."
      },
      {
        title: "Onda de calor NL",
        institution: "Protección Civil Nuevo León",
        variable: "Calor extremo",
        year: "2025",
        format: "Comunicado oficial",
        type: "Consultable",
        url: "https://www.nl.gob.mx/es/boletines/emite-pcnl-recomendaciones-por-primer-onda-de-calor",
        limitation: "Evento puntual; no representa una tendencia histórica por sí solo.",
        body: "Conecta temperatura, prevención y salud pública."
      },
      {
        title: "Ayudamos con Más Árboles",
        institution: "Gobierno de Nuevo León",
        variable: "Arbolado urbano",
        year: "2025",
        format: "Comunicado oficial",
        type: "Consultable",
        url: "https://www.nl.gob.mx/es/boletines/nuevo-leon-lanza-el-programa-ayudamos-con-mas-arboles",
        limitation: "No incluye inventario georreferenciado de supervivencia del arbolado.",
        body: "Ejemplo de acción pública relacionada con islas de calor y déficit de árboles."
      }
    ]
  },
  {
    title: "Fuentes metodológicas y de contexto",
    description: "Documentos que justifican el enfoque territorial, ciudadano y ODS del proyecto.",
    entries: [
      {
        title: "Agenda 2030",
        institution: "Naciones Unidas",
        variable: "ODS",
        year: "2015",
        format: "Web / PDF",
        type: "Contexto",
        url: "https://sdgs.un.org/es/2030agenda",
        limitation: "Marco global, no datos locales.",
        body: "Base para alinear el proyecto con ODS 3, 11, 13 y 15."
      },
      {
        title: "Nueva Agenda Urbana",
        institution: "ONU-Habitat",
        variable: "Sostenibilidad urbana",
        year: "2016 / 2021",
        format: "Web / PDF",
        type: "Contexto",
        url: "https://onu-habitat.org/index.php/nueva-agenda-urbana",
        limitation: "No contiene información específica de Monterrey.",
        body: "Marco para conectar el proyecto con planeación urbana y derecho a la ciudad."
      },
      {
        title: "Delimitación metropolitana",
        institution: "INEGI / SEDATU / CONAPO",
        variable: "Zona metropolitana",
        year: "2015",
        format: "PDF",
        type: "Contexto",
        url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/702825006792.pdf",
        limitation: "No sustituye datos ambientales recientes.",
        body: "Documento para explicar por qué Monterrey debe leerse como territorio metropolitano."
      },
      {
        title: "ODS México",
        institution: "Gobierno de México / Agenda 2030",
        variable: "Indicadores ODS",
        year: "Actualizable",
        format: "Web",
        type: "Contexto",
        url: "https://agenda2030.mx/",
        limitation: "Indicadores amplios; no todos llegan a escala municipal.",
        body: "Ayuda a relacionar el proyecto con metas nacionales de desarrollo sostenible."
      },
      {
        title: "State of Global Air",
        institution: "Health Effects Institute",
        variable: "Salud ambiental y aire",
        year: "Actualizable",
        format: "Web / datos",
        type: "Contexto",
        url: "https://www.stateofglobalair.org/data",
        limitation: "Escala nacional o regional; no diagnostica municipios de Nuevo León.",
        body: "Referencia para explicar efectos de contaminación atmosférica en salud."
      },
      {
        title: "Datos abiertos salud",
        institution: "Secretaría de Salud",
        variable: "Salud pública",
        year: "Actualizable",
        format: "CSV / bases abiertas",
        type: "Contexto",
        url: "https://www.gob.mx/salud/documentos/datos-abiertos-152127",
        limitation: "No relaciona por sí solo contaminación con enfermedad; requiere análisis epidemiológico.",
        body: "Fuente potencial para futuras lecturas de salud ambiental."
      },
      {
        title: "Defunciones registradas",
        institution: "INEGI",
        variable: "Salud pública",
        year: "Actualizable",
        format: "Microdatos / tabulados",
        type: "Contexto",
        url: "https://www.inegi.org.mx/rnm/index.php/catalog/1140",
        limitation: "Requiere anonimización, metodología y cuidado para no inferir causalidad directa.",
        body: "Podría apoyar análisis futuros sobre impactos de contaminación y calor."
      },
      {
        title: "Data for Cool Cities MTY",
        institution: "WRI México",
        variable: "Calor urbano",
        year: "2024",
        format: "Nota institucional",
        type: "Contexto",
        url: "https://es.wri.org/noticias/wri-mexico-presenta-los-primeros-resultados-del-proyecto-data-cool-cities-en-monterrey",
        limitation: "Presenta resultados y enfoque, no una base municipal completa.",
        body: "Contexto local sobre calor urbano y soluciones de enfriamiento."
      },
      {
        title: "Islas de calor Monterrey",
        institution: "ISPRS / UANL",
        variable: "Islas de calor urbanas",
        year: "2024",
        format: "Artículo académico",
        type: "Contexto",
        url: "https://isprs-annals.copernicus.org/articles/X-3-2024/439/2024/index.html",
        limitation: "Estudio académico con metodología técnica; no sustituye monitoreo operativo.",
        body: "Apoya la explicación de calor urbano, vegetación e infraestructura azul-verde."
      },
      {
        title: "Landsat Surface Temperature",
        institution: "USGS / NASA",
        variable: "Temperatura superficial",
        year: "Actualizable",
        format: "Datos satelitales",
        type: "Contexto",
        url: "https://www.usgs.gov/landsat-missions/landsat-collection-2-surface-temperature",
        limitation: "Mide temperatura superficial, no temperatura del aire que siente una persona.",
        body: "Fuente futura para mapear islas de calor con mayor resolución espacial."
      },
      {
        title: "WUDAPT",
        institution: "World Urban Database and Access Portal Tools",
        variable: "Zonas climáticas locales",
        year: "Actualizable",
        format: "Mapas / metodología",
        type: "Contexto",
        url: "https://www.wudapt.org/data-and-tools/",
        limitation: "Requiere clasificación y validación local.",
        body: "Metodología para comparar zonas urbanas según forma, materiales y cobertura."
      }
    ]
  }
];

const missingDataEntries = [
  {
    title: "Ruido ambiental continuo",
    why: "Afecta descanso, salud mental, convivencia y calidad de vida.",
    owner: "Municipios, Secretaría de Medio Ambiente estatal o una red metropolitana.",
    format: "API, CSV horario y mapa por colonia o vialidad.",
    impact: "Solo se muestran reglamentos y reportes; no existe una comparación real entre municipios."
  },
  {
    title: "Áreas verdes actualizadas y georreferenciadas",
    why: "Permiten saber qué zonas tienen parques, sombra, corredores y espacios públicos suficientes.",
    owner: "Municipios, IMPLAN, INEGI, Secretaría de Medio Ambiente o universidades.",
    format: "GeoJSON, shapefile, CSV y visor público.",
    impact: "Se usan datos históricos o parciales, no una lectura actual completa."
  },
  {
    title: "Arbolado urbano",
    why: "Ayuda a conocer cobertura de sombra, especies y necesidades de reforestación.",
    owner: "Municipios, universidades, parques urbanos y organizaciones ambientales.",
    format: "Inventario abierto con coordenadas en CSV o GeoJSON.",
    impact: "No se puede decir con precisión dónde hay más árboles o dónde urge plantar."
  },
  {
    title: "Temperatura urbana por colonia",
    why: "Sirve para identificar islas de calor, zonas con poca sombra y población vulnerable.",
    owner: "CONAGUA, SIMA, municipios, Protección Civil o red de sensores urbanos.",
    format: "CSV, API, mapas raster, GeoTIFF y estaciones abiertas.",
    impact: "El clima histórico se presenta como aproximación por coordenada, no como microclima urbano."
  },
  {
    title: "Precipitación municipal homogénea",
    why: "Ayuda a entender riesgos de inundación, sequía, escurrimientos y diferencias climáticas locales.",
    owner: "CONAGUA, Protección Civil, municipios y organismos de agua.",
    format: "CSV, API y mapas por estación, cuenca y municipio.",
    impact: "La lluvia se estima con fuentes abiertas y no captura variaciones de tormentas muy localizadas."
  },
  {
    title: "Calidad del aire histórica por API",
    why: "Permitiría comparar PM2.5, PM10, ozono y episodios recientes con más transparencia.",
    owner: "SIMA / Agencia de Calidad del Aire de Nuevo León.",
    format: "API histórica y CSV horario por estación.",
    impact: "El sitio combina datos anuales comparables con alertas recientes, pero no compara todo en tiempo real."
  },
  {
    title: "Emisiones industriales georreferenciadas",
    why: "Ayudarían a relacionar contaminación con posibles fuentes emisoras.",
    owner: "SEMARNAT, gobierno estatal, municipios y empresas obligadas a reportar.",
    format: "CSV, GeoJSON y visor público.",
    impact: "No se puede explicar con precisión qué fuentes contribuyen más a la contaminación local."
  },
  {
    title: "Indicadores de salud ambiental",
    why: "Permiten estudiar relación entre contaminación, calor, ruido y efectos en salud.",
    owner: "Secretaría de Salud, hospitales, INEGI y universidades.",
    format: "Datos anonimizados en CSV y tabulados por municipio.",
    impact: "El proyecto explica riesgos generales, pero no mide impactos directos ni causalidad local."
  },
  {
    title: "Seguimiento público de programas ambientales",
    why: "Ayudaría a saber si las acciones de reforestación, inspección o reducción de emisiones realmente avanzan.",
    owner: "Gobierno estatal, municipios, órganos de transparencia y ciudadanía.",
    format: "Tablero abierto con metas, ubicación, presupuesto, avances y evidencia.",
    impact: "Las noticias muestran acciones, pero no siempre permiten evaluar resultados de largo plazo."
  }
];

const layers = {
  greenery: {
    type: "municipality",
    title: "Áreas verdes urbanas comparables",
    unit: "m²/hab",
    badge: "Dato municipal: cifras comparables para siete municipios. Los demás aparecen en gris porque no tienen una cifra equivalente en la misma fuente.",
    palette: ["#efe7b7", "#c9dc74", "#7ab95d", "#1a6b4d"],
    story:
      "La metrópoli no es homogénea: San Pedro se separa del resto, mientras Apodaca, Escobedo y Santa Catarina quedan muy abajo de la referencia de 9 m²/hab.",
    tags: ["dato municipal", "fuente parcial", "déficit verde"],
    higherIsBetter: true
  },
  pollution: {
    type: "station",
    title: "Presión de contaminación por partículas",
    unit: "índice",
    badge: "Dato por estación: índice propio construido con PM2.5 y PM10 anuales 2018 del SIMA. Ayuda a comparar presión, no reemplaza el reporte oficial.",
    palette: ["#f2eadc", "#e1b466", "#c96f45", "#8b2d24"],
    story:
      "San Bernabé, García y Santa Catarina muestran mayor presión por partículas cuando se combinan PM10 y PM2.5. Pueblo Serena aparece como el punto menos cargado.",
    tags: ["dato por estación", "PM10", "PM2.5"],
    higherIsBetter: false
  },
  air: {
    type: "station",
    title: "Partículas finas PM2.5",
    unit: "µg/m³",
    badge: "Dato por estación: promedio anual 2018 de PM2.5 reportado por el SIMA. Permite comparar estaciones, no límites municipales exactos.",
    palette: ["#dcecf3", "#8dbfd0", "#4c8396", "#1c4d62"],
    story:
      "Apodaca y Santa Catarina encabezan el PM2.5 anual de esta serie. Pueblo Serena marca el valor más bajo del conjunto.",
    tags: ["dato por estación", "promedio anual", "2018"],
    higherIsBetter: false
  },
  alerts: {
    type: "alert",
    title: "Alertas y episodios recientes",
    unit: "",
    badge: "Dato reciente: eventos localizados en el mapa oficial de calidad del aire. Sirve como contexto, no como serie histórica completa.",
    palette: ["#f7e4c1", "#f0af5d", "#dc6940", "#982c1e"],
    story:
      "San Pedro destaca por un episodio de ozono en febrero de 2026. García y Universidad muestran picos recientes de PM2.5 más moderados.",
    tags: ["dato reciente", "PM2.5", "O3"],
    higherIsBetter: false
  }
};

const mapBadge = document.getElementById("map-badge");
const mapViewport = document.getElementById("map-viewport");
const municipalityLayer = document.getElementById("municipality-layer");
const municipalityList = document.getElementById("municipality-list");
const snapshotGrid = document.getElementById("snapshot-grid");
const stationLayer = document.getElementById("station-layer");
const labelLayer = document.getElementById("label-layer");
const detailName = document.getElementById("detail-name");
const detailDescription = document.getElementById("detail-description");
const detailValue = document.getElementById("detail-value");
const detailUnit = document.getElementById("detail-unit");
const detailYear = document.getElementById("detail-year");
const detailSource = document.getElementById("detail-source");
const detailBars = document.getElementById("detail-bars");
const legend = document.getElementById("legend");
const rankList = document.getElementById("rank-list");
const rankingTitle = document.getElementById("ranking-title");
const climateChart = document.getElementById("climate-chart");
const climateSummaryGrid = document.getElementById("climate-summary-grid");
const climateDetail = document.getElementById("climate-detail");
const trendStrip = document.getElementById("trend-strip");
const noiseList = document.getElementById("noise-list");
const storyTitle = document.getElementById("story-title");
const storyCopy = document.getElementById("story-copy");
const storyTags = document.getElementById("story-tags");
const findingsList = document.getElementById("findings-list");
const newsList = document.getElementById("news-list");
const methodList = document.getElementById("method-list");
const sourceList = document.getElementById("source-list");
const missingDataList = document.getElementById("missing-data-list");

let activeLayer = "greenery";
let selectedId = null;
let focusMunicipalityId = null;
let selectedClimateId = "monterrey";

const greenTrend = [
  { year: "2000", value: 13.21 },
  { year: "2019", value: 7.75 }
];

function createLabels() {
  municipalityShapes.forEach((shape) => {
    const offset = municipalityLabelOffsets[shape.id] ?? { x: 0, y: 0 };
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", shape.label.x + offset.x);
    label.setAttribute("y", shape.label.y + offset.y);
    label.textContent = shape.name;
    label.dataset.id = shape.id;
    labelLayer.appendChild(label);
  });
}

function createMunicipalityNodes() {
  municipalityLayer.innerHTML = "";
  municipalityShapes.forEach((shape) => {
    const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute("id", `m-${shape.id}`);
    path.setAttribute("d", shape.path);
    path.dataset.entity = "municipality";
    path.dataset.id = shape.id;
    path.addEventListener("click", () => {
      selectMunicipality(shape.id);
    });
    municipalityLayer.appendChild(path);
  });
}

function createStationNodes() {
  stationLayer.innerHTML = "";
  const entries = [...stations, ...alerts];
  entries.forEach((entry) => {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", entry.x);
    circle.setAttribute("cy", entry.y);
    circle.setAttribute("r", entry.id.startsWith("alert-") ? 10 : 9);
    circle.dataset.entity = entry.id.startsWith("alert-") ? "alert" : "station";
    circle.dataset.id = entry.id;
    circle.dataset.municipalityId = municipalityIdFromName(entry.municipality) ?? "";
    circle.addEventListener("click", () => {
      selectedId = entry.id;
      focusMunicipalityId = municipalityIdFromName(entry.municipality) ?? focusMunicipalityId;
      updateInterface();
    });
    stationLayer.appendChild(circle);

    const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
    text.setAttribute("x", entry.x);
    text.setAttribute("y", entry.y - 16);
    text.textContent = entry.short;
    text.dataset.entity = circle.dataset.entity;
    text.dataset.id = entry.id;
    text.dataset.municipalityId = circle.dataset.municipalityId;
    stationLayer.appendChild(text);
  });
}

function lerpColor(start, end, t) {
  const hex = (value) => parseInt(value, 16);
  const pad = (value) => value.toString(16).padStart(2, "0");
  const sr = hex(start.slice(1, 3));
  const sg = hex(start.slice(3, 5));
  const sb = hex(start.slice(5, 7));
  const er = hex(end.slice(1, 3));
  const eg = hex(end.slice(3, 5));
  const eb = hex(end.slice(5, 7));
  const r = Math.round(sr + (er - sr) * t);
  const g = Math.round(sg + (eg - sg) * t);
  const b = Math.round(sb + (eb - sb) * t);
  return `#${pad(r)}${pad(g)}${pad(b)}`;
}

function colorForValue(values, palette, value) {
  const min = Math.min(...values);
  const max = Math.max(...values);
  const normalized = max === min ? 0.5 : (value - min) / (max - min);
  if (normalized < 0.33) {
    return lerpColor(palette[0], palette[1], normalized / 0.33);
  }
  if (normalized < 0.66) {
    return lerpColor(palette[1], palette[2], (normalized - 0.33) / 0.33);
  }
  return lerpColor(palette[2], palette[3], (normalized - 0.66) / 0.34);
}

function formatValue(value) {
  if (typeof value !== "number") {
    return value;
  }
  if (Number.isInteger(value) || Math.abs(value) >= 100) {
    return String(value);
  }
  if (Math.abs(value) >= 10) {
    return value.toFixed(1).replace(".0", "");
  }
  return value.toFixed(2).replace(/0$/, "").replace(".0", "");
}

function municipalityIdFromName(name) {
  return municipalityNameAliases[name] ?? null;
}

function municipalityIdForEntry(entry) {
  if (municipalityLookup[entry.id]) {
    return entry.id;
  }
  return municipalityIdFromName(entry.municipality);
}

function formatPopulation(value) {
  return value.toLocaleString("es-MX");
}

function getBestEntryForMunicipality(data, municipalityId) {
  const matches = data.filter((entry) => municipalityIdForEntry(entry) === municipalityId);
  if (!matches.length) {
    return null;
  }
  return [...matches].sort((left, right) => right.value - left.value)[0];
}

function selectMunicipality(municipalityId) {
  focusMunicipalityId = municipalityId;
  const data = getLayerData();

  if (activeLayer === "greenery") {
    selectedId = data.some((entry) => entry.id === municipalityId) ? municipalityId : null;
  } else {
    const bestEntry = getBestEntryForMunicipality(data, municipalityId);
    selectedId = bestEntry ? bestEntry.id : null;
  }

  updateInterface();
}

function renderMunicipalityList() {
  municipalityList.innerHTML = "";

  const overviewButton = document.createElement("button");
  overviewButton.type = "button";
  overviewButton.className = "municipality-button is-overview";
  overviewButton.classList.toggle("is-active", !focusMunicipalityId);
  overviewButton.innerHTML = `
    <div class="municipality-meta">
      <strong>Vista general</strong>
      <small>Restablecer zoom y ver los 9 municipios completos</small>
    </div>
  `;
  overviewButton.addEventListener("click", () => {
    focusMunicipalityId = null;
    selectedId = null;
    updateInterface();
  });
  municipalityList.appendChild(overviewButton);

  municipalityShapes.forEach((shape, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "municipality-button";
    button.classList.toggle("is-active", focusMunicipalityId === shape.id);
    button.innerHTML = `
      <span class="municipality-rank">${index + 1}</span>
      <div class="municipality-meta">
        <strong>${shape.name}</strong>
        <small>${formatPopulation(municipalityPopulation[shape.id])} hab.</small>
      </div>
    `;
    button.addEventListener("click", () => {
      selectMunicipality(shape.id);
    });
    municipalityList.appendChild(button);
  });
}

function applyMapZoom() {
  if (!focusMunicipalityId) {
    mapViewport.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    return;
  }

  const focusedPath = document.getElementById(`m-${focusMunicipalityId}`);
  if (!focusedPath) {
    mapViewport.style.transform = "matrix(1, 0, 0, 1, 0, 0)";
    return;
  }

  const bbox = focusedPath.getBBox();
  const padding = 86;
  const scale = Math.max(
    1.8,
    Math.min(
      4.2,
      Math.min((780 - padding * 2) / bbox.width, (520 - padding * 2) / bbox.height)
    )
  );
  const centerX = bbox.x + bbox.width / 2;
  const centerY = bbox.y + bbox.height / 2;
  const translateX = 390 - centerX * scale;
  const translateY = 260 - centerY * scale;
  mapViewport.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${translateX}, ${translateY})`;
}

function getLayerData() {
  if (activeLayer === "greenery") {
    return municipalityShapes
      .filter((shape) => greeneryValues[shape.id])
      .map((shape) => ({
        id: shape.id,
        name: shape.name,
        value: greeneryValues[shape.id].value,
        year: greeneryValues[shape.id].year,
        description: greeneryValues[shape.id].note,
        source: greeneryValues[shape.id].source,
        rows: [
          { label: "m²/hab", value: greeneryValues[shape.id].value, key: "primary" },
          { label: "Meta OMS", value: 9, key: "goal" },
          { label: "Prom. núcleo", value: 5.5, key: "metro" }
        ]
      }));
  }

  if (activeLayer === "pollution") {
    return stations.map((station) => ({
      id: station.id,
      name: station.name,
      municipality: station.municipality,
      value: station.pressureIndex,
      year: "2018",
      description:
        "Índice compuesto derivado de PM2.5 y PM10 anuales en la estación, normalizado contra los límites anuales del reporte estadístico 2018.",
      source: {
        label: "Estadísticas 2018 SIMA",
        url: "https://aire.nl.gob.mx/docs/reportes/estadisticas/Estadisticas_2018.pdf"
      },
      rows: [
        { label: "PM2.5", value: station.pm25, key: "pm25" },
        { label: "PM10", value: station.pm10, key: "pm10" },
        { label: "O3", value: station.o3 ?? "ND", key: "o3" }
      ]
    }));
  }

  if (activeLayer === "air") {
    return stations.map((station) => ({
      id: station.id,
      name: station.name,
      municipality: station.municipality,
      value: station.pm25,
      year: "2018",
      description: "Promedio anual de PM2.5 en la estación, según el reporte estadístico 2018 del SIMA.",
      source: {
        label: "Estadísticas 2018 SIMA",
        url: "https://aire.nl.gob.mx/docs/reportes/estadisticas/Estadisticas_2018.pdf"
      },
      rows: [
        { label: "PM2.5", value: station.pm25, key: "pm25" },
        { label: "PM10", value: station.pm10, key: "pm10" },
        { label: "O3", value: station.o3 ?? "ND", key: "o3" }
      ]
    }));
  }

  return alerts.map((alert) => ({
    id: alert.id,
    name: `${alert.name} · ${alert.pollutant}`,
    municipality: alert.municipality,
    value: alert.value,
    year: alert.date,
    description: alert.note,
    source: alert.source,
    rows: [
      { label: "Nivel", value: alert.level, key: "level" },
      { label: "Fecha", value: alert.date, key: "date" },
      { label: "Zona", value: alert.municipality, key: "zone" }
    ],
    unit: alert.unit
  }));
}

function applyInitialStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const layerParam = params.get("layer");
  const municipalityParam = params.get("municipality");

  if (layerParam && layers[layerParam]) {
    activeLayer = layerParam;
    selectedId = null;
  }

  if (municipalityParam) {
    const municipalityId = municipalityNameAliases[municipalityParam] ?? municipalityParam;
    if (municipalityLookup[municipalityId]) {
      focusMunicipalityId = municipalityId;
      const data = getLayerData();
      const entry =
        activeLayer === "greenery"
          ? data.find((item) => item.id === municipalityId)
          : getBestEntryForMunicipality(data, municipalityId);
      selectedId = entry ? entry.id : null;
    }
  }
}

function renderSnapshotTiles() {
  const tiles = [
    { label: "Municipios mapa", value: "9" },
    { label: "Límites INEGI", value: "2025" },
    { label: "Clima histórico", value: "1991-2024" },
    { label: "Actualidad curada", value: "8 casos" }
  ];
  snapshotGrid.innerHTML = "";
  tiles.forEach((tile) => {
    const item = document.createElement("div");
    item.className = "snapshot-tile";
    item.innerHTML = `<span>${tile.label}</span><strong>${tile.value}</strong>`;
    snapshotGrid.appendChild(item);
  });
}

function renderLegend(values) {
  legend.innerHTML = "";
  const layer = layers[activeLayer];
  const min = Math.min(...values);
  const max = Math.max(...values);
  const mid = Number(((min + max) / 2).toFixed(1));
  [min, mid, max].forEach((value, index) => {
    const item = document.createElement("div");
    const color = index === 0 ? layer.palette[0] : index === 1 ? layer.palette[2] : layer.palette[3];
    const unit = activeLayer === "alerts" ? "" : layer.unit;
    item.className = "legend-step";
    item.innerHTML = `<span class="legend-swatch" style="background:${color}"></span><span>${formatValue(value)}${unit ? ` ${unit}` : ""}</span>`;
    legend.appendChild(item);
  });
}

function renderMap(data) {
  const layer = layers[activeLayer];
  mapBadge.textContent = layer.badge;

  const dataById = Object.fromEntries(data.map((entry) => [entry.id, entry]));
  const values = data.map((entry) => entry.value);

  municipalityShapes.forEach((shape) => {
    const path = document.getElementById(`m-${shape.id}`);
    const entry = dataById[shape.id];
    path.classList.toggle("is-selected", activeLayer === "greenery" && selectedId === shape.id);
    path.classList.toggle("is-focused", focusMunicipalityId === shape.id);

    if (activeLayer === "greenery") {
      if (entry) {
        path.style.fill = colorForValue(values, layer.palette, entry.value);
        path.style.opacity = !focusMunicipalityId || focusMunicipalityId === shape.id ? 1 : 0.28;
      } else {
        path.style.fill = "rgba(202, 198, 188, 0.72)";
        path.style.opacity = !focusMunicipalityId || focusMunicipalityId === shape.id ? 0.68 : 0.18;
      }
    } else {
      path.style.fill = "rgba(230, 223, 211, 0.68)";
      path.style.opacity = !focusMunicipalityId || focusMunicipalityId === shape.id ? 0.92 : 0.24;
    }
  });

  stationLayer.querySelectorAll("circle").forEach((node) => {
    const isStation = node.dataset.entity === "station";
    const isAlert = node.dataset.entity === "alert";
    const visible =
      (layer.type === "station" && isStation) ||
      (layer.type === "alert" && isAlert);
    node.style.display = visible ? "block" : "none";
    node.classList.toggle("is-selected", selectedId === node.dataset.id);
    if (!visible) {
      return;
    }
    const entry = dataById[node.dataset.id];
    node.setAttribute("fill", colorForValue(values, layer.palette, entry.value));
    const nodeOpacity = !focusMunicipalityId || node.dataset.municipalityId === focusMunicipalityId ? "1" : "0.22";
    node.setAttribute("opacity", nodeOpacity);
  });

  stationLayer.querySelectorAll("text").forEach((label) => {
    const visible =
      (layer.type === "station" && label.dataset.entity === "station") ||
      (layer.type === "alert" && label.dataset.entity === "alert");
    label.style.display = visible ? "block" : "none";
    label.style.opacity = !focusMunicipalityId || label.dataset.municipalityId === focusMunicipalityId ? "1" : "0.16";
  });

  labelLayer.querySelectorAll("text").forEach((label) => {
    label.style.opacity = !focusMunicipalityId || label.dataset.id === focusMunicipalityId ? "1" : "0.12";
  });

  renderLegend(values);
  applyMapZoom();
}

function getSelectedEntry(data) {
  if (!selectedId) {
    return null;
  }
  return data.find((entry) => entry.id === selectedId) ?? null;
}

function renderOverviewDetail(data) {
  const focusedMunicipality = focusMunicipalityId ? municipalityLookup[focusMunicipalityId] : null;
  const unitsByLayer = {
    greenery: "municipios con dato",
    pollution: "estaciones",
    air: "estaciones",
    alerts: "episodios"
  };

  detailName.textContent = focusedMunicipality ? focusedMunicipality.name : "Vista general";
  detailDescription.textContent = focusedMunicipality
    ? `No hay un registro equivalente para ${focusedMunicipality.name} en esta capa. Revisa la nota de alcance o cambia de variable.`
    : "Elige un municipio o un punto del mapa para abrir el detalle del mejor dato disponible en la capa activa.";
  detailValue.textContent = data.length;
  detailUnit.textContent = unitsByLayer[activeLayer];
  detailYear.textContent = "Capa activa";
  detailSource.textContent = "Cómo leer esta capa";
  detailSource.href = "#metodologia";
  detailSource.removeAttribute("target");
  detailSource.removeAttribute("rel");
  detailBars.innerHTML = `
    <p class="chart-note">
      La fuente, el año y las métricas aparecen al seleccionar un registro del mapa.
    </p>
  `;
}

function renderDetail(data) {
  const entry = getSelectedEntry(data);
  if (!entry) {
    renderOverviewDetail(data);
    return;
  }

  selectedId = entry.id;
  const unit = activeLayer === "alerts" ? entry.unit : layers[activeLayer].unit;
  detailName.textContent = entry.name;
  detailDescription.textContent =
    activeLayer === "greenery" || activeLayer === "alerts"
      ? entry.description
      : `${entry.description} Municipio asociado: ${entry.municipality}.`;
  detailValue.textContent = formatValue(entry.value);
  detailUnit.textContent = unit;
  detailYear.textContent = activeLayer === "alerts" ? entry.year : `Referencia ${entry.year}`;
  detailSource.textContent = entry.source.label;
  detailSource.href = entry.source.url;
  detailSource.target = "_blank";
  detailSource.rel = "noreferrer";

  const comparableValues = data.map((item) => item.value);
  const max = Math.max(...comparableValues);

  detailBars.innerHTML = "";
  entry.rows.forEach((row) => {
    const rowElement = document.createElement("div");
    rowElement.className = "metric-row";
    const numericValue = typeof row.value === "number" ? row.value : null;
    const width = numericValue === null ? 100 : Math.max((numericValue / max) * 100, 10);
    const baseValue = numericValue ?? max;
    rowElement.innerHTML = `
      <span>${row.label}</span>
      <div class="bar-track">
        <div class="bar-fill" style="width:${width}%; background:${colorForValue([0, max], layers[activeLayer].palette, baseValue)}"></div>
      </div>
      <strong>${formatValue(row.value)}</strong>
    `;
    detailBars.appendChild(rowElement);
  });
}

function renderRanking(data) {
  const layer = layers[activeLayer];
  rankingTitle.textContent = layer.title;
  rankList.innerHTML = "";

  const ordered = [...data].sort((left, right) => right.value - left.value);
  const max = Math.max(...ordered.map((entry) => entry.value));

  ordered.forEach((entry, index) => {
    const item = document.createElement("div");
    item.className = "rank-item";
    item.innerHTML = `
      <strong>${index + 1}</strong>
      <div class="rank-meta">
        <span>${entry.name}</span>
        <div class="rank-bar">
          <div class="rank-bar-fill" style="width:${(entry.value / max) * 100}%; background:${colorForValue([0, max], layer.palette, entry.value)}"></div>
        </div>
      </div>
      <span>${formatValue(entry.value)}</span>
    `;
    rankList.appendChild(item);
  });
}

function formatSigned(value, unit) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${formatValue(value)} ${unit}`;
}

function renderClimateSummary() {
  const hottest = [...climateHistorical].sort((left, right) => right.avgTemp - left.avgTemp)[0];
  const wettest = [...climateHistorical].sort((left, right) => right.avgRain - left.avgRain)[0];
  const fastestWarming = [...climateHistorical].sort((left, right) => right.tempTrend - left.tempTrend)[0];
  const summaryTiles = [
    { label: "Periodo", value: "1991-2024", note: "serie histórica aproximada" },
    { label: "Municipios", value: "9", note: "mismo alcance del mapa" },
    { label: "Promedio aprox. alto", value: hottest.municipality, note: `${hottest.avgTemp} °C promedio` },
    { label: "Tendencia aprox. mayor", value: fastestWarming.municipality, note: `${formatSigned(fastestWarming.tempTrend, "°C/década")}` },
    { label: "Lluvia aprox. alta", value: wettest.municipality, note: `${wettest.avgRain} mm/año promedio` }
  ];

  climateSummaryGrid.innerHTML = "";
  summaryTiles.forEach((tile) => {
    const card = document.createElement("article");
    card.className = "climate-summary-card";
    card.innerHTML = `
      <span>${tile.label}</span>
      <strong>${tile.value}</strong>
      <small>${tile.note}</small>
    `;
    climateSummaryGrid.appendChild(card);
  });
}

function renderClimateDetail(entry) {
  climateDetail.innerHTML = `
    <span class="status-pill">Aproximación por coordenada</span>
    <h3>${entry.municipality}</h3>
    <p>
      Lectura estimada con coordenada representativa ${entry.coords}. Útil para comparar patrones
      generales, no para medir microclimas por colonia.
    </p>
    <div class="climate-detail-grid">
      <div><span>Temperatura media</span><strong>${entry.avgTemp} °C</strong></div>
      <div><span>Lluvia anual</span><strong>${entry.avgRain} mm</strong></div>
      <div><span>Tendencia temp.</span><strong>${formatSigned(entry.tempTrend, "°C/década")}</strong></div>
      <div><span>Tendencia lluvia</span><strong>${formatSigned(entry.rainTrend, "mm/década")}</strong></div>
    </div>
    <p class="climate-detail-note">
      Año más cálido: ${entry.hottestYear} (${entry.hottestTemp} °C). Año más lluvioso:
      ${entry.rainiestYear} (${entry.rainiestRain} mm).
    </p>
    <a href="https://open-meteo.com/en/docs/historical-weather-api" target="_blank" rel="noreferrer">
      Ver fuente climática base
    </a>
  `;
}

function renderClimateChart() {
  renderClimateSummary();
  climateChart.innerHTML = "";
  const maxTemp = Math.max(...climateHistorical.map((item) => item.avgTemp));
  const maxRain = Math.max(...climateHistorical.map((item) => item.avgRain));
  const selected = climateHistorical.find((item) => item.id === selectedClimateId) ?? climateHistorical[0];

  [...climateHistorical]
    .sort((left, right) => right.avgTemp - left.avgTemp)
    .forEach((item) => {
      const row = document.createElement("button");
      row.type = "button";
      row.className = "climate-row";
      row.classList.toggle("is-active", item.id === selected.id);
      row.innerHTML = `
        <strong>${item.municipality}</strong>
        <div class="climate-bars">
          <div class="climate-bar">
            <div class="climate-bar-track">
              <div class="climate-bar-fill" style="width:${(item.avgTemp / maxTemp) * 100}%; background:#cf6e3f"></div>
            </div>
            <small>${item.avgTemp} °C promedio</small>
          </div>
          <div class="climate-bar">
            <div class="climate-bar-track">
              <div class="climate-bar-fill" style="width:${(item.avgRain / maxRain) * 100}%; background:#2a7292"></div>
            </div>
            <small>${item.avgRain} mm/año</small>
          </div>
        </div>
        <span>${formatSigned(item.tempTrend, "°C/década")}</span>
      `;
      row.addEventListener("click", () => {
        selectedClimateId = item.id;
        renderClimateChart();
      });
      climateChart.appendChild(row);
    });

  renderClimateDetail(selected);
}

function renderTrend() {
  trendStrip.innerHTML = "";
  const max = Math.max(...greenTrend.map((item) => item.value));
  greenTrend.forEach((item) => {
    const row = document.createElement("div");
    row.className = "trend-step";
    row.innerHTML = `
      <strong>${item.year}</strong>
      <div class="trend-line" style="--fill-width:${(item.value / max) * 100}%"></div>
      <span>${item.value} m²/hab</span>
    `;
    trendStrip.appendChild(row);
  });
}

function renderNoise() {
  noiseList.innerHTML = "";
  noiseFacts.forEach((fact) => {
    const card = document.createElement("div");
    card.className = "noise-card";
    card.innerHTML = `<strong>${fact.title}</strong><p>${fact.body}</p><p><a href="${fact.source}" target="_blank" rel="noreferrer">Ver fuente</a></p>`;
    noiseList.appendChild(card);
  });
}

function renderStory() {
  const layer = layers[activeLayer];
  storyTitle.textContent = layer.title;
  storyCopy.textContent = layer.story;
  storyTags.innerHTML = "";
  layer.tags.forEach((tag) => {
    const item = document.createElement("span");
    item.className = "story-tag";
    item.textContent = tag;
    storyTags.appendChild(item);
  });
}

function renderFindings() {
  findingsList.innerHTML = "";
  findingEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "finding-card";
    card.innerHTML = `
      <span class="status-pill">${entry.tag}</span>
      <h3>${entry.title}</h3>
      <p>${entry.body}</p>
    `;
    findingsList.appendChild(card);
  });
}

function renderNews() {
  newsList.innerHTML = "";
  newsEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "news-card";
    card.innerHTML = `
      <div class="news-card-header">
        <span class="status-pill">${entry.topic}</span>
        <span>${entry.date}</span>
      </div>
      <h3>${entry.title}</h3>
      <p>${entry.summary}</p>
      <dl class="news-meta">
        <div><dt>Fuente</dt><dd>${entry.sourceName}</dd></div>
        <div><dt>Zona</dt><dd>${entry.zone}</dd></div>
        <div><dt>Tipo</dt><dd>${entry.sourceType}</dd></div>
        <div><dt>Cuidado</dt><dd>${entry.caution}</dd></div>
      </dl>
      <a href="${entry.url}" target="_blank" rel="noreferrer">Consultar fuente</a>
    `;
    newsList.appendChild(card);
  });
}

function renderMethodology() {
  methodList.innerHTML = "";
  methodologyEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "method-item";
    card.innerHTML = `<strong>${entry.title}</strong><p>${entry.body}</p>`;
    methodList.appendChild(card);
  });
}

function renderSources() {
  sourceList.innerHTML = "";
  sourceGroups.forEach((group) => {
    const section = document.createElement("section");
    section.className = "source-group";
    const cards = group.entries
      .map(
        (entry) => `
          <article class="source-card">
            <div class="source-card-header">
              <span class="status-pill">${entry.type}</span>
              <span>${entry.year}</span>
            </div>
            <h3>${entry.title}</h3>
            <p>${entry.body}</p>
            <dl class="source-meta">
              <div><dt>Institución</dt><dd>${entry.institution}</dd></div>
              <div><dt>Variable</dt><dd>${entry.variable}</dd></div>
              <div><dt>Formato</dt><dd>${entry.format}</dd></div>
              <div><dt>Limitación</dt><dd>${entry.limitation}</dd></div>
            </dl>
            <a href="${entry.url}" target="_blank" rel="noreferrer">Abrir fuente</a>
          </article>
        `
      )
      .join("");
    section.innerHTML = `
      <div class="source-group-heading">
        <h3>${group.title}</h3>
        <p>${group.description}</p>
      </div>
      <div class="source-card-grid">${cards}</div>
    `;
    sourceList.appendChild(section);
  });
}

function renderMissingData() {
  missingDataList.innerHTML = "";
  missingDataEntries.forEach((entry) => {
    const card = document.createElement("article");
    card.className = "missing-card";
    card.innerHTML = `
      <h3>${entry.title}</h3>
      <p>${entry.why}</p>
      <dl class="missing-meta">
        <div><dt>Quién debería publicarlo</dt><dd>${entry.owner}</dd></div>
        <div><dt>Formato ideal</dt><dd>${entry.format}</dd></div>
        <div><dt>Cómo afecta al proyecto</dt><dd>${entry.impact}</dd></div>
      </dl>
    `;
    missingDataList.appendChild(card);
  });
}

function updateInterface() {
  const data = getLayerData();
  renderMap(data);
  renderDetail(data);
  renderRanking(data);
  renderStory();
  renderMunicipalityList();
  document.querySelectorAll("[data-layer]").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.layer === activeLayer);
  });
}

document.querySelectorAll("[data-layer]").forEach((button) => {
  button.addEventListener("click", () => {
    activeLayer = button.dataset.layer;
    if (focusMunicipalityId) {
      const data = getLayerData();
      const entry =
        activeLayer === "greenery"
          ? data.find((item) => item.id === focusMunicipalityId)
          : getBestEntryForMunicipality(data, focusMunicipalityId);
      selectedId = entry ? entry.id : null;
    } else {
      selectedId = null;
    }
    updateInterface();
  });
});

applyInitialStateFromUrl();
createMunicipalityNodes();
createLabels();
createStationNodes();
renderSnapshotTiles();
renderFindings();
renderNews();
renderMethodology();
renderClimateChart();
renderTrend();
renderNoise();
renderSources();
renderMissingData();
updateInterface();
