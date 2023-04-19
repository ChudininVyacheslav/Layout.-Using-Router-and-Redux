import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Catalog from '../Catalog/Catalog';
import Technic from '../../pages/Technic/Technic';
import Documents from '../../pages/Documents/Documents';
import Breakstone from '../../pages/cards/Breakstone/Breakstone';
import Contacts from '../../pages/Contacts/Contacts';
import { breakstone } from '../../cards/Breakstone/Breakstone';
import { legacy_createStore as createStore } from 'redux';
import { Provider } from 'react-redux';
import { listCards } from '../../components/Main/listCards';
import { store } from '../../store/store';




const defaultStateBreakstone = breakstone;

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
const action = { type: 'SHOW', payload: '' };

// const reducerCards = (state = defaultStateBreakstone, action) => {
//     switch (action.type) {
//         case 'SHOW':
//             return { ...state }


//         default:
//             return { ...state };
//     }
// };

// const reducerListCards = (state = defaultStateBreakstone, action) => {
//     switch (action.type) {
//         case 'SHOW':
//             return { ...state }


//         default:
//             return { ...state };
//     }
// };

// const store = createStore(reducerCards);
const Layout = () => {

    // const [cards, setCards] = useState(breakstone);

    return (
        <div>
            <Provider store={store}>
                <RouterProvider router={router} />
            </Provider>
        </div>
    )
}

export default Layout