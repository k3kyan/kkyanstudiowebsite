import './CommissionsForms.css';
import React from 'react';
//initially centered button
//toggles between being centered and shifting text to the left with an input box on the right
class interactiveNonTextForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            center : true,
            input: ''
        }
        this.toggleInput = this.toggleInput.bind(this);
        this.updateInput = this.updateInput.bind(this);
    }

    toggleInput(){
        this.setState((state) => ({
            center: !state.center
        }));
    }

    updateInput(event){
        this.setState({input: event.target.value})
    }

    render(){
        if (this.state.center){
            return(
                <div className = "buttonDiv">
                    <button className = "buttonOff" onClick={this.toggleInput}>
                        {this.props.formName}
                    </button>
                </div>
            )
        } else {
            return(
                <div className = "buttonDiv">
                    <button className = "buttonOn" onClick={this.toggleInput}>
                        {this.props.formName}
                    </button>
                    <input className = "smallForm" onChange={this.updateInput}/>
                </div>
            ) 
        }
    }
}
/*
function CommissionsForm(){
    return (
    <div className="tab">
        
    </div>
    );
}
*/
export default interactiveNonTextForm;