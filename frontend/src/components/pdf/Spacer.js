import React from 'react';
import { View, Text } from '@react-pdf/renderer';

export default class Spacer extends React.Component {
  render() {
    return (
      <View style={{ marginTop: this.props.size }}>
        <Text> </Text>
      </View>
    )
  }
}
