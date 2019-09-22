import {createStore, combineReducers} from 'redux';
import listReducer from '../src/features/list/reducers';

function saveToLocalStorage(state){
 try{
     const serializedState = JSON.stringify(state)
     localStorage.setItem('state', serializedState)
 } catch (e){
     console.log(e)
 }
}

function loadFromLocalStorage(){
    try{
        const serializedState = localStorage.getItem('state')
        if (serializedState === null) return undefined
        return JSON.parse(serializedState)
    } catch (e){
        console.log(e)
        return undefined
    }
}

const rootReducer = combineReducers({
  list:listReducer
})


const persistedState = loadFromLocalStorage()

const store = createStore(
    rootReducer,
    persistedState
)

store.subscribe(() =>saveToLocalStorage(store.getState()))

export default store;