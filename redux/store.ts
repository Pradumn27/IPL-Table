import { configureStore } from "@reduxjs/toolkit";
import teamReducer from "./teams"

const store = configureStore({
    reducer: {
        teams: teamReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export default store;
