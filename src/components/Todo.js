import React, { Component } from 'react'
import ListItem from './ListItem';
import AddItem from './AddItem';

export default class Todo extends Component {
    constructor(props) {
        super(props);

        this.state = {
            items: [
                'list item 1',
                'list item 2',
                'list item 3'
            ]
        }

        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
    }

    addItem(item){
        console.log(item);
        this.setState({
            items: this.state.items.push(item)
        });
    }

    removeItem(item) {
        console.log(item)
    }
    render() {

        let items = this.state.items.map(item => <ListItem removeItem={this.removeItem} item={item}/>)

        return (
            <div id="todo">
                <h1>TODO</h1>
                <ul>
                    {items}
                </ul>
                <AddItem addItem={this.addItem}/>
            </div>
        );
    }
}
