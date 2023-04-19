import { legacy_createStore as createStore, combineReducers } from "redux";
import { reducerCards } from "./reducerCards";
import { reducerListCards } from './reducerListCards';

const rootReducer = combineReducers({
    cards: reducerCards,
    listCards: reducerListCards
});

export const store = createStore(rootReducer);