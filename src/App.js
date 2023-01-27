
import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import {Row,Col} from "reactstrap";


import {BrowserRouter  ,Routes,Route} from "react-router-dom";
import { Container} from "reactstrap";
import Home from "./components/Home";
import Addcourse from "./components/Addcourse";
import Allcourses from "./components/Allcourses"





function App() {
 
  return (
    
    <BrowserRouter>
     <Header/>
     <Container>
      <Row>
        <Col md={12}><Addcourse/>   </Col>
  
   <Routes>
   
    
   
   </Routes>
   
  
      </Row>
     </Container>

      </BrowserRouter>
    

  );
}

export default App;
