import React from 'react';

export default class TodoForm extends React.Component {
    addTodoItem = () => {
        this.props.addTodoItem(this.refs.todoItemValue.value);
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref="todoItemValue"
                    placeholder="add or search something..."
                />
                <button type="submit" onClick={this.addTodoItem}>添加</button>
            </div>
        );
    }
}