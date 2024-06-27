import React from 'react'
import './Ejercicio3.css'
import { useState } from 'react'

const Ejercicio3 = () => {
    const [direction, setDirection] = useState('row');
    const [justifyContent, setJustifyContent] = useState('flex-start');
    const [alignItems, setAlignItems] = useState('flex-start');

    const container= {
        display: 'flex',
        flexDirection: direction,
        justifyContent: justifyContent,
        alignItems: alignItems,
    };


    return (
        <div className="app">
            <h1>Flexbox controles</h1>
            <div className="controles">
                <label>
                    Direction:
                    <select value={direction} onChange={(e) =>setDirection(e.target.value)}>
                        <option value="row">row</option>
                        <option value="row-reverse">row-reverse</option>
                        <option value="column">column</option>
                        <option value="column-reverse">column-reverse</option>
                    </select>
                </label>
                <label>
                    Justify-Content:
                    <select value={justifyContent} onChange={(e) => setJustifyContent(e.target.value)}>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="space-between">space-between</option>
                        <option value="space-around">space-around</option>
                        <option value="space-evenly">space-evenly</option>
                    </select>
                </label>
                <label>
                    Align-items:
                    <select value={alignItems} onChange={(e)=> setAlignItems(e.target.value)}>
                        <option value="flex-start">flex-start</option>
                        <option value="flex-end">flex-end</option>
                        <option value="center">center</option>
                        <option value="stretch">stretch</option>
                        <option value="baseline">baseline</option>
                    </select>
                </label>
            </div>
            <div style={container}>
                <div className="box">Caja 1</div>
                <div className="box">Caja 2</div>
                <div className="box">Caja 3</div>
            </div>
        </div>

    )
}

export default Ejercicio3