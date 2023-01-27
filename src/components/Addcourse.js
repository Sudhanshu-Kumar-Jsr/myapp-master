import React, { Fragment ,useEffect, useState} from "react";
import { AxiosContext } from "react-axios/lib/components/AxiosProvider";
import { Form, FormGroup } from "reactstrap";
import { Button } from "reactstrap";
import axios  from "axios";
import base_url from "../api/bootapi";
import { toast, ToastContainer } from "react-toastify";
const Addcourse=()=>{
    useEffect(()=>{
        document.title="Creation Of Invoices ";
     },[])
const[invoice,setInvoice]=useState({});


// Form Hnadller Method
 const handleForm=(e)=>{
console.log(invoice);
postDataToServer(invoice);
e.preventDefault();
  }

// e varible used on handleform(e) method is of frontend form.
//   creating method to post data on server
const postDataToServer=(data)=>{
    axios.post(`${base_url}/invoice`,data).then(
        (response)=>{
console.log(response);
console.log("success");
toast.success("  Invoice Data has been saved succefully");
        },
        (error)=>{
console.log(error);
toast.error("oops! Invoice Generation has not been Saved ");
console.log("error");
        }
    );
    

}


 return(
        <Fragment>
            <ToastContainer/>
            <h1 className="text-center my-3">Enter the following details </h1>
         <Form onSubmit={handleForm} className="text-center">
            <FormGroup  className="my-3">
                <label  style={{width:"25%"}} for="userId"><h6 style={{textAlign:'left'}}> 1 .Truck No</h6></label>{' '}
                <input style={{width:"25%"}} type="text" placeholder="Enter Truck No" name="userId" id="userId" 
                onChange={(e)=>{
                    setInvoice({...invoice, truckno:e.target.value});
                }}

                // here id varible is on database on server on mysql ,and e.target.value willl fetch data from the form we made on fronend
                
                />
            </FormGroup>
            <FormGroup  className="my-3">
                <label  style={{width:"25%"}} for="userId"><h6 style={{textAlign:'left'}}>2 .Date</h6></label>{' '}
                <input style={{width:"25%"}} type="date" placeholder="Enter Date" name="userId" id="userId" 
                onChange={(e)=>{
                    setInvoice({...invoice, date:e.target.value});
                }}

                // here id varible is on database on server on mysql ,and e.target.value willl fetch data from the form we made on fronend
                
                />
            </FormGroup>
            <FormGroup  className="my-3">
                <label  style={{width:"25%"}} for="userId"><h6 style={{textAlign:'left'}}>3 .Time</h6></label>{' '}
                <input style={{width:"25%"}} type="time" placeholder="Time" name="userId" id="userId" 
                onChange={(e)=>{
                    setInvoice({...invoice, time:e.target.value});
                }}

                // here id varible is on database on server on mysql ,and e.target.value willl fetch data from the form we made on fronend
                
                />
            </FormGroup>

            <FormGroup  className="my-3">
                <label  style={{width:"75%"}} for="userId"><h6 style={{textAlign:'left'}}>4 .Driver Id</h6></label>{' '}
                <input style={{width:"75%"}} type="text" placeholder="Enter Id" name="userId" id="userId" 
                onChange={(e)=>{
                    setInvoice({...invoice, driverId:e.target.value});
                }}

                // here id varible is on database on server on mysql ,and e.target.value willl fetch data from the form we made on fronend
                
                />
            </FormGroup>


           <FormGroup className="my-3 ">
                <label style={{width:"75%"}} for="title"><h6 style={{textAlign:'left'}}>5 .Driver Name</h6></label>{' '}
                <input style={{width:"75%"}} type="text" placeholder="Enter Driver Name" name="title" id="title"  
                onChange={(e)=>{
                    setInvoice({...invoice,drivername:e.target.value});
                }}
                />
            </FormGroup>
            <FormGroup className="my-3">
                <label  style={{width:"75%"}} for="description"><h6 style={{textAlign:'left'}}>6 .Requested Weight for Material in Tonn</h6></label>{' '}
                <input style={{width:"75%" }}  type="textarea" placeholder="Enter Weight" name="description" id="description" 
                onChange={(e)=>{
                    setInvoice({...invoice,material:e.target.value});
                }}
                
                />
            </FormGroup>
<FormGroup>

            <Button  type="submit" color="primary" >Submit</Button>{'  '}
            <Button color="danger ml-2"  
          type="reset"
            >Clear</Button>
         
</FormGroup>


            </Form>
        </Fragment>
        
    );

}
export default Addcourse;