import React from "react";
import HomeAdmin from "./HomeAdmin";
import HomeE from "./HomeE";
const User = {type:"E"};


export default function SwitchHome() {
    return (
      <div>{
          User.type==="A" ? <HomeAdmin/> : <HomeE/>
      }</div>
    );
}
