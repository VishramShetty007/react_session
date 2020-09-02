import React, { Component } from 'react'
import './page2.scss'
import ChildComponent from "./child.jsx"
import axios from "axios"
import * as querystring from "querystring"


export default class page2 extends Component {


   state={
      serverResponce:"nothing",
   }

   testServerConnectivity=()=>{
      let ctx=this
      axios({
         method: 'post',
         url: '/api/test/',
         headers: {
            "Content-Type": "application/x-www-form-urlencoded;charset=utf-8",
        },
         data: querystring.stringify({
            testData: new Date().toLocaleString(),
          })
       })
         .then(function (response) {
            ctx.setState({serverResponce:response.data})
           
         });
   }
   


   render() {
      return (
         <div className="page2_div"  >
            <h1>This is page2 html</h1>
            <ChildComponent bg_color="skyblue" />

            <button onClick={this.testServerConnectivity} >Check connectivity</button><br />

            <pre>{this.state.serverResponce}</pre>

         </div>
      )
   }
}
