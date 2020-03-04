import React,{Component} from 'react';
import { Text, View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {CustomHeader} from '../index'

export class NotificationsScreen extends Component{
    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                  <Text>Notifications</Text>
                  <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('Home')}>
                      <Text>Go back</Text>
                  </TouchableOpacity>
              </View>
              
              
          </SafeAreaView>
          );
    }
}