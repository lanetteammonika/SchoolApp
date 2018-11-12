import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {NOTE_DETAIL,NOTE_LIST} from '../actions/Type';

export const insertNote=(note)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.insertNote,'post',note,{"Authorization":getState().user.userDetail.token}).then((res)=>{
            return Promise.all([
                dispatch({
                    type:NOTE_DETAIL,
                    payload:res.data
                })
            ]).then(r=>{
                return Promise.resolve(res.data)
            });
        }).catch((err)=>{
            return Promise.reject(res.data)
        })
    }

};
export const getAllNotes=()=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.getNotes,'get',{},{"Authorization":getState().user.userDetail.token}).then((res)=>{
            return Promise.all([
                dispatch({
                    type:NOTE_LIST,
                    payload:res.response
                })
            ]).then(res=>{
                return Promise.resolve(res.response)
            });
        }).catch((err)=>{
            return Promise.reject(res.msg)
        })
    }

};

