export const checkEmail=(email)=>{
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};

export const checkAge=(age)=>{
    var r=/^([0-9].+$)/;
    return r.test(age);
};

export const empty =(email,password,mno,name)=>{
    if(email ==='' && password ==='' && mno ==='' && name ===''){
        return true;
    }
};

export const oneEmpty=(email,mno,password,name)=>{
    if(email === '' || mno === '' || password === '' || name === ''){
        return true;
    }
};

export const emailEmpty=(email)=>{
    if(email ===''){
        return true;
    }
};

export const passwordEmpty=(password)=>{
    if(password ===''){
        return true;
    }
};

export const nameEmpty=(name)=>{
    if(name ===''){
        return true;
    }
};