import { CREATE_TODO, REMOVE_TODO, CHANGE_TODO } from './actions';

export const todos = (state = [], action) => {

    const { type, payload } = action;

    switch (type) {

        case CREATE_TODO: {

            const { text } = payload;
            const newTodo = {
                text,
                isCompleted: false
            }
            return state.concat(newTodo);

        }

        case REMOVE_TODO: {

            const { text } = payload;
            return state.filter(todo => todo.text !== text);

        }

        case CHANGE_TODO: {

            // if state is not an array --> error handling is needed

            //const { text } = payload;
            return state = state.reverse();

        }

        default:
            return state;
    }

};
