// Function to create 36 figures with random images
function createRandomImages() {
	const grid = document.querySelector(".grid");
	for (let i = 0; i < 36; i++) {
		// Create figure and img elements
		const figure = document.createElement("figure");
		const img = document.createElement("img");

		figure.classList.add("figure");

		// Generate a random height between 200 and 500
		const randomHeight = Math.floor(Math.random() * (500 - 200 + 1)) + 200;
		const randomWidth = 300; // Fixed width for consistency

		// Set the image src to Lorem Picsum with random height
		img.src = `https://picsum.photos/${randomWidth}/${randomHeight}`;
		img.alt = `Random image ${i + 1}`;

		// Append the img to the figure, then figure to the grid
		figure.appendChild(img);
		grid.appendChild(figure);
	}
}

document.addEventListener("DOMContentLoaded", () => {
	createRandomImages();
});
