import React, { useState, useEffect } from "react";
import Input from "../../atomComp/input";
import { Regex ,UserCRUDportal} from "../../../utils/constant";
import { FormControl } from '@mui/material';
import DropDown from "../../atomComp/DropDown";
import Button from "../../atomComp/Button";
import { PostData } from "../../../utils/httpMthodHandling";
import { InputAdornment, IconButton } from '@mui/material';

const SignUpForm = (() => {

   const [inputVals, setInputVals] = useState({
      email: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      gender: '',
      password: '',
   });
   const [error, setError] = useState({
      firstName: '',
      lastName: '',
      email: '',
      contactNumber: '',
      gender:'',
      password:''
   
   });
   const [genderList, setGenderList] = useState([]);
   const [validForm, setValidForm] = useState(false);

   const firstNameValidation = ((vals) => {
      let trimedvals = vals.trim();
      if (trimedvals === "") {
         setError({ ...error, firstName: "First Name empty" })
      }
      else if (!trimedvals.match(Regex.ONLY_CHAR) || trimedvals.match(Regex.ALPHA_NUMERIC)) {
         setError({ ...error, firstName: "Enter valid First Name" })
      }
      else {
         setError({
            firstName: "",
         })
      }
   })

   const lastNameValidation = ((vals) => {
      let trimedvals = vals.trim();
      if (trimedvals === "") {
         setError({ ...error, lastName: "Last Name Empty" })
      }
      else if (!trimedvals.match(Regex.ONLY_CHAR) || trimedvals.match(Regex.ALPHA_NUMERIC)) {
         setError({ ...error, lastName: "Enter valis Last Name" })
      }
      else {
         setError({ ...error, lastName: "" })
         return true
      }
   })

   const phoneNumberValidation =((vals)=>{
      let trimedVals = vals.trim();
       if(trimedVals === ""){
         setError({...error,phoneNumber:"Phone Number Empty"})
       }
       else if(!trimedVals.match(Regex.ONLY_NUMBER)|| trimedVals.match(Regex.ALPHA_NUMERIC)){
         setError({...error,phoneNumber:"Enter valid Number"})
       }
       else{
         setError({...error,phoneNumber:""})
         return true
       }

   })

   const genderListdata=  "male._male,female._female,not to expose._not to expose";

const arraygenderListsanity = () => {
        if (genderListdata.length) {
            const genderListSplit = genderListdata.split(',');
            let genderobj=[];
            genderListSplit.forEach(res => {
                const splitVals = res.trim().split('_');
                genderobj.push({
                    text: splitVals[0],
                    value: splitVals[1]
                });
            });
            setGenderList(genderobj)
        }
    };

   const genderValidation =((vals)=>{
       if(!vals){
         setError({...error,gender:"please select the gender"})
       }
       else{
         setError({...error, gender:""})
       }
   })

   const passswordValidation =((vals) =>{
      let trimedVals = vals.trim()
      if(trimedVals === ""){
         setError({...error,password:"passsword was empty"})
      }
   })

   const emailValidation =(( vals) =>{
      let trimedvals = vals.trim()
      if(trimedvals === ""){
         setError({...error, email:"Email was Empty"})
      }
      else if(!trimedvals.match(Regex.EMAIL)){
         setError({...error, email:"Enter valid Email"})
      }
      else{
         setError({...error,email:""})
      }
   })

   const onchange = ((vals, name) => {
      // checking the condition based on the name
      if (name === "firstName") {
         firstNameValidation(vals)
      }
      else if (name === "lastName") {
         lastNameValidation(vals)
      }
      else if(name === "phoneNumber") {
         phoneNumberValidation(vals)
      }
      else if(name === "gender"){
         genderValidation(vals)
      }

      else if(name === "email"){
           emailValidation(vals)
      }
      else if(name === "password"){
         passswordValidation(vals)
      }
   
      //adding the values to the inputVals
      setInputVals({
         ...inputVals,
         [name]: vals
      })
   })

   const onblur = ((val, name) => {
      if (name === 'firstName') {
         firstNameValidation(val)
      }
      else if (name === "lastName") {
         lastNameValidation(val)
      }
      else if(name === "phoneNumber"){
         phoneNumberValidation(val)
      }
      else if(name === "gender"){
         genderValidation(val)
      }
       else if(name ="email"){
         emailValidation(val)
       }
       else if(name === "password"){
         passswordValidation(val)
      }
   })
   useEffect(() => {
      arraygenderListsanity();
  }, []);

    const formSubmission =((e)=>{
        e.preventDefault();

        const payload ={
         
            "firstname": inputVals.firstName,
            "lastname": inputVals.lastName,
            "email": inputVals.email,
            "phonenumber": inputVals.phoneNumber,
            "gender": inputVals.gender,
            "password": inputVals.password
        }
        PostData(UserCRUDportal.CRUD_USER_DETAILS,payload)
        setInputVals({
          firstName:"",
          lastName:"",
          gender:"",
          phoneNumber:"",
          email:"",
          password:""
        })
    })


useEffect(()=>{
   setValidForm(()=>{
      if(!( error.firstName 
         || error.contactNumber 
         || error.email 
         || error.lastName 
         || error.gender
         || error.password )
          && 
         !(inputVals.firstName === "" 
            || inputVals.lastName === ""
            || inputVals.email === ""
            || inputVals.gender === ""
            || inputVals.phoneNumber === ""
            || inputVals.password === "")
         ){
            return true
         }
         else{
            return false
         }
   })
},[error,setValidForm,inputVals])
   //if any changes happens in the seterror and error on that time useeffect will rerender 
   const Endorment =()=>{
      return <InputAdornment position="end">
      <IconButton>
      hide
      </IconButton>
      </InputAdornment>
   }

   return (
      <>
      <div className="register-Form">
      <FormControl>
         <div className="first-name">
            <Input
               id={Math.random().toString()}
               onchange={onchange}
               onblur={onblur}
               required={true}
               label={"First Name"}
               helperText={error.firstName}
               type={"text"}
               error={error.firstName ? true : false}
               name={"firstName"}
               placeholder={"Enter Your First Name"}
               value={inputVals['firstName'] || ""}
               className={"register-firstName"}
            />
         </div>

         <div className="last-name">
            <Input
               id={Math.random().toString()}
               onchange={onchange}
               onblur={onblur}
               className={"register-lastName"}
               value={inputVals['lastName'] || ""}
               name={"lastName"}
               placeholder={"Enter your Last Name"}
               helperText={error.lastName}
               error={error.lastName ? true : false}
               required={true}
               label={"Last Name"}
               type={"text"}
            />
         </div>

         <div className="contact-number">
            <Input
               onchange={onchange}
               onblur={onblur}
               label={"Phone Number"}
               value={inputVals["phoneNumber"] || ""}
               name={"phoneNumber"}
               required={true}
               type={"text"}
               placeholder={"Enter Phone Number"}
               className={"register-PhoneNumber"}
               id={Math.random().toString()}
               helperText={error.phoneNumber}
               error={error.phoneNumber ? true : false}
            />
         </div>

         <div className="gender-select">
            <DropDown
               label={"Select Gender"}
               name= {'gender'}
               options ={genderList}
               onchange= {onchange}
               onblur = {onblur}
               id={Math.random().toString()}
               className ={'register-gender'}
               error={error.gender ? true : false}
               helperText ={error.gender}
               preSelectedValue= {inputVals["gender"] || ""}
            />
         </div>
         <div className="email-input">
              <Input
              onchange={onchange}
              onblur={onblur}
              label={"Email"}
              value={inputVals["email"] || ""}
              name={"email"}
              required={true}
              type={"email"}
              placeholder={"Enter Email"}
              className={"register-email"}
              id={Math.random().toString()}
              helperText={error.email}
              error={error.email ? true : false}
              />
            
         </div>

         <div className="password-input">
            <Input 
            onchange={onchange}
            onclick ={onclick}
            label={"Password"}
            name ={"password"}
            className={"register-password"}
            type ={"password"}
            placeholder={"Enter password"}
            id={Math.random().toString()}
            required={true}
            value={inputVals["password" || ""]}
            //  InpuProps={{
            //     endAdornment :<InputAdornment/>
                
            //  }}
            />
         </div>
         <div className="re-enter-password">
         </div>
         <div className="register-button">
             <Button 
             buttonText={"Create User"}
             type={'submit'}
             onclick={formSubmission}
            disabled={!validForm}
             >
             </Button>
         </div>
         </FormControl>
         </div>
      </>
   )

});
export default SignUpForm;