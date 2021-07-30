import React, {} from 'react';
import './viewsStyles/postPageStyles.css'
import {useForm} from "react-hook-form";

import nameUpperCasing from "../utilities/nameUpperCasing";


function PostPage({userData, handleFormSubmit}) {

    const {handleSubmit, register} = useForm();

    function submitComment(values){

        console.log(userData);
        const dataToPost={
            token: userData.id,
            comment : values,
        }


        handleFormSubmit(dataToPost);

    }

    return (
        <div className={'post-page'}>
            <div className="greetings-section">
                <h1>Hola { nameUpperCasing(userData.name) }</h1>
                <h2>Gracias por querer comentar!</h2>
            </div>
            <form onSubmit={handleSubmit((values)=>submitComment(values))}>
                <div className="user-name form-field">

                    <label className={'form-label'}>Ingresa tu Nombre *</label>
                    <input required={true}  type={'text'} {...register('author')}/>
                </div>

                <div className="user-position form-field">
                    <label className={'form-label'}>Ingresa tu cargo o posición</label>
                    <input type={'text'} {...register('position')}/>
                </div>

                <div className="user-relation form-field">
                    <label className={'form-label'}>¿Qué relacion que tienes conmigo? *</label>
                    <input required={true} type={'text'} {...register('relation')}/>
                </div>

               <div className="user-relation form-field">
                    <label className={'form-label'}>¿De que país eres? *</label>
                    <input required={true} type={'text'} {...register('country')}/>
                </div>

                <div className="user-comment form-field">
                    <label className={'form-label'}>Escribe un comentario *</label>
                    <textarea  required={true} {...register('comment')}/>
                </div>

                <div className="user-rate form-field">
                    <label className={'form-label'}>De 1 a 5 como calificarías mi trabajo</label>
                    <input min={1} max={5} type={'number'} {...register('rate')}/>
                </div>
                <div className="submit">
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default PostPage;