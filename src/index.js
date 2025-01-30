import React, {Suspense} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/home.css'
import './assets/css/about.css'
import './i18n'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Suspense fallback="loading">
            <App/>
        </Suspense>
    </React.StrictMode>
)
;


reportWebVitals();
