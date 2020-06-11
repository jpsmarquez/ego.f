import React from "react";
import HomeA from "./HomeAdmin";
import HomeE from "./HomeE";
const User = {type:"E"};


export default function SwitchHome() {
    return (
      <div>{
          User.type==="A" || User.tipo === 'A'? <HomeA/> : <HomeE/>
      }</div>
    );
}
