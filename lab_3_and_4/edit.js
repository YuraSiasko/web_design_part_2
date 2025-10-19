const form = document.getElementById("editForm");
const backBtn = document.getElementById("backBtn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = () => modal.style.display="none";
window.onclick = e => { if(e.target === modal) modal.style.display="none"; }

backBtn.addEventListener("click", ()=> window.location.href="index.html");

const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("index"));

let userClips = JSON.parse(localStorage.getItem("userClips")) || [];
if(userClips[index]){
  document.getElementById("editArtist").value = userClips[index].artist;
  document.getElementById("editTitle").value = userClips[index].title;
  document.getElementById("editDuration").value = userClips[index].duration;
  document.getElementById("editViews").value = userClips[index].views;
  document.getElementById("editImage").value = userClips[index].image;
} else {
  showModal("Кліп не знайдено!");
}

form.addEventListener("submit", e=>{
  e.preventDefault();

  const artist = document.getElementById("editArtist").value.trim();
  const title = document.getElementById("editTitle").value.trim();
  const duration = parseInt(document.getElementById("editDuration").value);
  const views = parseInt(document.getElementById("editViews").value);
  const image = document.getElementById("editImage").value.trim();

  if(!artist || !title || isNaN(duration) || isNaN(views)){
    showModal("Будь ласка, заповніть усі обов'язкові поля правильно!");
    return;
  }

  userClips[index] = { artist, title, duration, views, image };
  localStorage.setItem("userClips", JSON.stringify(userClips));

  showModal("Кліп відредаговано!");
  setTimeout(()=> window.location.href="index.html", 1000);
});

function showModal(msg){
  modalText.textContent = msg;
  modal.style.display = "flex";
}
