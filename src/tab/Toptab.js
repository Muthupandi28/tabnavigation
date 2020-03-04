import * as React from 'react';
import { View, StyleSheet, Dimensions,Text } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
 
const FirstRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} >
    <Text>
      This the first tab.
      </Text>
  </View>
);
 
const SecondRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} >
    <Text>
      This the Second tab.
      </Text>
  </View>
);
 
const ThirdRoute = () => (
  <View style={[styles.container, { backgroundColor: 'lightgreen' }]} >
    <Text>
      This the Third tab.
      </Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };
 
export default function Toptab() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First',icon:require('C:/Users/muthu/Documents/reactnativetabview/tabview/home.png') },
    { key: 'second', title: 'Second' },
    { key: 'third', title: 'Third' },
  ]);
 
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third:ThirdRoute,
  });
 
  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout} 
      style={{backgroundColor:'lightblue'}}
    />
  );
}
 
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  scene: {
    flex: 1,
  },
});