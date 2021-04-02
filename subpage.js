"use strict";

const shapesBackground = document.querySelector(".background_shapes").getBoundingClientRect();

for (let shape = 0; shape < 200; shape++) {
    const circleFriend = document.createElement("div");
    const triangleFriend = document.createElement("div");
    const squareFriend = document.createElement("div");
    squareFriend.classList.add("square");
    squareFriend.classList.add("shape");
    circleFriend.classList.add("circle");
    triangleFriend.classList.add("triangle");
    circleFriend.classList.add("shape");
    triangleFriend.classList.add("shape");

    document.querySelector(".background_shapes").append(circleFriend, triangleFriend, squareFriend);
}

const shape = document.querySelectorAll(".shape");
shape.forEach(b => {
    const endX = (Math.random() - .5) * shapesBackground.width * 2;
    const endY = (Math.random() - .5) * shapesBackground.height * 2;

    const randomOpacity = Math.random();
    const randomDuration = (Math.floor(Math.random() * 7000) + 4000);
    const randomScale = (Math.floor(Math.random() * 1.5) + 0.5);

    const keyframes = [{
            offset: 0,
            opacity: 1,
        },
        {
            offset: .45,
            transform: `translate(${endX}px,${endY}px) 
                      scale(${randomScale})`,
            opacity: randomOpacity,
        },
        {
            opacity: 1,
            opacity: randomOpacity,
        },
    ]

    const properties = {
        duration: randomDuration,
        iterations: Infinity
    };

    const shapeAnimation = b.animate(keyframes, properties);
    shapeAnimation.onfinish = function () {
        shapeAnimation.cancel();
        shapeAnimation.currentTime = 0;
        shapeAnimation();
    };
})