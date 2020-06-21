import App from 'next/app';
import 'bulma/css/bulma.css';
import  {Provider} from 'react-redux';
import store from '../redux/store';
import Header from '../components/header';
import Navegation from '../components/nav';
import "semantic-ui-css/semantic.css";

const MyApp = (props) => {

    
    const {Component, pageProps} = props;

    return (
        <Provider store={store}>
            <section className="hero is-link">
                <div className="hero-body">
                    <div className="container is-fluid">  
                        <Header/>
                    </div>
                </div>    
            </section>
            <section className="section">
                <Navegation />
            </section>
            <Component {...pageProps}></Component>
            
        </Provider>
    )
}

export default MyApp;