import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/home.css'
import '../src/assets/css/footer.css'
import './i18n'

const Loader = () => {
    return <div style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh',backgroundColor:'#1f2645'}}>
        <div className="loader">
            <div className="react-star">
                <div className="nucleus"></div>
                <div className="electron electron1"></div>
                <div className="electron electron2"></div>
                <div className="electron electron3"></div>
            </div>
        </div>

    </div>

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback={<Loader/>}>
            <App/>
        </Suspense>
    </React.StrictMode>
)
;


reportWebVitals();
