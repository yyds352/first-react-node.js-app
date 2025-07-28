import React from 'react';
import './App.css';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todoItems: [
                { id: 0, value: 'React', done: false, delete: false }
            ],
            editingItem: null // 用于存储当前正在编辑的待办事项的 ID
        };
        this.todoItemValueRef = React.createRef(); // 创建一个引用
    }

    addTodoItem = () => {
        const newTodoItem = {
            id: this.state.todoItems.length,
            value: this.todoItemValueRef.current.value,
            done: false,
            delete: false
        };
        this.setState({
            todoItems: [...this.state.todoItems, newTodoItem]
        });
        this.todoItemValueRef.current.value = ''; // 清空输入框
    }

    deleteTodoItem = (itemId) => {
        this.setState({
            todoItems: this.state.todoItems.filter(item => item.id !== itemId)
        });
    }

    toggleTodoItem = (itemId) => {
        this.setState({
            todoItems: this.state.todoItems.map(item => {
                if (item.id === itemId) {
                    return { ...item, done: !item.done };
                }
                return item;
            })
        });
    }

    editTodoItem = (item) => {
        this.setState({
            editingItem: item.id // 设置当前正在编辑的待办事项的 ID
        });
    }

    saveTodoItem = (itemId) => {
        const newTodoItems = this.state.todoItems.map(item => {
            if (item.id === itemId) {
                return {
                    ...item,
                    value: this.todoItemValueRef.current.value // 更新内容
                };
            }
            return item;
        });
        this.setState({
            todoItems: newTodoItems,
            editingItem: null // 重置编辑状态
        });
        this.todoItemValueRef.current.value = ''; // 清空输入框
    }

    render() {
        return (
            <div>
                <h1>TodoList</h1>
                <div>
                    <input
                        type="text"
                        ref={this.todoItemValueRef} // 使用 React.createRef() 创建的引用
                        placeholder="add something..."
                    />
                    <button
                        type="submit"
                        onClick={this.addTodoItem}
                    >
                        添加
                    </button>
                </div>
                <ul>
                    {this.state.todoItems.map((item) => {
                        if (item.delete) return null; // 如果已删除，则不渲染
                        return (
                            <li key={item.id}>
                                {this.state.editingItem === item.id ? (
                                    <input
                                        type="text"
                                        ref={this.todoItemValueRef}
                                        defaultValue={item.value}
                                    />
                                ) : (
                                    <label style={{ textDecoration: item.done ? 'line-through' : 'none' }}>
                                        {item.value}
                                    </label>
                                )}
                                <button
                                    onClick={() => this.toggleTodoItem(item.id)}
                                >
                                    {item.done ? '取消完成' : '完成'}
                                </button>
                                <button
                                    onClick={() => this.deleteTodoItem(item.id)}
                                >
                                    删除
                                </button>
                                {this.state.editingItem === item.id ? (
                                    <button
                                        onClick={() => this.saveTodoItem(item.id)}
                                    >
                                        保存
                                    </button>
                                ) : (
                                    <button
                                        onClick={() => this.editTodoItem(item)}
                                    >
                                        修改
                                    </button>
                                )}
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
    }
}