window.onload = function () {

    const btn = document.getElementById("blend-btn");

    btn.onclick = function () {

        const surnameInput = document.getElementById("surname").value.trim();

        if (surnameInput === "") {
            alert("Please enter a surname.");
            return;
        }

        const font = document.getElementById("font").value;
        const color = document.getElementById("color").value;
        const fontSize = document.getElementById("fontsize").value;
        const spacing = document.getElementById("spacing").value;
        const letterSize = document.getElementById("lettersize").value;

        const output = document.getElementById("output");

        output.innerHTML = "";

        let letters = surnameInput.split("");

        if (document.getElementById("reverse").checked) {
            letters.reverse();
        }

        letters.forEach((letter, i) => {

            let span = document.createElement("span");
            span.textContent = letter;
            span.style.position = "absolute";
            span.style.fontFamily = font;
            span.style.color = color;
            span.style.fontSize = letterSize + "px";
            span.style.letterSpacing = spacing + "px";

            if (document.getElementById("random").checked) {
                span.style.left = Math.random() * 260 + "px";
                span.style.top = Math.random() * 90 + "px";
            } else {
                let spacing = 15;
                span.style.left = (spacing * (i + 1)) + "px";
                span.style.top = (spacing * (i + 1)) + "px";
            }

            output.appendChild(span);
        });
    };
};