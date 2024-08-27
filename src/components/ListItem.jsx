import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { edit, remove, removeTodo } from '../feature/todo/todoSlice';

const ListItem = ({todo}) => {

  const {isSuccess} = useSelector(state=>state.todos);

  const dispatch = useDispatch();

  const handleDelete = (id) =>{
   dispatch(removeTodo(id));

   if(isSuccess){
    dispatch(remove(id));
   }

  }

  const handleEdit = (todo) =>{

    dispatch(edit(todo));
    
  }

  return (
    <>
     <li className='list-group-item bg-dark rounded-0 text-light'>
      
      {todo.title} : {todo.description}
      
      <span className='float-end'>

    <button className='btn btn-success rounded-0 mx-2 bg-warning px-4'
    
    onClick={(e)=>handleEdit(todo)}>Edit</button>

    <button className='btn btn-success rounded-0 mx-1 px-3 bg-danger'
    
    onClick={(e)=>handleDelete(todo._id)}>Delete</button>

   </span>
   
   </li>
    
    
    </>
  )
}

export default ListItem