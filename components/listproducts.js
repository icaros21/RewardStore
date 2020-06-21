import React, {useEffect, Fragment} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtenerProductosAction, confirmaCompraAction, obtenerUserInfoAction} from '../redux/actions/actions';
import ProductItem from './product';
import Router from 'next/router';

const ListProducts = () => {
    const dispatch = useDispatch();

    const obtenerProductos = () => dispatch(obtenerProductosAction());
    const obteneruserInfo = () => dispatch(obtenerUserInfoAction());

    useEffect(() => {
        obtenerProductos();
    }, [])

    const products = useSelector(state => state.storeContext.products);
    const productSelectedName = useSelector(state => state.storeContext.productSelectedName);
    const idCompra = useSelector(state =>  state.storeContext.idCompraSelected)

    const confirmaCompra = () => dispatch(confirmaCompraAction({idCompra}));


    const toggleModal = () =>{
        let modal = document.getElementById('modalCompra');

        if(modal.className === 'modal'){
            modal.classList.add("is-active");
        }
        else{
            modal.classList.remove("is-active");
        }
    }

    const onConfirmPurchaseHandler = () =>{
        confirmaCompra().then(() => {
            obteneruserInfo();
            Router.push('/historial');
        });
    }

    return ( 
        <section className="container is-fluid">
            <div className="columns is-multiline">
                    {
                        products.map((product) => (
                            <div className="column is-one-fifth" key={product._id}>    
                                <ProductItem product= {product} onToggle = {toggleModal} isHistory = {false}/>
                            </div>
                        ))
                    }
            </div>
            <div className="modal" id="modalCompra">
                <div className="modal-background"></div>
                <div className="modal-card">
                    <header className="modal-card-head">
                        <p className="modal-card-title">Estas seguro que deseas realizar la compra?</p>
                        <button className="delete" aria-label="close" onClick={toggleModal}></button>
                    </header>
                    <section className="modal-card-body">
                        <p>Producto: <strong>{productSelectedName}</strong></p>
                    </section>
                    <footer className="modal-card-foot">
                        <button className="button is-success" onClick={onConfirmPurchaseHandler}>Comprar</button>
                        <button className="button" onClick={toggleModal}>Cancelar</button>
                    </footer>
                </div>
            </div>
        </section>
     );
}
 
export default ListProducts;