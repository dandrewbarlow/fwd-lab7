import React, { Component } from 'react'

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textInput: React.createRef()
        };
    }

    handleAddItem() {
        this.props.addItem(this.state.textInput.current.value);
        this.state.textInput.current.value = '';
    }

    render() {
        return (
            <div id="addItem">
                {/* https://stackoverflow.com/questions/52028418/how-can-i-get-an-inputs-value-on-a-button-click-in-a-stateless-react-component */}
                {/* https://upmostly.com/tutorials/how-to-react-onkeypress-event */}
                <input ref={this.state.textInput} type='text' onKeyPress={(e) => {
                    if (e.key === 'Enter') {this.handleAddItem();}
                } } />

                <button onClick={() => {this.handleAddItem()}}>Add Item</button>
            </div>
        )
    }
}
