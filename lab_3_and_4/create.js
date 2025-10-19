const form = document.getElementById("createForm");
const backBtn = document.getElementById("backBtn");
const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = () => modal.style.display="none";
window.onclick = e => { if(e.target === modal) modal.style.display="none"; }

backBtn.addEventListener("click", ()=> window.location.href="index.html");

form.addEventListener("submit", e=>{
  e.preventDefault();

  const artist = document.getElementById("artist").value.trim();
  const title = document.getElementById("title").value.trim();
  const duration = parseInt(document.getElementById("duration").value);
  const views = parseInt(document.getElementById("views").value);
  const image = document.getElementById("image").value.trim();
  
  if(!artist || !title || isNaN(duration) || isNaN(views)){
    showModal("Будь ласка, заповніть усі обов'язкові поля правильно!");
    return;
  }

  const newClip = { artist, title, duration, views, image };

  let userClips = JSON.parse(localStorage.getItem("userClips")) || [];
  userClips.push(newClip);
  localStorage.setItem("userClips", JSON.stringify(userClips));

  showModal("Кліп додано!");

  setTimeout(()=> window.location.href="index.html", 1000);
});

function showModal(msg){
  modalText.textContent = msg;
  modal.style.display = "flex";
}
