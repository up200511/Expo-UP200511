import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { getWeatherByCity } from './src/services/weather';
import WeatherComponent from './src/components/WeatherComponent';

export default function App() {
  const [cityInput, setCityInput] = useState();
  const [cityQuery, setCityQuery] = useState('');

  const handleChangeTextCity = (e) => {
    setCityInput(e);
  };

  const handleSearchWeather = () => {
    setCityQuery(cityInput);
  };

  const { data, loading } = getWeatherByCity(cityQuery);

  return (
    <View style={styles.container}>
      <Text style={styles.text_xl}>Search for a city </Text>
      <TextInput
        placeholder='Enter the name of the city'
        style={styles.input}
        onChangeText={handleChangeTextCity}
      ></TextInput>
      <Button
        title='Search'
        onPress={() => {
          handleSearchWeather();
        }}
      ></Button>
      <WeatherComponent data={data} loading={loading} />
      <StatusBar style='auto' />
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
  },
  image: {
    margin: 30,
    height: 200,
    width: 200,
  },
  text: {
    margin: 10,
    color: "rgba(0,0,0,1)",
    fontSize: 20,
    width: 185,
    height: 24,
    backgroundColor: "rgba(93,224,224,1)",
    borderWidth: 0,
    borderColor: "rgba(93,224,224,1)",
    borderRadius: 11
  },
  text_xl: {
    fontSize: 30,
    color: '#8CC7FF',
  },
  
});
