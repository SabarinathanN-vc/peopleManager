import React, { useState ,useEffect} from "react";
// people mangement url is coming from constan file for future changing of url(esasy to maintain) 
import {PeopleManagementURL} from "../utils/constant";
import {ReadData} from "../utils/httpMthodHandling";
import "./users-list.scss";

const UserList = () => {
    //In this useState we have getting the array of values from the response
    const[userDetails ,setUserDetails] =useState([])

    //here we use the useEffect for unwanted data re-rendering 
    useEffect(()=>{
        // here we calling the ReadData function , and then we pass argument to the httpmethodHandling
        ReadData(PeopleManagementURL.USER_DETAILS,setUserDetails)
        .then(res=>{
           setUserDetails(res.data.users)
        })
    },[])//---> here there we apply any dependencies on that time the useEffect will rerender

    // in that we have two functions one is an imediate one time execution and anoter one is based on changes occures in the dependencies 
    // it will rerender.

    return ( <div>
        <h1 className="title-bar">USER DETAILS</h1>
        <div className="cardContainer-wrapper">
            {/* here we using map function to get array of individual datas ,here we creating a template for the card list to render the data to particular area  */}
        {userDetails.map((res)=>{
            return (
                // key is used for unique cards
                <div className="card-container" key={res.id}>
                <div className="card-left-content">
                    <div className="left-container-wrapper">
                   <div className="image-container">
                   <img className="image-content" src={res.image}></img>
                    </div> 
                    <div className="contact-info-box">
                    <p className="contact-box-title">Contact</p>
                     <p className="tel-phone-number"> <a href={`tel:${res.phone}`}>{`M:${res.phone}`}</a></p> 
                     <p className="mail-contact"><a href={`mailto:${res.email}`}>Connect with Email</a></p>
                    </div>
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