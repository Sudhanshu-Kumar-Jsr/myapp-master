import React, { useState,useEffect } from "react";
import Course from "./Course";
import base_url from "../api/bootapi"
import axios  from "axios";

import { toast, ToastContainer } from "react-toastify";


const Allcourse=()=>{

    
    useEffect(()=>{
       document.title="All courses";
    },[])
  


    //  function for calling server
const getAllCoursesFromServer=()=>{
    axios.get(`${base_url}/invoices`).then(
        (response)=>{ 
            // this is for successs message
            // console.log(Response);
            console.log(response.data);
            toast.success("Course has been loaded succesfully " ,{position:"bottom-center"});
         
                setCourses(response.data);  
            
         
          
        },
        (error)=>{
            // this is for error message
            console.log(error);
            toast.error("Something went wrong",{position:"bottom-center"});
        }
    );
};







useEffect(()=>{
    getAllCoursesFromServer();
 },[]);



    const [Courses,setCourses]=useState({});


    
const  updateCourseById =(id)=>{
    setCourses(Courses.filter((c) => c.id!=id));

};


  
    return(
        <div>
            <ToastContainer/>
        <h1>All Courses</h1>
        <p>
            List of All Courses Are As Follows
        </p>
        {
            Courses.length>0?Courses.map((item)=>(<Course key={item.id} course={item}/>)
            
            ):"No Courses"
        }
        </div>
    );

}
export default Allcourse;