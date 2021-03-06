import React, { Component } from 'react'
import About from './About';
import Test from './Test';
export default class Basic extends Component {
    state ={
        names:[
            {
                name:"Ali",
                fatherName:"Haider",
                age: 22,
                image:'https://images.unsplash.com/photo-1582233479366-6d38bc390a08?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
                name:"Adnan",
                fatherName:"Sameer",
                age: 26,
                image: 'https://images.unsplash.com/photo-1578774296842-c45e472b3028?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
                name:"Hassan",
                fatherName:"Ali",
                age: 28,
                image: 'https://images.unsplash.com/photo-1594819047050-99defca82545?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
                name:"Ali",
                fatherName:"Haider",
                age: 22,
                image: 'https://images.unsplash.com/photo-1522724560584-fe4dfa2991f8?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
                name:"Adnan",
                fatherName:"Samee",
                age: 26,
                image: 'https://images.unsplash.com/photo-1575739967915-f06fdc268a5b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            },
            {
                name:"Hassan",
                fatherName:"Ali",
                age: 28,
                image: 'https://images.unsplash.com/photo-1512849934327-1cf5bf8a5ccc?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8ZmFjZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
            }

        
           ]

    }
  

    
   


    render() {
     const{names}= this.state;
    
        return (
            <div>
                {/* <p className="text-info">{name}</p>
                <p className="text-danger">{age}</p> */}
                {/* <About aa={names} /> */}
                <Test details= {names}/>

            </div>
        )
    }
}




