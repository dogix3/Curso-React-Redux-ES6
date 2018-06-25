import React, { Component } from 'react';

const Location = ({city}) => { //Destructuring (Object Destucturing)
    return (
        <div>
            <h1>
                {city}
            </h1>
        </div>)
};

export default Location;