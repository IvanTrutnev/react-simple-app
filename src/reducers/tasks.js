import { ADD_TASK, REMOVE_TASK, COMPLETE_TASK } from '../constans';
import { load } from 'redux-localstorage-simple';

let TASKS = load({ namespace: 'todo-list'});

if(!TASKS || !TASKS.tasks || !TASKS.tasks.length) {
  TASKS = {
    tasks: []
  }
}

// const TASKS = [
// 	{
// 		id: 1,
// 		text: 'Learn ReactJS',
// 		isCompleted: true
// 	},
// 	{
// 		id: 2,
// 		text: 'Learn Redux',
// 		isCompleted: false
// 	},
// 	{
// 		id: 3,
// 		text: 'Learn React Router',
// 		isCompleted: false
// 	}
// ];

const tasks = (state = TASKS.tasks, { id, text, isCompleted, type }) => {
	switch (type) {
		case ADD_TASK:
			return [
				...state,
				{
					id: id,
					text: text,
					isCompleted: isCompleted
				}
            ];
        case REMOVE_TASK:
            return [...state].filter(task => task.id !== id);
        case COMPLETE_TASK: 
            return [...state].map(task => {
                if(task.id === id) {
                    task.isCompleted = !task.isCompleted;
                }
                return task;
            })    
		default:
			return state;
	}
};

export default tasks;
