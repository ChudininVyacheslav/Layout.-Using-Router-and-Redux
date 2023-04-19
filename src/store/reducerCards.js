import { breakstone } from "../cards/Breakstone/Breakstone";

const defaultStateBreakstone = breakstone;

export const reducerCards = (state = defaultStateBreakstone, action) => {
    switch (action.type) {
        default:
            return { ...state };
    };
};