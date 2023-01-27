import React ,{useEffect} from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
const Menu=()=>{
   
        useEffect(()=>{
           document.title="All courses";
        },[])
    return(
        <ListGroup className="my-3">
            <Link className="list-group-item list-group-item-action" tag="a" to="/" action>Home

            </Link>
            <Link  className="list-group-item list-group-item-action" tag="a" to="/add-course" action>Add Course
            

            </Link>
            <Link className="list-group-item list-group-item-action"  tag="a" to="/view-course" action>View Course

            </Link>
            <Link  className="list-group-item list-group-item-action"  tag="a" to="/about" action>About

            </Link>
            <Link  className="list-group-item list-group-item-action"  tag="a" to="/contact" action>Contact US

            </Link>
        </ListGroup>

        
    )
}
export default Menu;