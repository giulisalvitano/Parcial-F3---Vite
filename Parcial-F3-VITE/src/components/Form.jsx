import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [banda1, setBanda1] = useState('');
  const [banda2, setBanda2] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(banda1, banda2);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={banda1} 
          onChange={(event) => setBanda1(event.target.value)} 
        />
      </div>
      <div>
        <label>Nombre:</label>
        <input 
          type="text" 
          value={banda2} 
          onChange={(event) => setBanda2(event.target.value)} 
        />
      </div>
      <button type="submit">Enviar</button>
    </form>
  );
};

export default Form;
