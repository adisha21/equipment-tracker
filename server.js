const express = require("express");
const fs = require("fs");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
const PORT = 5000;
const DATA_FILE = "./data.json";

app.use(cors());
app.use(express.json());

const readData = () => {
  const data = fs.readFileSync(DATA_FILE);
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

app.get("/api/equipment", (req, res) => {
  const data = readData();
  res.json(data.equipment);
});

app.post("/api/equipment", (req, res) => {
  const { name, type, status, lastCleanedDate } = req.body;

  if (!name || !type || !status || !lastCleanedDate) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const data = readData();

  const newEquipment = {
    id: uuidv4(),
    name,
    type,
    status,
    lastCleanedDate
  };

  data.equipment.push(newEquipment);
  writeData(data);

  res.status(201).json(newEquipment);
});

app.put("/api/equipment/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();

  const index = data.equipment.findIndex(e => e.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Equipment not found" });
  }

  data.equipment[index] = { ...data.equipment[index], ...req.body };
  writeData(data);

  res.json(data.equipment[index]);
});

app.delete("/api/equipment/:id", (req, res) => {
  const { id } = req.params;
  const data = readData();

  data.equipment = data.equipment.filter(e => e.id !== id);
  writeData(data);

  res.json({ message: "Deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
