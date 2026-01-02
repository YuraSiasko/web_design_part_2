const API = "http://localhost:3000/clips";
const form = document.getElementById("editForm");
const backBtn = document.getElementById("backBtn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
backBtn.addEventListener("click", () => window.location.href = "index.html");

// read id from url
const params = new URLSearchParams(window.location.search);
const id = parseInt(params.get("id"));

if (!id) {
  showModal("❌ Невірний індекс кліпу");
} else {
  loadClip();
}

async function loadClip(){
  try {
    const res = await fetch(`${API}/${id}`);
    if (!res.ok) { showModal("Кліп не знайдено"); return; }
    const clip = await res.json();
    document.getElementById("editArtist").value = clip.artist;
    document.getElementById("editTitle").value = clip.title;
    document.getElementById("editDuration").value = clip.duration;
    document.getElementById("editViews").value = clip.views;
    document.getElementById("editImage").value = clip.image;
  } catch (err) {
    showModal("Помилка завантаження");
  }
}

form.addEventListener("submit", async e=>{
  e.preventDefault();
  const artist = document.getElementById("editArtist").value.trim();
  const title = document.getElementById("editTitle").value.trim();
  const duration = parseInt(document.getElementById("editDuration").value);
  const views = parseInt(document.getElementById("editViews").value);
  const image = document.getElementById("editImage").value.trim();

  if (!artist || !title || isNaN(duration) || isNaN(views)) {
    showModal("⚠️ Заповніть обов'язкові поля");
    return;
  }

  try {
    const res = await fetch(`${API}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ artist, title, duration, views, image })
    });
    if (res.ok) {
      showModal("✅ Кліп оновлено");
      setTimeout(()=> window.location.href = "index.html", 800);
    } else {
      const data = await res.json();
      showModal(data.message || "Помилка оновлення");
    }
  } catch (err) {
    showModal("Помилка мережі");
  }
});

function showModal(msg){ modalText.textContent = msg; modal.style.display = "flex"; }
