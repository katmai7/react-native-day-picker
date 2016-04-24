import React from "react-native";
import Dimensions from 'Dimensions';
const IPHONE6 = 375;

// Precalculate Device Dimensions for better performance
const {width, height}= Dimensions.get('window');

// Calculating ratio from iPhone breakpoints
const ratioX = width < 375 ? (width < 320 ? 0.75 : 0.875) : 1;
const ratioY = height < 568 ? (height < 480 ? 0.75 : 0.875) : 1;

// We set our base font size value
const base_unit = 16;

// We're simulating EM by changing font size according to Ratio
const unit = base_unit * ratioX;

// We add an em() shortcut function
export function em(value) {
    return unit * value;
}

export default function px(pixels) {
    return Math.ceil(pixels * ratioX);
}
