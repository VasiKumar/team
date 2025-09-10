// Application Data
const appData = {
  "patients": [
    {
      "id": 1,
      "name": "Priya Sharma",
      "age": 34,
      "gender": "Female",
      "contact": "+91 98765 43210",
      "email": "priya.sharma@email.com",
      "address": "Mumbai, Maharashtra",
      "currentStage": "Pradhankarma",
      "treatmentType": "Virechana",
      "startDate": "2025-09-01",
      "progress": 65,
      "nextAppointment": "2025-09-12",
      "practitioner": "Dr. Rajesh Kumar",
      "healthParams": {
        "digestion": 78,
        "energy": 72,
        "sleep": 85,
        "stress": 45,
        "immunity": 68,
        "flexibility": 71
      },
      "treatmentHistory": [
        { "date": "2025-09-01", "stage": "Purvakarma", "therapy": "Snehana", "status": "Completed" },
        { "date": "2025-09-03", "stage": "Purvakarma", "therapy": "Swedana", "status": "Completed" },
        { "date": "2025-09-05", "stage": "Pradhankarma", "therapy": "Virechana", "status": "In Progress" }
      ]
    },
    {
      "id": 2,
      "name": "Arjun Patel",
      "age": 42,
      "gender": "Male", 
      "contact": "+91 87654 32109",
      "email": "arjun.patel@email.com",
      "address": "Ahmedabad, Gujarat",
      "currentStage": "Pashchatkarma",
      "treatmentType": "Basti",
      "startDate": "2025-08-15",
      "progress": 90,
      "nextAppointment": "2025-09-14",
      "practitioner": "Dr. Meera Singh",
      "healthParams": {
        "digestion": 88,
        "energy": 91,
        "sleep": 94,
        "stress": 25,
        "immunity": 87,
        "flexibility": 89
      },
      "treatmentHistory": [
        { "date": "2025-08-15", "stage": "Purvakarma", "therapy": "Snehana", "status": "Completed" },
        { "date": "2025-08-20", "stage": "Pradhankarma", "therapy": "Basti", "status": "Completed" },
        { "date": "2025-09-01", "stage": "Pashchatkarma", "therapy": "Recovery", "status": "In Progress" }
      ]
    },
    {
      "id": 3,
      "name": "Anjali Reddy",
      "age": 28,
      "gender": "Female",
      "contact": "+91 76543 21098",
      "email": "anjali.reddy@email.com", 
      "address": "Hyderabad, Telangana",
      "currentStage": "Purvakarma",
      "treatmentType": "Nasya",
      "startDate": "2025-09-08",
      "progress": 25,
      "nextAppointment": "2025-09-11",
      "practitioner": "Dr. Rajesh Kumar",
      "healthParams": {
        "digestion": 55,
        "energy": 48,
        "sleep": 52,
        "stress": 78,
        "immunity": 45,
        "flexibility": 41
      },
      "treatmentHistory": [
        { "date": "2025-09-08", "stage": "Purvakarma", "therapy": "Initial Assessment", "status": "Completed" },
        { "date": "2025-09-10", "stage": "Purvakarma", "therapy": "Snehana", "status": "In Progress" }
      ]
    }
  ],
  "practitioners": [
    {
      "id": 1,
      "name": "Dr. Rajesh Kumar",
      "specialization": "Panchakarma Specialist",
      "experience": "15 years",
      "contact": "+91 99887 66554",
      "availability": ["Monday", "Wednesday", "Friday", "Saturday"],
      "therapies": ["Vamana", "Virechana", "Nasya"]
    },
    {
      "id": 2, 
      "name": "Dr. Meera Singh",
      "specialization": "Ayurvedic Medicine & Basti Expert",
      "experience": "12 years",
      "contact": "+91 88776 65543",
      "availability": ["Tuesday", "Thursday", "Friday", "Sunday"],
      "therapies": ["Basti", "Raktamokshana", "Virechana"]
    },
    {
      "id": 3,
      "name": "Dr. Suresh Nair", 
      "specialization": "Traditional Panchakarma",
      "experience": "20 years",
      "contact": "+91 77665 54432",
      "availability": ["Monday", "Tuesday", "Wednesday", "Sunday"],
      "therapies": ["Vamana", "Nasya", "Raktamokshana"]
    }
  ],
  "therapyTypes": [
    {
      "name": "Vamana",
      "description": "Therapeutic vomiting to remove Kapha toxins",
      "duration": "4-6 hours",
      "stage": "Pradhankarma",
      "preparation": ["Snehana for 3-7 days", "Swedana", "Kapha-increasing foods"],
      "precautions": ["Empty stomach", "Avoid physical exertion", "Stay hydrated"]
    },
    {
      "name": "Virechana", 
      "description": "Therapeutic purgation to eliminate Pitta toxins",
      "duration": "3-4 hours",
      "stage": "Pradhankarma", 
      "preparation": ["Snehana", "Swedana", "Light diet"],
      "precautions": ["Avoid dehydration", "Rest after procedure", "Follow dietary guidelines"]
    },
    {
      "name": "Basti",
      "description": "Medicated enema therapy for Vata disorders",
      "duration": "2-3 hours",
      "stage": "Pradhankarma",
      "preparation": ["Abhyanga massage", "Light meal", "Proper positioning"], 
      "precautions": ["Gentle procedure", "Observe for reactions", "Maintain warmth"]
    },
    {
      "name": "Nasya",
      "description": "Nasal administration of medicines",
      "duration": "1-2 hours", 
      "stage": "Pradhankarma",
      "preparation": ["Head and shoulder massage", "Steam inhalation"],
      "precautions": ["Avoid cold exposure", "No head bath", "Rest after treatment"]
    },
    {
      "name": "Raktamokshana",
      "description": "Bloodletting therapy for blood disorders",
      "duration": "2-3 hours",
      "stage": "Pradhankarma",
      "preparation": ["Medical assessment", "Snehana if needed"],
      "precautions": ["Sterile procedure", "Monitor vitals", "Post-care instructions"]
    }
  ],
  "appointments": [
    {
      "id": 1,
      "patientId": 1,
      "patientName": "Priya Sharma",
      "practitionerId": 1,
      "practitionerName": "Dr. Rajesh Kumar",
      "date": "2025-09-12", 
      "time": "10:00 AM",
      "therapy": "Virechana",
      "stage": "Pradhankarma",
      "duration": "4 hours",
      "status": "Scheduled",
      "room": "Treatment Room A"
    },
    {
      "id": 2,
      "patientId": 2, 
      "patientName": "Arjun Patel",
      "practitionerId": 2,
      "practitionerName": "Dr. Meera Singh",
      "date": "2025-09-14",
      "time": "2:00 PM", 
      "therapy": "Recovery Consultation",
      "stage": "Pashchatkarma",
      "duration": "1 hour",
      "status": "Scheduled",
      "room": "Consultation Room"
    },
    {
      "id": 3,
      "patientId": 3,
      "patientName": "Anjali Reddy", 
      "practitionerId": 1,
      "practitionerName": "Dr. Rajesh Kumar",
      "date": "2025-09-11",
      "time": "11:30 AM",
      "therapy": "Snehana",
      "stage": "Purvakarma", 
      "duration": "2 hours",
      "status": "Scheduled",
      "room": "Preparation Room B"
    }
  ],
  "notifications": [
    {
      "id": 1,
      "patientId": 1,
      "type": "Pre-procedure",
      "title": "Virechana Preparation Reminder",
      "message": "Your Virechana therapy is scheduled for tomorrow at 10:00 AM. Please avoid heavy meals today and follow the prescribed diet. Drink plenty of warm water.",
      "scheduleDate": "2025-09-11",
      "status": "Pending",
      "channels": ["SMS", "Email", "In-app"]
    },
    {
      "id": 2,
      "patientId": 2,
      "type": "Post-procedure", 
      "title": "Recovery Guidelines",
      "message": "Your Basti therapy was successful. Please follow the Pashchatkarma diet for the next 7 days. Avoid heavy physical activity and maintain regular sleep schedule.",
      "scheduleDate": "2025-09-10",
      "status": "Sent",
      "channels": ["SMS", "Email"]
    },
    {
      "id": 3,
      "patientId": 3,
      "type": "Appointment",
      "title": "Appointment Reminder", 
      "message": "This is a reminder that you have a Snehana therapy session tomorrow at 11:30 AM with Dr. Rajesh Kumar. Please arrive 15 minutes early.",
      "scheduleDate": "2025-09-10",
      "status": "Sent",
      "channels": ["SMS", "In-app"]
    }
  ],
  "dashboardStats": {
    "totalActivePatients": 24,
    "todaySessions": 8,
    "pendingNotifications": 12,
    "treatmentSuccessRate": 94,
    "monthlyStats": [
      { "month": "Jan", "patients": 15, "sessions": 45 },
      { "month": "Feb", "patients": 18, "sessions": 52 },
      { "month": "Mar", "patients": 22, "sessions": 68 },
      { "month": "Apr", "patients": 20, "sessions": 61 },
      { "month": "May", "patients": 25, "sessions": 78 },
      { "month": "Jun", "patients": 28, "sessions": 85 },
      { "month": "Jul", "patients": 24, "sessions": 72 },
      { "month": "Aug", "patients": 26, "sessions": 81 },
      { "month": "Sep", "patients": 24, "sessions": 68 }
    ]
  }
};

// Global state
let currentView = 'dashboard';
let currentCalendarDate = new Date(2025, 8, 10); // September 2025
let monthlyChart = null;
let healthRadarChart = null;
let filteredPatients = [...appData.patients];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  initializeApp();
});

function initializeApp() {
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
  
  // Update current date/time
  updateDateTime();
  setInterval(updateDateTime, 60000); // Update every minute
  
  // Setup navigation
  setupNavigation();
  
  // Setup modal
  setupModal();
  
  // Initialize all views
  initializeDashboard();
  initializePatients();
  initializeScheduling();
  initializeProgress();
  initializeNotifications();
  
  // Show dashboard by default
  switchView('dashboard');
}

function updateDateTime() {
  const datetimeElement = document.getElementById('current-datetime');
  if (datetimeElement) {
    const now = new Date();
    const options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    datetimeElement.textContent = now.toLocaleDateString('en-US', options);
  }
}

function setupNavigation() {
  const menuItems = document.querySelectorAll('.menu__item');
  
  menuItems.forEach(item => {
    item.addEventListener('click', function(e) {
      e.preventDefault();
      const viewName = this.getAttribute('data-view');
      
      if (viewName) {
        switchView(viewName);
        
        // Update active menu item
        menuItems.forEach(mi => mi.classList.remove('menu__item--active'));
        this.classList.add('menu__item--active');
      }
    });
  });
}

function switchView(viewName) {
  // Hide all views
  const allViews = document.querySelectorAll('.view');
  allViews.forEach(view => {
    view.classList.remove('view--active');
  });
  
  // Show selected view
  const targetView = document.getElementById(`${viewName}-view`);
  if (targetView) {
    targetView.classList.add('view--active');
  }
  
  // Update page title
  const titles = {
    dashboard: 'Dashboard',
    patients: 'Patients',
    scheduling: 'Therapy Scheduling',
    progress: 'Progress Tracking',
    notifications: 'Notifications',
    settings: 'Settings'
  };
  
  const pageTitle = document.getElementById('page-title');
  if (pageTitle && titles[viewName]) {
    pageTitle.textContent = titles[viewName];
  }
  
  currentView = viewName;
  
  // Initialize view-specific content
  if (viewName === 'dashboard') {
    setTimeout(() => initializeDashboard(), 100);
  } else if (viewName === 'patients') {
    setTimeout(() => initializePatients(), 100);
  } else if (viewName === 'progress') {
    setTimeout(() => initializeProgress(), 100);
  } else if (viewName === 'scheduling') {
    setTimeout(() => renderCalendar(), 100);
  } else if (viewName === 'notifications') {
    setTimeout(() => initializeNotifications(), 100);
  }
}

// Dashboard functionality
function initializeDashboard() {
  renderMonthlyChart();
  renderTodayAppointments();
  renderActivityFeed();
}

function renderMonthlyChart() {
  const ctx = document.getElementById('monthlyChart');
  if (!ctx) return;
  
  if (monthlyChart) {
    monthlyChart.destroy();
  }
  
  const monthlyStats = appData.dashboardStats.monthlyStats;
  
  monthlyChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: monthlyStats.map(stat => stat.month),
      datasets: [
        {
          label: 'Patients',
          data: monthlyStats.map(stat => stat.patients),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          tension: 0.4,
          fill: true
        },
        {
          label: 'Sessions',
          data: monthlyStats.map(stat => stat.sessions),
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        },
        x: {
          grid: {
            color: 'rgba(0, 0, 0, 0.1)'
          }
        }
      }
    }
  });
}

function renderTodayAppointments() {
  const container = document.getElementById('today-appointments');
  if (!container) return;
  
  const todayAppointments = appData.appointments.filter(apt => 
    apt.date === '2025-09-10' || apt.date === '2025-09-11'
  );
  
  container.innerHTML = todayAppointments.map(apt => `
    <div class="appointment-item">
      <div>
        <div class="appointment-time">${apt.time}</div>
        <div class="appointment-details">
          <h4>${apt.patientName}</h4>
          <p>${apt.therapy} - ${apt.practitionerName}</p>
        </div>
      </div>
      <div class="status status--${apt.status === 'Scheduled' ? 'success' : 'info'}">${apt.status}</div>
    </div>
  `).join('');
}

function renderActivityFeed() {
  const container = document.getElementById('activity-feed');
  if (!container) return;
  
  const activities = [
    { icon: '👤', title: 'New Patient Added', description: 'Anjali Reddy registered for Nasya therapy', time: '2 hours ago' },
    { icon: '📅', title: 'Appointment Scheduled', description: 'Priya Sharma - Virechana therapy scheduled', time: '4 hours ago' },
    { icon: '✅', title: 'Therapy Completed', description: 'Arjun Patel completed Basti session', time: '6 hours ago' },
    { icon: '🔔', title: 'Notification Sent', description: 'Pre-procedure reminders sent to 5 patients', time: '8 hours ago' }
  ];
  
  container.innerHTML = activities.map(activity => `
    <div class="activity-item">
      <div class="activity-item__icon">${activity.icon}</div>
      <div class="activity-item__content">
        <h4>${activity.title}</h4>
        <p>${activity.description} • ${activity.time}</p>
      </div>
    </div>
  `).join('');
}

// Patients functionality
function initializePatients() {
  filteredPatients = [...appData.patients];
  renderPatients(filteredPatients);
  setupPatientSearch();
  setupPatientFilters();
}

function renderPatients(patientsToRender = appData.patients) {
  const container = document.getElementById('patients-grid');
  if (!container) return;
  
  container.innerHTML = patientsToRender.map(patient => {
    const initials = patient.name.split(' ').map(n => n[0]).join('');
    const stageClass = patient.currentStage.toLowerCase();
    
    return `
      <div class="patient-card">
        <div class="patient-card__header">
          <div>
            <div class="patient-card__avatar">${initials}</div>
          </div>
          <div class="patient-card__stage stage--${stageClass}">
            ${patient.currentStage}
          </div>
        </div>
        
        <div class="patient-card__info">
          <h3>${patient.name}</h3>
          <p>${patient.age} years • ${patient.gender}</p>
          <p>${patient.contact}</p>
        </div>
        
        <div class="patient-card__progress">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
            <span style="font-size: 14px; color: var(--color-text-secondary);">Treatment Progress</span>
            <span style="font-weight: 600; color: var(--color-primary);">${patient.progress}%</span>
          </div>
          <div class="progress-bar">
            <div class="progress-bar__fill" style="width: ${patient.progress}%"></div>
          </div>
        </div>
        
        <div class="patient-card__details">
          <div>
            <strong>Treatment:</strong><br>
            <span style="color: var(--color-text-secondary);">${patient.treatmentType}</span>
          </div>
          <div>
            <strong>Next Visit:</strong><br>
            <span style="color: var(--color-text-secondary);">${formatDate(patient.nextAppointment)}</span>
          </div>
          <div>
            <strong>Practitioner:</strong><br>
            <span style="color: var(--color-text-secondary);">${patient.practitioner}</span>
          </div>
          <div>
            <strong>Status:</strong><br>
            <span class="status status--${patient.progress > 80 ? 'success' : 'info'}">${patient.progress > 80 ? 'Near Complete' : 'In Progress'}</span>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function setupPatientSearch() {
  const searchInput = document.getElementById('patient-search');
  if (!searchInput) return;
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    const stageFilter = document.getElementById('stage-filter').value;
    
    filteredPatients = appData.patients.filter(patient => {
      const matchesSearch = !searchTerm || 
        patient.name.toLowerCase().includes(searchTerm) ||
        patient.treatmentType.toLowerCase().includes(searchTerm) ||
        patient.practitioner.toLowerCase().includes(searchTerm);
        
      const matchesStage = !stageFilter || patient.currentStage === stageFilter;
      
      return matchesSearch && matchesStage;
    });
    
    renderPatients(filteredPatients);
  });
}

function setupPatientFilters() {
  const stageFilter = document.getElementById('stage-filter');
  if (!stageFilter) return;
  
  stageFilter.addEventListener('change', function() {
    const searchTerm = document.getElementById('patient-search').value.toLowerCase().trim();
    const stageFilter = this.value;
    
    filteredPatients = appData.patients.filter(patient => {
      const matchesSearch = !searchTerm || 
        patient.name.toLowerCase().includes(searchTerm) ||
        patient.treatmentType.toLowerCase().includes(searchTerm) ||
        patient.practitioner.toLowerCase().includes(searchTerm);
        
      const matchesStage = !stageFilter || patient.currentStage === stageFilter;
      
      return matchesSearch && matchesStage;
    });
    
    renderPatients(filteredPatients);
  });
}

// Scheduling functionality
function initializeScheduling() {
  setupCalendarControls();
  renderCalendar();
}

function setupCalendarControls() {
  const prevBtn = document.getElementById('prev-month');
  const nextBtn = document.getElementById('next-month');
  
  if (prevBtn) {
    prevBtn.addEventListener('click', function() {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth() - 1);
      renderCalendar();
    });
  }
  
  if (nextBtn) {
    nextBtn.addEventListener('click', function() {
      currentCalendarDate.setMonth(currentCalendarDate.getMonth() + 1);
      renderCalendar();
    });
  }
}

function renderCalendar() {
  const monthYearElement = document.getElementById('current-month');
  if (!monthYearElement) return;
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'];
  
  monthYearElement.textContent = `${monthNames[currentCalendarDate.getMonth()]} ${currentCalendarDate.getFullYear()}`;
  
  const calendar = document.getElementById('calendar');
  if (!calendar) return;
  
  const firstDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth(), 1);
  const lastDay = new Date(currentCalendarDate.getFullYear(), currentCalendarDate.getMonth() + 1, 0);
  const startDate = new Date(firstDay);
  startDate.setDate(startDate.getDate() - firstDay.getDay());
  
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  
  calendar.innerHTML = `
    <div class="calendar__header">
      ${days.map(day => `<div class="calendar__day-header">${day}</div>`).join('')}
    </div>
    <div class="calendar__body" id="calendar-body">
    </div>
  `;
  
  const calendarBody = document.getElementById('calendar-body');
  let currentDate = new Date(startDate);
  
  for (let week = 0; week < 6; week++) {
    for (let day = 0; day < 7; day++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const isCurrentMonth = currentDate.getMonth() === currentCalendarDate.getMonth();
      const isToday = currentDate.toDateString() === new Date(2025, 8, 10).toDateString();
      
      const dayAppointments = appData.appointments.filter(apt => apt.date === dateStr);
      
      const dayElement = document.createElement('div');
      dayElement.className = `calendar__day ${!isCurrentMonth ? 'calendar__day--other-month' : ''} ${isToday ? 'calendar__day--today' : ''}`;
      dayElement.innerHTML = `
        <div class="calendar__day-number">${currentDate.getDate()}</div>
        ${dayAppointments.map(apt => `
          <div class="appointment-pill">${apt.time} - ${apt.patientName}</div>
        `).join('')}
      `;
      
      dayElement.addEventListener('click', function() {
        if (isCurrentMonth) {
          openAppointmentModal(dateStr);
        }
      });
      
      calendarBody.appendChild(dayElement);
      currentDate.setDate(currentDate.getDate() + 1);
    }
  }
}

// Progress tracking functionality
function initializeProgress() {
  populateProgressPatientSelect();
  setupProgressPatientChange();
}

function populateProgressPatientSelect() {
  const select = document.getElementById('progress-patient-select');
  if (!select) return;
  
  select.innerHTML = '<option value="">Select Patient</option>' +
    appData.patients.map(patient => 
      `<option value="${patient.id}">${patient.name}</option>`
    ).join('');
}

function setupProgressPatientChange() {
  const select = document.getElementById('progress-patient-select');
  if (!select) return;
  
  select.addEventListener('change', function() {
    const patientId = parseInt(this.value);
    if (patientId) {
      const patient = appData.patients.find(p => p.id === patientId);
      if (patient) {
        renderProgressDashboard(patient);
      }
    } else {
      const dashboard = document.getElementById('progress-dashboard');
      if (dashboard) {
        dashboard.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 2rem;">Please select a patient to view their progress.</p>';
      }
    }
  });
}

function renderProgressDashboard(patient) {
  renderHealthRadarChart(patient.healthParams);
  renderTreatmentTimeline(patient.treatmentHistory);
  renderProgressOverview(patient);
}

function renderHealthRadarChart(healthParams) {
  const ctx = document.getElementById('healthRadarChart');
  if (!ctx) return;
  
  if (healthRadarChart) {
    healthRadarChart.destroy();
  }
  
  const labels = Object.keys(healthParams);
  const data = Object.values(healthParams);
  
  healthRadarChart = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: labels.map(label => label.charAt(0).toUpperCase() + label.slice(1)),
      datasets: [{
        label: 'Current Level',
        data: data,
        borderColor: '#1FB8CD',
        backgroundColor: 'rgba(31, 184, 205, 0.2)',
        pointBackgroundColor: '#1FB8CD',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: '#1FB8CD'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        line: {
          borderWidth: 3
        }
      },
      scales: {
        r: {
          angleLines: {
            display: false
          },
          suggestedMin: 0,
          suggestedMax: 100
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

function renderTreatmentTimeline(treatmentHistory) {
  const container = document.getElementById('treatment-timeline');
  if (!container) return;
  
  container.innerHTML = treatmentHistory.map((treatment, index) => {
    const statusClass = treatment.status === 'Completed' ? 'completed' : 
                       treatment.status === 'In Progress' ? 'current' : '';
    
    return `
      <div class="timeline-item timeline-item--${statusClass}">
        <h4>${treatment.therapy}</h4>
        <p>${treatment.stage} • ${formatDate(treatment.date)}</p>
        <div class="status status--${treatment.status === 'Completed' ? 'success' : 'info'}">${treatment.status}</div>
      </div>
    `;
  }).join('');
}

function renderProgressOverview(patient) {
  const container = document.getElementById('progress-overview');
  if (!container) return;
  
  const healthParams = patient.healthParams;
  
  container.innerHTML = Object.entries(healthParams).map(([param, value]) => `
    <div class="progress-item">
      <div class="progress-item__label">${param.charAt(0).toUpperCase() + param.slice(1)}</div>
      <div class="progress-item__bar">
        <div class="progress-item__fill" style="width: ${value}%"></div>
      </div>
      <div class="progress-item__value">${value}%</div>
    </div>
  `).join('');
}

// Notifications functionality
function initializeNotifications() {
  renderNotifications();
  setupNotificationFilters();
}

function renderNotifications(notificationsToRender = appData.notifications) {
  const container = document.getElementById('notifications-list');
  if (!container) return;
  
  container.innerHTML = notificationsToRender.map(notification => `
    <div class="notification-card notification-card--${notification.type.toLowerCase().replace('-', '-')}">
      <div class="notification-card__header">
        <div>
          <h4 class="notification-card__title">${notification.title}</h4>
          <div class="notification-card__status status--${notification.status.toLowerCase()}">${notification.status}</div>
        </div>
      </div>
      
      <p class="notification-card__message">${notification.message}</p>
      
      <div style="display: flex; justify-content: space-between; align-items: center;">
        <div class="notification-card__channels">
          ${notification.channels.map(channel => `<span class="channel-tag">${channel}</span>`).join('')}
        </div>
        <small style="color: var(--color-text-secondary);">Scheduled: ${formatDate(notification.scheduleDate)}</small>
      </div>
    </div>
  `).join('');
}

function setupNotificationFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  filterBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Update active filter button
      filterBtns.forEach(b => b.classList.remove('filter-btn--active'));
      this.classList.add('filter-btn--active');
      
      const filter = this.getAttribute('data-filter');
      let filteredNotifications = appData.notifications;
      
      if (filter !== 'all') {
        filteredNotifications = appData.notifications.filter(notification => 
          notification.status.toLowerCase() === filter
        );
      }
      
      renderNotifications(filteredNotifications);
    });
  });
}

// Modal functionality
function setupModal() {
  const modal = document.getElementById('appointment-modal');
  const closeBtn = document.getElementById('close-modal');
  const cancelBtn = document.getElementById('cancel-appointment');
  const backdrop = document.querySelector('.modal__backdrop');
  const addAppointmentBtn = document.getElementById('add-appointment-btn');
  const form = document.getElementById('appointment-form');
  
  // Populate modal selects
  populateModalSelects();
  
  // Open modal
  if (addAppointmentBtn) {
    addAppointmentBtn.addEventListener('click', function(e) {
      e.preventDefault();
      if (modal) {
        modal.classList.remove('hidden');
      }
    });
  }
  
  // Close modal functions
  function closeModal() {
    if (modal) {
      modal.classList.add('hidden');
    }
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
  }
  
  if (cancelBtn) {
    cancelBtn.addEventListener('click', closeModal);
  }
  
  if (backdrop) {
    backdrop.addEventListener('click', closeModal);
  }
  
  // Form submission
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const patientSelect = document.getElementById('modal-patient-select');
      const therapySelect = document.getElementById('modal-therapy-select');
      const practitionerSelect = document.getElementById('modal-practitioner-select');
      const dateInput = document.getElementById('modal-date-input');
      const timeInput = document.getElementById('modal-time-input');
      
      if (patientSelect && therapySelect && practitionerSelect && dateInput && timeInput) {
        const appointmentData = {
          id: appData.appointments.length + 1,
          patientId: parseInt(patientSelect.value),
          patientName: patientSelect.options[patientSelect.selectedIndex].text,
          practitionerId: parseInt(practitionerSelect.value),
          practitionerName: practitionerSelect.options[practitionerSelect.selectedIndex].text,
          date: dateInput.value,
          time: timeInput.value,
          therapy: therapySelect.value,
          status: 'Scheduled'
        };
        
        appData.appointments.push(appointmentData);
        closeModal();
        form.reset();
        
        // Refresh calendar if on scheduling view
        if (currentView === 'scheduling') {
          setTimeout(() => renderCalendar(), 100);
        }
        
        // Show success message
        alert('Appointment scheduled successfully!');
      }
    });
  }
}

function populateModalSelects() {
  // Populate patients
  const patientSelect = document.getElementById('modal-patient-select');
  if (patientSelect) {
    patientSelect.innerHTML = '<option value="">Select Patient</option>' +
      appData.patients.map(patient => 
        `<option value="${patient.id}">${patient.name}</option>`
      ).join('');
  }
  
  // Populate therapies
  const therapySelect = document.getElementById('modal-therapy-select');
  if (therapySelect) {
    therapySelect.innerHTML = '<option value="">Select Therapy</option>' +
      appData.therapyTypes.map(therapy => 
        `<option value="${therapy.name}">${therapy.name} - ${therapy.description}</option>`
      ).join('');
  }
  
  // Populate practitioners
  const practitionerSelect = document.getElementById('modal-practitioner-select');
  if (practitionerSelect) {
    practitionerSelect.innerHTML = '<option value="">Select Practitioner</option>' +
      appData.practitioners.map(practitioner => 
        `<option value="${practitioner.id}">${practitioner.name} - ${practitioner.specialization}</option>`
      ).join('');
  }
}

function openAppointmentModal(dateStr) {
  const modal = document.getElementById('appointment-modal');
  const dateInput = document.getElementById('modal-date-input');
  
  if (dateInput && dateStr) {
    dateInput.value = dateStr;
  }
  
  if (modal) {
    modal.classList.remove('hidden');
  }
}

// Utility functions
function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}