import React from 'react';
import axios from 'axios'

const ReadData =((url,headers={})=>{
    
    const getPromise = new Promise((resolve,reject)=>{
        axios.get(url,headers)
        .then((result)=>{
            resolve(result);
        })
        .catch((err)=>{
            reject(err)
        })
    })
    return getPromise;
});

export default ReadData;