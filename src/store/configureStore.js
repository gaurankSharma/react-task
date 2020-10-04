import { createStore, applyMiddleware, compose } from "redux";
import reduxThunk from "redux-thunk";
import rootReducer from "../reducers";

const enhancer = compose(applyMiddleware(reduxThunk));
const configureStore = createStore(rootReducer, {}, enhancer);
export default configureStore;
