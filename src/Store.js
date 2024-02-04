import { createStore } from "redux";

import rootReducer from "./redux/reducer/CombineReducer";


export  const Store = createStore(rootReducer);