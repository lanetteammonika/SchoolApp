import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {NEWS_DETAIL} from '../actions/Type';

export const getAllNews=(note)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.getNews,'get',note,{"Authorization":getState().user.userDetail.token}).then((res)=>{
            return Promise.all([
                dispatch({
                    type:NEWS_DETAIL,
                    payload:res.response
                })
            ]).then(res=>{
                return Promise.resolve(res.response)
            });
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }

};



