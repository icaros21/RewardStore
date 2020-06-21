import clienteAxios from '../../config/axios';
import {
    OBTENER_PRODUCTOS,
    OBTENER_PRODUCTOS_ERROR,
    OBTENER_PRODUCTOS_EXITO,
    OBTENER_USERINFO,
    OBTENER_USERINFO_EXITO,
    OBTENER_USERINFO_ERROR,
    SELECCIONAR_PRODUCTO,
    SELECCIONAR_PRODUCTO_EXITO,
    SELECCIONAR_PRODUCTO_ERROR,
    CONFIRMAR_COMPRA,
    CONFIRMAR_COMPRA_EXITO,
    CONFIRMAR_COMPRA_ERROR,
    REFILL_PUNTOS,
    REFILL_PUNTOS_ERROR,
    REFULL_PUNTOS_EXITO,
    MOSTRAR_HISTORIAL,
    MOSTRAR_HISTORIAL_EXITO,
    MOSTRAR_HISTORIAL_ERROR
} from '../types';

export function obtenerProductosAction(){
    return async(dispatch) => {
        dispatch(obtenerProductos());

        try {
            clienteAxios.get('products').then((result) => {
                dispatch(obtenerProductosExito(result.data));
            });
        } catch (error) {
            dispatch(obtenerProductosError());
        }
    }
}

export function obtenerUserInfoAction(){
    return async(dispatch) => {
        dispatch(obtenerUserInfo());

        try {
            clienteAxios.get('user/me').then((result) => {
                dispatch(obtenerUserInfoExito(result.data));
            });
        } catch (error) {
            dispatch(obtenerUserInfoError());
        }
    }
}

export function seleccionarProductoAction(selectedProduct){
    return async(dispatch) => {
        dispatch(seleccionarProducto());

        try {
            
            dispatch(seleccionarProductoExito(selectedProduct));
           
        } catch (error) {
            dispatch(seleccionarProductoError());
        }
    }
}

export function confirmaCompraAction({idCompra}){
    
    var params = {
        productId : idCompra
    };

    return async(dispatch) => {
        dispatch(confirmaCompra());

        try {
            clienteAxios.post('redeem/', params).then(() => {
                dispatch(confirmaCompraExito());
            });
        } catch (error) {
            dispatch(confirmaCompraError());
        }
    }
}

export function refillPuntosAction(){
    
    var params = {
        amount : 5000
    };

    return async(dispatch) => {
        dispatch(refillPuntos());

        try {
            clienteAxios.post('user/points', params).then(() => {
                dispatch(refillPuntosExito());
            });
        } catch (error) {
            dispatch(refillPuntosError());
        }
    }
}
export function mostrarHistorialAction(){
    
    return async(dispatch) => {
        dispatch(mostrarHistorial());

        try {
            clienteAxios.get('user/history').then((result) => {
                dispatch(mostrarHistorialExito(result.data));
            });
        } catch (error) {
            dispatch(mostrarHistorialError());
        }
    }
}

const obtenerProductos = () => ({
    type: OBTENER_PRODUCTOS,
    payload: true
})

const obtenerProductosExito = (products) => ({
    type: OBTENER_PRODUCTOS_EXITO,
    payload: products
})

const obtenerProductosError = () => ({
    type:OBTENER_PRODUCTOS_ERROR,
    payload: true
})

const obtenerUserInfo = () => ({
    type: OBTENER_USERINFO,
    payload: true
})

const obtenerUserInfoExito = (userInfo) => ({
    type: OBTENER_USERINFO_EXITO,
    payload: userInfo
})

const obtenerUserInfoError = () => ({
    type:OBTENER_USERINFO_ERROR,
    payload: true
})

const seleccionarProducto = () => ({
    type: SELECCIONAR_PRODUCTO,
    payload: true
})

const seleccionarProductoExito = (selectedProduct) => ({
    type: SELECCIONAR_PRODUCTO_EXITO,
    payload: selectedProduct
})

const seleccionarProductoError = () => ({
    type: SELECCIONAR_PRODUCTO_ERROR,
    payload: true
})

const confirmaCompra = () => ({
    type: CONFIRMAR_COMPRA,
    payload: true
})

const confirmaCompraExito = () => ({
    type: CONFIRMAR_COMPRA_EXITO,
    payload: false
})

const confirmaCompraError = () => ({
    type: CONFIRMAR_COMPRA_ERROR,
    payload: true
})

const refillPuntos = () => ({
    type: REFILL_PUNTOS,
    payload: true
})

const refillPuntosExito = () => ({
    type: REFULL_PUNTOS_EXITO,
    payload: false
})

const refillPuntosError = () => ({
    type: REFILL_PUNTOS_ERROR,
    payload: true
})

const mostrarHistorial = () => ({
    type: MOSTRAR_HISTORIAL,
    payload: true
})

const mostrarHistorialExito = (historial) => ({
    type: MOSTRAR_HISTORIAL_EXITO,
    payload: historial
})

const mostrarHistorialError = () => ({
    type: MOSTRAR_HISTORIAL_ERROR,
    payload: true
})


