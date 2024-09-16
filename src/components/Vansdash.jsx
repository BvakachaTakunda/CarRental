import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from './Firebase';
import { collection, addDoc, deleteDoc, doc } from 'firebase/firestore';
import './Vansdash.css';
import image0 from './images/Rectangle-154.png';

const Vansdash = () => {
  const [vans, setVans] = useState([
    { id: '1', name: 'Modest Explorer', price: 60, image: image0, description: "modest-explorer.jpg" },
    { id: '2', name: 'Beach Bum', price: 80, image: image0, description: "beach-bum.jpg" },
    { id: '3', name: 'Green Wonder', price: 70, image: image0, description: "green-wonder.jpg" },
  ]);

  const [form, setForm] = useState({
    name: '',
    price: '',
    type: '',
    image: '',
    description: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newVan = {
        name: form.name,
        price: parseFloat(form.price),
        type: form.type,
        image: form.image,
        description: form.description,
      };

      const docRef = await addDoc(collection(db, "vans"), newVan);

      setVans([...vans, { id: docRef.id, ...newVan }]);

      setForm({
        name: '',
        price: '',
        type: '',
        image: '',
        description: '',
      });
    } catch (e) {
      console.error("Error adding van: ", e);
    }
  };

  const handleDelete = async (vanId) => {
    try {
      await deleteDoc(doc(db, "vans", vanId));
      setVans(vans.filter(van => van.id !== vanId));
    } catch (e) {
      console.error("Error deleting van: ", e);
    }
  };

  return (
    <div className="container">
      <nav>
        <div className="nav-links" style={{ display: "flex", margin: "0px" }}>
          <Link to="/Host" className="active"><h4 style={{ margin: "5px" }}>Dashboard</h4></Link>
          <Link to="/Income"><h4 style={{ margin: "5px" }}>Income</h4></Link>
          <Link to="/Vansdash"><h4 style={{ margin: "5px" }}>Vans</h4></Link>
          <Link to="/Reviews"><h4 style={{ margin: "5px" }}>Reviews</h4></Link>
        </div>
      </nav>
      <h2>Your listed vans</h2>

      <form onSubmit={handleSubmit} className="add-van-form">
        <h3>Add New Van</h3>
        <label>
          Name:
          <input type="text" name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          Price:
          <input type="number" name="price" value={form.price} onChange={handleChange} required />
        </label>
        <label>
          Type:
          <input type="text" name="type" value={form.type} onChange={handleChange} required />
        </label>
        <label>
          Image URL:
          <input type="text" name="image" value={form.image} onChange={handleChange} />
        </label>
        <label>
          Description:
          <input type="text" name="description" value={form.description} onChange={handleChange} />
        </label>
        <button type="submit">Add Van</button>
      </form>

      <div className="van-list">
        {vans.map((van) => (
          <div key={van.id} className="van-item">
            <Link to={`/vans/${van.id}`} className="van-item-link">
              <img src={van.image} alt={van.name} />
              <div className="van-info">
                <h3>{van.name}</h3>
                <p>${van.price}/day</p>
              </div>
            </Link>
            <button onClick={() => handleDelete(van.id)} className="delete-button">
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vansdash;
