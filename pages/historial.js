import React, {useEffect, useState} from 'react';  
import {useDispatch, useSelector} from 'react-redux';
import {Pagination} from 'semantic-ui-react';
import { mostrarHistorialAction} from '../redux/actions/actions';
import ProductItem from '../components/product';

const Historial = () => {
    const dispatch = useDispatch();

    const historial = useSelector(state => state.storeContext.history);

    const mostrarHistorial = () => dispatch(mostrarHistorialAction());
    
    useEffect(() => {
        mostrarHistorial();

        setPagination({
            ...paginationModel,
            totalPages : historial.length / 10,
            page : 1
        })
    }, [])

    useEffect(() => {
        mostrarHistorial();

        setPagination({
            ...paginationModel,
            totalPages : historial.length / 10,
            items: historial.slice(
                (paginationModel.page - 1) * 10,
                (paginationModel.page - 1) * 10 + 10)
        })
    }, [historial])

    const [paginationModel, setPagination] = useState({
        page: 1,
        totalPages: 0,
        items:[]
    });

    const onSetPageConfigHandler = (event, {activePage}) => {
        setPagination({
            ...paginationModel,
            page : activePage,
            items: historial.slice(
                (activePage - 1) * 10,
                (activePage - 1) * 10 + 10)
        })
    }

    return ( 
        <section className="container is-fluid">
            <div className="columns is-multiline">
                {
                    paginationModel.items.map((product) => (
                        <div className="column is-full" key={product.createDate}>    
                                <ProductItem product= {product} isHistory = {true} />
                        </div>
                    ))
                }

                <Pagination
                    activePage={paginationModel.page}
                    totalPages={paginationModel.totalPages}
                    siblingRange={1}
                    onPageChange={onSetPageConfigHandler}
                />
            </div>
        </section>
     );
}
 
export default Historial;