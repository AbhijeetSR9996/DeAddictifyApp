import { RESTIOSN } from '../type';
const initialState = {
    email: '',
    password: '',
};
const RestistonReducers = (state = initialState, action) => {
    switch (action.type) {
        case RESTIOSN:
            console.log("<RestistonReducers >>>>>>", action.payload)
            const mp = {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
            return mp;

        default:
            return state;
    }
}
export default RestistonReducers;
