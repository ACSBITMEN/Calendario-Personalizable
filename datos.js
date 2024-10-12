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
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img2.jpeg',  // Febrero
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img3.jpeg',  // Marzo
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img4.jpeg',  // Abril
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img11.jpeg',  // Mayo
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img6.jpeg',  // Junio
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img7.jpeg',  // Julio
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img8.jpeg',  // Agosto
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img9.jpeg',  // Septiembre
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img10.jpeg', // Octubre
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img5.jpeg', // Noviembre
  'https://raw.githubusercontent.com/ACSBITMEN/Calendario-Personalizable/refs/heads/main/assets/img/ImgForCalendar/Img12.jpeg'  // Diciembre
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
    '--color-domingo': '#94C1D0',
    '--color-festivo': '#7FB8C8',
    '--color-evento-especial': '#405D72',
  },
  { // Febrero
    '--color-primario': '#F075AA',
    '--color-secundario': '#EC4C91',
    '--color-hoy': '#C70039',
    '--color-domingo': '#F28AB7',
    '--color-festivo': '#F28AB7', // N/A
    '--color-evento-especial': '#EC4C91',
  },
  { // Marzo
    '--color-primario': '#E1C44B',
    '--color-secundario': '#81A263',
    '--color-hoy': '#900C3F',
    '--color-domingo': '#DAC56F',
    '--color-festivo': '#E1C44B',
    '--color-evento-especial': '#A88909',
  },
  { // Abril
    '--color-primario': '#3FA2F6',
    '--color-secundario': '#0F67B1', 
    '--color-hoy': '#C70039',
    '--color-domingo': '#74CDDD',
    '--color-festivo': '#3DB9C1',
    '--color-evento-especial': '#0F67B1',
  },
  { // Mayo
    '--color-primario': '#5EA998',
    '--color-secundario': '#28585C',
    '--color-hoy': '#900C3F',
    '--color-domingo': '#68B8A5',
    '--color-festivo': '#579E8A',
    '--color-evento-especial': '#003C43',
  },
  { // Junio
    '--color-primario': '#AD88C6',
    '--color-secundario': '#7469B6',
    '--color-hoy': '#900C3F',
    '--color-domingo': '#C0A3D3',
    '--color-festivo': '#B18FC9', 
    '--color-evento-especial': '#7469B6',
  },
  { // Julio
    '--color-primario': '#7E60BF',
    '--color-secundario': '#433878',
    '--color-hoy': '#900C3F',
    '--color-domingo': '#A691D3',
    '--color-festivo': '#8C72C6', 
    '--color-evento-especial': '#433878',
  },
  { // Agosto
    '--color-primario': '#0E86D7',
    '--color-secundario': '#104A94',
    '--color-hoy': '#C70039',
    '--color-domingo': '#29C6F1',
    '--color-festivo': '#1ABBE2',
    '--color-evento-especial': '#104A94',
  },
  { // Septiembre
    '--color-primario': '#7C93C3',
    '--color-secundario': '#55679C',
    '--color-hoy': '#900C3F',
    '--color-domingo': '#F2A74A',
    '--color-festivo': '#99A6C1',
    '--color-evento-especial': '#3E3030',
  },
  { // Octubre
    '--color-primario': '#D0440E',
    '--color-secundario': '#3E3030',
    '--color-hoy': '#D7654F',
    '--color-domingo': '#F2A74A',
    '--color-festivo': '#F19A40',
    '--color-evento-especial': '#3E3030',
  },
  { // Noviembre
    '--color-primario': '#0A6847',
    '--color-secundario': '#16423C',
    '--color-hoy': '#900C3F',
    '--color-domingo': '#8EC78C',
    '--color-festivo': '#89B67F',
    '--color-evento-especial': '#16423C',
  },
  { // Diciembre
    '--color-primario': '#121212',  // 30475E
    '--color-secundario': '#30475E', // 121212
    '--color-hoy': '#FABC3F',
    '--color-domingo': '#F05454',
    '--color-festivo': '#8EC78C',
    '--color-evento-especial': '#16423C',
  }
];

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

// Función para calcular los festivos de Colombia
function calcularFestivosColombia(year) {
  const festivos = [];

  // Festivos fijos
  festivos.push({ day: 1, month: 0, year, name: 'Festivo: Año Nuevo' }); // 1 de enero
  festivos.push({ day: 1, month: 4, year, name: 'Festivo: Día del Trabajo' }); // 1 de mayo
  festivos.push({ day: 20, month: 6, year, name: 'Festivo: Día de la Independencia' }); // 20 de julio
  festivos.push({ day: 7, month: 7, year, name: 'Festivo: Batalla de Boyacá' }); // 7 de agosto
  festivos.push({ day: 8, month: 11, year, name: 'Festivo: Inmaculada Concepción' }); // 8 de diciembre
  festivos.push({ day: 25, month: 11, year, name: 'Festivo: Navidad' }); // 25 de diciembre

  // Festivos que se trasladan al lunes más cercano
  const festivosTrasladables = [
    { day: 6, month: 0, name: 'Festivo: Día de Reyes' },
    { day: 19, month: 2, name: 'Festivo: Día de San José' },
    { day: 29, month: 5, name: 'Festivo: San Pedro y San Pablo' },
    { day: 15, month: 7, name: 'Festivo: Asunción de la Virgen' },
    { day: 12, month: 9, name: 'Festivo: Día de la Raza' },
    { day: 1, month: 10, name: 'Festivo: Día de Todos los Santos' },
    { day: 11, month: 10, name: 'Festivo: Independencia de Cartagena' },
  ];

  festivosTrasladables.forEach(festivo => {
    let fecha = new Date(year, festivo.month, festivo.day);
    fecha = trasladarAlLunes(fecha);
    festivos.push({ day: fecha.getDate(), month: fecha.getMonth(), year: fecha.getFullYear(), name: festivo.name });
  });

  // Festivos móviles relacionados con la Pascua
  const pascua = calcularPascua(year);

  const juevesSanto = new Date(pascua);
  juevesSanto.setDate(pascua.getDate() - 3);
  festivos.push({ day: juevesSanto.getDate(), month: juevesSanto.getMonth(), year, name: 'Festivo: Jueves Santo' });

  const viernesSanto = new Date(pascua);
  viernesSanto.setDate(pascua.getDate() - 2);
  festivos.push({ day: viernesSanto.getDate(), month: viernesSanto.getMonth(), year, name: 'Festivo: Viernes Santo' });

  const ascension = trasladarAlLunes(new Date(pascua.getTime() + 43 * 86400000));
  festivos.push({ day: ascension.getDate(), month: ascension.getMonth(), year: ascension.getFullYear(), name: 'Festivo: Ascensión del Señor' });

  const corpusChristi = trasladarAlLunes(new Date(pascua.getTime() + 64 * 86400000));
  festivos.push({ day: corpusChristi.getDate(), month: corpusChristi.getMonth(), year: corpusChristi.getFullYear(), name: 'Festivo: Corpus Christi' });

  const sagradoCorazon = trasladarAlLunes(new Date(pascua.getTime() + 71 * 86400000));
  festivos.push({ day: sagradoCorazon.getDate(), month: sagradoCorazon.getMonth(), year: sagradoCorazon.getFullYear(), name: 'Festivo: Sagrado Corazón de Jesús' });

  // Añadir todos los domingos del año como festivos
  let fecha = new Date(year, 0, 1);
  while (fecha.getFullYear() === year) {
    if (fecha.getDay() === 0) {
      festivos.push({ day: fecha.getDate(), month: fecha.getMonth(), year: fecha.getFullYear(), name: 'Domingo', isDomingo: true });
    }
    fecha.setDate(fecha.getDate() + 1);
  }

  return festivos;
}

// Función para trasladar festivos al lunes más cercano
function trasladarAlLunes(fecha) {
  const diaSemana = fecha.getDay();
  if (diaSemana === 0) {
    fecha.setDate(fecha.getDate() + 1);
  } else if (diaSemana !== 1) {
    fecha.setDate(fecha.getDate() + (8 - diaSemana));
  }
  return fecha;
}

// Funciones para calcular fechas móviles
function calcularEnesimoDiaDeLaSemana(year, month, dayOfWeek, n) {
  let count = 0;
  let date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    if (date.getDay() === dayOfWeek) {
      count++;
      if (count === n) {
        return new Date(date);
      }
    }
    date.setDate(date.getDate() + 1);
  }

  return null;
}

function calcularUltimoDiaDeLaSemana(year, month, dayOfWeek) {
  let date = new Date(year, month + 1, 0);

  while (date.getMonth() === month) {
    if (date.getDay() === dayOfWeek) {
      return new Date(date);
    }
    date.setDate(date.getDate() - 1);
  }

  return null;
}

function calcularDiaDeLaMadre(year) {
  return calcularEnesimoDiaDeLaSemana(year, 4, 0, 2);
}

function calcularDiaDelPadre(year) {
  return calcularEnesimoDiaDeLaSemana(year, 5, 0, 3);
}

function calcularDiaDelAmorYAmistad(year) {
  return calcularEnesimoDiaDeLaSemana(year, 8, 6, 3);
}

function calcularDiaDelNino(year) {
  return calcularUltimoDiaDeLaSemana(year, 3, 6);
}

function calcularCarnavalDeBarranquilla(year) {
  const pascua = calcularPascua(year);
  if (!pascua) return null;

  const miercolesDeCeniza = new Date(pascua);
  miercolesDeCeniza.setDate(pascua.getDate() - 46);

  const carnaval = new Date(miercolesDeCeniza);
  carnaval.setDate(miercolesDeCeniza.getDate() - 4);

  return carnaval;
}

// Función para obtener los eventos especiales de un año dado
function obtenerEventosEspeciales(year) {
  const eventos = [];

  const eventosFijos = [
{ day: 5, month: 0, year, name: 'Carnaval de Negros y Blancos' },  // 5 de Enero
  { day: 4, month: 1, year, name: 'Día Mundial contra el Cáncer' },  // 4 de Febrero
  { day: 14, month: 1, year, name: 'Día de San Valentín' },  // 14 de Febrero
  { day: 8, month: 2, year, name: 'Día de la Mujer' },  // 8 de Marzo
  { day: 20, month: 2, year, name: 'Día Internacional de la Felicidad' },  // 20 de Marzo
  { day: 22, month: 2, year, name: 'Día Internacional del agua' },  // 22 de Marzo
  { day: 22, month: 3, year, name: 'Día de la Tierra' },  // 22 de Abril
  { day: 23, month: 3, year, name: 'Día del Idioma' },  // 23 de Abril
  { day: 21, month: 4, year, name: 'Día de la Afrocolombianidad' },  // 21 de Mayo
  { day: 5, month: 5, year, name: 'Día Mundial del Medio Ambiente' },  // 5 de Junio
  { day: 11, month: 6, year, name: 'Grito de Independencia de Cartagena' },  // 11 de Julio
  { day: 16, month: 6, year, name: 'Día de la Virgen del Carmen' },  // 16 de Julio
  { day: 9, month: 7, year, name: 'Día Internacional de los Pueblos Indígenas' },  // 9 de Agosto
  { day: 9, month: 8, year, name: 'Día de los Derechos Humanos en Colombia' },  // 9 de Septiembre
  { day: 21, month: 8, year, name: 'Día Nacional del Ahorro de Energía' },  // 21 de Septiembre
  { day: 19, month: 9, year, name: 'Día Internacional del Cáncer de Mama' },  // 19 de Octubre
  { day: 31, month: 9, year, name: 'Celebración de Halloween' },  // 31 de Octubre
  { day: 14, month: 10, year, name: 'Día Mundial de la Diabetes' },  // 14 de Noviembre
  { day: 7, month: 11, year, name: 'Celebración 7 de Velitas' }, // 7 de Diciembre
  { day: 24, month: 11, year, name: 'Celebración de Noche Buena' }, // 24 de Diciembre
  { day: 28, month: 11, year, name: 'Dia de los inocentes' }, // 28 de Diciembre
  { day: 31, month: 11, year, name: 'Celebración de Año Viejo' }, // 31 de Diciembre
  ];

  eventosFijos.forEach(evento => {
    eventos.push({ day: evento.day, month: evento.month, year, name: evento.name });
  });

  const diaMadre = calcularDiaDeLaMadre(year);
  if (diaMadre) {
    eventos.push({ day: diaMadre.getDate(), month: diaMadre.getMonth(), year, name: 'Día de la Madre' });
  }

  const diaPadre = calcularDiaDelPadre(year);
  if (diaPadre) {
    eventos.push({ day: diaPadre.getDate(), month: diaPadre.getMonth(), year, name: 'Día del Padre' });
  }

  const diaAmorYAmistad = calcularDiaDelAmorYAmistad(year);
  if (diaAmorYAmistad) {
    eventos.push({ day: diaAmorYAmistad.getDate(), month: diaAmorYAmistad.getMonth(), year, name: 'Día del Amor y la Amistad' });
  }

  const diaNino = calcularDiaDelNino(year);
  if (diaNino) {
    eventos.push({ day: diaNino.getDate(), month: diaNino.getMonth(), year, name: 'Día del Niño' });
  }

  const carnaval = calcularCarnavalDeBarranquilla(year);
  if (carnaval) {
    eventos.push({ day: carnaval.getDate(), month: carnaval.getMonth(), year, name: 'Carnaval de Barranquilla' });
  }

  return eventos;
}


















// Array de eventos especiales
const eventosEspeciales = [
  
  // Agrega tus eventos personales aquí
];

// Función para obtener los eventos especiales de un año dado
function obtenerEventosEspeciales(year) {
  const eventos = [];

  // Eventos fijos (los que no dependen del año)
  const eventosFijos = [
    { day: 5, month: 0, name: 'Carnaval de Negros y Blancos' },  // 5 de Enero
    // ... otros eventos fijos ...
  ];

  eventosFijos.forEach(evento => {
    eventos.push({ day: evento.day, month: evento.month, year, name: evento.name });
  });

  // Día de la Madre
  const diaMadre = calcularDiaDeLaMadre(year);
  eventos.push({
    day: diaMadre.getDate(),
    month: diaMadre.getMonth(),
    year: diaMadre.getFullYear(),
    name: 'Día de la Madre'
  });

  // Día del Padre
  const diaPadre = calcularDiaDelPadre(year);
  eventos.push({
    day: diaPadre.getDate(),
    month: diaPadre.getMonth(),
    year: diaPadre.getFullYear(),
    name: 'Día del Padre'
  });

  // Día del Amor y la Amistad
  const diaAmorYAmistad = calcularDiaDelAmorYAmistad(year);
  eventos.push({
    day: diaAmorYAmistad.getDate(),
    month: diaAmorYAmistad.getMonth(),
    year: diaAmorYAmistad.getFullYear(),
    name: 'Día del Amor y la Amistad'
  });

  // Día del Niño
  const diaNino = calcularDiaDelNino(year);
  eventos.push({
    day: diaNino.getDate(),
    month: diaNino.getMonth(),
    year: diaNino.getFullYear(),
    name: 'Día del Niño'
  });

  // Carnaval de Barranquilla
  const carnaval = calcularCarnavalDeBarranquilla(year);
  eventos.push({
    day: carnaval.getDate(),
    month: carnaval.getMonth(),
    year: carnaval.getFullYear(),
    name: 'Carnaval de Barranquilla'
  });

  return eventos;
}

// Funciones para calcular fechas móviles
function calcularEnesimoDiaDeLaSemana(year, month, dayOfWeek, n) {
  let count = 0;
  let date = new Date(year, month, 1);

  while (date.getMonth() === month) {
    if (date.getDay() === dayOfWeek) {
      count++;
      if (count === n) {
        return date;
      }
    }
    date.setDate(date.getDate() + 1);
  }

  return null; // Si no se encuentra el día
}

function calcularUltimoDiaDeLaSemana(year, month, dayOfWeek) {
  let date = new Date(year, month + 1, 0); // Último día del mes

  while (date.getMonth() === month) {
    if (date.getDay() === dayOfWeek) {
      return date;
    }
    date.setDate(date.getDate() - 1);
  }

  return null; // Si no se encuentra el día
}

function calcularDiaDeLaMadre(year) {
  return calcularEnesimoDiaDeLaSemana(year, 4, 0, 2); // Mayo es el mes 4
}

function calcularDiaDelPadre(year) {
  return calcularEnesimoDiaDeLaSemana(year, 5, 0, 3); // Junio es el mes 5
}

function calcularDiaDelAmorYAmistad(year) {
  return calcularEnesimoDiaDeLaSemana(year, 8, 6, 3); // Septiembre es el mes 8, sábado es 6
}

function calcularDiaDelNino(year) {
  return calcularUltimoDiaDeLaSemana(year, 3, 6); // Abril es el mes 3
}

function calcularCarnavalDeBarranquilla(year) {
  const pascua = calcularPascua(year);
  const miercolesDeCeniza = new Date(pascua);
  miercolesDeCeniza.setDate(pascua.getDate() - 46);
  const carnaval = new Date(miercolesDeCeniza);
  carnaval.setDate(miercolesDeCeniza.getDate() - 4); // Cuatro días antes
  return carnaval;
}



