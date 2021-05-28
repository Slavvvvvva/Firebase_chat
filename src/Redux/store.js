import {combineReducers, createStore, applyMiddleware,compose} from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
import thunkMiddleware from 'redux-thunk'
import storage from 'redux-persist/lib/storage'
import userReducer from "./user/user-reduser"

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [/* 'cart' */]
}

const rootRedusers = combineReducers({
    user: userReducer
})

const redusers = persistReducer(persistConfig, rootRedusers)

const middleware =[thunkMiddleware]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    redusers,
    composeEnhancers(
    applyMiddleware(...middleware)
    )
)

export const persistor = persistStore(store)
export default store