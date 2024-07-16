import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = 
{
     signupData:[{id:null,name:null,email:null,phone:null,password:null}],
     loginData:[{id:null,email:null,password:null}],
     AgencyloginData:[{id:null,agency:null,email:null,password:null}],
     origin : 'Not choosen',
     destination: 'Not choosen',
     agency: null,
     travelTimeInformation:null,
     paymentType:null
}

 const appSlice = createSlice({
    name:'application',
    initialState,
    reducers:{
       setSignupData:(state,action)=>{
            const data = {
              id:nanoid(),
              name:action.payload,
              email:action.payload,
              phone:action.payload,
              password:action.payload
            }
              state.signupData.push(data)
       }, 
       setLoginData:(state,action)=>{
        const data = {
          id:nanoid(),
          email:action.payload,
          password:action.payload
        }
        state.loginData.push(data)
   }, 
   setAgecnyLoginData:(state,action)=>{
    const data = {
      id:nanoid(),
      agency:action.payload,
      email:action.payload,
      password:action.payload
    }
    state.AgencyloginData.push(data)
}, 
      setOrgina:(state,action)=>{
        state.origin = action.payload
        
      },
      setDestinationa:(state,action)=>{
        state.destination = action.payload
      },
      setAgency:(state,action)=>{
        state.agency = action.payload
      },
      setTravelTimeInformation:(state,action)=>{
        state.travelTimeInformation = action.payload
      },
      setPymentType:(state,action)=>{
        state.paymentType = action.payload
      }
    }
})

export const{setOrgina,setDestinationa,setAgency,setTravelTimeInformation,setPymentType,setLoginData,setSignupData,setAgecnyLoginData} = appSlice.actions

export const selectOrgina =(state)=>state.application.origin
export const selectDestinationa =(state)=>state.application.destination
export const selectAgency =(state)=>state.application.Agency
export const selectTravelTimeInformation =(state)=>state.application.travelTimeInformation
export const selectPaymentType =(state)=>state.application.paymentType


export default appSlice.reducer
