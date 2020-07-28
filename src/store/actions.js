export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const DEL_TODO = "DEL_TODO";

/*
 * 其它的常量
 */
let nextTaskId = 0;
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action 创建函数
 */

export function addTodo(text) {
  return { 
    type: ADD_TODO, 
    text : text,
    id: nextTaskId++
  }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function delTodo(id){
    return { type: DEL_TODO, id}
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}