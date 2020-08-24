import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './mainPage.scss'

export default class mainPage extends Component {
   render() {
      return (
         <div className="mainPage_div">
            <h1>This is main page html</h1>
            <button className="btn_1">
               <span>
                  <NavLink to='page1'>Page1</NavLink>
               </span>
            </button>
            <button className="btn_2">
               <span>
                  <NavLink to='page2'>Page2</NavLink>
               </span>
            </button>
         </div>
      )
   }
}
