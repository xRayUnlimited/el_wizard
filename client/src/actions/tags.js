import axios from 'axios';


export const addTag = (tag) => {
  //send tag to DB
  //send tag to store, dispatch headers
  //else dispatch headers

  return (dispatch) => {
    axios.post('/api/tags', { tag })
    .then( res => {
      if (res.data)
        dispatch({ type: 'ADD_TAG', tag: res.data, headers: res.headers })
      else
        dispatch({ type: 'HEADERS', headers: res.headers })
    })
  }
}