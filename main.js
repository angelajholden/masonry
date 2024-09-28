function toggleLayout() {
	// Select both buttons and the section
	const buttonColumn = document.querySelectorAll(".css-type")[0];
	const buttonCss3 = document.querySelectorAll(".css-type")[1];
	const gridSection = document.querySelector(".grid");

	// Add event listener for the first button (Column Count)
	buttonColumn.addEventListener("click", function () {
		// Set "column" class on the button and the section
		buttonColumn.classList.add("column");
		buttonColumn.classList.remove("css3");

		buttonCss3.classList.remove("css3");
		buttonCss3.classList.remove("column");

		gridSection.classList.add("column");
		gridSection.classList.remove("css3");
	});

	// Add event listener for the second button (CSS3 Grid)
	buttonCss3.addEventListener("click", function () {
		// Set "css3" class on the button and the section
		buttonCss3.classList.add("css3");
		buttonCss3.classList.remove("column");

		buttonColumn.classList.remove("column");
		buttonColumn.classList.remove("css3");

		gridSection.classList.add("css3");
		gridSection.classList.remove("column");
	});
}

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
	toggleLayout();
});
