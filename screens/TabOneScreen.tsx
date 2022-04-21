import React from "react";
import {Text, View, StyleSheet, TextInput, Button, Alert, ScrollView, SafeAreaView } from 'react-native';
import {Picker} from '@react-native-picker/picker';

import EditScreenInfo from '../components/EditScreenInfo';
//import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);
  const [selectedOption, setSelectedOption] = React.useState("3");
  const [selectedSetting, setSelectedSetting] = React.useState("3");
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>Input Fields</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        blurOnSubmit
        multiline
        numberOfLines={2}
        returnKeyType="done"
        style={styles.multilineInput}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter notes here..."
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
      <Picker
        style={styles.picker}
        selectedValue={selectedSetting}
        onValueChange={(itemValue, itemIndex) =>
          setSelectedSetting(itemValue)
        }>
        <Picker.Item label="Forest" value="1" />
        <Picker.Item label="Garden" value="2" />
        <Picker.Item label="Commercial Field" value="3" />
        <Picker.Item label="Urban" value="4" />
        <Picker.Item label="Suburban" value="4" />
      </Picker>
      <Button
        title="Default button"
        onPress={() => Alert.alert(' Button pressed')}
      />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  scrollView: {   
    width: '90%',
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
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  multilineInput: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height: 60,
  },
  picker: {
    width: "100%",
  }
});

