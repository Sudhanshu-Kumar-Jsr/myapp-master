import React , { useEffect } from "react";
import { Card,  CardText,
    CardTitle,  Button } from 'reactstrap';

function Home(){
  useEffect(()=>{
    document.title="Home || This is home";
 },[])
    return(
        <div  className="my-3">
    {/* <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Special Title Treatment</CardTitle>
        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
        <Button>Button</Button>
      </Card> */}
      <Card  body inverse style={{ backgroundColor: '#300', borderColor: '#333' ,textAlign:'center',textDecorationColor:'greenyellow'}} >
        <CardTitle><h1 className="my-3">courses Application</h1></CardTitle>
        <CardText>Courses can be selecet , Update or Delete</CardText>
        <Button color="primary">Start</Button>
      </Card>

        </div>
    );
}
export default Home;