import { configureStore } from "@reduxjs/toolkit";
import advertsSlice from "./slices/adverts";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import favoritesSlice from "./slices/favorites";
import persistStore from "redux-persist/es/persistStore";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import filtersSlice from "./slices/filters";
import appActionsSlice from "./slices/app-actions";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, favoritesSlice.reducer);

const store = configureStore({
  reducer: {
    adverts: advertsSlice.reducer,
    favorites: persistedReducer,
    filters: filtersSlice.reducer,
    appActions: appActionsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export default store;
