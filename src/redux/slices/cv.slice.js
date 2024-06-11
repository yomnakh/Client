import { createSlice } from '@reduxjs/toolkit'



export const cvSlice = createSlice({
  name: 'cv',
  initialState:{
    profile:{},
    education:[],
    experience:[''],
    skills:['', '', '',''],
    languages:[],
      hobbies:['', '',''],
    references:[],
    social:[],
    contact:{},
    address:{},
    email:{},
    phone:{},
    website:{},
    resume:{},
    links:[''],
    coverLetter:{},
    about:""
  },
  reducers: {
    setProfile:(state,action)=>{
        state.profile = action.payload
    },
    setAbout:(state,action)=>{
      state.about = action.payload
  },
  setSkills:(state,action)=>{
    state.skills = action.payload
},
setExperience:(state,action)=>{
  state.experience = action.payload
},
setHobbies:(state,action)=>{
  state.hobbies = action.payload
},
setLinks:(state,action)=>{
  state.links = action.payload
},
  },
})

// Action creators are generated for each case reducer function
export const {setProfile ,setAbout,setSkills,setExperience,setHobbies,setLinks } = cvSlice.actions

export default cvSlice.reducer