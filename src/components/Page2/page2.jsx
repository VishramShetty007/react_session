import React, { Component } from 'react'
import './page2.scss'
import ChildComponent from "./child.jsx"

export default class page2 extends Component {

  
   


   render() {
      return (
         <div className="page2_div"  >
            <h1>This is page2 html</h1>
            <ChildComponent bg_color="skyblue" />
         </div>
      )
   }
}
