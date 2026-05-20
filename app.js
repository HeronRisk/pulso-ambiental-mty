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

const climateSeries = [
  { month: "Abr 2024", avgTemp: 24.82, maxTemp: 37.35, rain: 21.476, source: "https://aire.nl.gob.mx/docs/reportes/mensuales/2024/04_Reporte_Abril_2024.pdf" },
  { month: "May 2024", avgTemp: 30.21, maxTemp: 45.1, rain: 183.6, source: "https://aire.nl.gob.mx/docs/reportes/mensuales/2024/05_Reporte_Mayo_2024.pdf" },
  { month: "Jun 2024", avgTemp: 28.49, maxTemp: 43.07, rain: 680.5, source: "https://aire.nl.gob.mx/docs/reportes/mensuales/2024/06_Reporte_Junio_2024.pdf" },
  { month: "Jul 2024", avgTemp: 27.48, maxTemp: 43.94, rain: 26.3, source: "https://aire.nl.gob.mx/docs/reportes/mensuales/2024/07_Reporte_Julio_2024.pdf" },
  { month: "Ago 2024", avgTemp: 29.04, maxTemp: 39.1, rain: 153.81, source: "https://aire.nl.gob.mx/docs/reportes/mensuales/2024/08_Reporte_Agosto_2024.pdf" }
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

const sourceEntries = [
  {
    title: "INEGI, geometría municipal 2025",
    url: "https://gaia.inegi.org.mx/wscatgeo/v2/geo/mgem/19",
    body: "Servicio oficial del Marco Geoestadístico usado para derivar los límites reales de los 9 municipios del mapa."
  },
  {
    title: "INEGI, delimitación metropolitana",
    url: "https://www.inegi.org.mx/contenidos/productos/prod_serv/contenidos/espanol/bvinegi/productos/nueva_estruc/702825006792.pdf",
    body: "Base de contexto para explicar el alcance metropolitano formal de Monterrey, aunque el mapa visible quedó acotado a los 9 municipios más poblados."
  },
  {
    title: "SIMA / Agencia de Calidad del Aire de Nuevo León",
    url: "https://aire.nl.gob.mx/docs/reportes/estadisticas/Estadisticas_2018.pdf",
    body: "Promedios anuales 2018 de PM2.5, PM10 y O3 por estación. Esta es la capa comparable para contaminación y aire."
  },
  {
    title: "Mapa Índice Aire y Salud",
    url: "https://aire.nl.gob.mx/icars2020/map_calidad_icars.php",
    body: "Usado para los episodios recientes de 2025-2026 indexados por el buscador. En el recorte actual de 9 municipios, el caso más fuerte es el ozono de San Pedro del 25 de febrero de 2026."
  },
  {
    title: "Estudio de áreas verdes urbanas de la ZMM",
    url: "https://era.ujat.mx/index.php/rera/article/view/2676",
    body: "Serie satelital 2000-2019 para la ZMM completa: 13.21 m²/hab en 2000 y 7.75 m²/hab en 2019."
  },
  {
    title: "Inventario comparable de áreas verdes por municipio",
    url: "https://www.hcnl.gob.mx/trabajo_legislativo/pdf/DDE%20281%20SO%20COMPLETO%20Y%20REVISADO.pdf",
    body: "Documento legislativo que cita el inventario de SEMARNAT con m² por habitante comparables para siete municipios del núcleo urbano."
  },
  {
    title: "Reportes mensuales de meteorología 2024",
    url: "https://aire.nl.gob.mx/rep_mensual.html",
    body: "Serie usada para temperatura promedio y precipitación acumulada mensual de abril a agosto de 2024."
  },
  {
    title: "Agenda 2030 de Naciones Unidas",
    url: "https://sdgs.un.org/es/2030agenda",
    body: "Marco usado para alinear el proyecto con los ODS 3, 11, 13 y 15: salud, ciudades sostenibles, acción climática y ecosistemas terrestres."
  }
];

const layers = {
  greenery: {
    type: "municipality",
    title: "Áreas verdes urbanas comparables",
    unit: "m²/hab",
    badge: "Capa municipal con cifras comparables para siete municipios del núcleo urbano; los demás quedan en gris por falta de una cifra equivalente en la misma fuente.",
    palette: ["#efe7b7", "#c9dc74", "#7ab95d", "#1a6b4d"],
    story:
      "La metrópoli no es homogénea: San Pedro se despega del resto, mientras Apodaca, Escobedo y Santa Catarina quedan muy abajo del estándar mínimo de 9 m²/hab.",
    tags: ["inventario comparable", "núcleo urbano", "déficit metropolitano"],
    higherIsBetter: true
  },
  pollution: {
    type: "station",
    title: "Presión de contaminación por partículas",
    unit: "índice",
    badge: "Índice derivado a partir de PM2.5 y PM10 anuales 2018 respecto a los límites anuales mexicanos vigentes en el reporte del SIMA.",
    palette: ["#f2eadc", "#e1b466", "#c96f45", "#8b2d24"],
    story:
      "San Bernabé, García y Santa Catarina concentran las cargas particuladas más severas cuando se combinan PM10 y PM2.5. Pueblo Serena aparece como el nodo menos cargado del conjunto.",
    tags: ["PM10", "PM2.5", "índice derivado"],
    higherIsBetter: false
  },
  air: {
    type: "station",
    title: "Partículas finas PM2.5",
    unit: "µg/m³",
    badge: "Promedios anuales 2018 por estación SIMA. Este es el mejor corte comparable que el buscador devuelve de forma consistente.",
    palette: ["#dcecf3", "#8dbfd0", "#4c8396", "#1c4d62"],
    story:
      "Apodaca y Santa Catarina encabezan el PM2.5 anual de esta serie, seguidas por Universidad y San Bernabé. Pueblo Serena marca el valor más bajo del conjunto.",
    tags: ["estaciones SIMA", "promedio anual", "2018"],
    higherIsBetter: false
  },
  alerts: {
    type: "alert",
    title: "Alertas y episodios recientes",
    unit: "",
    badge: "Eventos recientes localizados en el mapa oficial de calidad del aire entre noviembre de 2025 y marzo de 2026, restringidos a los 9 municipios del mapa.",
    palette: ["#f7e4c1", "#f0af5d", "#dc6940", "#982c1e"],
    story:
      "Dentro del recorte de 9 municipios, San Pedro destaca por un episodio fuerte de ozono a finales de febrero de 2026. García y Universidad muestran picos recientes de PM2.5 más moderados.",
    tags: ["PM2.5", "O3", "2025-2026"],
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
const trendStrip = document.getElementById("trend-strip");
const noiseList = document.getElementById("noise-list");
const storyTitle = document.getElementById("story-title");
const storyCopy = document.getElementById("story-copy");
const storyTags = document.getElementById("story-tags");
const sourceList = document.getElementById("source-list");

let activeLayer = "greenery";
let selectedId = "san-pedro";
let focusMunicipalityId = null;

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
    if (data.some((entry) => entry.id === municipalityId)) {
      selectedId = municipalityId;
    }
  } else {
    const bestEntry = getBestEntryForMunicipality(data, municipalityId);
    if (bestEntry) {
      selectedId = bestEntry.id;
    }
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

function defaultSelectionForLayer() {
  if (activeLayer === "greenery") {
    return "san-pedro";
  }
  if (activeLayer === "pollution") {
    return "san-bernabe";
  }
  if (activeLayer === "air") {
    return "santa-catarina";
  }
  return "alert-san-pedro";
}

function applyInitialStateFromUrl() {
  const params = new URLSearchParams(window.location.search);
  const layerParam = params.get("layer");
  const municipalityParam = params.get("municipality");

  if (layerParam && layers[layerParam]) {
    activeLayer = layerParam;
    selectedId = defaultSelectionForLayer();
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
      selectedId = entry ? entry.id : selectedId;
    }
  }
}

function renderSnapshotTiles() {
  const tiles = [
    { label: "Municipios mapa", value: "9" },
    { label: "Límites INEGI", value: "2025" },
    { label: "Estaciones SIMA", value: "12" },
    { label: "Máximo reciente", value: "105 O3" }
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
  return data.find((entry) => entry.id === selectedId) ?? data[0];
}

function renderDetail(data) {
  const entry = getSelectedEntry(data);
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

function renderClimateChart() {
  climateChart.innerHTML = "";
  const maxTemp = Math.max(...climateSeries.map((item) => item.avgTemp));
  const maxRain = Math.max(...climateSeries.map((item) => item.rain));

  climateSeries.forEach((item) => {
    const row = document.createElement("div");
    row.className = "climate-row";
    row.innerHTML = `
      <strong>${item.month}</strong>
      <div class="climate-bars">
        <div class="climate-bar">
          <div class="climate-bar-track">
            <div class="climate-bar-fill" style="width:${(item.avgTemp / maxTemp) * 100}%; background:#cf6e3f"></div>
          </div>
          <small>Temp. promedio: ${item.avgTemp} °C</small>
        </div>
        <div class="climate-bar">
          <div class="climate-bar-track">
            <div class="climate-bar-fill" style="width:${(item.rain / maxRain) * 100}%; background:#2a7292"></div>
          </div>
          <small>Lluvia acumulada: ${item.rain} mm</small>
        </div>
      </div>
    `;
    climateChart.appendChild(row);
  });
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

function renderSources() {
  sourceList.innerHTML = "";
  sourceEntries.forEach((entry) => {
    const item = document.createElement("li");
    item.innerHTML = `<a href="${entry.url}" target="_blank" rel="noreferrer">${entry.title}</a><p>${entry.body}</p>`;
    sourceList.appendChild(item);
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
      selectedId = entry ? entry.id : defaultSelectionForLayer();
    } else {
      selectedId = defaultSelectionForLayer();
    }
    updateInterface();
  });
});

applyInitialStateFromUrl();
createMunicipalityNodes();
createLabels();
createStationNodes();
renderSnapshotTiles();
renderClimateChart();
renderTrend();
renderNoise();
renderSources();
updateInterface();
