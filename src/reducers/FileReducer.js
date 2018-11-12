import {FILE_DETAIL} from '../actions/Type';
const INTIAL_STATE={
    fileDetail: {
        file_id:0,
        file_name:'',
        file_type:'',
        file:'',
        file_description:'',
        user_id:0
    }
};

export default (state=INTIAL_STATE,action)=> {
    switch (action.type) {
        case FILE_DETAIL:
            return {...state, fileDetail: action.payload};
        default:
            return state;
    }
}