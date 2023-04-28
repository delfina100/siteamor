var moveButton = document.getElementById("btnnao");

moveButton.addEventListener("onmouserouver", () => {
        var vertical = Math.floor(Math.random() * 400);
        var horizontal = Math.floor(Math.random() * 400);
        moveButton.style.position = "absolute";
        moveButton.style.left = vertical + "px";
        moveButton.style.top = horizontal + "px";
    });


