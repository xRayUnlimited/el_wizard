import axios from 'axios';

export const deleteTag = (id) =>{
  return (dispatch => {
    axios.delete(`/api/tags/${id}`)
    .then( res => dispatch({ type: 'DELETE_TAG', id, headers: res.headers }))
  })
}
export const getTags = () => {
  return (dispatch) => {
    axios.get('/api/tags')
      .then( res => dispatch({ type: 'TAGS', tags: res.data, headers: res.headers }) )
  }
}

export const addTag = (tag) => {
  return (dispatch) => {
    axios.post('/api/tags', { tag })
      .then( res => {
        const { data: tag, headers } = res;
        if (res.data)
          dispatch({ type: 'ADD_TAG', tag, headers })
        else
          dispatch({ type: 'HEADERS', headers })
      })
  }
}