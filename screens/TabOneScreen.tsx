import React from "react";
import { StyleSheet, TextInput, Button, Alert } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = React.useState("Default Text");
  const [number, onChangeNumber] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState("3");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Input Fields</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Placeholder text"
        //keyboardType="numeric"
      />
      <Text style={styles.title}>Default picker</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Picker
        style={styles.picker}
        selectedValue={selectedOption}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedOption(itemValue)
        }>
        <Picker.Item label="Option 1" value="1" />
        <Picker.Item label="Option 2" value="2" />
        <Picker.Item label="Option 3" value="3" />
        <Picker.Item label="Option 4" value="4" />
      </Picker>
      <Button
        title="Default button"
        onPress={() => Alert.alert(' Button pressed')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    width: "80%",
  },
  picker: {
    width: "80%",
  }
});

