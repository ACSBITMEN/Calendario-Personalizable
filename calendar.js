// calendar.js

const calendarDays = document.getElementById('calendarDays');
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const todayBtn = document.getElementById('todayBtn');
const mesImagen = document.getElementById('mesImagen');
const citaEspecial = document.getElementById('citaEspecial');
const fechaActual = document.getElementById('fechaActual');

let currentDate = new Date();
let selectedDate = new Date();

// Generar opciones para el selector de meses
function populateMonthSelect() {
    monthSelect.innerHTML = '';
    for (let i = 0; i < monthNames.length; i++) {
        const option = document.createElement('option');
        option.value = i;
        option.textContent = monthNames[i];
        monthSelect.appendChild(option);
    }
}

// Establecer el mes y año actuales en los selectores
function setSelectValues() {
    monthSelect.value = selectedDate.getMonth();
    yearSelect.value = selectedDate.getFullYear();
}

function applyColorPalette() {
    const paleta = paletasColores[selectedDate.getMonth()];
    for (const variable in paleta) {
        document.documentElement.style.setProperty(variable, paleta[variable]);
    }
}


// Actualizar la imagen del mes y la cita
function updateMesImagenYCita() {
    // Actualizar la imagen del mes
    mesImagen.src = imagenes[selectedDate.getMonth()] || 'path-to-image/default.jpg';

    // Actualizar la cita
    citaEspecial.textContent = citas[selectedDate.getMonth()] || 'Cita del mes: "Esta es una cita especial"';
}



// Actualizar la fecha actual en div4
function updateFechaActual() {
    const dayName = dayNames[currentDate.getDay()];
    const day = String(currentDate.getDate()).padStart(2, '0');
    const monthName = monthNames[currentDate.getMonth()];
    const year = currentDate.getFullYear();

    fechaActual.textContent = `${dayName} ${day} de ${monthName} del ${year}`;
}

function populateYearSelect() {
    yearSelect.innerHTML = '';
    const startYear = 2022;
    const endYear = 2028;
    for (let year = startYear; year <= endYear; year++) {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearSelect.appendChild(option);
    }
}


function renderCalendar() {
    let year = selectedDate.getFullYear();
    let month = selectedDate.getMonth();

    // Limitar el año entre 2022 y 2028
    if (year < 2022) {
        selectedDate.setFullYear(2022);
        year = 2022;
    } else if (year > 2028) {
        selectedDate.setFullYear(2028);
        year = 2028;
    }

    // Actualizar selectores
    setSelectValues();

    // Aplicar la paleta de colores
    applyColorPalette();

    // Actualizar imagen y cita
    updateMesImagenYCita();

    // Actualizar la fecha actual
    updateFechaActual();

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

            // Verificar si el día es festivo
    const isFestivo = festivos.some(festivo =>
        festivo.day === i && festivo.month === month && festivo.year === year
        );
        if (isFestivo) {
            dayDiv.classList.add('festivo');
        }
    
        calendarDays.appendChild(dayDiv);
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

// Eventos para los botones de navegación
prevMonthBtn.addEventListener('click', () => {
    selectedDate.setMonth(selectedDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    selectedDate.setMonth(selectedDate.getMonth() + 1);
    renderCalendar();
});

// Evento para el botón "Hoy"
todayBtn.addEventListener('click', () => {
    selectedDate = new Date();
    renderCalendar();
});

// Eventos para los selectores
monthSelect.addEventListener('change', () => {
    selectedDate.setMonth(parseInt(monthSelect.value));
    renderCalendar();
});

yearSelect.addEventListener('change', () => {
    selectedDate.setFullYear(parseInt(yearSelect.value));
    renderCalendar();
});

// Inicializar el calendario
populateYearSelect();
populateMonthSelect();
renderCalendar();
