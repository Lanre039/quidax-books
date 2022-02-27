import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import collectionReducer from "./collectionReducer";
import cartReducer from "./cartReducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // ie things to persist
};

const rootReducer = combineReducers({
  collections: collectionReducer,
  cart: cartReducer,
});

export default persistReducer(persistConfig, rootReducer);
