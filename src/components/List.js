import React, { Component } from 'react'
import ListItem from './ListItem'

export default class List extends Component {

    render() {
        let items = this.props.listItems.map(item => <ListItem removeItem={this.props.removeItem} item={item}/>)

        return (
            <ul>
                {items}
            </ul>
        )
    }
}

