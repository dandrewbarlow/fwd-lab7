import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: React.createRef()
        };
    }

    render() {
        return (
            <>
                {/* https://stackoverflow.com/questions/52028418/how-can-i-get-an-inputs-value-on-a-button-click-in-a-stateless-react-component */}
                <input ref={this.state.textInput} type='text'></input>
                <button onClick={() => {
                    this.props.addItem(this.state.textInput.current.value);
                    console.log(this.state.textInput.current.value);
                }}>Add Item</button>
            </>
        )
    }
}
