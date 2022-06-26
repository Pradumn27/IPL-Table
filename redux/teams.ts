import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Team } from '../types';
import { RootState } from './store';

export interface teamState{
    teams : Team[],
    search : String[]
}

export const initialState: teamState = {
    teams : [],
    search: []
}

const teamSlice = createSlice({
    name: 'teams',
    initialState,
    reducers: {
        setTeams: (state, {payload}: PayloadAction<Team[]>) => {
            state.teams = payload;
        },
        setSearch: (state, {payload}:PayloadAction<String[]>) => {
            state.search = payload;
        },
    }
})

export const { setSearch, setTeams } = teamSlice.actions
export default teamSlice.reducer
export const teamSelector = (state: RootState) => state.teams
