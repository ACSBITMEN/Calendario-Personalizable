// datos.js
// Nombres de los meses
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Nombres de los días de la semana
const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Rutas de las imágenes para cada mes
const imagenes = [
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img1.jpeg',  // Enero
  'assets/img/ImgForCalendar/img2.jpeg',  // Febrero
  'assets/img/ImgForCalendar/img3.jpeg',  // Marzo
  'assets/img/ImgForCalendar/img4.jpeg',  // Abril
  'assets/img/ImgForCalendar/img11.jpeg',  // Mayo
  'assets/img/ImgForCalendar/img6.jpeg',  // Junio
  'assets/img/ImgForCalendar/img7.jpeg',  // Julio
  './assets/img/ImgForCalendar/img8.jpeg',  // Agosto
  './assets/img/ImgForCalendar/img9.jpeg',  // Septiembre
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img10.jpeg', // Octubre
  'assets/img/ImgForCalendar/img5.jpeg', // Noviembre
  'assets/img/ImgForCalendar/img12.jpeg'  // Diciembre
];

// Citas para cada mes
const citas = [
  '"Ya te lo he ordenado: ¡Sé fuerte y valiente! ¡No tengas miedo ni te desanimes! Porque el Señor tu Dios te acompañará dondequiera que vayas." - Josué 1:9',                                                                                                                                  // Enero
  '"El amor es paciente, es bondadoso. El amor no es envidioso ni jactancioso ni orgulloso. No se comporta con rudeza, no es egoísta, no se enoja fácilmente, no guarda rencor." - 1 Corintios 13:4-5',                         // Febrero
  '"Porque yo sé muy bien los planes que tengo para ustedes —afirma el Señor—, planes de bienestar y no de calamidad, a fin de darles un futuro y una esperanza." - Jeremías 29:11',                                            // Marzo
  '"Siempre humildes y amables, pacientes, tolerantes unos con otros en amor." - Efesios 4:2',                                                                        // Abril
  '"Todo lo puedo en Cristo que me fortalece." - Filipenses 4:13',                                                                                                                                                              // Mayo
  '"Confía en el Señor de todo corazón, y no en tu propia inteligencia. Reconócelo en todos tus caminos, y él allanará tus sendas." - Proverbios 3:5-6',                                                                  // 
  '"El Señor mismo marchará al frente de ti y estará contigo; nunca te dejará ni te abandonará. No temas ni te desanimes." - Deuteronomio 31:8',                                                                                // Julio
  '"A las montañas levanto mis ojos; ¿de dónde ha de venir mi ayuda? Mi ayuda proviene del Señor, creador del cielo y de la tierra." - Salmo 121:1-2',                                                                          // 
  '"Hagan lo que hagan, trabajen de buena gana, como para el Señor y no como para nadie en este mundo, conscientes de que el Señor los recompensará con la herencia. Ustedes sirven a Cristo el Señor." - Colosenses 3:23-24',  // Septiembre
  '"El Señor te protegerá; de todo mal protegerá tu vida. El Señor te cuidará en el hogar y en el camino, desde ahora y para siempre." - Salmo 121:7-8',                                                                        // Octubre
  '"El Señor es mi pastor, nada me falta; en verdes pastos me hace descansar. Junto a tranquilas aguas me conduce." - Salmo 23:1-2',                                                                                            //
  '"Estén siempre alegres, oren sin cesar, den gracias a Dios en toda situación, porque esta es su voluntad para ustedes en Cristo Jesús." - 1 Tesalonicenses 5:16-18'                                                          // Diciembre
];

// Paletas de colores para cada mes
const paletasColores = [
  { // Enero
    '--color-primario': '#758694',
    '--color-secundario': '#405D72',
    '--color-hoy': '#C70039',
    '--color-festivo': '#8ABAC7',
  },
  { // Febrero
    '--color-primario': '#F075AA',
    '--color-secundario': '#EC4C91',
    '--color-hoy': '#C70039',
    '--color-festivo': '#F28AB7',
  },
  { // Marzo
    '--color-primario': '#E1C44B',
    '--color-secundario': '#81A263',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#DBC568',
  },
  { // Abril
    '--color-primario': '#3FA2F6',
    '--color-secundario': '#0F67B1', 
    '--color-hoy': '#C70039',
    '--color-festivo': '#74CDDD',
  },
  { // Mayo
    '--color-primario': '#4D869C',
    '--color-secundario': '#003C43',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#77B0AA',
  },
  { // Junio
    '--color-primario': '#AD88C6',
    '--color-secundario': '#7469B6',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#B7AAFA',
  },
  { // Julio
    '--color-primario': '#7E60BF',
    '--color-secundario': '#433878',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#9C84B9',
  },
  { // Agosto
    '--color-primario': '#0E86D7',
    '--color-secundario': '#104A94',
    '--color-hoy': '#C70039',
    '--color-festivo': '#21BBE9',
  },
  { // Septiembre
    '--color-primario': '#7C93C3',
    '--color-secundario': '#55679C',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#99A6C1',
  },
  { // Octubre
    '--color-primario': '#D0440E',
    '--color-secundario': '#3E3030',
    '--color-hoy': '#C12A0E',
    '--color-festivo': '#F19A40',
  },
  { // Noviembre
    '--color-primario': '#0A6847',
    '--color-secundario': '#16423C',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#8EC78C',
  },
  { // Diciembre
    '--color-primario': '#121212',  // 30475E
    '--color-secundario': '#30475E', // 121212
    '--color-hoy': '#FABC3F',
    '--color-festivo': '#F05454', // 384B70
  }
];

// Función para calcular los festivos de Colombia
function calcularFestivosColombia(year) {
  const festivos = [];

  // Función para trasladar festivos al lunes más cercano
  function trasladarAlLunes(fecha) {
    const diaSemana = fecha.getDay();
    if (diaSemana === 0) {
      // Si cae en domingo, mover al lunes
      fecha.setDate(fecha.getDate() + 1);
    } else if (diaSemana !== 1) {
      // Si no es lunes, mover al siguiente lunes
      fecha.setDate(fecha.getDate() + (8 - diaSemana));
    }
    return fecha;
  }

  // Festivos fijos
  festivos.push({ day: 1, month: 0, year, name: 'Año Nuevo' }); // 1 de enero
  festivos.push({ day: 1, month: 4, year, name: 'Día del Trabajo' }); // 1 de mayo
  festivos.push({ day: 20, month: 6, year, name: 'Día de la Independencia' }); // 20 de julio
  festivos.push({ day: 7, month: 7, year, name: 'Batalla de Boyacá' }); // 7 de agosto
  festivos.push({ day: 8, month: 11, year, name: 'Inmaculada Concepción' }); // 8 de diciembre
  festivos.push({ day: 25, month: 11, year, name: 'Navidad' }); // 25 de diciembre

  // Festivos que se trasladan al lunes más cercano
  const festivosTrasladables = [
    { day: 6, month: 0, name: 'Día de Reyes' },
    { day: 19, month: 2, name: 'Día de San José' },
    { day: 29, month: 5, name: 'San Pedro y San Pablo' },
    { day: 15, month: 7, name: 'Asunción de la Virgen' },
    { day: 12, month: 9, name: 'Día de la Raza' },
    { day: 1, month: 10, name: 'Día de Todos los Santos' },
    { day: 11, month: 10, name: 'Independencia de Cartagena' },
  ];

  festivosTrasladables.forEach(festivo => {
    let fecha = new Date(year, festivo.month, festivo.day);
    fecha = trasladarAlLunes(fecha);
    festivos.push({ day: fecha.getDate(), month: fecha.getMonth(), year: fecha.getFullYear(), name: festivo.name });
  });

  // Cálculo de la fecha de Pascua
  function calcularPascua(year) {
    const A = year % 19;
    const B = Math.floor(year / 100);
    const C = year % 100;
    const D = Math.floor(B / 4);
    const E = B % 4;
    const F = Math.floor((B + 8) / 25);
    const G = Math.floor((B - F + 1) / 3);
    const H = (19 * A + B - D - G + 15) % 30;
    const I = Math.floor(C / 4);
    const K = C % 4;
    const L = (32 + 2 * E + 2 * I - H - K) % 7;
    const M = Math.floor((A + 11 * H + 22 * L) / 451);
    const month = Math.floor((H + L - 7 * M + 114) / 31) - 1;
    const day = ((H + L - 7 * M + 114) % 31) + 1;
    return new Date(year, month, day);
  }

  const pascua = calcularPascua(year);

  // Festivos móviles relacionados con la Pascua
  const juevesSanto = new Date(pascua);
  juevesSanto.setDate(pascua.getDate() - 3);
  festivos.push({ day: juevesSanto.getDate(), month: juevesSanto.getMonth(), year, name: 'Jueves Santo' });

  const viernesSanto = new Date(pascua);
  viernesSanto.setDate(pascua.getDate() - 2);
  festivos.push({ day: viernesSanto.getDate(), month: viernesSanto.getMonth(), year, name: 'Viernes Santo' });

  const ascension = new Date(pascua);
  ascension.setDate(pascua.getDate() + 43);
  const fechaAscension = trasladarAlLunes(ascension);
  festivos.push({ day: fechaAscension.getDate(), month: fechaAscension.getMonth(), year: fechaAscension.getFullYear(), name: 'Ascensión del Señor' });

  const corpusChristi = new Date(pascua);
  corpusChristi.setDate(pascua.getDate() + 64);
  const fechaCorpus = trasladarAlLunes(corpusChristi);
  festivos.push({ day: fechaCorpus.getDate(), month: fechaCorpus.getMonth(), year: fechaCorpus.getFullYear(), name: 'Corpus Christi' });

  const sagradoCorazon = new Date(pascua);
  sagradoCorazon.setDate(pascua.getDate() + 71);
  const fechaSagradoCorazon = trasladarAlLunes(sagradoCorazon);
  festivos.push({ day: fechaSagradoCorazon.getDate(), month: fechaSagradoCorazon.getMonth(), year: fechaSagradoCorazon.getFullYear(), name: 'Sagrado Corazón de Jesús' });

  // Añadir todos los domingos del año como festivos
  let fecha = new Date(year, 0, 1); // Comenzar el 1 de enero
  while (fecha.getFullYear() === year) {
    if (fecha.getDay() === 0) { // Si es domingo
      festivos.push({ day: fecha.getDate(), month: fecha.getMonth(), year: fecha.getFullYear(), name: 'Domingo', isDomingo: true });
    }
    fecha.setDate(fecha.getDate() + 1); // Siguiente día
  }

  return festivos;
}
