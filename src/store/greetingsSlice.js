import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const apiUrl = 'http://localhost:3000/api/greetings'

const initialState={
 greetings:'',
 isLoading: false,
 error:null
}

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async()=>{
 try {
  const res = await fetch(apiUrl)
  const data = await res.json()
  console.log(data);
  return data
 } catch (error) {
  throw new Error('failed to fetch greetings')
 }
})

const greetingsSlice = createSlice({
 name: 'greetings',
 initialState,
 reducers:{},
 extraReducers: (builder)=>{
  builder.addCase(fetchGreetings.pending, (state)=>{
   state.isLoading = true
  })
  .addCase(fetchGreetings.fulfilled((state, action)=>{
   state.isLoading = false
   state.greetings = action.payload
   console.log(state.greetings);
   state.error = null
  }))
  .addCase(fetchGreetings.rejected, (state, action)=>{
   state.isLoading = false
   state.error = action.error.message
  })
 }
})

export default greetingsSlice.reducer
