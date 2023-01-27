import React ,{useEffect} from "react";
import { Card,CardBody,CardSubtitle,Button,Container, CardTitle } from "reactstrap";
import Allcourse from "./Allcourses";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";
const Course= ({course})=>{
    
    
        useEffect(()=>{
           document.title="All courses";
        },[])
const deleteCourse=()=>{
axios.delete(`${base_url}/invoice/${course.id}`).then(
    ()=>{
toast.success("Invoice has been deleted");
    },
    ()=>{
        toast.error("oops !Invoice not has been deleted");
    }
);
}







    return(
        <Card  className="text-center">
            <CardBody>
                <CardTitle className="text-center">
                {course.coursename} 
                {/* coursename varible is same name as on database on table column name on backend */}
                {/* {course.title}  */}
          
                </CardTitle>
                <CardSubtitle >
              {course.coursedetails}

                 {/* coursedetails varible is same name as on database on table column name on backend */}
              {/* {course.description} */}
             
                </CardSubtitle>
                <Container className="text-center">
                <Button color="danger my-2" onClick={()=>{
                        deleteCourse(course.id);
                    }} >
                        Delete
                    </Button>


                <ListGroup className="my-3">
               
            
            <Link  tag="a" to="/add-course" action>
             <Button color="warning my-0.5 "  >
                        Add Another Course
                    </Button>{' '}


            </Link>
          
        </ListGroup>

        



      
                 
                </Container>
            </CardBody>
        </Card>

    );
}
export default Course;