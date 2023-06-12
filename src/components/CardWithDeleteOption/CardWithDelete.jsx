import React, { useEffect, useState } from "react";
import {UserCRUDportal} from '../../utils/constant'
import {ReadData,DeleteData} from '../../utils/httpMthodHandling'
import Button from "../atomComp/Button";

const CardDelete =(()=>{

    const [getDataApi ,setDataApi] = useState([]);

    useEffect(()=>{
        getUserDetails()
    },[])
const getUserDetails =(()=>{
    ReadData(UserCRUDportal.CRUD_USER_DETAILS)
    .then((res)=>{
        setDataApi(res.data)
     
    })
})
    

    const deleteUser =((userId)=>{
        DeleteData(`${UserCRUDportal.CRUD_USER_DETAILS}${userId}`)
        .then((res)=>{
            getUserDetails()
        })
        
    })


    return (<div className="delete-card">
        {getDataApi.map((res)=>{
            return(
                
          <div className="card-container" key={res.id}>
            <p className="full-name">{`${res.firstname}${res.lastname}`}</p>
            <p className="display-email">{res.email}</p>
            <p className="display-phoneNumber">{res.phonenumber}</p>
            <p className="display-gender">{res.gender}</p>
            <Button 
            type={"button"}
            className={"delete-card-btn"}
            buttonText={"Delete user"}
            onclick={()=>deleteUser(res.id)}
            
            />
        </div>
            )
        })}
        
    </div>)
})

export default CardDelete