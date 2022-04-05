import {View, TouchableOpacity, AppRegistry, ScrollView, Text, StyleSheet} from 'react-native';
import React, {useLayoutEffect, useState} from "react";

const UseLayoutEffect = () => {
    const [value, setValue] = useState(0);

  useLayoutEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, [value]);

  return (
    <View style={{ flex: 1,alignContent: 'center', justifyContent: 'center',}}>
      <TouchableOpacity onPress={() => setValue(0)}>
        <Text>value: {value}</Text>
      </TouchableOpacity>
    </View>

    // <div onClick={() => setValue(0)}>
    //   value: {value}
    // </div>
  );
};

export default UseLayoutEffect;