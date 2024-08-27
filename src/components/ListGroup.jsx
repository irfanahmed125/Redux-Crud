import { useDispatch, useSelector } from 'react-redux'
import ListItem from './ListItem'
import { useEffect } from 'react';
import { getTodo } from '../feature/todo/todoSlice';


const ListGroup = () => {

  const {isLoading,isError,allTodos} = useSelector(state=>state.todos);

  const dispatch = useDispatch();

  useEffect(()=>{

    dispatch(getTodo());


  },[]);

  if(isLoading){
    return(
      <h1 className='text-center bg-secondary'>Loading..</h1>
    )
  }

  if(isError){
    return(
      <h1 className='text-center bg-danger'>Something went wrong.</h1>
    )
  }

  if(allTodos.length === 0){
    return(
      <h1 className='text-center bg-secondary'>No Todos Yet.</h1>
    )
  }

  return (

    <div className="my-3">
  <ul className='list-group'>

    {
      allTodos.map((todo)=>
      <ListItem key={todo._id} todo={todo}/>)
    }
  
  </ul>

</div>

  )
}

export default ListGroup