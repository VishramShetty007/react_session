import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './page1.scss'

export default class page1 extends Component {
   render() {
      return (
         <div className="page1_div">
            <h1>This is page1 html</h1>
            <button className="btn_1">
               <span>
                  <NavLink to=''>Go back main page</NavLink>
               </span>
            </button>
         </div>
      )
   }
}
