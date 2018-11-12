import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {USER_DETAIL} from "./Type";
import _ from 'lodash';
export const registerUser=(user)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'post',user,{}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:user
            })

        }).catch((err)=>{
        })
    }

};

export const registrationUser=(user)=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp,'post',user,{}).then((res)=>{
            return Promise.all([
                // dispatch({
                //     type:USER_DETAIL,
                //     payload:res.data
                // })
            ]).then(r=>{
                return res.data
            });
        }).catch((err)=>{
            return Promise.reject(err)
        })
    }
};




export const getUsers=()=>{

    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.getAllUser,'get',{},{"Authorization":getState().user.userDetail.token}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:res
            });
            return Promise.resolve(res);
        }).catch((err)=>{
        })
    }
};
export const updateUserDetail=(id)=>{
    return(dispatch,getState)=>{
        let userData = getState().user.userDetail;
        let userObject = _.find(userData, {user_id: id});
        let val=userObject.status;
        if(val==0){
            val=1;
        }else{
            val=0;
        }
        let index = _.findIndex(userData, userObject);
        userData[index].status=val;
        return callApi(ApiConstant.baseUrl+ApiConstant.signUp+`/${id}`,'put',{},{}).then((res)=>{
            dispatch({
                type:USER_DETAIL,
                payload:_.cloneDeep(userData)
            });
            return Promise.resolve(userData);
        }).catch((err)=>{
            return Promise.reject(err);
        })
    }
};