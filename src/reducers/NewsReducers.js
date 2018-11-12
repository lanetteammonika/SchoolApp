import {NEWS_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    newsDetail: []
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case NEWS_DETAIL:
            return {...state, newsDetail: action.payload};
        default:
            return state;
    }
}