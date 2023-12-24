import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './screens/Home'
import AddMedia from './screens/AddMedia'
import Profile from './screens/Profile'
import Shorts from './screens/Shorts'
import Subs from './screens/Subs'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Shorts" component={Shorts}/>
      <Tab.Screen name="AddMedia" component={AddMedia}/>
      <Tab.Screen name="Subs" component={Subs}/>
      <Tab.Screen name="Profile" component={Profile}/>
    </Tab.Navigator>
  );
}

