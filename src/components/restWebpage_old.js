import React, { useState } from "react";

const Mainbody = () => {
  return (
    <div class="container-fluid flex-column p-0">
        <div id="LogoBlock" class="d-flex align-items-stretch justify-content-center text-center h-40" style={{backgroundColor: "blue"}}>
            <div class="col-2">1</div>   
            <div class="col-8">
                  <img src="./logo.png" alt="logo" fluid />
            </div>
            <div class="col-2">3</div>
        </div>
        <div id="rouletteBlock" class="d-flex justify-content-center text-center" style={{backgroundColor: "red",}}>
            <div class="col-2">1</div>    
            <div class="col-2">2</div>
            <div class="col-4 justify-content-center">
            <div  xs={6} md={4} class="px-4" style={{backgroundColor: "green",height:100+"px", width:50 + "px"}}></div>
            </div>
            <div class="col-2">4</div>
            <div class="col-2">5</div>
        </div>
    </div>
  );
};

export default Mainbody;
