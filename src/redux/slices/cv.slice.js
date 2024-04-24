import { createSlice } from '@reduxjs/toolkit'



export const cvSlice = createSlice({
  name: 'cv',
  initialState:{
    profile:{},
    education:[],
    experience:[],
    skills:[],
    languages:[],
    hobbies:[],
    references:[],
    social:[],
    contact:{},
    address:{},
    email:{},
    phone:{},
    website:{},
    resume:{},
    coverLetter:{},
  },
  reducers: {
    setProfile:(state,action)=>{
        state.profile = action.payload
    }    
  },
})

// Action creators are generated for each case reducer function
export const {setProfile } = cvSlice.actions

export default cvSlice.reducer