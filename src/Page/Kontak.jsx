// Form.js

import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    // Definisikan state untuk setiap field form
    nama: "",
    email: "",
    // ...Tambahkan field form lainnya
  });

  const [formData2, setFormData2] = useState({
    // Definisikan state untuk setiap field form
    nama: "",
    email: "",
    // ...Tambahkan field form lainnya
  });

  const handleChange = (e) => {
    // Update state ketika nilai field berubah
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data form yang disubmit
    setFormData2({
      nama: formData.nama,
      email: formData.email,
    });
  };

  return (
    <>
      <div className="fom">
        <form onSubmit={handleSubmit}>
          <label>
            Nama:
            <input
              type="text"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <br />
          {/* Tambahkan field form lainnya */}
          <button type="submit">Kirim</button>
        </form>
        <div>
          {formData2.nama} {"|"}
          {formData2.email}
        </div>
      </div>
    </>
  );
};

export default Form;
