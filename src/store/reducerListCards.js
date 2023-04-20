import { listCards } from "../data servece/listCards";

const defaultState = listCards;

export const reducerListCards = (state = defaultState, action) => {
    switch (action.type) {
        default:
            return state ;
    }
};