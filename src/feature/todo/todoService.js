import axios from "axios"

export const fetchTodo = async ()=>{

    const response = await axios.get('/api/todo');
    console.log(response.data);
    return response.data
}


export const saveTodo = async (formData)=>{

     const response =await axios.post('/api/todo',formData);
     console.log(response.data);
     return response.data;


}


export const deleteTodo = async (id) =>{

    const response =await axios.delete(`/api/todo/${id}`);

    console.log(response.data);
    return response.data;

}

export const update = async (formData)=>{
    const response = await axios.put('/api/todo/'+ formData.id,formData);
    console.log(response.data);
    return response.data;

}
