import React from 'react';
import { useState } from 'react';
//Assumes props has a title, placeholder
//name 
class FormElement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
    }

    render(){
        return(
            <form>
                <label for={this.props.name}>
                    {this.props.title}
                    <input type={this.props.type} name={this.props.name} id={this.props.id} pattern={this.props.pattern} placeholder={this.props.placeholder}/>
                </label>
            </form>
        )
    }
}