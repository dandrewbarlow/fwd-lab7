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
        // https://stackoverflow.com/questions/37435334/correct-way-to-push-into-state-array
        this.setState({
            items: [...this.state.items, item]
        });
        console.log(item);
    }

    removeItem = (item) => {
        
        // https://www.w3docs.com/snippets/javascript/how-to-get-the-index-of-an-array-that-contains-objects-in-javascript.html
        let index = this.state.items.findIndex( ele => ele === item );
        let itemArr = [...this.state.items];
        itemArr.splice(index, 1);
        this.setState({
            items: itemArr
        })
        console.log(item)
    }
    render() {

        let items = Array.isArray(this.state.items) && this.state.items.map(item => <ListItem removeItem={this.removeItem} item={item}/>)

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
