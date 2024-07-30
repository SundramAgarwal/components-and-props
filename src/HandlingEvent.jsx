import React, { useState } from "react";

const HandlingEvent = () => {
  const [form, setForm] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value })); // this phenomenon is called updater function
    console.log({ ...form, [name]: value });
  };
  return (
    <>
      <div>
        <input
          type="text"
          name="email"
          value={form.email?form.email:""}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="password"
          name="password"
          value={form.password?form.password:""}
          onChange={handleChange}
        />
      </div>
    </>
  );
};

export default HandlingEvent;
