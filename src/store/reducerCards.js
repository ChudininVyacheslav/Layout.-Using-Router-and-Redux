import { cards } from "../data servece/cards";

const defaultStateBreakstone = cards;

export const reducerCards = (state = defaultStateBreakstone, action) => {
    switch (action.type) {
        default:
            return { ...state };
    };
};