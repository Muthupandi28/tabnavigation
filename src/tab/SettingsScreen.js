import React,{Component} from 'react';
import { Text, View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {CustomHeader} from '../CustomHeader'

export class SettingsScreen extends Component{
    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
            <CustomHeader title="Settings" isHome={true} navigation={this.props.navigation}/>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                <Text>Settings!</Text>
                <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('SettingsDetails')}>
                      <Text>Go to Settings Details</Text>
                  </TouchableOpacity>
            </View>
          </SafeAreaView>
          );
    }
}