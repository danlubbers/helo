

const intitialState = {
    username: '',
    id: 0,
    profile_pic: ''
}

const USERNAME = 'USERNAME';
const ID = 'ID';
const PROFILE_PIC = 'PROFILE_PIC';


export function userName(name) {
    return {
        type: USERNAME,
        payload: name
    }
}

export function id(newID) {
    return {
        type: ID,
        payload: newID
    }
}

export function profilePic(pic) {
    return {
        type: PROFILE_PIC,
        payload: pic
    }
}


export default function reducer(state = intitialState, action) {
    switch(action.type) {
        case USERNAME:
            return Object.assign({}, state, {name: action.payload})
        case ID:
            return Object.assign({}, state, {newID: action.payload})
        case PROFILE_PIC:
            return Object.assign({}, state, {pic: action.payload})

        default: return state;
    }
}