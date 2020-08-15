import React, { Component } from 'react';

export const DEFAULT_URL = '';

export const HORIZONTAL_MAXWIDTH = '60vw';
export const VERTICAL_MAXWIDTH = '85vw';

export function importImages(r, orientation, _width = 1, _height = 1) {
    let images = [];
    let i = 0;
    var width = 1, height = 1;
    switch (orientation) {
        case 'vertical':
            { width = 2; height = 3; }
            break;
        case 'horizontal':
            { width = 3; height = 2; }
            break;
        case 'square':
            { width = 1; height = 1; }
            break;
        case 'ultrawide':
            { width = 21; height = 10; }
            break;
        case 'custom':
            { width = _width; height = _height; }
            break;
        default:
            break;
    }

    r.keys().map((item) => {

        images[i] = {
            src: r(item),
            width: width,
            height: height
        };
        i++;
    });
    return images;
}

export function shuffle(arr) {

    var currentIndex = arr.length;
    var temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = arr[currentIndex];
        arr[currentIndex] = arr[randomIndex];
        arr[randomIndex] = temporaryValue;
    }

    return arr;
};

export function getGridStyle(maxWidth) {
    return {
        //display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "12px",
        position: "relative",
        //flexWrap: "wrap",
        maxWidth: maxWidth,
        //maxWidth: '1400px',
        marginLeft: 'auto',
        marginRight: 'auto',
        top: 10,
    }
}

export function updateWindowDimensions(state) {
    state.window_width = window.outerWidth;
    state.window_height = window.outerHeight;
}

export const USStates = [
    { value: 'Alabama', label: 'Alabama' }, 
    { value: 'Alaska', label: 'Alaska' },  
    { value: 'Arizona', label: 'Arizona' },  
    { value: 'Arkansas', label: 'Arkansas' },  
    { value: 'California', label: 'California' },  
    { value: 'Colorado', label: 'Colorado' },   
    { value: 'Connecticut', label: 'Connecticut' },
    { value: 'Delaware', label: 'Delaware' },   
    { value: 'District Of Columbia', label: 'District Of Columbia' },   
    { value: 'Florida', label: 'Florida' },   
    { value: 'Georgia', label: 'Georgia' },   
    { value: 'Hawaii', label: 'Hawaii' },   
    { value: 'Idaho', label: 'Idaho' },   
    { value: 'Illinois', label: 'Illinois' },   
    { value: 'Indiana', label: 'Indiana' },   
    { value: 'Iowa', label: 'Iowa' },   
    { value: 'Kansas', label: 'Kansas' },      
    { value: 'Kentucky', label: 'Kentucky' },   
    { value: 'Louisiana', label: 'Louisiana' },   
    { value: 'Maine', label: 'Maine' },   
    { value: 'Maryland', label: 'Maryland' },   
    { value: 'Massachusetts', label: 'Massachusetts' },   
    { value: 'Michigan', label: 'Michigan' },   
    { value: 'Minnesota', label: 'Minnesota' },   
    { value: 'Mississippi', label: 'Mississippi' },   
    { value: 'Missouri', label: 'Missouri' },   
    { value: 'Montana', label: 'Montana' },   
    { value: 'Nebraska', label: 'Nebraska' },   
    { value: 'Nevada', label: 'Nevada' },   
    { value: 'New Hampshire', label: 'New Hampshire' },   
    { value: 'New Jersey', label: 'New Jersey' },   
    { value: 'New Mexico', label: 'New Mexico' },   
    { value: 'New York', label: 'New York' },   
    { value: 'North Carolina', label: 'North Carolina' },  
    { value: 'North Dakota', label: 'North Dakota' },
    { value: 'Ohio', label: 'Ohio' },
    { value: 'Oklahoma', label: 'Oklahoma' },
    { value: 'Oregon', label: 'Oregon' },
    { value: 'Pennsylvania', label: 'Pennsylvania' },
    { value: 'Puerto Rico', label: 'Puerto Rico' },
    { value: 'Rhode Island', label: 'Rhode Island' },
    { value: 'South Carolina', label: 'South Carolina' },
    { value: 'South Dakota', label: 'South Dakota' },
    { value: 'Tennessee', label: 'Tennessee' },
    { value: 'Texas', label: 'Texas' },
    { value: 'Utah', label: 'Utah' },
    { value: 'Vermont', label: 'Vermont' },
    { value: 'Virginia', label: 'Virginia' },
    { value: 'Washington', label: 'Washington' },
    { value: 'West Virginia', label: 'West Virginia' },
    { value: 'Wisconsin', label: 'Wisconsin' },
    { value: 'Wyoming', label: 'Wyoming' }
];