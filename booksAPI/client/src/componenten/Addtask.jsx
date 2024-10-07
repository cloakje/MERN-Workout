import React, { useState } from 'react';

const AddTask = ({ onTaskAdded }) => {
  // Staat voor het opslaan van de titel en beschrijving van de taak
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  // Functie om het formulier te verzenden wanneer een nieuwe taak wordt toegevoegd
  const handleSubmit = async (e) => {
    e.preventDefault(); // Voorkomt dat het formulier de pagina ververst
    try {
      // Maak een POST-verzoek naar de backend om een nieuwe taak toe te voegen
      const response = await fetch('http://localhost:4000/api/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Zorg ervoor dat de server weet dat we JSON verzenden
        },
        body: JSON.stringify({ title, description }), // Het JSON-geformatteerde lichaam van het verzoek
      });

      if (!response.ok) {
        // Als het antwoord niet oké is, gooi dan een fout
        throw new Error('Failed to add task');
      }

      // Als de taak met succes is toegevoegd, ontvangen we het nieuwe taakobject als reactie
      const newTask = await response.json();

      // Roep de functie onTaskAdded aan die door de oudercomponent is doorgegeven en geef het nieuwe taakobject door
      onTaskAdded(newTask);

      // Wis de invoervelden nadat de taak is toegevoegd
      setTitle('');
      setDescription('');
    } catch (error) {
      // Als er een fout optreedt tijdens het toevoegen van de taak, log de fout in de console
      console.error('Error adding task:', error);
    }
  };

  return (
    <div>
      <h2>Add New Task</h2>
      {/* Het formulier om een nieuwe taak toe te voegen */}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          {/* Invoerveld voor de titel van de taak */}
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Description:</label>
          {/* Invoerveld voor de beschrijving van de taak */}
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        {/* Knop om het formulier te verzenden en een nieuwe taak toe te voegen */}
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default AddTask;