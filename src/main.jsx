import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router';
import { Provider } from 'react-redux';
import store from './store/store.js';
import App from './App.jsx';
import './index.scss';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Error404 from './pages/Error404/Error404';
import Account from "./pages/Account/Account.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/account/',
                element: <Account />,
            },
            {
                path: '/*',
                element: <Error404 />,
            },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render (
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>,
);

