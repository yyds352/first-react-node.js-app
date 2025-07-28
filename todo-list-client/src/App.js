import React from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import TodoList from'./TodoList';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                { id: 0, value: 'React', done: false, delete: false }
            ]
        };
        // 1. 创建 ref
        this.todoItemValueRef = React.createRef();
    }

    componentDidMount() {
  axios.get('http://localhost:8000/items')
    .then(res => this.setState({ todoItems: res.data })); // 直接覆盖
}

    addTodoItem = (newItem) => {
  this.setState(prev => ({
    todoItems: [...prev.todoItems, newItem]
  }));
};

    deleteTodoItem = (item) => {
        this.setState(prevState => ({
            todoItems: prevState.todoItems.filter(i => i.id !== item.id)
        }));
    };

    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <TodoForm
                    addTodoItem={this.addTodoItem}
                />
                <TodoList
                    todoItems={this.state.todoItems}
                    deleteTodoItem={this.deleteTodoItem}
                />
                
            </div>
        );
    }
}