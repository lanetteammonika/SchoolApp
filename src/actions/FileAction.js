import {callApi} from '../services/ApiCall';
import ApiConstant from '../services/ApiConstant'
import {FILE_DETAIL} from "./Type";

export const insertFile=(file)=>{
    return(dispatch,getState)=>{
        const data= new FormData();
        data.append('file_name',file.file_name);
        data.append('file_type',file.file_type);
        data.append('file_info',file.file_info);
        data.append('file_description',file.file_description);
        data.append('user_id',file.user_id);
        return callApi(ApiConstant.baseUrl+ApiConstant.upload,'post',data,{}).then((res)=>{

            dispatch({
                type:FILE_DETAIL,
                payload:data
            })

        }).catch((err)=>{
            console.log(err);
        })
    }

};
export const getFile=()=>{
    return(dispatch,getState)=>{
        return callApi(ApiConstant.baseUrl+ApiConstant.upload,'get',{},{}).then((res)=>{
            dispatch({
                type:FILE_DETAIL,
                payload:res
            });
            return Promise.resolve(res);
        }).catch((err)=>{
        })
    }
};