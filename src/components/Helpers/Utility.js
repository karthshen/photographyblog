import React, { Component } from 'react';

export const DEFAULT_URL = '/photographyblog';

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