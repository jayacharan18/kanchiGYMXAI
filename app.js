/**
 * Kanchi University (SCSVMV) - Gym Member Portal
 * Student Athletic Recreation & Timetable Management
 */

// Default Workout Routine (Monday to Sunday)
const DEFAULT_TIMETABLE = {
  monday: {
    dayName: "Monday",
    focus: "Leg Day 🦵",
    category: "Lower Body Strength",
    exercises: [
      {
        id: "m1",
        name: "Barbell Back Squats",
        target: "Quads & Glutes",
        reps: ["10 reps", "5 reps", "2 reps"], // Prescribed rep pyramid
        completed: false
      },
      {
        id: "m2",
        name: "Leg Press (Plate Loaded)",
        target: "Quad Hypertrophy",
        reps: ["12 reps", "10 reps", "8 reps"],
        completed: false
      },
      {
        id: "m3",
        name: "Romanian Deadlifts (RDL)",
        target: "Hamstrings & Glutes",
        reps: ["10 reps", "8 reps", "8 reps"],
        completed: false
      },
      {
        id: "m4",
        name: "Standing Calf Raises",
        target: "Calves",
        reps: ["15 reps", "15 reps", "12 reps"],
        completed: false
      }
    ]
  },
  tuesday: {
    dayName: "Tuesday",
    focus: "Chest & Triceps 💥",
    category: "Push Hypertrophy",
    exercises: [
      {
        id: "t1",
        name: "Barbell Flat Bench Press",
        target: "Mid Chest",
        reps: ["10 reps", "8 reps", "5 reps", "2 reps"],
        completed: false
      },
      {
        id: "t2",
        name: "Incline Dumbbell Press",
        target: "Upper Chest",
        reps: ["12 reps", "10 reps", "8 reps"],
        completed: false
      },
      {
        id: "t3",
        name: "Cable Chest Flyes",
        target: "Chest Isolation",
        reps: ["15 reps", "12 reps", "10 reps"],
        completed: false
      },
      {
        id: "t4",
        name: "Tricep Rope Pushdowns",
        target: "Triceps Lateral Head",
        reps: ["12 reps", "10 reps", "10 reps"],
        completed: false
      }
    ]
  },
  wednesday: {
    dayName: "Wednesday",
    focus: "Back & Biceps 🏋️‍♂️",
    category: "Pull Strength",
    exercises: [
      {
        id: "w1",
        name: "Conventional Deadlifts",
        target: "Posterior Chain",
        reps: ["8 reps", "5 reps", "2 reps"],
        completed: false
      },
      {
        id: "w2",
        name: "Wide-Grip Lat Pulldowns",
        target: "Lats & Upper Back",
        reps: ["12 reps", "10 reps", "8 reps"],
        completed: false
      },
      {
        id: "w3",
        name: "Seated Cable Rows",
        target: "Rhomboids & Mid-Back",
        reps: ["10 reps", "10 reps", "8 reps"],
        completed: false
      },
      {
        id: "w4",
        name: "Barbell Bicep Curls",
        target: "Biceps Brachii",
        reps: ["12 reps", "10 reps", "8 reps"],
        completed: false
      }
    ]
  },
  thursday: {
    dayName: "Thursday",
    focus: "Core & Athletic Cardio ⚡",
    category: "Conditioning & Stamina",
    exercises: [
      {
        id: "th1",
        name: "Hanging Leg Raises",
        target: "Lower Abs & Hip Flexors",
        reps: ["15 reps", "12 reps", "10 reps"],
        completed: false
      },
      {
        id: "th2",
        name: "Cable Woodchoppers",
        target: "Obliques & Core Rotation",
        reps: ["12 reps", "12 reps", "10 reps"],
        completed: false
      },
      {
        id: "th3",
        name: "Weighted Plank Holds",
        target: "Core Stability",
        reps: ["60s", "45s", "45s"],
        completed: false
      },
      {
        id: "th4",
        name: "Campus Stadium Track / Treadmill",
        target: "Aerobic Capacity",
        reps: ["20 mins", "Incline 8.0"],
        completed: false
      }
    ]
  },
  friday: {
    dayName: "Friday",
    focus: "Shoulders & Traps 🛡️",
    category: "Overhead Power",
    exercises: [
      {
        id: "f1",
        name: "Overhead Barbell Military Press",
        target: "Anterior Deltoids",
        reps: ["10 reps", "8 reps", "5 reps", "2 reps"],
        completed: false
      },
      {
        id: "f2",
        name: "Dumbbell Lateral Raises",
        target: "Lateral Deltoids",
        reps: ["15 reps", "12 reps", "10 reps"],
        completed: false
      },
      {
        id: "f3",
        name: "Face Pulls with Rope",
        target: "Rear Delts & Rotators",
        reps: ["15 reps", "15 reps", "12 reps"],
        completed: false
      },
      {
        id: "f4",
        name: "Heavy Barbell Shrugs",
        target: "Trapezius",
        reps: ["12 reps", "10 reps", "8 reps"],
        completed: false
      }
    ]
  },
  saturday: {
    dayName: "Saturday",
    focus: "Full Body Hypertrophy 🔥",
    category: "Total Body Athletic",
    exercises: [
      {
        id: "s1",
        name: "Trap Bar Deadlift / Power Pull",
        target: "Explosiveness",
        reps: ["10 reps", "6 reps", "3 reps"],
        completed: false
      },
      {
        id: "s2",
        name: "Dumbbell Walking Lunges",
        target: "Unilateral Legs",
        reps: ["12 reps/leg", "10 reps/leg"],
        completed: false
      },
      {
        id: "s3",
        name: "Bodyweight Dips & Pullups Super-set",
        target: "Chest & Lats",
        reps: ["10 reps", "8 reps", "Failure"],
        completed: false
      },
      {
        id: "s4",
        name: "Battle Ropes Conditioning",
        target: "Metabolic Burn",
        reps: ["30s on", "30s off (4 rounds)"],
        completed: false
      }
    ]
  },
  sunday: {
    dayName: "Sunday",
    focus: "Rest, Mobility & Recovery 🧘",
    category: "Regeneration",
    exercises: [
      {
        id: "su1",
        name: "Full Body Foam Rolling",
        target: "Myofascial Release",
        reps: ["15 mins", "Full Body"],
        completed: false
      },
      {
        id: "su2",
        name: "Dynamic Hip & Hamstring Flow",
        target: "Joint Mobility",
        reps: ["10 reps each side"],
        completed: false
      },
      {
        id: "su3",
        name: "Campus Green Walk & Stretch",
        target: "Active Blood Flow",
        reps: ["25 mins Easy"],
        completed: false
      }
    ]
  }
};

// Application State
let currentUser = null;
let weeklyTimetable = {};
let currentViewMode = "all"; // "all" or "today" or specific day key
let timerInterval = null;
let clockInterval = null;

// Initialize on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  loadStoredTimetable();
  checkAuthSession();
  setupEventListeners();
  startLiveCampusClock();
  highlightTodayTab();
});

// Setup form and button listeners
function setupEventListeners() {
  const loginForm = document.getElementById("login-form");
  if (loginForm) {
    loginForm.addEventListener("submit", handleLoginSubmit);
  }

  const logoutBtn = document.getElementById("logout-btn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", handleLogout);
  }

  const addExerciseForm = document.getElementById("add-exercise-form");
  if (addExerciseForm) {
    addExerciseForm.addEventListener("submit", handleAddExerciseSubmit);
  }
}

// Load Timetable from localStorage or use defaults
function loadStoredTimetable() {
  const stored = localStorage.getItem("kanchi_gym_timetable_v1");
  if (stored) {
    try {
      weeklyTimetable = JSON.parse(stored);
    } catch (e) {
      weeklyTimetable = JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
    }
  } else {
    weeklyTimetable = JSON.parse(JSON.stringify(DEFAULT_TIMETABLE));
    saveTimetable();
  }
}

function saveTimetable() {
  localStorage.setItem("kanchi_gym_timetable_v1", JSON.stringify(weeklyTimetable));
}

// Check session
function checkAuthSession() {
  const session = localStorage.getItem("kanchi_gym_current_user");
  if (session) {
    try {
      const parsed = JSON.parse(session);
      // Validate user has kanchiuniv.ac.in domain
      if (parsed && parsed.username && parsed.username.toLowerCase().endsWith("@kanchiuniv.ac.in")) {
        currentUser = parsed;
        showDashboard();
        return;
      }
    } catch (e) {
      // Fall through to showLogin
    }
  }
  localStorage.removeItem("kanchi_gym_current_user");
  showLogin();
}

// Handle Login with Strict @kanchiuniv.ac.in domain check
function handleLoginSubmit(e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value.trim().toLowerCase();
  const passwordInput = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("login-error-msg");

  // Strict check: must end with @kanchiuniv.ac.in
  const domainPattern = /^[a-zA-Z0-9._%+-]+@kanchiuniv\.ac\.in$/i;
  if (!domainPattern.test(usernameInput)) {
    if (errorMsg) {
      errorMsg.style.display = "block";
      errorMsg.innerHTML = "⚠️ <strong>Access Denied:</strong> Only official Kanchi University student email addresses ending with <strong>@kanchiuniv.ac.in</strong> are permitted to login.";
    }
    return;
  }

  if (errorMsg) {
    errorMsg.style.display = "none";
  }

  // Generate clean student profile from email
  const displayName = extractStudentName(usernameInput);
  const rollNumber = usernameInput.split("@")[0].toUpperCase();
  const studentId = `KU-${rollNumber}`;

  // Default subscription: 90 days semester pass, 42 days completed, 48 days remaining
  const user = {
    username: usernameInput,
    displayName: displayName,
    memberId: studentId,
    planName: "Kanchi Univ Semester Pass (Gold)",
    totalPlanDays: 90,
    daysCompleted: 42,
    expiryDate: new Date(Date.now() + 48 * 24 * 60 * 60 * 1000 + 14 * 60 * 60 * 1000).toISOString(),
    startDate: new Date(Date.now() - 42 * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    })
  };

  currentUser = user;
  localStorage.setItem("kanchi_gym_current_user", JSON.stringify(currentUser));
  showDashboard();
}

// Quick Demo Login for University Students
window.quickLogin = function(displayName, email, memberId, totalDays, daysRemaining) {
  if (!email.toLowerCase().endsWith("@kanchiuniv.ac.in")) {
    alert("Invalid domain. Must end in @kanchiuniv.ac.in");
    return;
  }

  const daysCompleted = totalDays - daysRemaining;
  const user = {
    username: email,
    displayName: displayName,
    memberId: memberId,
    planName: totalDays >= 180 ? "Annual Varsity Athlete Pass" : "Student Semester Pass",
    totalPlanDays: totalDays,
    daysCompleted: daysCompleted,
    expiryDate: new Date(Date.now() + daysRemaining * 24 * 60 * 60 * 1000 + 12 * 60 * 60 * 1000).toISOString(),
    startDate: new Date(Date.now() - daysCompleted * 24 * 60 * 60 * 1000).toLocaleDateString("en-US", {
      month: "short", day: "numeric", year: "numeric"
    })
  };

  currentUser = user;
  localStorage.setItem("kanchi_gym_current_user", JSON.stringify(currentUser));
  showDashboard();
};

function handleLogout() {
  localStorage.removeItem("kanchi_gym_current_user");
  currentUser = null;
  if (timerInterval) clearInterval(timerInterval);
  showLogin();
}

function showLogin() {
  document.getElementById("login-view").classList.add("active");
  document.getElementById("dashboard-view").classList.remove("active");
}

function showDashboard() {
  document.getElementById("login-view").classList.remove("active");
  document.getElementById("dashboard-view").classList.add("active");

  renderUserProfile();
  startMembershipCountdown();
  renderTimetable();
}

// Format friendly name from university student email
function extractStudentName(email) {
  const localPart = email.split("@")[0];
  // If roll number like 11219a084
  if (/\d/.test(localPart)) {
    return `Student (${localPart.toUpperCase()})`;
  }
  // If dot separated name like arun.kumar
  const parts = localPart.split(/[._-]/);
  return parts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
}

// Render User Profile & Subscription Metrics
function renderUserProfile() {
  if (!currentUser) return;

  // Header & greetings
  document.getElementById("greeting-name").textContent = currentUser.displayName;
  document.getElementById("nav-member-name").textContent = currentUser.displayName;
  document.getElementById("nav-member-id").textContent = `ID: ${currentUser.memberId}`;

  // Avatar Initials
  const initials = currentUser.displayName
    .replace(/[^a-zA-Z ]/g, "")
    .trim()
    .split(" ")
    .map(p => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  document.getElementById("nav-avatar-initials").textContent = initials || "KU";

  // Subscription Details
  document.getElementById("sub-plan-name").textContent = currentUser.planName;
  document.getElementById("sub-enrolled-duration").textContent = `Total Plan: ${currentUser.totalPlanDays} Days`;
  document.getElementById("sub-days-completed").textContent = `${currentUser.daysCompleted} Days`;
  document.getElementById("sub-start-date").textContent = `Active since: ${currentUser.startDate}`;

  const expiry = new Date(currentUser.expiryDate);
  document.getElementById("sub-expiry-date").textContent = `Valid till: ${expiry.toLocaleDateString("en-US", {
    month: "long", day: "numeric", year: "numeric"
  })}`;
}

// Live Countdown for Membership Remaining
function startMembershipCountdown() {
  if (timerInterval) clearInterval(timerInterval);

  function update() {
    if (!currentUser || !currentUser.expiryDate) return;

    const targetTime = new Date(currentUser.expiryDate).getTime();
    const now = Date.now();
    const diff = targetTime - now;

    if (diff <= 0) {
      document.getElementById("cd-days").textContent = "00";
      document.getElementById("cd-hours").textContent = "00";
      document.getElementById("cd-mins").textContent = "00";
      document.getElementById("cd-secs").textContent = "00";
      document.getElementById("sub-status-badge").className = "badge";
      document.getElementById("sub-status-badge").style.background = "rgba(239, 68, 68, 0.2)";
      document.getElementById("sub-status-badge").style.color = "#f87171";
      document.getElementById("sub-status-badge").textContent = "● Plan Expired - Renew at Sports Complex";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById("cd-days").textContent = String(days).padStart(2, "0");
    document.getElementById("cd-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("cd-mins").textContent = String(minutes).padStart(2, "0");
    document.getElementById("cd-secs").textContent = String(seconds).padStart(2, "0");

    // Progress bar calculation
    const totalDays = currentUser.totalPlanDays || 90;
    const completedDays = currentUser.daysCompleted || 0;
    const percent = Math.min(100, Math.max(0, Math.round((completedDays / totalDays) * 100)));

    document.getElementById("sub-progress-fill").style.width = `${percent}%`;
    document.getElementById("sub-progress-text").textContent = `${percent}% of Subscription Used • ${days} Days Remaining`;
  }

  update();
  timerInterval = setInterval(update, 1000);
}

// Live Campus Clock
function startLiveCampusClock() {
  if (clockInterval) clearInterval(clockInterval);

  function tick() {
    const now = new Date();
    const timeEl = document.getElementById("live-time");
    const dateEl = document.getElementById("live-date");

    if (timeEl) {
      timeEl.textContent = now.toLocaleTimeString("en-US", {
        hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: true
      });
    }

    if (dateEl) {
      dateEl.textContent = now.toLocaleDateString("en-US", {
        weekday: "short", month: "short", day: "numeric", year: "numeric"
      });
    }
  }

  tick();
  clockInterval = setInterval(tick, 1000);
}

// Determine current day key (monday, tuesday, etc.)
function getCurrentDayKey() {
  const dayIndex = new Date().getDay(); // 0 is Sunday, 1 is Monday, ...
  const mapping = {
    0: "sunday",
    1: "monday",
    2: "tuesday",
    3: "wednesday",
    4: "thursday",
    5: "friday",
    6: "saturday"
  };
  return mapping[dayIndex] || "monday";
}

// Highlight today's tab pill
function highlightTodayTab() {
  const todayKey = getCurrentDayKey();
  const pills = document.querySelectorAll(".day-pill");
  pills.forEach(pill => {
    if (pill.getAttribute("data-day") === todayKey) {
      pill.classList.add("is-today");
      const shortSpan = pill.querySelector(".day-short");
      if (shortSpan && !shortSpan.innerHTML.includes("★")) {
        shortSpan.innerHTML += " <small style='color: #f59e0b; font-size: 0.75rem;'>TODAY</small>";
      }
    }
  });
}

// Render Monday to Sunday Timetable
function renderTimetable() {
  const container = document.getElementById("days-container");
  if (!container) return;

  container.innerHTML = "";
  const todayKey = getCurrentDayKey();
  const dayKeys = Object.keys(weeklyTimetable);

  let keysToRender = dayKeys;
  if (currentViewMode === "today") {
    keysToRender = [todayKey];
  } else if (currentViewMode !== "all" && weeklyTimetable[currentViewMode]) {
    keysToRender = [currentViewMode];
  }

  keysToRender.forEach(key => {
    const dayData = weeklyTimetable[key];
    const isToday = key === todayKey;

    const card = document.createElement("div");
    card.className = `day-card ${isToday ? "today-highlight" : ""}`;
    card.id = `card-${key}`;

    // Exercise list HTML
    let exercisesHtml = "";
    let completedCount = 0;

    dayData.exercises.forEach(ex => {
      if (ex.completed) completedCount++;

      // Rep badges
      const repsBadges = ex.reps.map(rep => {
        const isHeavy = rep.includes("2 reps") || rep.includes("3 reps") || rep.includes("Failure");
        return `<span class="rep-badge ${isHeavy ? 'heavy' : ''}">${escapeHtml(rep)}</span>`;
      }).join("");

      exercisesHtml += `
        <div class="exercise-item ${ex.completed ? 'completed' : ''}" id="ex-row-${ex.id}">
          <div class="exercise-top">
            <div class="exercise-label-group">
              <input type="checkbox" class="exercise-check" ${ex.completed ? 'checked' : ''} onchange="toggleExercise('${key}', '${ex.id}')">
              <span class="exercise-name">${escapeHtml(ex.name)}</span>
            </div>
            <span class="exercise-category">${escapeHtml(ex.target || dayData.category)}</span>
          </div>
          <div class="reps-chips-wrap">
            <span class="reps-label">Sets & Reps:</span>
            ${repsBadges}
          </div>
        </div>
      `;
    });

    const totalCount = dayData.exercises.length;

    card.innerHTML = `
      <div class="day-card-header">
        <div class="day-card-title-group">
          <div class="day-card-name">
            ${dayData.dayName}
            ${isToday ? '<span class="today-tag">TODAY</span>' : ''}
          </div>
          <span class="day-card-focus">${escapeHtml(dayData.focus)}</span>
        </div>
        <button class="btn btn-outline btn-sm" onclick="openAddExerciseForDay('${key}')" title="Add Exercise to this day">
          + Add
        </button>
      </div>

      <div class="exercise-list">
        ${exercisesHtml}
      </div>

      <div class="day-card-footer">
        <span class="completion-count">
          Completed: ${completedCount} / ${totalCount} exercises
        </span>
        <button class="btn btn-outline btn-sm" onclick="resetDayProgress('${key}')" title="Reset all checkmarks for this day" style="font-size: 0.72rem; padding: 0.2rem 0.5rem;">
          Reset Sets
        </button>
      </div>
    `;

    container.appendChild(card);
  });
}

// Toggle exercise completion checkmark
window.toggleExercise = function(dayKey, exerciseId) {
  if (!weeklyTimetable[dayKey]) return;
  const ex = weeklyTimetable[dayKey].exercises.find(e => e.id === exerciseId);
  if (ex) {
    ex.completed = !ex.completed;
    saveTimetable();
    renderTimetable();
  }
};

// Reset day progress
window.resetDayProgress = function(dayKey) {
  if (!weeklyTimetable[dayKey]) return;
  weeklyTimetable[dayKey].exercises.forEach(e => e.completed = false);
  saveTimetable();
  renderTimetable();
};

// Mode switcher: "all" or "today"
window.setTimetableMode = function(mode) {
  currentViewMode = mode;
  document.getElementById("btn-view-all").classList.toggle("active", mode === "all");
  document.getElementById("btn-view-today").classList.toggle("active", mode === "today");

  document.querySelectorAll(".day-pill").forEach(p => p.classList.remove("active"));

  if (mode === "today") {
    const todayKey = getCurrentDayKey();
    const activePill = document.querySelector(`.day-pill[data-day="${todayKey}"]`);
    if (activePill) activePill.classList.add("active");
  }

  renderTimetable();
};

// Select specific day from navigation pill
window.selectDayTab = function(dayKey) {
  currentViewMode = dayKey;
  document.getElementById("btn-view-all").classList.remove("active");
  document.getElementById("btn-view-today").classList.remove("active");

  document.querySelectorAll(".day-pill").forEach(p => {
    p.classList.toggle("active", p.getAttribute("data-day") === dayKey);
  });

  renderTimetable();

  const targetCard = document.getElementById(`card-${dayKey}`);
  if (targetCard) {
    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
  }
};

// Modal handlers
window.openAddExerciseModal = function() {
  document.getElementById("exercise-modal").classList.add("active");
};

window.openAddExerciseForDay = function(dayKey) {
  document.getElementById("modal-day").value = dayKey;
  document.getElementById("exercise-modal").classList.add("active");
};

window.closeAddExerciseModal = function() {
  document.getElementById("exercise-modal").classList.remove("active");
  document.getElementById("add-exercise-form").reset();
};

function handleAddExerciseSubmit(e) {
  e.preventDefault();
  const dayKey = document.getElementById("modal-day").value;
  const exerciseName = document.getElementById("modal-exercise-name").value.trim();
  const repsStr = document.getElementById("modal-reps").value.trim();
  const category = document.getElementById("modal-category").value.trim();

  if (!exerciseName || !repsStr) return;

  const repsArray = repsStr.split(",").map(r => r.trim()).filter(Boolean);

  const newExercise = {
    id: "custom_" + Date.now(),
    name: exerciseName,
    target: category || "Strength",
    reps: repsArray.length > 0 ? repsArray : ["10 reps", "8 reps", "5 reps"],
    completed: false
  };

  if (weeklyTimetable[dayKey]) {
    weeklyTimetable[dayKey].exercises.push(newExercise);
    saveTimetable();
    renderTimetable();
  }

  closeAddExerciseModal();
}

function escapeHtml(text) {
  if (!text) return "";
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
