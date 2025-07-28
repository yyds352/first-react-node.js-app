import React from 'react';
import axios from 'axios';

export default class TodoForm extends React.Component {
  state = { value: '' };

  handleChange = (e) => this.setState({ value: e.target.value });

  handleAdd = () => {
    const value = this.state.value.trim();
    if (!value) return;

    // 向后端发送 POST 请求
    axios.post('http://localhost:8000/items', { value })
      .then(res => {
        // 把后端返回的新条目交给父组件
        this.props.addTodoItem(res.data);
      })
      .catch(console.error);

    this.setState({ value: '' });
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="add or search something..."
        />
        <button type="button" onClick={this.handleAdd}>添加</button>
      </div>
    );
  }
}