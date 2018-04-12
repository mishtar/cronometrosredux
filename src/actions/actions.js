export const UPDATING_CHRONOMETHER = 'UPDATING_CHRONOMETHER';
export const updatingChronomether = (updating, id, time) => {
    return {
        type: UPDATING_CHRONOMETHER,
        payload: {id, updating, time}
    }
};

export const CREATING_CHRONOMETHER = 'CREATING_CHRONOMETHER';
export const creatingChronomether = (creating) => {
    return {
        type: CREATING_CHRONOMETHER,
        payload: creating
    }
};

export const CREATE_NEW_CHRONOMETHER = 'CREATE_NEW_CHRONOMETHER';
export const createChronomether = (chronomether) => {
    return {
        type: CREATE_NEW_CHRONOMETHER,
        payload: chronomether
    }
};

export const UPDATE_CHRONOMETHER = 'UPDATE_CHRONOMETHER';
export const updateChronomether = (id) => {
    return {
        type: UPDATE_CHRONOMETHER,
        payload: id
    }
};

export const START_CHRONOMETHER_TIMER = 'START_CHRONOMETHER_TIMER';
export const startChronometherTimer = (id) => {
    return {
        type: START_CHRONOMETHER_TIMER,
        payload: id
    }
};

export const STOP_CHRONOMETHER_TIMER = 'STOP_CHRONOMETHER_TIMER';
export const stopChronometherTimer = (id, time) => {
    return {
        type: STOP_CHRONOMETHER_TIMER,
        payload: {id, time}
    }
};

export const DELETE_CHRONOMETHER = 'DELETE_CHRONOMETHER';
export const deleteChronomether = (id) => {
    return {
        type: DELETE_CHRONOMETHER,
        payload: id
    }
};