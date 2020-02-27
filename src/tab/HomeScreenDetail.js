import React,{Component} from 'react';
import { Text, View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {CustomHeader} from '../CustomHeader'

export class HomeScreenDetail extends Component{
    render()
    {
        return (
            <SafeAreaView style={{ flex: 1 }}>
              <CustomHeader title="Home Details" navigation={this.props.navigation}/>
              <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                  <Text>Home Details!</Text>
              </View>
            </SafeAreaView>
          );
    }
}