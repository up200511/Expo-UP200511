import { useEffect, useState } from 'react';
import KEYS from '../config/keys';
const { API_TOKEN } = KEYS;

export const getWeatherByCity = (city) => {
    const BASE_URL = new URL(
        '/data/2.5/weather',
        'https://api.openweathermap.org'
    );
    BASE_URL.searchParams.append('q', city);
    BASE_URL.searchParams.append('appid', API_TOKEN);
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (city != '') {
            setLoading(true);
            fetch(BASE_URL)
                .then((res) => res.json())
                .then((res) => {
                    setData(res);
                    setLoading(false);
                })
                .catch((e) => {
                    console.log('Error en la peticiao: ' + e);
                    return e;
                });
        }
    }, [city]);
    return { data, loading };
};
