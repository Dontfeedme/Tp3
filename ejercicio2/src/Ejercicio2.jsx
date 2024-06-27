import React, { useState } from 'react'
import './Ejercicio2.css'

const Ejercicio2 = () => {
    const [Peso,setPeso] = useState('');
    const [Altura,setAltura] = useState('');
    const [Imc,setImc] = useState(null);
    const [Mensaje,setMensaje] = useState('');
    const [MensajeColor,setMensajeColor] = useState('');

    const CalculoImc = () => {
        const Alturaenmetros = Altura / 100
        const ValorImc = (Peso / (Alturaenmetros * Alturaenmetros)).toFixed(1);
        setImc(ValorImc);
        if (ValorImc < 18.5){
            setMensaje('nivel bajo');
            setMensajeColor('yellow');
        }else if (ValorImc >= 18.5 && ValorImc < 25) {
            setMensaje('nivel Normal');
            setMensajeColor('green');
        }else if(ValorImc >= 25 && ValorImc <= 29.9){
            setMensaje('nivel de sobrepeso');
            setMensajeColor('orange');
        }else{
            setMensaje('nivel de obesidad');
            setMensajeColor('red');
        }
    }

    return (

        <>
            <div className="calculoImc">
                <h1>Calculadora de IMC</h1>
                <div>
                    <label>
                        altura (cm):
                        <input type="number" value={Altura} onChange={(e) => setAltura(e.target.value)} />
                    </label>
                    <label>
                        Peso (kg):
                        <input type="number" value={Peso} onChange={(e) => setPeso(e.target.value)} />
                    </label>
                </div>

            <button onClick={CalculoImc}>Calcular IMC</button>
            {Imc && (
                <div className={`Imc-resultado ${MensajeColor}`}>
                    <p>Tu Imc es:{Imc}</p>
                    <p>{Mensaje}</p>
                </div>
            )}
            </div>
        
        </>
    )
}

export default Ejercicio2