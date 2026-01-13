const API_BASE = import.meta.env.VITE_API_BASE;
console.log("API BASE:", API_BASE);

document.addEventListener("DOMContentLoaded", function () {
  createParticles();
  initializeEventListeners();
  startTerminalAnimation();
  checkExistingSession();
});


function checkExistingSession() {
  const token = localStorage.getItem("mr_robot_token");
  const sessionId = localStorage.getItem("mr_robot_session_id");

  if (token && sessionId) {
    addTerminalLine("Existing session detected", "info");
    addTerminalLine("Token found in localStorage", "info");

    setTimeout(() => {
      addTerminalLine("Press VERIFY IDENTITY to continue", "info");
    }, 1000);
  }
}

function verifySession() {
  fetch(`${API_BASE}/api/verify-session`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("mr_robot_token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      addTerminalLine("Session verified successfully", "success");
    })
    .catch((err) => {
      console.error(err);
      addTerminalLine("Session verification failed", "error");
    });
}

function createParticles() {
  console.log("Particles created");
}

function initializeEventListeners() {
  console.log("Event listeners initialized");
}

function startTerminalAnimation() {
  console.log("Terminal animation started");
}

function addTerminalLine(text, type) {
  console.log(`[${type}] ${text}`);
}
