import {createStore} from 'redux';
import data from '../data/chronomethers.json';
import {
    UPDATING_CHRONOMETHER,
    CREATE_NEW_CHRONOMETHER,
    DELETE_CHRONOMETHER,
    START_CHRONOMETHER_TIMER,
    STOP_CHRONOMETHER_TIMER,
    UPDATE_CHRONOMETHER,
    CREATING_CHRONOMETHER
} from '../actions/actions';

const initialState = {chronomethers: data, creating: false};
const reducer = (state=initialState, action) => {
    switch(action.type){
        case UPDATING_CHRONOMETHER:
            return {...state, chronomethers: state.chronomethers.map(x =>
                x.id === action.payload.id ? {...x, editing: action.payload.updating, time: action.payload.time} : x
            )};
        case CREATING_CHRONOMETHER:
            return {...state, creating: action.payload};
        case CREATE_NEW_CHRONOMETHER:
            return {...state,creating: false, chronomethers: [...state.chronomethers,  {...action.payload,editing:false, time:0, id: state.chronomethers.length + 1}]};
        case DELETE_CHRONOMETHER:
            return {...state, chronomethers: state.chronomethers.filter(x => x.id !== action.payload)};
        case UPDATE_CHRONOMETHER:
            return {...state, chronomethers: state.chronomethers.map(x =>  
                x.id === action.payload.id ? {...x, title: action.payload.title, project: action.payload.project, editing: false} : x
            )};
        case START_CHRONOMETHER_TIMER:
            return {...state, chronomethers: state.chronomethers.map(x =>  x.id === action.payload ? {...x, started: true} : x)};
        case STOP_CHRONOMETHER_TIMER:
            return {...state, chronomethers: state.chronomethers.map(x =>
                x.id === action.payload.id ? {...x, started: false, time: action.payload.time} : x
            )};
        default:
            return state;
    }
}

export default createStore(reducer, initialState);