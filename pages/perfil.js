import React, { Fragment } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { refillPuntosAction} from '../redux/actions/actions';
import swal from 'sweetalert2';

const Perfil = () => {
    const dispatch = useDispatch();
    
    const userInfo = useSelector(state => state.storeContext.userInfo);

    const refillPuntos = () => dispatch(refillPuntosAction());

    const redeemHandler = () =>{
        refillPuntos().then(() => {
            swal.fire('Confirmación', "Puntos Agregados", "success");
        })
    }

    return ( 
        <section className="container is-fluid">
            <div className="columns">
                <div className="column is-one-quarter">
                    <div className="field">
                        <label className="label">Nombre</label>
                        <div className="control">
                            <input className="input" type="text" placeholder={userInfo !== null ? userInfo.name : ""} />
                        </div>
                    </div>

                
                    <div className="field">
                        <label className="label">Puntos</label>
                        <div className="control">
                            <input className="input" type="text" placeholder={userInfo !== null ? userInfo.points : ""}/>
                        </div>
                    </div>

                    <div className="field">
                        <div className="control">
                            <button type="button" className="button is-primary" onClick={redeemHandler}>Sumar 5000 Puntos</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Perfil;