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
 * 添加任务
 */
export function addTodo(text) {
  return { 
    type: ADD_TODO, 
    text : text,
    id: nextTaskId++
  }
}

/*
 * 改变任务状态
 */
export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

/*
 * 删除任务
 */
export function delTodo(id){
    return { type: DEL_TODO, id}
}

/*
 * 切换清单状态
 */
export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}


export const REQUEST_POSTS = 'REQUEST_POSTS'
export const RECEIVE_POSTS = 'RECEIVE_POSTS'
export const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
export const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'
/*
 * 选取
 */
export const selectSubreddit = subreddit => ({
  type: SELECT_SUBREDDIT,
  subreddit
})
/*
 * 更新
 */
export const invalidateSubreddit = subreddit => ({
  type: INVALIDATE_SUBREDDIT,
  subreddit
})
/*
 * 请求指定资源
 */
export const requestPosts = subreddit => ({
  type: REQUEST_POSTS,
  subreddit
})
/*
 * 请求响应
 */
export const receivePosts = (subreddit, json) => ({
  type: RECEIVE_POSTS,
  subreddit,
  posts: json.data,
  receivedAt: Date.now()
})
// fetch 替代 XMLHttpRequest 用来发送网络请求的非常新的 API
const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit))
  return fetch(`https://i.news.qq.com/trpc.qqnews_web.pc_base_srv.base_http_proxy/NinjaPageContentSync?pull_urls=${subreddit}`)
    .then(response => response.json())
    .then(json => dispatch(receivePosts(subreddit, json)))
}

const shouldFetchPosts = (state, subreddit) => {
  const posts = state.postsBySubreddit[subreddit]
  if (!posts) {
    return true
  }
  if (posts.isFetching) {
    return false
  }
  return posts.didInvalidate
}
// 引入了 thunk
// 这个函数也接收了 getState() 方法
// 它让你选择接下来 dispatch 什么。
export const fetchPostsIfNeeded = subreddit => (dispatch, getState) => {
  if (shouldFetchPosts(getState(), subreddit)) {
    return dispatch(fetchPosts(subreddit))
  }
}
