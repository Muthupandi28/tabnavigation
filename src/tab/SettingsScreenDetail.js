import React,{Component} from 'react';
import { Text, View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {CustomHeader} from '../CustomHeader'

export class SettingsScreenDetail extends Component{
    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Settings Details" navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                  <Text>Settings Details!</Text>
              </View>
          </SafeAreaView>
          );
    }
}