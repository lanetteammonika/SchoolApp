import {STUDENT_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    studentDetail: []
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case STUDENT_DETAIL:
            return {...state, studentDetail: action.payload};
        default:
            return state;
    }
}