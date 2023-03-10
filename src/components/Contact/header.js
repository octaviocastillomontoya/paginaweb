import React, { useState } from 'react';

function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // Aquí iría la lógica para enviar el formulario
        console.log('Enviando formulario...');
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            backgroundColor: '#F9F9F9'
        }}>
            <h1 style={{
                fontSize: '48px',
                fontWeight: 'bold',
                marginBottom: '20px',
                color: '#444444'
            }}>Contacto</h1>
            <form style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '50%',
                padding: '20px',
                borderRadius: '10px',
                backgroundColor: '#FFFFFF',
                boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)'
            }}>
                <input style={{
                    width: '100%',
                    height: '40px',
                    padding: '10px',
                    marginBottom: '20px',
                    border: 'none',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                    fontSize: '16px'
                }} type="text" placeholder="Nombre"required />
                <input style={{
                    width: '100%',
                    height: '40px',
                    padding: '10px',
                    marginBottom: '20px',
                    border: 'none',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                    fontSize: '16px'
                }} type="email" placeholder="Email " required />
                <textarea style={{
                    width: '100%',
                    height: '120px',
                    padding: '10px',
                    marginBottom: '20px',
                    border: 'none',
                    borderRadius: '5px',
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.2)',
                    fontSize: '16px'
                }} placeholder="Mensaje" required></textarea>
                <button style={{
                    width: '150px',
                    height: '40px',
                    border: 'none',
                    borderRadius: '5px',
                    backgroundColor: '#007AFF',
                    color: '#FFFFFF',
                    fontWeight: 'bold',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s ease'
                }}>Enviar</button>
            </form>
        </div>
    );
}

export default ContactPage;
