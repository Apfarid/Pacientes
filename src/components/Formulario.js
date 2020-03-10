import React, { Fragment, useState } from 'react';
import uuid from 'uuid/v4'



const Formulario = ({crearCita}) => {

    //Crear State del formulario

    const [cita, setCita] = useState({
        mascota: '',
        propietario: '',
        fecha:'',
        hora: '',
        sintomas:''
    });

    const [error, setError] = useState(false);
    

    //funcion que actualiza segun el input

    const {mascota, propietario, fecha, hora, sintomas } = cita


    const actualizaState = (e) => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })

    }    

    const submit = e => {
        e.preventDefault();

        //validacion
        if(mascota.trim() === '' || propietario.trim() === ''){
            setError(true)
            return;            
        }

        setError(false)

        //asignar ID
        cita.id = uuid()
   
        


        //Crear la cita
        crearCita(cita)



        // Reiniciar el form
        setCita({
            mascota: '',
            propietario: '',
            fecha:'',
            hora: '',
            sintomas:''
        })

    }



    return (
        <Fragment>
            { error && <p className="alerta-error">Todos los campos deben estar diligenciados</p> }
            <form
                onSubmit = {submit}
            >
                <label htmlFor="">Nombre Mascota</label>
                <input
                    type="text"
                    name = "mascota"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange = {actualizaState}
                    value={mascota}

                />

                <label htmlFor="">Nombre del dueño</label>
                <input
                    type="text"
                    name = "propietario"
                    className="u-full-width"
                    placeholder="Nombre del Propietario"
                    onChange = {actualizaState}
                    value={propietario}

                />

                <label htmlFor="">Fecha</label>
                <input
                    type="date"
                    name = "fecha"
                    className="u-full-width"
                    onChange = {actualizaState}
                    value = {fecha}
                />

                <label htmlFor="">Hora</label>
                <input
                    type="time"
                    name = "hora"
                    className="u-full-width"
                    onChange = {actualizaState}
                    value={hora}
                />


                <label htmlFor="">Sintomas</label>
                <textarea 
                    name="sintomas"
                    className="u-full-width"      
                    onChange = {actualizaState}    
                    value= {sintomas}          
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >Agregar Cita</button>

            </form>
        </Fragment>
    );
};

export default Formulario;