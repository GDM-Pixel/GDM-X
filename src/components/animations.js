// animations.js
export const animIn = {
    name: "fadeIn",
    duration: "0.3s",
    easing: "ease-in-out",
    fillMode: "forwards",
};

export const animOut = {
    name: "fadeOut",
    duration: "0.3s",
    easing: "ease-in-out",
    fillMode: "forwards",
};

export const animPair = {
    old: animOut,
    new: animIn,
};

export const myFadeSlide = {
    forwards: animPair,
    backwards: animPair,
};

//Fade Slide from bottom

export const animInFromBottomIn = {
    name: "fadeInFromBottom",
    duration: "0.3s",
    easing: "ease-in-out",
    fillMode: "forwards",
   
};

export const animOutToLeft = {
    name: "fadeOutToLeft",
    duration: "0.3s",
    easing: "ease-in-out",
    fillMode: "backwards",
   
};

export const animPairFadeSlide = {
    old: animOutToLeft,
    new: animInFromBottomIn,
};

export const animInFromBottom = {
    forwards: animPairFadeSlide,
    backwards: animPairFadeSlide,
};

