import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Technic from '../../pages/Technic/Technic';
import Documents from '../../pages/Documents/Documents';
import Breakstone from '../../pages/cards/Breakstone/Breakstone';
import Contacts from '../../pages/Contacts/Contacts';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import Rock from '../cards/Rock/Rock';
import Land from '../cards/Land/Land';

const router = createBrowserRouter([
    {
        path: '/Layout.-Using-Router-and-Redux',
        element: <Catalog />
    },
    {
        path: '/Layout.-Using-Router-and-Redux/technic',
        element: <Technic />
    },
    {
        path: '/Layout.-Using-Router-and-Redux/documents',
        element: <Documents />
    },
    {
        path: '/Layout.-Using-Router-and-Redux/contacts',
        element: <Contacts />
    },
    {
        path: '/Layout.-Using-Router-and-Redux/product/1',
        element: <Breakstone />
    },
    {
        path: '/Layout.-Using-Router-and-Redux/product/2',
        element: <Rock />
    },
    {
        path: '/Layout.-Using-Router-and-Redux/product/3',
        element: <Land />
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