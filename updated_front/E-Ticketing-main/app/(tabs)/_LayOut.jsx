import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native';
import Home from './home'
import Booking from './booking'
import Tickets from './tickets'
import Notification from './notification'

import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


function TabNavigator  (){
  return (
    
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
          backgroundColor:'#035B94',
          borderTopWidth:1,
          borderTopColor:'#232533',
          height: 80,
         
          
      }
    }}>
      <Tab.Screen  name="Home" component={Home}
      options={{
        title:'Home',
        headerShown: false,
        tabBarIcon:({focused})=>(<>
          <MaterialCommunityIcons name="home" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>home</Text>
          </>)
      }}
       />
      <Tab.Screen name="Booking" component={Booking}
       options={{
        title:'Booking',
        headerShown: false,
        tabBarIcon:({focused})=>(<>
          <MaterialCommunityIcons name="book" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>Booking</Text>
          </>)
      }} />
      <Tab.Screen name="Tickets" component={Tickets}
       options={{
        title:'Tickets',
        headerShown: false,
        tabBarIcon:({focused})=>(
          <>
          <MaterialCommunityIcons name="ticket" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>Tickets</Text>
          </>)
      }} />
      <Tab.Screen name="Notifications" component={Notification}
       options={{
        title:'Notificaton',
        headerShown: false,
        tabBarIcon:({focused})=>(
          <>
          <MaterialCommunityIcons name="bell" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>Notificaton</Text>
          </>
        )
      }} />
    </Tab.Navigator>
   
   
  );
};

export default TabNavigator;