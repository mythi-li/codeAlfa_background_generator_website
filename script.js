const colorPickers = document.querySelectorAll(".color-picker input");
const body = document.body;
const gradientCode = document.getElementById("gradientCode");

function setGradient() {
    const color1 = colorPickers[0].value;
    const color2 = colorPickers[1].value;
    body.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
    gradientCode.textContent = `background: ${body.style.background};`;
}

colorPickers.forEach(colorPicker => {
    colorPicker.addEventListener("input", setGradient);
});

// Initial gradient setup
setGradient();
