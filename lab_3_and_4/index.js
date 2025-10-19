const defaultClips = [
  { artist:"The Weeknd", title:"Blinding Lights", duration:200, views:7000000000, image:"https://www.musicbusinessworldwide.com/files/2021/06/Weekend-1296x803.jpeg" },
  { artist:"Adele", title:"Hello", duration:295, views:3200000000, image:"https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg" },
  { artist:"Ed Sheeran", title:"Shape of You", duration:263, views:6100000000, image:"https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg" },
  { artist:"Imagine Dragons", title:"Believer", duration:204, views:2500000000, image:"https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg" },
  { artist:"Coldplay", title:"Viva La Vida", duration:241, views:1800000000, image:"https://m.media-amazon.com/images/I/91BgHwJwdOL._UF1000,1000_QL80_.jpg" },
  { artist:"Linkin Park", title:"Numb", duration:188, views:2000000000, image:"https://djs.od.ua/img/cover/54_1751476322.jpg" }
];

let userClips = JSON.parse(localStorage.getItem("userClips")) || [];
let clips = [...defaultClips, ...userClips];

const container = document.getElementById("clipsContainer");
const searchInput = document.getElementById("searchInput");
const sortBtn = document.getElementById("sortBtn");
const countBtn = document.getElementById("countBtn");
const showCreateBtn = document.getElementById("showCreateBtn");

const modal = document.getElementById("modal");
const modalText = document.getElementById("modalText");
const closeBtn = document.querySelector(".close");

closeBtn.onclick = () => modal.style.display="none";
window.onclick = e => { if(e.target === modal) modal.style.display="none"; }

showCreateBtn.addEventListener("click",()=>window.location.href="create.html");

function renderClips(list){
  container.innerHTML="";
  list.forEach((c,i)=>{
    const isUser = i>=defaultClips.length;
    const imgHTML = c.image
      ? `<img src="${c.image}" alt="${c.title}">`
      : `<div style="background:#000;color:#fff;display:flex;align-items:center;justify-content:center;border-radius:8px;height:150px;">Фото не додане</div>`;
    container.insertAdjacentHTML("beforeend",`
      <div class="clip-card" data-index="${i}">
        ${imgHTML}
        <h2>${c.title}</h2>
        <p><strong>Виконавець:</strong> ${c.artist}</p>
        <p><strong>Тривалість:</strong> ${c.duration} сек</p>
        <p><strong>Перегляди:</strong> ${c.views.toLocaleString()}</p>
        ${isUser ? `<div style="display:flex;gap:5px;justify-content:center;margin-top:5px;">
          <a href="edit.html?index=${i-defaultClips.length}"><button class="editBtn"> Редагувати</button></a>
          <button class="deleteBtn">Видалити</button>
        </div>` : ''}
      </div>
    `);
  });

  document.querySelectorAll(".deleteBtn").forEach(btn=>{
    btn.addEventListener("click",e=>{
      const index=parseInt(e.target.closest(".clip-card").dataset.index);
      userClips.splice(index-defaultClips.length);
      localStorage.setItem("userClips",JSON.stringify(userClips));
      clips=[...defaultClips,...userClips];
      renderClips(clips);
      showModal("Кліп видалено!");
    });
  });
}

function showModal(msg){
  modalText.textContent=msg;
  modal.style.display="flex";
} 

renderClips(clips);

searchInput.addEventListener("input",e=>{
  const q=e.target.value.toLowerCase();
  renderClips(clips.filter(c=>c.artist.toLowerCase().includes(q)||c.title.toLowerCase().includes(q)));
});

sortBtn.addEventListener("click",()=>{
  renderClips([...clips].sort((a,b)=>b.views-a.views));
  showModal("Кліпи відсортовано!");
});

countBtn.addEventListener("click",()=>{
  showModal(`Загальна кількість переглядів: ${clips.reduce((sum,c)=>sum+c.views,0).toLocaleString()}`);
});
