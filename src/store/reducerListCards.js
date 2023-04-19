import { listCards } from "../components/Main/listCards";


const defaultState = listCards;

export const reducerListCards = (state = defaultState, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state }


        default:
            return state ;
    }
};