const calendarDays = document.getElementById('calendarDays');
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const mesImagen = document.getElementById('mesImagen');
const citaEspecial = document.getElementById('citaEspecial');

let currentDate = new Date();

const monthNames = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
];

// Generar opciones para el selector de meses
function populateMonthSelect() {
    monthSelect.innerHTML = '';
    for (let i = 0; i < 12; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = monthNames[i];
        monthSelect.appendChild(option);
    }
}

// Establecer el mes y año actuales en los selectores
function setSelectValues() {
    monthSelect.value = currentDate.getMonth();
    yearSelect.value = currentDate.getFullYear();
}

// Actualizar la imagen del mes y la cita
function updateMesImagenYCita() {
    // Rutas de las imágenes (asegúrate de que las rutas sean correctas)
    const imagenes = [
        'path-to-image/january.jpg',   // Enero
        'path-to-image/february.jpg',  // Febrero
        'path-to-image/march.jpg',     // Marzo
        'path-to-image/april.jpg',     // Abril
        'path-to-image/may.jpg',       // Mayo
        'path-to-image/june.jpg',      // Junio
        'path-to-image/july.jpg',      // Julio
        'path-to-image/august.jpg',    // Agosto
        'path-to-image/september.jpg', // Septiembre
        'path-to-image/october.jpg',   // Octubre
        'path-to-image/november.jpg',  // Noviembre
        'path-to-image/december.jpg'   // Diciembre
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

    // Actualizar la imagen del mes
    mesImagen.src = imagenes[currentDate.getMonth()] || 'path-to-image/default.jpg';

    // Actualizar la cita
    citaEspecial.textContent = citas[currentDate.getMonth()] || 'Cita del mes: "Esta es una cita especial"';
}

function renderCalendar() {
    let year = currentDate.getFullYear();
    let month = currentDate.getMonth();

    // Limitar el año entre 2024 y 2025
    if (year < 2024) {
        currentDate.setFullYear(2024);
        year = 2024;
    } else if (year > 2025) {
        currentDate.setFullYear(2025);
        year = 2025;
    }

    // Actualizar selectores
    setSelectValues();

    // Actualizar imagen y cita
    updateMesImagenYCita();

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);

    // Día de la semana del primer día del mes (0 - Domingo, 6 - Sábado)
    const startDay = firstDayOfMonth.getDay();

    // Número total de días en el mes
    const totalDays = lastDayOfMonth.getDate();

    // Limpiar los días previos
    calendarDays.innerHTML = '';

    // Días del mes anterior
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = startDay; i > 0; i--) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = prevMonthLastDay - i + 1;
        dayDiv.classList.add('otro-mes');
        calendarDays.appendChild(dayDiv);
    }

    // Días del mes actual
    for (let i = 1; i <= totalDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;

        // Resaltar el día actual
        const today = new Date();
        if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
            dayDiv.classList.add('hoy');
        }

        calendarDays.appendChild(dayDiv);
    }

    // Días del mes siguiente para completar la cuadrícula
    const totalCells = calendarDays.children.length;
    const nextDays = totalCells % 7 === 0 ? 0 : 7 - (totalCells % 7);
    for (let i = 1; i <= nextDays; i++) {
        const dayDiv = document.createElement('div');
        dayDiv.textContent = i;
        dayDiv.classList.add('otro-mes');
        calendarDays.appendChild(dayDiv);
    }

    // Mostrar los nombres de los días de la semana
    const weekdaysContainer = document.querySelector('.weekdays');
    weekdaysContainer.innerHTML = '';
    const weekdays = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
    for (let i = 0; i < weekdays.length; i++) {
        const weekdayDiv = document.createElement('div');
        weekdayDiv.textContent = weekdays[i];
        weekdaysContainer.appendChild(weekdayDiv);
    }
}

// Eventos para los botones de navegación
prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

// Eventos para los selectores
monthSelect.addEventListener('change', () => {
    currentDate.setMonth(parseInt(monthSelect.value));
    renderCalendar();
});

yearSelect.addEventListener('change', () => {
    currentDate.setFullYear(parseInt(yearSelect.value));
    renderCalendar();
});

// Inicializar el calendario
populateMonthSelect();
renderCalendar();
