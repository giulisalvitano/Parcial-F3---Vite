import './App.css';

import Card from "./components/Card";
import React, { useState} from "react";
import Form from "./components/Form";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  
  const handleSubmit = (banda1, banda2) => {
    if (banda1.length < 3 || banda1.trim() !== banda1 || banda2.length < 6){
      setError('Por favor chequea que la información sea correcta');
      setData(null);
    } else {
      setError('');
      setData({ banda1, banda2 });
    }
  };

  return (
    <>
      <h1>Mis bandas favoritas</h1>
      <Form onSubmit={handleSubmit} />
      {error && <ErrorMessage message="Por favor chequea que la información sea correcta" />}
      {data && <Card banda1={data.banda1} banda2={data.banda2} />}
    </>
  );
}

export default App;
