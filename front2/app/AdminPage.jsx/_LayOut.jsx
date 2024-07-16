import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import { Text } from 'react-native';
import AddCar from './AddCar';
import AddAgent from './AddAgent';
import Settings from './Settings';

import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


function TabNavigator  (){
  return (
    
    <Tab.Navigator screenOptions={{
      tabBarShowLabel:false,
      tabBarStyle:{
          backgroundColor:'#032B44',
          borderTopWidth:1,
          borderTopColor:'#232533',
          height: 80,
         
          
      }
    }}>
      <Tab.Screen  name="Add car" component={AddCar}
      options={{
        title:'Add Car',
        headerShown: false,
        tabBarIcon:({focused})=>(<>
          <MaterialCommunityIcons name="plus-circle" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>Add car</Text>
          </>)
      }}
       />
      <Tab.Screen name="Add Agent" component={AddAgent}
       options={{
        title:'Add Agent',
        headerShown: false,
        tabBarIcon:({focused})=>(<>
          <MaterialCommunityIcons name="account" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>Agents</Text>
          </>)
      }} />
      <Tab.Screen name="Settings" component={Settings}
       options={{
        title:'Settings',
        headerShown: false,
        tabBarIcon:({focused})=>(
          <>
          <MaterialCommunityIcons name="cog" size={33}  color={`${focused? '#1A1D23':'white'}`}  />
          <Text className={`${focused ? 'text-psemibold text-blue-400':'text-psemibold text-white'}`}>Settings</Text>
          </>)
      }} />

    </Tab.Navigator>
   
   
  );
};

export default TabNavigator;