import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addTask, removeTask, completeTask, changeFilter } from '../../actions/actionCreator';

import ToDoInput from '../../components/TodoInput/TodoInput';
import ToDoList from '../../components/TodoList/TodoList'; 
import ToDoFooter from '../../components/TodoFooter/TodoFooter';

import './Todo.css';

class ToDo extends Component {
	state = {
		taskText: ''
	};

	handleInputChange = ({ target: { value } }) => {
		this.setState({
			taskText: value
		});
  };
  
  addTask = ({ key }) => {
    const { taskText } = this.state;
    if(taskText.length > 3 && key === 'Enter') {
      const { addTask } = this.props;
      addTask(new Date().getTime(), taskText, false);
      this.setState({
        taskText: ''
      })
    }
  }

  filterTasks = (tasks, activeFilter) => {
    switch(activeFilter) {
      case 'completed':
        return tasks.filter(task => task.isCompleted);
      case 'active':
        return tasks.filter(task => !task.isCompleted);
      default:
        return tasks;
    }
  }

  getActiveTasksCounter = tasks => tasks.filter(task => !task.isCompleted).length;

	render() {
		const { taskText } = this.state;
		const {tasks, removeTask, completeTask, filter, changeFilter} = this.props;
		const isTasksExist = tasks && tasks.length > 0;
		const filteredTasks = this.filterTasks(tasks, filter);
		const taskCounter = this.getActiveTasksCounter(tasks);

		return (
			<div className="todo-wrapper">
				<ToDoInput value={taskText} onChange={this.handleInputChange} onKeyPress={this.addTask}/>
				{isTasksExist && <ToDoList tasksList={filteredTasks} removeTask={removeTask} completeTask={completeTask}/>}
				{isTasksExist && <ToDoFooter amount={taskCounter} changeFilter={changeFilter} activeFilter={filter} />}
			</div>
		);
	}
}

export default connect(({tasks, filter}) => ({
  tasks,
  filter
}), {addTask, removeTask, completeTask, changeFilter })(ToDo);
