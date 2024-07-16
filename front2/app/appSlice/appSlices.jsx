import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = 
{
     signupData:[{id:null,name:null,email:null,phone:null,password:null}],
     loginData:[{id:null,email:null,password:null}],
     AgencyloginData:[{id:null,agency:null,email:null,password:null}],
     orgin : 'Not choosen',
     destination: 'Not choosen',
     agency: null,
     travelTimeInformation:null,
     paymentType:null,
     cars : [
      {
        id: 1,
        start: 'Kigali',
        end: 'Rwamagana',
        time: '06:00 - 08:00',
        cost: 5000,
      },
      {
        id: 2,
        start: 'Kigali',
        end: 'Musanze',
        time: '08:00 - 10:00',
        cost: 3000,
      },
      {
        id: 3,
        start: 'Rwamagana',
        end: 'Gakenke',
        time: '09:00 - 11:00',
        cost: 4000,
      },
      {
        id: 4,
        start: 'Musanze',
        end: 'Ruhengeri',
        time: '10:00 - 12:00',
        cost: 2500,
      },
      {
        id: 5,
        start: 'Gakenke',
        end: 'Gatagara',
        time: '11:00 - 13:00',
        cost: 3500,
      },
      {
        id: 6,
        start: 'Ruhengeri',
        end: 'Kibuye',
        time: '12:00 - 14:00',
        cost: 4500,
      },
      {
        id: 7,
        start: 'Kigali',
        end: 'Huye',
        time: '13:00 - 15:00',
        cost: 5500,
      },
      {
        id: 8,
        start: 'Huye',
        end: 'Nyagatare',
        time: '14:00 - 16:00',
        cost: 6500,
      },
      {
        id: 9,
        start: 'Nyagatare',
        end: 'Gatsineza',
        time: '15:00 - 17:00',
        cost: 7500,
      },
    ]
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
        state.orgin = action.payload
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
      },
      AddCar:(state,action)=>{
        const car=()=>{
          id=nanoid(),
          start = action.payload,
          end = action.payload,
          time = action.payload,
          cost = action.payload
        }
        state.cars.push(car)
      }
    }
})

export const{setOrgina,setDestinationa,setAgency,setTravelTimeInformation,setPymentType,setLoginData,setSignupData,setAgecnyLoginData,AddCar} = appSlice.actions

export const selectOrgina =(state)=>state.application.orgin
export const selectDestinationa =(state)=>state.application.destination
export const selectAgency =(state)=>state.application.Agency
export const selectTravelTimeInformation =(state)=>state.application.travelTimeInformation
export const selectPaymentType =(state)=>state.application.paymentType


export default appSlice.reducer