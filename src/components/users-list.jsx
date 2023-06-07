import React, { useState ,useEffect} from "react";
import PeopleManagementURL from "../utils/constant";
import ReadData from "../utils/httpMthodHandling";
import "./users-list.scss";

const UserList = () => {
    const[userDetails ,setUserDetails] =useState([])

    useEffect(()=>{
        ReadData(PeopleManagementURL.USER_DETAILS,setUserDetails)
        .then(res=>{
           setUserDetails(res.data.users)
        })
    },[])

    return ( <div>
        <h1 className="title-bar">USER DETAILS</h1>
        <div className="cardContainer-wrapper">
        {userDetails.map((res)=>{
            return (
                <div className="card-container">
                <div className="card-left-content">
                   <div className="image-container">
                   <img className="image-content" src={res.image}></img>
                    </div> 
                    <div className="contact-info-box">
                    <p className="contact-box-title">Contact</p>
                     <p className="tel-phone-number"> <a href={`tel:${res.phone}`}>{`M:${res.phone}`}</a></p> 
                     <p className="mail-contact"><a href={`mailto:${res.email}`}>Connect with Email</a></p>
                    </div>
                </div>
                <div className="user-details">
                  <h1 className="name-content">{`${res.firstName}${res.lastName}`}</h1>
                  <div className="designation-data">
                  <p>{`Department:${res.company.title}`}</p>
                  <p>{`Designation:${res.company.department}`}</p>
                  </div>
                 
                </div>
             </div>
            )
        })}
    </div> 
    </div>);
}
 
export default UserList;