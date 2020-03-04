import React,{Component} from 'react';
import { Text, View,Image,TouchableOpacity} from 'react-native';
import {IMAGE} from './constant/Image'
import { SafeAreaView } from 'react-native-safe-area-context';
export class CustomHeader extends Component
{
    render()
    {

        let {navigation,isHome,title}=this.props
        return(
          <SafeAreaView>
          
            <View style={{flexDirection:'row',height:55,backgroundColor:'lightblue'}}>
                  <View style={{flex:1,justifyContent:'center'}}>
                    {
                     isHome ?
                    <TouchableOpacity onPress={()=>navigation.openDrawer()}>
                          <Image style={{width:30,height:30,marginLeft:5}}
                            source={IMAGE.ICON_MENU}
                            resizeMode='contain'
                          />
                    </TouchableOpacity> 
                    :
                    <TouchableOpacity style={{flexDirection:'row',alignItems:'center'}}
                    onPress={()=>navigation.goBack()}>
                          <Image style={{width:20,height:20,marginLeft:5}}
                          source={IMAGE.ICON_BACK}
                          resizeMode='contain'
                          />
                          <Text>Back</Text>
                    </TouchableOpacity>
                    }
                    
                  </View>
                <View style={{flex:1.5,justifyContent:'center'}}>
                <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('Home')}>
                      <Text>Home</Text>
                  </TouchableOpacity>
                </View>
                <View style={{flex:1.5,justifyContent:'center'}}>
                </View>
                <View style={{flex:1.5,justifyContent:'center'}}>
                <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('Settings')}>
                      <Text>Settings</Text>
                  </TouchableOpacity>
                </View>
            </View>

            <View style={{flex:1.5,justifyContent:'center',alignItems:'center'}}>
                <TouchableOpacity>
                      <Text>{title}</Text>
                  </TouchableOpacity>
                </View>
            </SafeAreaView>
          );
    }
}