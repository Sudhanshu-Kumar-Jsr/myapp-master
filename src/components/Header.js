import React from "react";
import { toast } from "react-toastify";
import { Card,   
    CardTitle } from 'reactstrap';
const Header=()=>{

const vdhsf=()=>{
    toast("fads");
};
    
    return(
        <div>
            <Card  body inverse style={{ backgroundColor: '#600', borderColor: '#333' ,textAlign:'center',textDecorationColor:'greenyellow'}} >
        <CardTitle><h1 className="my-3">Slag Granuation System</h1></CardTitle>
        {/* <CardText>Courses can be selecet , Update or Delete</CardText> */}
       
      </Card>

        </div>
    );
}
export default Header;