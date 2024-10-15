// calendar.js

// Obtenemos los elementos del DOM
const calendarDays = document.getElementById('calendarDays');
const monthSelect = document.getElementById('monthSelect');
const yearSelect = document.getElementById('yearSelect');
const prevMonthBtn = document.getElementById('prevMonth');
const nextMonthBtn = document.getElementById('nextMonth');
const todayBtn = document.getElementById('todayBtn');
const mesImagen = document.getElementById('mesImagen');
const citaEspecial = document.getElementById('citaEspecial');
const fechaActual = document.getElementById('fechaActual');
const monthView = document.getElementById('monthView');

let currentDate = new Date();
let selectedDate = new Date();
let festivosDelAno = calcularFestivosColombia(selectedDate.getFullYear());
let eventosEspecialesDelAno = obtenerEventosEspeciales(selectedDate.getFullYear());

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

// Generar opciones para el selector de años
function populateYearSelect() {
  yearSelect.innerHTML = '';
  const startYear = 2020;
  const endYear = 2030;
  for (let year = startYear; year <= endYear; year++) {
    const option = document.createElement('option');
    option.value = year;
    option.textContent = year;
    yearSelect.appendChild(option);
  }
}

// Establecer el mes y año actuales en los selectores
function setSelectValues() {
  monthSelect.value = selectedDate.getMonth();
  yearSelect.value = selectedDate.getFullYear();
}

// Aplicar la paleta de colores
function applyColorPalette() {
  const paleta = paletasColores[selectedDate.getMonth()];
  for (const variable in paleta) {
    document.documentElement.style.setProperty(variable, paleta[variable]);
  }
}

// Actualizar la imagen del mes y la cita
function updateMesImagenYCita() {
  mesImagen.src = imagenes[selectedDate.getMonth()] || 'path-to-image/default.jpg';
  citaEspecial.textContent = citas[selectedDate.getMonth()] || 'Cita del mes: "Esta es una cita especial"';
}

// Actualizar el título del mes y año
function updateMonthView() {
  const monthName = monthNames[selectedDate.getMonth()];
  const year = selectedDate.getFullYear();
  monthView.textContent = `Calendario ${monthName} ${year}`;
}

// Actualizar la fecha actual
function updateFechaActual() {
  const dayName = dayNames[currentDate.getDay()];
  const day = String(currentDate.getDate()).padStart(2, '0');
  const monthName = monthNames[currentDate.getMonth()];
  const year = currentDate.getFullYear();
  fechaActual.textContent = `Fecha: ${dayName} ${day} de ${monthName} del ${year}`;
}

function renderCalendar() {
  let year = selectedDate.getFullYear();
  let month = selectedDate.getMonth();

  // Recalcular festivos si cambia el año
  if (!festivosDelAno.length || festivosDelAno[0].year !== year) {
    festivosDelAno = calcularFestivosColombia(year);
  }

  // Recalcular eventos especiales si cambia el año
  if (!eventosEspecialesDelAno.length || eventosEspecialesDelAno[0].year !== year) {
    eventosEspecialesDelAno = obtenerEventosEspeciales(year);
  }

  // Actualizar selectores y vista
  setSelectValues();
  applyColorPalette();
  updateMesImagenYCita();
  updateFechaActual();
  updateMonthView();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay = firstDayOfMonth.getDay();
  const totalDays = lastDayOfMonth.getDate();

  calendarDays.innerHTML = '';

  // Mostrar los días del mes anterior
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const prevMonthStart = prevMonthLastDay - startDay + 1;
  for (let i = 0; i < startDay; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = prevMonthStart + i;
    dayDiv.classList.add('otro-mes');
    calendarDays.appendChild(dayDiv);
  }

  // Días del mes actual
  for (let i = 1; i <= totalDays; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.textContent = i;

    // Resaltar el día actual
    const today = new Date();
    if (
      i === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear()
    ) {
      dayDiv.classList.add('hoy');
    }

    // Verificar si el día es festivo
    const festivoEncontrado = festivosDelAno.find(
      (festivo) =>
        festivo.day === i && festivo.month === month && festivo.year === year
    );
    if (festivoEncontrado) {
      dayDiv.classList.add('festivo');
      dayDiv.setAttribute('title', festivoEncontrado.name);
      if (festivoEncontrado.isDomingo) {
        dayDiv.classList.add('domingo');
      }
    }

    // Verificar si el día es un evento especial
    const eventoEspecialEncontrado = eventosEspecialesDelAno.find(
      (evento) =>
        evento.day === i && evento.month === month && evento.year === year
    );
    if (eventoEspecialEncontrado) {
      dayDiv.classList.add('evento-especial');
      dayDiv.setAttribute('title', eventoEspecialEncontrado.name);
    }

    calendarDays.appendChild(dayDiv);
  }

  // Completar la cuadrícula con días del mes siguiente
  const totalCellsSoFar = startDay + totalDays;
  const numWeeks = Math.ceil(totalCellsSoFar / 7);
  const totalCells = numWeeks * 7;
  const nextDays = totalCells - totalCellsSoFar;

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
  weekdays.forEach(dia => {
    const weekdayDiv = document.createElement('div');
    weekdayDiv.textContent = dia;
    weekdaysContainer.appendChild(weekdayDiv);
  });
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
