import Image from "./pasta.jpeg"

export default function home() {
    const content = document.getElementById("content");

    const h1 = document.createElement('h1');
    h1.textContent = "The Italian Meatball";

    const img1 = document.createElement("img");
    img1.src = Image;

    const p1 = document.createElement("p");
    p1.textContent = "Chef Boyardee: This place beat me at my own game. Mmmm-mmmm so good!";

    content.appendChild(h1);
    content.appendChild(img1);
    content.appendChild(p1);
}