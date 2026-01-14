---
title: CSS Display Property
description: Learn how to control the layout of HTML elements using the CSS display property, including block, inline, inline-block, flex, and grid.
outline: deep
---

# CSS Display Property

The CSS `display` property is crucial for controlling the layout of HTML elements. It determines how an element is displayed on the page, affecting its dimensions, positioning, and interaction with other elements.

[[toc]]

## Common Display Values

### 1. Block

Block elements take up the full width available, with a new line before and after the element. Common block elements include `<div>`, `<h1>` to `<h6>`, `<p>`, and `<section>`.

```css
div {
  display: block;
}
```

:::info Note
Block elements can have width and height set, and they respect top and bottom margins.
:::

### 2. Inline

Inline elements do not start on a new line and only take up as much width as necessary. Common inline elements include `<span>`, `<a>`, and `<strong>`.

```css
span {
  display: inline;
}
```

:::info Note
Inline elements cannot have width or height set, and they do not respect top and bottom margins.
:::

### 3. Inline-Block

Inline-block elements are similar to inline elements but allow you to set width and height. They do not start on a new line.

```css
span {
  display: inline-block;
  width: 100px;
  height: 50px;
}
```

:::info Note
Inline-block elements respect both horizontal and vertical margins, making them versatile for layout purposes.
:::

### 4. Flex

Flexbox is a layout model that allows for responsive design and alignment of elements in a container. It provides powerful alignment and distribution capabilities.

#### Syntax

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
}
```

:::info Note
Flex containers can have their children arranged in rows or columns, and they can grow or shrink to fit the available space.

- `display: flex;` sets the container to use flexbox layout.
- `flex-direction` defines the direction of the flex items (row or column).
  - `row` (default) arranges items horizontally.
  - `column` arranges items vertically.
- `justify-content` aligns items along the main axis (horizontal or vertical).
  - `center` centers items.
  - `space-between` distributes items evenly with space between them.
  - `space-around` distributes items evenly with space around them.
- `align-items` aligns items along the cross axis (perpendicular to the main axis).
  - `center` centers items vertically.
  - `flex-start` aligns items to the start of the container.
  - `flex-end` aligns items to the end of the container.
- `flex-wrap` allows items to wrap onto multiple lines if they exceed the container's width.
- `gap` sets the space between flex items.

:::

### 5. Grid

Grid layout allows for two-dimensional layout control, enabling complex designs with rows and columns.

#### Syntax

```css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  gap: 20px;
}
```

:::info Note
Grid layout provides precise control over the placement of elements in a grid structure, allowing for responsive designs with ease.

- `display: grid;` sets the container to use grid layout.
- `grid-template-columns` defines the number and size of columns.
  - `repeat(auto-fill, minmax(200px, 1fr))` creates as many columns as will fit in the container, each at least 200px wide and growing to fill available space.
- `grid-template-rows` defines the size of rows.
- `gap` sets the space between grid items.
  :::

### 6. None

The `none` value removes the element from the document flow, making it invisible and not taking up any space.

```css
.hidden {
  display: none;
}
```

:::info Note
Elements with `display: none` are not rendered on the page and do not affect the layout of other elements.
:::

## Practical Examples

### Block vs. Inline

```html
<div class="block-example">This is a block element.</div>
<span class="inline-example">This is an inline element.</span>
```

```css
.block-example {
  display: block;
  background-color: lightblue;
  padding: 10px;
}

.inline-example {
  display: inline;
  background-color: lightgreen;
  padding: 5px;
}
```

### Navigation Bar with inline-Block

```html
<nav class="navbar">
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Services</a></li>
    <li><a href="#">Contact</a></li>
  </ul>
</nav>
```

```css
.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}
.navbar li {
  display: inline-block;
  margin-right: 20px;
}
.navbar a {
  text-decoration: none;
  color: #333;
}
```

### Card Layout with Flexbox

```html
<div class="card-container">
  <div class="card">Card 1</div>
  <div class="card">Card 2</div>
  <div class="card">Card 3</div>
  <div class="card">Card 4</div>
  <div class="card">Card 5</div>
  <div class="card">Card 6</div>
</div>
```

```css
.card-container {
  display: flex;
  flex-wrap: wrap; /* Allow items to wrap */
  gap: 20px; /* Space between items */
}
.card {
  flex: 1 1 300px; /* Grow, shrink, and base width */
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
}
```

### Grid Layout Example

```html
<div class="grid-container">
  <div class="grid-item">Item 1</div>
  <div class="grid-item">Item 2</div>
  <div class="grid-item">Item 3</div>
  <div class="grid-item">Item 4</div>
  <div class="grid-item">Item 5</div>
  <div class="grid-item">Item 6</div>
</div>
```

```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(200px, 1fr)
  ); /* Responsive columns */
  gap: 20px; /* Space between items */
}
.grid-item {
  background-color: #f9f9f9;
  padding: 20px;
  border: 1px solid #ddd;
}
```

## Conclusion

The `display` property in CSS is a powerful tool for controlling the layout and appearance of HTML elements. Understanding the different display values allows you to create flexible, responsive designs that enhance user experience. By mastering block, inline, inline-block, flex, grid, and none, you can effectively manage how elements interact with each other and the overall layout of your web pages.

## Homework

1. Create a simple webpage with a header, a navigation bar, and a content section.
2. Use the `display` property to style the navigation bar with inline-block elements.
3. Create a flexbox layout for the content section, displaying multiple cards.

## Additional Resources

- [MDN Web Docs - CSS Display Property](https://developer.mozilla.org/en-US/docs/Web/CSS/display)
- [CSS Tricks - A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Tricks - A Complete Guide to Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [W3Schools - CSS Display Property](https://www.w3schools.com/cssref/pr_class_display.asp)
