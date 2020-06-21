import React from 'react';
import Link from 'next/link';

const Navegation = () => {
    return ( 
        <nav className="navbar is-info">
            <div id="navbarExampleTransparentExample" className="navbar-menu">
                <div className="navbar-brand">
                    
                </div>
                <div className="navbar-start">
                    <Link href='/'>
                        <a className="navbar-item">
                            Home
                        </a>
                    </Link>
               
                    <a className="navbar-item is" href="/historial">
                        Historial
                    </a>

                    <Link href='/perfil'>
                        <a className="navbar-item">
                            Mi Perfil
                        </a>
                    </Link>
                </div>
            </div>
        </nav>
     );
}
 
export default Navegation;