// index.js — фронтенд працює з backend через REST API
const API = "http://localhost:3000/clips";

const container = document.getElementById("clipsContainer");
const searchInput = document.getElementById("searchInput");
const sortBtn = document.getElementById("sortBtn");
const countBtn = document.getElementById("countBtn");
const showCreateBtn = document.getElementById("showCreateBtn");

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");
closeBtn.onclick = () => (modal.style.display = "none");
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };

showCreateBtn.addEventListener("click", () => window.location.href = "create.html");

// fetch + render
let clips = [];

async function loadClips(){
  try {
    const res = await fetch(API);
    clips = await res.json();
    renderClips(clips);
  } catch (err) {
    showModal("Помилка завантаження кліпів");
    console.error(err);
  }
}

function renderClips(list){
  container.innerHTML = "";
  list.forEach(c => {
    const imgHTML = c.image ? `<img src="${c.image}" alt="${escapeHtml(c.title)}">` : `<div style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:6px;height:150px;">Фото не додане</div>`;
    container.insertAdjacentHTML("beforeend", `
      <div class="clip-card" data-id="${c.id}">
        ${imgHTML}
        <h3>${escapeHtml(c.title)}</h3>
        <p><strong>Виконавець:</strong> ${escapeHtml(c.artist)}</p>
        <p><strong>Тривалість:</strong> ${c.duration} сек</p>
        <p><strong>Перегляди:</strong> ${c.views.toLocaleString()}</p>
        <div class="clip-actions">
          <a href="edit.html?id=${c.id}"><button class="editBtn">✏️ Редагувати</button></a>
          <button class="deleteBtn">🗑️ Видалити</button>
        </div>
      </div>
    `);
  });

  // attach delete events
  document.querySelectorAll(".deleteBtn").forEach(btn=>{
    btn.addEventListener("click", async e=>{
      const id = parseInt(e.target.closest(".clip-card").dataset.id);
      if (!confirm("Видалити цей кліп?")) return;
      try {
        const res = await fetch(`${API}/${id}`, { method: "DELETE" });
        if (res.status === 204) {
          showModal("🗑️ Кліп видалено!");
          await loadClips();
        } else {
          const data = await res.json();
          showModal(data.message || "Помилка видалення");
        }
      } catch (err) {
        showModal("Помилка запиту");
      }
    });
  });
}

function escapeHtml(str){
  return String(str).replace(/[&<>"']/g, s => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":"&#39;"}[s]));
}

function showModal(msg){
  modalText.textContent = msg;
  modal.style.display = "flex";
}

// search
searchInput.addEventListener("input", e=>{
  const q = e.target.value.toLowerCase();
  renderClips(clips.filter(c => c.artist.toLowerCase().includes(q) || c.title.toLowerCase().includes(q)));
});

// sort
sortBtn.addEventListener("click", ()=>{
  const sorted = [...clips].sort((a,b)=>b.views - a.views);
  renderClips(sorted);
  showModal("✅ Відсортовано за переглядами");
});

// count
countBtn.addEventListener("click", ()=>{
  const total = clips.reduce((s,c)=>s + (Number(c.views) || 0), 0);
  showModal(`📈 Загальна кількість переглядів: ${total.toLocaleString()}`);
});

// initial load
loadClips();
