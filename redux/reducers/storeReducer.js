import {
    OBTENER_PRODUCTOS,
    OBTENER_PRODUCTOS_EXITO,
    OBTENER_PRODUCTOS_ERROR,
    OBTENER_USERINFO,
    OBTENER_USERINFO_ERROR,
    OBTENER_USERINFO_EXITO,
    SELECCIONAR_PRODUCTO,
    SELECCIONAR_PRODUCTO_ERROR,
    SELECCIONAR_PRODUCTO_EXITO,
    CONFIRMAR_COMPRA,
    CONFIRMAR_COMPRA_EXITO,
    CONFIRMAR_COMPRA_ERROR,
    REFILL_PUNTOS,
    REFILL_PUNTOS_ERROR,
    REFULL_PUNTOS_EXITO,
    MOSTRAR_HISTORIAL,
    MOSTRAR_HISTORIAL_ERROR,
    MOSTRAR_HISTORIAL_EXITO
} from '../types'

const initialState = {
    puntos: 0,
    products: [],
    history:[],
    userInfo:null,
    loading:false,
    error: false,
    idCompraSelected : "",
    productSelectedName: ""
}

export default function(state = initialState, action){
    switch(action.type){
        case OBTENER_PRODUCTOS:
            return{
                ...state,
                loading: true
            }
        case OBTENER_PRODUCTOS_EXITO:
            return{
                ...state,
                loading: false,
                products: action.payload
            }
        case OBTENER_PRODUCTOS_ERROR:
            return{
                ...state,
                error:true
            }
        case OBTENER_USERINFO:
            return{
                ...state,
                loading: true
            }
        case OBTENER_USERINFO_EXITO:
            return{
                ...state,
                loading: false,
                userInfo: action.payload
            }
        case OBTENER_USERINFO_ERROR:
            return{
                ...state,
                error:true
            }
        case SELECCIONAR_PRODUCTO:
            return{
                ...state,
                loading: true
            }
        case SELECCIONAR_PRODUCTO_EXITO:
            return{
                ...state,
                loading: false,
                productSelectedName: action.payload.name,
                idCompraSelected: action.payload._id

            }
        case SELECCIONAR_PRODUCTO_ERROR:
            return{
                ...state,
                error:true
            }
        case CONFIRMAR_COMPRA:
            return{
                ...state,
                loading: true
            }
        case CONFIRMAR_COMPRA_EXITO:
            return{
                ...state,
                loading: false,
            }
        case CONFIRMAR_COMPRA_ERROR:
            return{
                ...state,
                error:true
            }
        case REFILL_PUNTOS:
            return{
                ...state,
                loading: true
            }
        case REFULL_PUNTOS_EXITO:
            return{
                ...state,
                loading: false,
            }
        case REFILL_PUNTOS_ERROR:
            return{
                ...state,
                error:true
            }
        case MOSTRAR_HISTORIAL:
            return{
                ...state,
                loading: true
            }
        case MOSTRAR_HISTORIAL_EXITO:
            return{
                ...state,
                loading: false,
                history: action.payload
            }
        case MOSTRAR_HISTORIAL_ERROR:
            return{
                ...state,
                error:true
            }
    }

    return state;
}