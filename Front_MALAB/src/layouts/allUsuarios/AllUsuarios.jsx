import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addChoosen } from '../userDetail/detailSlice';
import { userData } from '../userDetail/userSlice';
import { allUsers } from '../../services/apiCalls';
import '../allUsuarios/AllUsuarios.css'

export const AllUsuarios = () => {

    const [usuarios, setUsuarios] = useState([]);
    const ReduxCredentials = useSelector(userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(usuarios.length === 0){
            allUsers(ReduxCredentials.credentials.token)
            .then(
                result => {
                    setUsuarios(result.data.lista_usuarios)
                },
                console.log(ReduxCredentials)
            )
            .catch(error => console.log(error));
        }
    }, [usuarios])
    console.log(usuarios)

    const selected = (persona) => {
        dispatch(addChoosen({ choosenObject: persona}))
        setTimeout(() => {
            navigate('/infousuario');
        }, 500);
    }

  return (
    <>
        <div className='containerGeneral'>
            <div className='userTitle'><h1>USUARIOS</h1></div>
            { usuarios.length > 0 ? 
                (<div className='usersContainer'>{usuarios.map(
                    persona => {
                        return (
                        <div
                        onClick={()=>selected(persona)} 
                        key={persona.id} className='usersDesign'>
                        {/* {persona.first_name} */}
                        {persona.nombre}
                        </div>
                        )
                    })
                    }
                </div>)
                : 
                (<div>......</div>)
            }
        </div>
        </>
  )
}
