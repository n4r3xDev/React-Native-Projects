import { Todo } from "@/types/TodoTypes";

export type TodoActionType = "add" | "delete" | "change";

export type TodoAction = {
    type: TodoActionType;
    todo: Todo;
    prevId?: number;
}

export function TodoReducer(todos: Todo[], action: TodoAction) : Todo[] {
    switch (action.type) {
        case "add" : {
            return [
                ...todos, {
                    id: action.prevId,
                    title: action.todo.title,
                    priority: action.todo.priority,
                    completed: action.todo.completed,
                }
            ];
        }
        case "delete" : {
            return todos.filter((item) => item.id !== action.todo.id)
        }
        case "change" : {
            return todos.map((item) => {
                if (item.id === action.todo.id) {
                    return action.todo;
                }
                return item;
            })
        }
        default : {
            throw Error("Unknown action" , action.type)
        }
    }
}