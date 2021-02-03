import React, { Component } from 'react'

class Welcome extends Component {
    render(){

        return (
            <div>
                <hr></hr>
                <h1>Welcome {this.props.name} a.k.a {this.props.heroName}</h1>
            </div>
            
        )
    }
}

export default Welcome;