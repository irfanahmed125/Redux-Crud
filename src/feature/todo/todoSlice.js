import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { deleteTodo, fetchTodo, update } from "./todoService";

const todoSlice =createSlice({
    name : 'todos',
    initialState :{
        allTodos :[],
        isLoading : false,
        isError : false,
        isSuccess : false,
        edit : {
         todo : {},
         isEdit : false,
          },


    },
    reducers : {
        remove : (state,action)=>{
            return{
                ...state,
                allTodos : state.allTodos.filter((item)=>item._id !== action.payload)
            }



        },

        edit : (state,action) =>{
          return{
            ...state,
            edit :{
             todo :action.payload,
             isEdit : true,

            }

          }
           


        }
    },
    extraReducers : (builder) =>{

     builder
     .addCase(getTodo.pending,(state,action)=>{
      state.isLoading =true
      state.isError =false
      state.isSuccess =false
     })
     .addCase(getTodo.fulfilled,(state,action)=>{
        state.isLoading =false
        state.isError =false
        state.isSuccess =true
        state.allTodos=action.payload

     })
     .addCase(getTodo.rejected,(state,action)=>{
        state.isLoading =false
        state.isError =true
        state.isSuccess =false

     })

     .addCase(addTodo.pending,(state,action)=>{
        state.isLoading =true
        state.isError =false
        state.isSuccess =false

    })

       .addCase(addTodo.fulfilled,(state,action)=>{
          state.isLoading =false
          state.isError =false
          state.isSuccess =true
          state.allTodos=[action.payload, ...state.allTodos]
  
       })

       .addCase(addTodo.rejected,(state,action)=>{
          state.isLoading =false
          state.isError =true
          state.isSuccess =false
  
       })

       .addCase(removeTodo.pending,(state,action)=>{
        state.isLoading =true
        state.isError =false
        state.isSuccess =false
       })
       .addCase(removeTodo.fulfilled,(state,action)=>{
          state.isLoading =false
          state.isError =false
          state.isSuccess =true
  
       })

       .addCase(removeTodo.rejected,(state,action)=>{
          state.isLoading =false
          state.isError =true
          state.isSuccess =false
  
       })
       .addCase(updateTodo.pending,(state,action)=>{
         state.isLoading =true
         state.isError =false
         state.isSuccess =false
        })
        .addCase(updateTodo.fulfilled,(state,action)=>{
           state.isLoading =false
           state.isError =false
           state.isSuccess =true
           state.allTodos= state.allTodos.map((item)=>item._id === action.payload._id ? action.payload :item)
           state.edit = {
            todo : {},
            isEdit: false,
           }
   
        }).addCase(updateTodo.rejected,(state,action)=>{
           state.isLoading =false
           state.isError =true
           state.isSuccess =false
   
        });
 


    }
    

});
export const {remove,edit} = todoSlice.actions;
export default todoSlice.reducer;
// get Todo functionality

export const getTodo =createAsyncThunk("FETCH/TODO", async()=>{
        return await fetchTodo();
    
});


// add Todo functionality

export const addTodo =createAsyncThunk("ADD/TODO",async(formData)=>{
     try {
        
       return await saveTodo(formData);
     } catch (error) {
        console.log("Error");
        
     }

})

// delete Todo functionality
export const removeTodo = createAsyncThunk("REMOVE/TODO",async(id)=>{
    try {
       return await deleteTodo(id); 
    } catch (error) {
        console.log("Error");
        
    }


});


// Update Todo functionality

export const updateTodo = createAsyncThunk("UPDATE/TODO",async(formData)=>{
 
 try {
   return await update(formData);
   
 } catch (error) {
   
 }    
})






