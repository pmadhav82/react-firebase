import React from "react"
import "./Sidebar.css";
import AddTask from "./AddTask";
import LogOut from "./LogOut";


const Sidebar = ()=>{

   
    return(<>
    <div className="sidebar">

<div className="sidebarItem">
  <LogOut/>
<AddTask/>
</div> 

    </div>

  
    
    
    </>)
}
export default Sidebar;