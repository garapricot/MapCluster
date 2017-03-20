/**
* Sample React Native App
* https://github.com/facebook/react-native
* @flow
*/

import React, { Component } from 'react';
import {
 AppRegistry,
StyleSheet,
Dimensions,
Text,
View
} from 'react-native';

const marker = [
  {
    title: 'Foo Place',
    subtitle: '1234 Foo Drive',
    num:1
  }
];
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
export default class MapCluster extends Component {
  constructor(){
    super()
    this.state={
         latitude: null,
          longitude: null,
          latitudeDelta: null,
          longitudeDelta: null,
    }
  }
render() {
 return (
   
     
     <View style={styles.container}>
       <MapView
         provider={PROVIDER_GOOGLE}
         style={styles.map}
         initialRegion={{
           latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
         }}
       >
     <MapView.Marker  coordinate={{latitude:37.78826,longitude:-122.4324}}>
  <View style={styles.circle}>
         <Text style={styles.pinText}>11</Text>
   </View></MapView.Marker>
          <MapView.Marker  coordinate={{latitude:37.78802,longitude:-122.4300}}>
  <View style={styles.circle}>
         <Text style={styles.pinText}>13</Text>
   </View></MapView.Marker>
     </MapView>
     </View>
 );
}
}

MapCluster.propTypes = {
 provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    alignItems:'center',
    width: 30,
    height: 30,
    borderRadius:15,
    backgroundColor: 'red',
},
pinText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 15,
    marginTop:5
},
});

AppRegistry.registerComponent('MapCluster', () => MapCluster);

