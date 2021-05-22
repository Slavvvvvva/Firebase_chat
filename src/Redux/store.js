import {combineReducers, createStore, applyMiddleware,compose} from "redux"
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"
/* import thunkMiddleware from 'redux-thunk' */
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: [/* 'cart' */]
}

const rootRedusers = combineReducers({
    /* GlobalSettings: GlobalSettingsReduser,
    Weather: WeatherReduser,
    form: formReducer */
})

const redusers = persistReducer(persistConfig, rootRedusers)

const middleware =[/* thunkMiddleware */]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    redusers,
    composeEnhancers(
    applyMiddleware(...middleware)
    )
)

export const persistor = persistStore(store)
export default store