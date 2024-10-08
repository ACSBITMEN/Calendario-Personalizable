// datos.js
// Nombres de los meses
const monthNames = [
  'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
  'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Nombres de los días de la semana
const dayNames = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

// Días festivos de Colombia para 2024
const festivos = [
  { day: 1, month: 0, year: 2024, name: 'Año Nuevo' },           // 1 de Enero
  { day: 10, month: 0, year: 2024, name: 'Día de Reyes' },       // 10 de Enero
  { day: 20, month: 2, year: 2024, name: 'Día de San José' },    // 20 de Marzo
  // Agrega todos los días festivos correspondientes
];

// Rutas de las imágenes para cada mes
const imagenes = [
  'assets/img/ImgForCalendar/img1.jpeg',   // Enero
  'assets/img/ImgForCalendar/img2.jpeg',  // Febrero
  'assets/img/ImgForCalendar/img3.jpeg',     // Marzo
  'assets/img/ImgForCalendar/img4.jpeg',     // Abril
  'assets/img/ImgForCalendar/img5.jpeg',       // Mayo
  'assets/img/ImgForCalendar/img6.jpeg',      // Junio
  'assets/img/ImgForCalendar/img7.jpeg',      // Julio
  'assets/img/ImgForCalendar/img8.jpeg',    // Agosto
  'assets/img/ImgForCalendar/img9.jpeg', // Septiembre
  'assets/img/ImgForCalendar/img10.jpeg',   // Octubre
  'assets/img/ImgForCalendar/img11.jpeg',  // Noviembre
  'assets/img/ImgForCalendar/img12.jpeg'   // Diciembre
];

// Citas para cada mes
const citas = [
  'Cita de Enero: "Comienza el año con energía."',    // Enero
  'Cita de Febrero: "El amor está en el aire."',      // Febrero
  'Cita de Marzo: "La primavera llega con nuevas oportunidades."',  // Marzo
  'Cita de Abril: "Tiempo de renovación."',           // Abril
  'Cita de Mayo: "Disfruta de cada momento."',        // Mayo
  'Cita de Junio: "Verano y aventuras te esperan."',  // Junio
  'Cita de Julio: "Tiempo de sol y diversión."',      // Julio
  'Cita de Agosto: "Aprovecha cada día al máximo."',  // Agosto
  'Cita de Septiembre: "Nuevos comienzos y retos."',  // Septiembre
  'Cita de Octubre: "El otoño pinta de colores el paisaje."', // Octubre
  'Cita de Noviembre: "Agradece todo lo bueno."',     // Noviembre
  'Cita de Diciembre: "Cierra el año con alegría."'   // Diciembre
];

// Paletas de colores para cada mes
const paletasColores = [
  { // Enero
    '--color-primario': '#7ABA78',
    '--color-secundario': '#0A6847',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#581845',
  },
  { // Febrero
    '--color-primario': '#D988B9',
    '--color-secundario': '#B0578D',
    '--color-hoy': '#C70039',
    '--color-festivo': '#900C3F',
  },
  { // Marzo
    '--color-primario': '#F7DCB9',
    '--color-secundario': '#DEAC80',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#581845',
  },
  { // Abril
    '--color-primario': '#3FA2F6',
    '--color-secundario': '#0F67B1',
    '--color-hoy': '#C70039',
    '--color-festivo': '#900C3F',
  },
  { // Mayo
    '--color-primario': '#FFD35A',
    '--color-secundario': '#FFA823',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#581845',
  },
  { // Junio
    '--color-primario': '#AAD7D9',
    '--color-secundario': '#92C7CF',
    '--color-hoy': '#C70039',
    '--color-festivo': '#900C3F',
  },
  { // Julio
    '--color-primario': '#8967B3',
    '--color-secundario': '#624E88',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#581845',
  },
  { // Agosto
    '--color-primario': '#758694',
    '--color-secundario': '#405D72',
    '--color-hoy': '#C70039',
    '--color-festivo': '#900C3F',
  },
  { // Septiembre
    '--color-primario': '#7C93C3',
    '--color-secundario': '#55679C',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#581845',
  },
  { // Octubre
    '--color-primario': '#FD8B51',
    '--color-secundario': '#CB6040',
    '--color-hoy': '#E85C0D',
    '--color-festivo': '#FFAD60',
  },
  { // Noviembre
    '--color-primario': '#72BF78',
    '--color-secundario': '#347928',
    '--color-hoy': '#900C3F',
    '--color-festivo': '#581845',
  },
  { // Diciembre
    '--color-primario': '#347928',
    '--color-secundario': '#B8001F',
    '--color-hoy': '#FABC3F',
    '--color-festivo': '#900C3F',
  }
];
