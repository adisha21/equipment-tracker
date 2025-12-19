import { useEffect, useState } from "react";
import "./App.css";

const emptyForm = {
  name: "",
  type: "",
  status: "",
  lastCleanedDate: ""
};

function App() {
  const [equipment, setEquipment] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);

  const loadEquipment = async () => {
    const res = await fetch("http://localhost:5000/api/equipment");
    const data = await res.json();
    setEquipment(data);
  };

  useEffect(() => {
    loadEquipment();
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submitForm = async () => {
    if (!form.name || !form.type || !form.status || !form.lastCleanedDate) {
      alert("All fields required");
      return;
    }

    const method = editingId ? "PUT" : "POST";
    const url = editingId
      ? `http://localhost:5000/api/equipment/${editingId}`
      : "http://localhost:5000/api/equipment";

    await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form)
    });

    setForm(emptyForm);
    setEditingId(null);
    loadEquipment();
  };

  const editItem = (item) => {
    setForm(item);
    setEditingId(item.id);
  };

  const deleteItem = async (id) => {
    await fetch(`http://localhost:5000/api/equipment/${id}`, {
      method: "DELETE"
    });
    loadEquipment();
  };

  return (
    <div className="container">
      <h1>Equipment Management</h1>

      <div className="form">
        <input name="name" placeholder="Name" value={form.name} onChange={handleChange} />

        <select name="type" value={form.type} onChange={handleChange}>
          <option value="">Select Type</option>
          <option>Machine</option>
          <option>Vessel</option>
          <option>Tank</option>
          <option>Mixer</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}>
          <option value="">Select Status</option>
          <option>Active</option>
          <option>Inactive</option>
          <option>Under Maintenance</option>
        </select>

        <input type="date" name="lastCleanedDate" value={form.lastCleanedDate} onChange={handleChange} />

        <button onClick={submitForm}>
          {editingId ? "Update Equipment" : "Add Equipment"}
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Status</th>
            <th>Last Cleaned</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {equipment.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.status}</td>
              <td>{item.lastCleanedDate}</td>
              <td>
                <button onClick={() => editItem(item)}>Edit</button>
                <button className="danger" onClick={() => deleteItem(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
