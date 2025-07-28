import React from 'react';

export default class TodoListItem extends React.Component {
    deleteTodoItem = () => {
        this.props.deleteTodoItem(this.props.item);
    }

    render() {
        return (
            <li>
                <label>{this.props.item.value}</label>
                <button onClick={this.deleteTodoItem}>
                    删除
                </button>
            </li>
        )
    }
}