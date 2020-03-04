import React,{Component} from 'react';
import { Text, View,SafeAreaView} from 'react-native';
import {CustomHeader} from '../CustomHeader'

export class RegisterScreen extends Component{
    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                  <Text>Register screen</Text>
              </View>
          </SafeAreaView>
          );
    }
}