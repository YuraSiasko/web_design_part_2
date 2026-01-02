const API = "http://localhost:3000/clips";
const form = document.getElementById("createForm");
const backBtn = document.getElementById("backBtn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
backBtn.addEventListener("click", () => window.location.href = "index.html");

form.addEventListener("submit", async e=>{
  e.preventDefault();
  const artist = document.getElementById("artist").value.trim();
  const title = document.getElementById("title").value.trim();
  const duration = parseInt(document.getElementById("duration").value);
  const views = parseInt(document.getElementById("views").value);
  const image = document.getElementById("image").value.trim();

  if (!artist || !title || isNaN(duration) || isNaN(views)) {
    showModal("⚠️ Заповніть всі обов'язкові поля коректно");
    return;
  }

  const newClip = { artist, title, duration, views, image };

  try {
    const res = await fetch(API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newClip)
    });
    if (res.ok) {
      showModal("✅ Кліп додано");
      setTimeout(()=> window.location.href = "index.html", 800);
    } else {
      const data = await res.json();
      showModal(data.message || "Помилка створення");
    }
  } catch (err) {
    showModal("Помилка мережі");
  }
});

function showModal(msg){ modalText.textContent = msg; modal.style.display = "flex"; }
