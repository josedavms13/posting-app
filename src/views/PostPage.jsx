import React, {} from 'react';
import './viewsStyles/postPageStyles.css'
import {useForm} from "react-hook-form";

import nameUpperCasing from "../utilities/nameUpperCasing";
import POSTComment from "../../services/POSTComment";


function PostPage({userData}) {

    const {handleSubmit, register} = useForm();

    function submitComment(values){

        console.log(userData);
        const dataToPost={
            token: userData.id,
            comment : values,
        }

        POSTComment(dataToPost);


    }

    return (
        <div className={'post-page'}>
            <div className="greetings-section">
                <h1>Hola { nameUpperCasing(userData.name) }</h1>
                <h2>Gracias por querer comentar!</h2>
            </div>
            <form onSubmit={handleSubmit((values)=>submitComment(values))}>
                <div className="user-name form-field input-group">

                    <label className={'form-label'}>Ingresa tu Nombre *</label>
                    <input required={true}  type={'text'} {...register('userName')}/>
                </div>

                <div className="user-position form-field input-group">
                    <label className={'form-label'}>Ingresa tu cargo o posición</label>
                    <input type={'text'} {...register('userPosition')}/>
                </div>

                <div className="user-relation form-field input-group">
                    <label className={'form-label'}>¿Qué relacion que tienes conmigo? *</label>
                    <input required={true} type={'text'} {...register('userRelation')}/>
                </div>

                <div className="user-comment form-field input-group">
                    <label className={'form-label'}>Ingresa tu comentario *</label>
                    <input required={true} type={'text'} {...register('userComment')}/>
                </div>

                <div className="user-comment form-field input-group">
                    <label className={'form-label'}>De 1 a 5 como calificarías mi trabajo</label>
                    <input min={1} max={5} type={'number'} {...register('userRate')}/>
                </div>
                <div className="submit">
                    <button type={"submit"}>Submit</button>
                </div>
            </form>
        </div>
    );
}

export default PostPage;