import {NOTE_DETAIL, NOTE_LIST} from '../actions/Type';
const INTIAL_STATE={
    noteDetail: [],
    noteList:[]
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case NOTE_DETAIL:
            return {...state, noteDetail: action.payload};
        case NOTE_LIST:
            return {...state, noteList: action.payload};
        default:
            return state;
    }
}