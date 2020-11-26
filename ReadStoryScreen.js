import React from 'react';
import { Text, View } from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', marginTop: 50 }}>
          <Text style={{textAlign:'center', fontSize:30, marginTop: 10, marginBottom: 300}}>Story Hub</Text>
          <Text>Read stories here!</Text>
        </View>
      );
    }
  }