import * as React from 'react';
import { Text, View,Image,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaView } from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ScrollView } from 'react-native-gesture-handler';

import {CustomHeader,CustomDrawerContent} from './src'
import {HomeScreen,HomeScreenDetail,SettingsScreen,SettingsScreenDetail} from './src/tab'
import {NotificationsScreen} from './src/drawer'
import {RegisterScreen,LoginScreen} from './src/auth'

import {IMAGE} from './src/constant/Image'

const Tab = createBottomTabNavigator();

const navOptionHandler =()=>({
  headerShown:false
});

const StackHome=createStackNavigator();

function HomeStack()
{
  return(
  <StackHome.Navigator initialRouteName="Home">
    <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler}/>
    <StackHome.Screen name="HomeDetails" component={HomeScreenDetail} options={navOptionHandler}/>
</StackHome.Navigator>);
}

const StackSetting=createStackNavigator();

function SettingsStack()
{
  return (
    <StackSetting.Navigator initialRouteName="Settings">
      <StackSetting.Screen name="Settings" component={SettingsScreen} options={navOptionHandler}/>
      <StackSetting.Screen name="SettingsDetails" component={SettingsScreenDetail} options={navOptionHandler}/>
  </StackSetting.Navigator>
  );
  
}




function TabNavigator()
{
      return(
        <Tab.Navigator
            screenOptions={({ route }) => ({
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused
                    ? IMAGE.ICON_HOME
                    : IMAGE.ICON_HOMECOLOR
                } else if (route.name === 'Settings') {
                  iconName = focused ?  IMAGE.ICON_SETTINGS :  IMAGE.ICON_SETTINGSCOLOR;
                }
                // You can return any component that you like here!
                return <Image source={iconName} style={{width:20,height:20}} resizeMode='contain' />;
              },
            })}
            tabBarOptions={{
              activeBackgroundColor:'lightblue',
              activeTintColor: 'red',
              inactiveTintColor: 'black',
            }}
          >
            <Tab.Screen name="Home" component={HomeStack} />
            <Tab.Screen name="Settings" component={SettingsStack} />
      </Tab.Navigator>
      );
}

const Drawer = createDrawerNavigator();

function DrawerNavigation({navigation})
{
  return(
    <Drawer.Navigator initialRouteName="MenuTab" drawerContent={()=><CustomDrawerContent navigation={navigation}/>}>
            <Drawer.Screen name="MenuTab" component={TabNavigator} />
            <Drawer.Screen name="Notifications" component={NotificationsScreen} />
    </Drawer.Navigator>
  );
}

const StackApp=createStackNavigator();
function App() {

  return (
    <NavigationContainer>
         <StackApp.Navigator initialRouteName="Login">
         <StackApp.Screen name="HomeApp" component={DrawerNavigation} options={navOptionHandler}/>
         <StackApp.Screen name="Login" component={LoginScreen} options={navOptionHandler}/>
         <StackApp.Screen name="Register" component={RegisterScreen} options={navOptionHandler}/>
  </StackApp.Navigator>
    </NavigationContainer>
  );
}

export default App;