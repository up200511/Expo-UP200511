import { Image, Text } from 'react-native';
import { styles } from '../../App';
import { useState, useEffect } from 'react';
import { View } from 'react-native-web';

const WeatherComponent = ({ data, loading }) => {
    if (loading) return <Text>Loading data...</Text>;
    if (data == {}) return;
    if (data.cod == 404 || data.cod == 400)
        return (
            <Text>
                No fue posible encontrar la ciudad, vuelve a intentarlo.
            </Text>
        );

    const [name, setName] = useState();
    const [description, setDescription] = useState();
    const [icon, setIcon] = useState();
    useEffect(() => {
        if (data == undefined) return;
        if (data.cod == 200) {
            const { name, weather, timezone } = data;
            const { description, icon } = weather[0];
            setName(name);
            setDescription(description);
            setIcon(`https://openweathermap.org/img/wn/${icon}@2x.png`);
        }
    }, [data]);

    if (data.cod == 200)
        return (
            <>
                <Text style={styles.text_container}>
                    City: <Text>{name}</Text>
                </Text>
                <Text style={styles.text_container}>
                    Weather: <Text>{description}</Text>
                </Text>
                <Image source={{ uri: icon }} style={styles.image} />
            </>
        );
};

export default WeatherComponent;
