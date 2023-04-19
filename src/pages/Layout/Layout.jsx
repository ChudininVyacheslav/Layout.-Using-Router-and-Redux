import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Technic from '../../pages/Technic/Technic';
import Documents from '../../pages/Documents/Documents';
import Breakstone from '../../pages/cards/Breakstone/Breakstone';
import Contacts from '../../pages/Contacts/Contacts';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Catalog />
    },
    {
        path: '/technic',
        element: <Technic />
    },
    {
        path: '/documents',
        element: <Documents />
    },
    {
        path: '/breakstone',
        element: <Breakstone />
    },
    {
        path: '/contacts',
        element: <Contacts />
    },
]);

const Layout = () => {
    return (
        <div>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    )
};

export default Layout