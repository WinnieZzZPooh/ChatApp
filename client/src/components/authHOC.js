import React, { Component } from 'react';

export default (ChildComponent) => {
    return class authHOC extends Component {
        auth(){
            let name = prompt('Enter Your name: ');

            if(!name || !name.trim().length){
                return false
            }

            return name
        }

        noName(){
            return <div className="noname-wrap">
                <p>ENTER YOUR FUCKING NAME!</p>
                <button onClick={ () => { window.location.reload() }}>try again</button>
            </div>
        }
        render(){
            return(
                this.auth() ? <ChildComponent /> : this.noName()
            )
        }
    }
}