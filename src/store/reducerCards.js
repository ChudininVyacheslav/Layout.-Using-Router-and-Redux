import { breakstone } from "../cards/Breakstone/Breakstone";

const defaultStateBreakstone = breakstone;


export const reducerCards = (state = defaultStateBreakstone, action) => {
    switch (action.type) {
        case 'SHOW':
            return { ...state }


        default:
            return { ...state };
    }
};