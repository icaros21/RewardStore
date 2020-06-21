import React from 'react';
import {useDispatch} from 'react-redux';
import { seleccionarProductoAction} from '../redux/actions/actions';

const ProductItem = ({product, onToggle, isHistory}) => {
    const dispatch = useDispatch();

    const {name, cost, img, _id} = product;

    const seleccionarProducto = () => dispatch(seleccionarProductoAction({name: name, _id: _id}));

    const onComprarHandle = () => {
        seleccionarProducto();
        onToggle();
    }

    return (             
        <div className="box">
            <article className="media">
                <div className="media-left">
                        <figure className="image is-128x128">
                            <img src={img.url} alt="Image" />
                        </figure>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <strong>{name}</strong>
                            <br></br>
                            ${cost}
                        </p>
                    </div>
                    <nav className="level">
                        <div className="level-left">
                            {!isHistory ? <button type="button" className="button is-primary" onClick={e => onComprarHandle()}>Comprar</button> : ""}
                        </div>
                    </nav>
                </div>
            </article>
        </div>
    );
}
 
export default ProductItem;