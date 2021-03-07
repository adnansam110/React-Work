import React, { Component } from 'react'

export default class Test extends Component {
    render() {
        const {details} = this.props;
        let myView = details.map((val, index) => {
        
            return (
                <div className="col-md-3 p-4 m-4">
                    <div className="card p-5" style={{width: '400px' }}>
                        <img className="card-img-top" alt="Card Image" src={val.image} style={{height:'200px',width:'300px',textAlign:'center'}}/> 
                        <div className="card-body">
                            <h4 className="card-title" style={{textAlign:'center'}}>{val.name}</h4>
                            <p className="card-text" style={{textAlign:'center'}}>{val.age}</p>
                            <a href='#+' className="btn btn-primary" style={{textAlign:'center'}}>See Profile</a>
                        </div>
                    </div>
                </div>
            )
        }) 
        return (
            <div className="container">
                <div className="row m-3"> 
                    {myView}
                </div>
            </div>
        )
    }
}
