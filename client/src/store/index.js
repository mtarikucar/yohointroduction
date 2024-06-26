import languageReducer from "./LanguageSlice";
import darkModeReducer from "./DarkModeSlice";
import sectionItemReducer from "./SectionItemSlice.js";

import {configureStore, combineReducers} from '@reduxjs/toolkit';


import storage from 'redux-persist/lib/storage';


import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

// Combine the reducers first
const rootReducer = combineReducers({
    language: languageReducer,
    darkMode: darkModeReducer,
    sectionItem: sectionItemReducer
});

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;
