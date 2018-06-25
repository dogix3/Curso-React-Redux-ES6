import React from 'react';
import Location from './Location';
import WheatherData from './WheatherData';

const WeatherLocation = () => (
    <div>
        <Location city={'San Jose'}/>
        <WheatherData/>
    </div>
);

export default WeatherLocation;