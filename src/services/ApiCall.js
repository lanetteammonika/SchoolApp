import axios from 'axios';
import {ActivityIndicator} from 'react-native';


export function callApi(url,type='get',data={},header={},indicator = false) {
    let reqHeader = Object.assign(header, {"Accept":"application/json", "Content-Type": "application/json"});
    if(type === 'get'){

        return axios.get(url,{headers: reqHeader})
            .then((response) => {
                console.log(url);
                return Promise.resolve(response.data)
            })
            .catch((err) => {
                console.log("Api error");
                return Promise.reject(err);
            });
    }else if(type === 'post') {

        return axios.post(url,data,{headers: reqHeader})
            .then((response) => {
                console.log(url);
                return Promise.resolve(response)
            })
            .catch((err) => {
                console.log(url);
                return Promise.reject(err);
            });
    }else if(type === 'delete'){
        return axios.delete(url,{headers:reqHeader})
            .then((response) => {
                return Promise.resolve(response);
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    }else if(type === 'put'){
        debugger
        return axios.put(url,data,{headers:reqHeader})
            .then((response) => {
                debugger
                return Promise.resolve(response);
            })
            .catch((err) => {
                debugger
                return Promise.reject(err);
            });
    }
}