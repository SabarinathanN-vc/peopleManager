import React from 'react';
import axios from 'axios'

// In this file we having methods ReadData method is used for read the data, postData method is used for post data

// Read Data
export const ReadData =((url,headers={})=>{
    
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


// //Post data
export const PostData =((url,payload,headers ={})=>{
    const sendData =new Promise((resolve,reject)=>{
        axios.post(url,payload,headers)
        .then((res) =>{
            resolve(res)
        })
        .catch((err)=>{
            reject(err)
        })
    })
    return sendData
})