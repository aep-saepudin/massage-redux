import React from 'react';
import { Text, View } from 'native-base';
import { connect } from 'react-redux';

function Juara(props) {
  console.log(props.data)
  return (
    <View>
      <Text>Juara</Text>
    </View>
  );
}

export default connect()(Juara);
