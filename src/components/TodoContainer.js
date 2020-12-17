import React from 'react';

import TodoList from './TodoList';
import Header from './Header';
import InputTodo from './InputTodo'
import { v4 as uuidv4 } from "uuid";


class TodoContainer extends React.Component {
	state = {
		todos: [
			{
				id: uuidv4(),
				title: 'Analyze',
				completed: true
			},
			{
				id: uuidv4(),
				title: 'Develop',
				completed: true
			},
			{
				id: uuidv4(),
				title: 'Deploy',
				completed: false
			}
		]
	};

	handleChange = (id) => {
		this.setState((prevState) => ({
			todos: prevState.todos.map((todo) => {
				if (todo.id === id) {
					todo.completed = !todo.completed;
				}
				return todo;
			})
		}));
	};

	deleteTodo = (id) => {
		this.setState({
			todos: [
				...this.state.todos.filter((todo) => {
					return todo.id !== id;
				})
			]
		});
    };
    
    addTodoItem = title => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        this.setState({
            todos: [...this.state.todos, newTodo]
        })
    }

	render() {
		return (
			<div className="container">
				<Header />
                <InputTodo addTodoProps={this.addTodoItem} />
				<TodoList
					todos={this.state.todos}
					handleChangeProps={this.handleChange}
					deleteTodoProps={this.deleteTodo}
				/>
			</div>
		);
	}
}

export default TodoContainer;
