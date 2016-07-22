import { combineReducers } from 'redux'

import GamesReducer from './games'
import SubmitGamesReducer from './submitGame'
import GetGamesReducer from './getGames'
import SearchGamesReducer from './searchGames'
import PossibleLocations from './possibleLocations'
import DeterminedLocation from './determinedLocation'

import UserAuth from './userAuth'

const rootReducer = combineReducers({
  games: GamesReducer,
  submitGame: SubmitGamesReducer,
  getGames: GetGamesReducer,
  searchGames: SearchGamesReducer,
  possibleLocations: PossibleLocations,
  determinedLocation: DeterminedLocation,
  userAuth: UserAuth
})

export default rootReducer;
