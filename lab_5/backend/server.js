const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

let clips = [
  { id: 1, artist: "The Weeknd", title: "Blinding Lights", duration: 200, views: 7000000000, image: "https://www.musicbusinessworldwide.com/files/2021/06/Weekend-1296x803.jpeg" },
  { id: 2, artist: "Adele", title: "Hello", duration: 295, views: 3200000000, image: "https://i.ytimg.com/vi/YQHsXMglC9A/hqdefault.jpg" },
  { id: 3, artist: "Ed Sheeran", title: "Shape of You", duration: 263, views: 6100000000, image: "https://i.ytimg.com/vi/JGwWNGJdvx8/hqdefault.jpg" },
  { id: 4, artist: "Imagine Dragons", title: "Believer", duration: 204, views: 2500000000, image: "https://i.ytimg.com/vi/7wtfhZwyrcc/hqdefault.jpg" },
  { id: 5, artist: "Coldplay", title: "Viva La Vida", duration: 241, views: 1800000000, image: "https://m.media-amazon.com/images/I/91BgHwJwdOL._UF1000,1000_QL80_.jpg" },
  { id: 6, artist: "Linkin Park", title: "Numb", duration: 188, views: 2000000000, image: "https://djs.od.ua/img/cover/54_1751476322.jpg" }
];

let nextId = clips.length + 1;

// GET all clips
app.get("/clips", (req, res) => {
    console.log(`[GET] /clips - fetched ${clips.length} clips`);
    res.json(clips);
});

// GET clip by id
app.get("/clips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const clip = clips.find(c => c.id === id);
  if (!clip) {
    console.log(`[GET] /clips/${id} - clip not found`);
    return res.status(404).json({ message: "Clip not found" });
  }
  console.log(`[GET] /clips/${id} - clip fetched`, clip);
  res.json(clip);
});

// POST new clip
app.post("/clips", (req, res) => {
  const { artist, title, duration, views, image } = req.body;
  if (!artist || !title || typeof duration !== "number" || typeof views !== "number") {
    console.log(`[POST] /clips - invalid data`, req.body);
    return res.status(400).json({ message: "Invalid data" });
  }
  const newClip = { id: nextId++, artist, title, duration, views, image: image || "" };
  clips.push(newClip);
  console.log(`[POST] /clips - clip added`, newClip);
  res.status(201).json(newClip);
});

// PUT update clip
app.put("/clips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const i = clips.findIndex(c => c.id === id);
  if (i === -1) {
    console.log(`[PUT] /clips/${id} - clip not found`);
    return res.status(404).json({ message: "Clip not found" });
  }

  const { artist, title, duration, views, image } = req.body;
  if (!artist || !title || typeof duration !== "number" || typeof views !== "number") {
    console.log(`[PUT] /clips/${id} - invalid data`, req.body);
    return res.status(400).json({ message: "Invalid data" });
  }

  clips[i] = { id, artist, title, duration, views, image: image || "" };
  console.log(`[PUT] /clips/${id} - clip updated`, clips[i]);
  res.json(clips[i]);
});

// DELETE clip
app.delete("/clips/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const before = clips.length;
  clips = clips.filter(c => c.id !== id);
  if (clips.length === before) {
    console.log(`[DELETE] /clips/${id} - clip not found`);
    return res.status(404).json({ message: "Clip not found" });
  }
  console.log(`[DELETE] /clips/${id} - clip deleted`);
  res.status(204).send();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`));
