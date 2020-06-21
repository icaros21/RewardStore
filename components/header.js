import React, {useEffect, Fragment } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { obtenerUserInfoAction} from '../redux/actions/actions';

const Header = () => {
    const dispatch = useDispatch();

    const obteneruserInfo = () => dispatch(obtenerUserInfoAction());

    const userInfo = useSelector(state => state.storeContext.userInfo);

    useEffect(() => {
        obteneruserInfo();
    }, [userInfo])

    return ( 
        <Fragment>
            <section className="section">
                <nav className="level">
                    <div className="level-left">
                        <div className="level-item">
                            <p className="subtitle is-5">
                                <strong>Store Rewards Acamica</strong>
                            </p>
                        </div>
                    </div>
                
                    <div className="level-right">
                        <div className="level-item">
                            <p className="subtitle is-5">
                                <strong>{userInfo !== null ? userInfo.name: ""} | </strong>
                            </p>
                        </div>
                        <div className="level-item">
                            <p className="subtitle is-5">
                                <strong>{userInfo !== null ? userInfo.points: ""} Puntos</strong>
                            </p>
                        </div>
                    </div>
                </nav>
            </section>
        </Fragment>
     );
}
 
export default Header;