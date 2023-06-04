// import { configStore, combineReducers, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import RestistonReducers from '../Redux/Reducers/RestistonReducers';
// const rootReducer = combineReducers(
//     RestistonReducers,
// );
// const configStore = () => {
//     return configStore(rootReducer,applyMiddleware(thunk));
// }
// export default configStore;



import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RestistonReducers from '../Redux/Reducers/RestistonReducers';
const rootReducer = combineReducers(
    RestistonReducers,
);
const configureStore = () => {
    return createStore(rootReducer,applyMiddleware(thunk));
}
export default configureStore;


