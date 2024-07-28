import { createSlice , nanoid} from "@reduxjs/toolkit";

const initialState = 
{
     signupData:[{id:null,name:null,email:null,phone:null,password:null}],
     loginData:[{id:null,email:null,password:null}],
     AgencyloginData:[{id:null,agency:null,email:null,password:null}],
     origin : 'None',
     destination: 'None',
     agency: 'None',
     travelTimeInformation:null,
     paymentType:null,
     bookedSeats: [1, 2, 3],
     selectedSeats: [],
     cars:[
      {
        id:15,
        start:'Kigali',
        end:'Muhanga',
        time:'2024-7-20 16:30',
        cost:1506,
        sitting:'20/24',
        line:'#90EE90'
      },
      //Southen province
      {
        id:19,
        start:'Muhanga',
        end:'Kigali',
        time:'2024-7-20 16:30',
        cost:1506,
        sitting:'17/24',
        line:'#FF4500'
      },
      {
        id:20,
        start:'Muhanga',
        end:'Ruhango',
        time:'2024-7-20 16:30',
        cost:804,
        sitting:'15/24',
        line:'#9400D3'
      },
      {
        id:21,
        start:'Muhanga',
        end:'Nyanza',
        time:'2024-7-20 16:30',
        cost:1199,
        sitting:'12/24',
        line:'#032B14'
      },
      {
        id:22,
        start:'Muhanga',
        end:'Huye',
        time:'2024-7-20 16:30',
        cost:2281,
        sitting:'9/24',
        line:'#FF4500'
      },
      {
        id:23,
        start:'Muhanga',
        end:'Nyamagabe',
        time:'2024-7-20 16:30',
        cost:2400,
        sitting:'6/24',
        line:'#9400D3'
      },
      {
        id:24,
        start:'Ruhango',
        end:'Kigali',
        time:'2024-7-20 16:30',
        cost:2178,
        sitting:'3/24',
        line:'#032B14'
      },
      {
        id:25,
        start:'Ruhango',
        end:'Muhanga',
        time:'2024-7-20 16:30',
        cost:804,
        sitting:'20/24',
        line:'#FF4500'
      },
      {
        id:26,
        start:'Ruhango',
        end:'Nyanza',
        time:'2024-7-20 16:30',
        cost:506,
        sitting:'15/24',
        line:'#9400D3'
      },
      {
        id:27,
        start:'Ruhango',
        end:'Huye',
        time:'2024-7-20 16:30',
        cost:1564,
        sitting:'10/24',
        line:'#032B14'
      },
      {
        id:28,
        start:'Ruhango',
        end:'Nyamagabe',
        time:'2024-7-20 16:30',
        cost:2400,
        sitting:'5/24',
        line:'#FF4500'
      },
      {
        id:29,
        start:'Nyanza',
        end:'Kigali',
        time:'2024-7-20 16:30',
        cost:2000,
        sitting:'11/24',
        line:'#9400D3'
      },
      {
        id:30,
        start:'Nyanza',
        end:'Muhanga',
        time:'2024-7-20 16:30',
        cost:1000,
        sitting:'2/24',
        line:'#032B14'
      },
      {
        id:31,
        start:'Nyanza',
        end:'Ruhango',
        time:'2024-7-20 16:30',
        cost:1500,
        sitting:'23/24',
        line:'#FF4500'
      },
      {
        id:32,
        start:'Nyanza',
        end:'Huye',
        time:'2024-7-20 16:30',
        cost:2000,
        sitting:'14/24',
        line:'#9400D3'
      },
      {
        id:33,
        start:'Nyanza',
        end:'Nyamagabe',
        time:'2024-7-20 16:30',
        cost:2400,
        sitting:'22/24',
        line:'#032B14'
      },
      {
        id:34,
        start:'Huye',
        end:'Kigali',
        time:'2024-7-20 16:30',
        cost:2000,
        sitting:'8/24',
        line:'#FF4500'
      },
      {
        id:35,
        start:'Huye',
        end:'Muhanga',
        time:'2024-7-20 16:30',
        cost:1000,
        sitting:'20/24',
        line:'#9400D3'
      },
      {
        id:36,
        start:'Huye',
        end:'Nyanza',
        time:'2024-7-20 16:30',
        cost:1500,
        sitting:'21/24',
        line:'#032B14'
      },
      {
        id:37,
        start:'Huye',
        end:'Ruhango',
        time:'2024-7-20 16:30',
        cost:2000,
        sitting:'19/24',
        line:'#FF4500'
      },
      {
        id:38,
        start:'Huye',
        end:'Nyamagabe',
        time:'2024-7-20 16:30',
        cost:2400,
        sitting:'16/24',
        line:'#9400D3'
      },
     ],

 
}

 const appSlice = createSlice({
    name:'seats',
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
      },
      toggleSeat: (state, action) => {
        const seatNumber = action.payload;
        if (state.bookedSeats.includes(seatNumber)) {
          alert(`Seat ${seatNumber} has already been booked.`);
        } else if (state.selectedSeats.includes(seatNumber)) {
          state.selectedSeats = state.selectedSeats.filter((seat) => seat !== seatNumber);
        } else {
          state.selectedSeats.push(seatNumber);
        }
      },
      confirmSelection: (state) => {
        state.bookedSeats = [...state.bookedSeats, ...state.selectedSeats];
        state.selectedSeats = [];
      },
      loadBookedSeats: (state, action) => {
        state.bookedSeats = action.payload;
      },
    }
})

export const{setOrgina,setDestinationa,setAgency,setTravelTimeInformation,setPymentType,setLoginData,setSignupData,setAgecnyLoginData,toggleSeat, confirmSelection, loadBookedSeats} = appSlice.actions

export const selectOrgina =(state)=>state.application.origin
export const selectDestinationa =(state)=>state.application.destination
export const selectAgency =(state)=>state.application.Agency
export const selectTravelTimeInformation =(state)=>state.application.travelTimeInformation
export const selectPaymentType =(state)=>state.application.paymentType


export default appSlice.reducer
