import React from 'react';
//Assumes props has name, title, type, id, pattern, placeholder
export default class FormElement extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ''
        }
        this.updateVal = this.updateVal.bind(this)
    }

    updateVal(event){
        this.setState({
            value: event.target.value
        })
    }
    render(){
        return(
            <label for={this.props.name}>
                {this.props.title}
                <input onChange={this.updateVal} type={this.props.type} name={this.props.name} id={this.props.id} pattern={this.props.pattern} placeholder={this.props.placeholder}/>
            </label>
        )
    }
}
