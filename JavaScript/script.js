
const text = "🌍Hola Mundo 2025🌍";
let index = 0;

const title = document.getElementById("title");

function typeWriter() {
    if (index < text.length) {
        title.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}


title.addEventListener("click", () => {
    title.style.color = title.style.color === "red" ? "#333" : "red";
});


typeWriter();