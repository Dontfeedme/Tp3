import React, { useState } from 'react';
import './Ejercicio4.css';

function Ejercicio4() {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        edad: '',
        altura: '',
        email: ''
    });

    const [validationMensaje, setValidationMensaje] = useState('');
    const [isFormValid, setIsFormValid] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        const { nombre, apellido, edad, altura, email } = formData;
        let mensaje = '';
        let isValid = true;

        if (!nombre || nombre.length > 50) {
            mensaje = 'El nombre no puede estar vacío y debe tener un máximo de 50 caracteres.';
            isValid = false;
            setValidationMensaje(mensaje);
            setIsFormValid(isValid);
            return;
        }

        if (!apellido || apellido.length > 50) {
            mensaje = 'El apellido no puede estar vacío y debe tener un máximo de 50 caracteres.';
            isValid = false;
            setValidationMensaje(mensaje);
            setIsFormValid(isValid);
            return;
        }

        if (!edad || isNaN(edad) || edad < 18) {
            mensaje = 'La edad no debe ser negativa y debe ser mayor o igual a 18.';
            isValid = false;
            setValidationMensaje(mensaje);
            setIsFormValid(isValid);
            return;
        }

        if (!altura || isNaN(altura) || altura <= 0 || altura > 230) {
            mensaje = 'La altura no puede ser negativa y no puede ser mayor a 230 cm.';
            isValid = false;
            setValidationMensaje(mensaje);
            setIsFormValid(isValid);
            return;
        }

        if (!email || !email.includes('@')) {
            mensaje = 'El correo electrónico no puede estar vacío y debe incluir el @.';
            isValid = false;
            setValidationMensaje(mensaje);
            setIsFormValid(isValid);
            return;
        }

        mensaje = "Formulario cargado con éxito";
        setValidationMensaje(mensaje);
        setIsFormValid(isValid);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        validateForm();
    };

    return (
        <div className="App">
            <h1>Formulario de Validación</h1>
            <form onSubmit={handleSubmit} className="form-container">
                <div className="form-group">
                    <label>Nombre:</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Apellido:</label>
                    <input type="text" name="apellido" value={formData.apellido} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Edad:</label>
                    <input type="number" name="edad" value={formData.edad} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Altura (cm):</label>
                    <input type="number" name="altura" value={formData.altura} onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <button type="submit">Enviar</button>
            </form>
            <p className={isFormValid ? 'success-message' : 'error-message'}>{validationMensaje}</p>
        </div>
    );
}

export default Ejercicio4;
