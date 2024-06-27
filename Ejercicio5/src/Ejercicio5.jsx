import React, { useEffect, useState } from 'react';
import './Ejercicio5.css';

const Ejercicio5 = () => {
    const [Personas, setPersonas] = useState([]);
    const [Tareas, setTareas] = useState([]);

    const handleMostrarPersonas = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (res.ok) {
            console.log("llego la llamada de api");
            const nuevasPersonas = await res.json();
            setPersonas(nuevasPersonas);
        } else {
            console.error("hubo un error");
        }
    };

    useEffect(() => {
        const cargarPersonas = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users");
            console.log(res);
            if (res.ok) {
                console.log("cargado con exito los datos");
                const nuevasPersonas = await res.json();
                setPersonas(nuevasPersonas);
            } else {
                console.error("no cargo los datos");
            }
        };
        cargarPersonas();
    }, []);

    const VerTareas = async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
        if (res.ok) {
            const tareas = await res.json();
            setTareas(tareas);
        } else {
            console.error("No se pudieron cargar las tareas");
        }
    };

    return (
        <>
            <h1>Listado de Personas</h1>
            <ul>
                {Personas.map((persona) => (
                    <li key={persona.id}>
                        {persona.id} - {persona.name} - {persona.email} - {persona.website} - {persona.username}
                        <button onClick={() => VerTareas(persona.id)}>Ver tareas</button>
                    </li>
                ))}
            </ul>
            <h2>Tareas</h2>
            <ul>
                {Tareas.map((tarea) => (
                    <li key={tarea.id} className={tarea.completed ? 'tarea-completada' : 'tarea-no-completada'}>{tarea.title}</li>
                ))}
            </ul>
        </>
    );
};

export default Ejercicio5;
