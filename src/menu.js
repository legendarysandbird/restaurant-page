export default function menu() {
	const content = document.getElementById("content");

	const h1 = document.createElement("h1");
	h1.textContent = "Menu";

	const h2 = document.createElement("h2");
	h2.textContent = "Les Spaghet";

	const p1 = document.createElement("p");
	p1.textContent = "All you'll ever need. Good for the body and the soul."

	content.appendChild(h1);
	content.appendChild(h2);
	content.appendChild(p1);
}
