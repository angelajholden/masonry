# CSS Layout Examples

## 1. CSS Columns Layout

The CSS Columns layout allows you to easily divide content into multiple columns with controlled spacing between them.

```css
.column-container {
	column-count: 6; /* Number of masonry columns */
	column-gap: 1.5rem; /* Space between columns */
}
```

### Explanation:

-   **`column-count: 6`**: This property controls how many columns your content will be split into. In this case, it creates 6 equal-width columns across the container. It’s great for creating that multi-column, magazine-style layout where text or elements automatically flow from one column to the next.
-   **`column-gap: 1.5rem`**: This sets the space (or gap) between each of those columns. With `1.5rem`, you’re giving each column a bit of room to breathe, making sure they don’t sit too close together. It helps keep things visually clean and avoids clutter.

Basically, these two properties work together to create a nice, organized layout with multiple columns and controlled spacing between them. Perfect for layouts that need to display content in a neat, grid-like fashion!

## 2. CSS3 Grid Masonry Layout (Experimental)

The CSS3 Grid Masonry Layout is a flexible way to display items of varying heights in a masonry-like format using the grid system.

```css
.grid-container {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
	gap: 1.25rem;
	grid-template-rows: masonry;
}
```

### Explanation:

-   **`display: grid`**: This kicks things off by turning the container into a grid. It’s like setting up a flexible layout where items can be organized neatly.
-   **`grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr))`**: This part sets up the columns. It’s saying, “Fill the container with as many columns as possible, each at least 14rem wide, but no bigger than 1 fraction (1fr) of the available space.” So, as the screen size changes, the number of columns will adjust automatically to fit.
-   **`gap: 1.25rem`**: This defines the space between grid items. It’s like giving the elements some breathing room, so they don’t look squished together.

-   **`grid-template-rows: masonry`**: This is the experimental bit! It creates a masonry-style layout for the rows, where the grid items stack vertically like bricks. This allows items of varying heights to fit together without leaving awkward gaps, similar to how Pinterest or other masonry-style layouts work.

Together, these properties create a dynamic grid that automatically adjusts based on screen size and keeps everything tightly packed in a cool masonry layout, perfect for image galleries or cards with varying content heights.
