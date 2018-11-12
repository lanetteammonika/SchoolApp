import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL,LOGOUT} from "./Type";


export const loginUser=(user)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.login,'post',user,{}).then((response)=>{
            return Promise.all([
                dispatch({
                    type:USER_DETAIL,
                    payload:response.data
                })
            ]).then(r=>{
                return Promise.resolve(response.data)
            });
        }).catch((err)=>{
        })
    }
};


export const logout=()=>{
    return(dispatch,getState)=>{
        return dispatch({
            type:LOGOUT,
            payload:null
        });
    }
};



