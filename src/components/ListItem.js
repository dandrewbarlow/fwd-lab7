import React, { Component } from 'react'

export default class ListItem extends Component {

    render() {
        return (
            <li className="listItem" key={this.props.item}>
                <p>
                    {this.props.item} 
                    <button 
                    className="removeItem" 
                    onClick={this.props.removeItem(this.props.item)}
                    >X</button>
                </p>
            </li>
        )
    }
}
