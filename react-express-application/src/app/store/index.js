import {createStore, applyMiddleware, combineReducers} from 'redux';
import {defaultState} from "../../server/defaultState";
import {createLogger} from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

const sagaMiddleware = createSagaMiddleware();
import * as sagas from './sagas.mock'
import * as mutations from './mutations'

export const store = createStore(
    combineReducers({
        tasks(tasks = defaultState.tasks, action) {
            switch (action.type) {
                case mutations.CREATE_TASK:
                    return [...tasks, {
                        id: action.taskID,
                        name: "New task",
                        group: action.groupId,
                        owner: action.ownerID,
                        isComplete: false
                    }]
                case mutations.SET_TASK_COMPLETE:
                    tasks.map(task => {
                        return (task.id === action.ID) ?
                            {...task, isComplete: action.isComplete} : task
                    });

                case mutations.SET_TASK_NAME:
                    tasks.map(task => {
                        return (task.id === action.ID) ?
                            {...task, name: action.name} : task
                    });

                case mutations.SET_TASK_GROUP:
                    tasks.map(task => {
                        return (task.id === action.ID) ?
                            {...task, group: action.groupID} : task
                    });
            }
            return tasks;
        },
        comments(comments = defaultState.comments) {
            return comments;
        },
        groups(groups = defaultState.groups) {
            return groups;
        },
        users(users = defaultState.users) {
            return users;
        }
    }),
    applyMiddleware(createLogger(), sagaMiddleware)
);

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}