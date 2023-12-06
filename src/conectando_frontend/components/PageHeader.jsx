/*!

=========================================================
* BLK Design System React - v1.2.2
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/blk-design-system-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";


// reactstrap components
import { Container } from "reactstrap";
//import Slider from "../Slider/Slider";

export function PageHeader() {

  return (
    <div className="page-header header-filter">
    <Container>
      <div className="content-center ">
        <Slider></Slider>
      </div>
        <div className="content-center brand">
          <h1 className="h1-seo">Conectando 3.0</h1>
          <h3 className="d-none d-sm-block">
         
          </h3>
        </div>
        
      </Container>

</div>
  
  );
}
export {PageHeader}