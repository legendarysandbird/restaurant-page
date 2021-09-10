export default function contact() {
	const content = document.getElementById("content");

	const h1 = document.createElement("h1");
	h1.textContent = "Brandon Dodd";

	const p1 = document.createElement("p");
	p1.textContent = "Email: Italian-B@meatball.com"

	content.appendChild(h1);
	content.appendChild(p1);
}
