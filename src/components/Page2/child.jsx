import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'


export default class parent extends Component {

    state = {
        backgroundColor: "white",
    }


    //life cycle methods

    componentWillMount(){
        // alert("before rendering elemnts")

    }

    componentDidMount(){
        // alert("after rendering elemnts")
        this.setState({backgroundColor:this.props.bg_color})
    }

    componentWillUpdate(){
        // alert("before updating component")
        console.log("before component update/render on state value change")
    }


    componentDidUpdate(){
        console.log("component update/render on state value change")
    }

    componentWillUnmount(){
        // alert("before leaving component")
    }

    render() {
        return (
            <div className="ChildComp" style={{backgroundColor:this.state.backgroundColor}}>
                <input type="text" onChange={(e) => this.setState({ backgroundColor: e.target.value })} /><br />
                {this.state.backgroundColor}
                <NavLink to='page1'>Page1</NavLink>

            </div>
        )
    }
}
