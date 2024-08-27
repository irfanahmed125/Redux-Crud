import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, updateTodo} from '../feature/todo/todoSlice';
import { saveTodo } from '../feature/todo/todoService';

const Form = () => {

  const {edit} =useSelector(state=>state.todos);

  const [title,setTitle] = useState("");
  const [description,setDescription] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) =>{

    e.preventDefault();

    if(edit.isEdit){
      dispatch((updateTodo({
        id :edit.todo._id,
        title,
        description
      })));
    }else{
      dispatch(saveTodo({
        title,
        description,
      }));
    }
    
    
    setTitle("");
    setDescription("");

  }

  useEffect(()=>{

      setTitle(edit.todo.title);
      setDescription(edit.todo.description);


  },[edit]);



  return (
    <>
     <div className="my-5">
    <div className='card bg-light rounded-0'>
    <h2 className='text-center p-2 my-2'>Enter Your Todos Here</h2>

   <form className='my-3 p-4' onSubmit={(e)=>handleSubmit(e)}
   >

    <input type='text'
     placeholder='Enter First Todo'
     className='form-control rounded-0 my-2 p-2'
     onChange={(e)=>setTitle(e.target.value)} value={title} />

     <input type='text'
     placeholder='Enter Your Next Todo'
     className='form-control rounded-0 my-2 p-2'
     onChange={(e)=>setDescription(e.target.value)}
     value={description}
     />

    

    <button className='btn btn-secondary w-100 rounded-0 my-3' type='submit'>Save</button>


  </form>


 </div>
</div>

   
    
    
    </>
  )
}

export default Form