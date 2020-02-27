import React,{Component} from 'react';
import { Text, View,Image,TouchableOpacity,SafeAreaView} from 'react-native';
import {CustomHeader} from '../CustomHeader'

export class HomeScreen extends Component{
    render()
    {
        return (
                <SafeAreaView style={{ flex: 1 }} >
                <CustomHeader title="Home" isHome={true} navigation={this.props.navigation}/>
                <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                    <Text>Home!</Text>
                    <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('HomeDetails')}>
                        <Text>Go to Home Details</Text>
                    </TouchableOpacity>
                </View>
                </SafeAreaView>
          );
    }
}