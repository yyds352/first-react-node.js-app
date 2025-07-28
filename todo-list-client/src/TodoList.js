import React from 'react';
import TodoListItem from './TodoListItem';

export default class TodoList extends React.Component {
  deleteTodoItem = (item) => {
    this.props.deleteTodoItem(item);
  };

  render() {
    return (
      <ul>
        {this.props.todoItems.map((item) => {
          if (item.delete) return null;
          return (
            <TodoListItem
              key={item.id}
              item={item}
              deleteTodoItem={this.deleteTodoItem}
            />
          );
        })}
      </ul>
    );
  }
}