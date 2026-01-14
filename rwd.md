---
title: Responsive Web Design (RWD)
description: Guidelines and best practices for implementing responsive web design.
---

# Responsive Web Design (RWD)

Responsive Web Design ensures your website looks and functions well across all devices and screen sizes.

## Device Sizes and Breakpoints

### Common Device Categories

| Device      | Screen Width   | Typical Resolution                         |
| ----------- | -------------- | ------------------------------------------ |
| **Mobile**  | 320px - 768px  | 375x667 (iPhone), 414x896 (iPhone Pro)     |
| **Tablet**  | 768px - 1024px | 768x1024 (iPad), 1024x768 (iPad Landscape) |
| **Desktop** | 1024px+        | 1920x1080, 1366x768, 2560x1440             |

### `@media` Queries

Media queries allow you to apply styles based on the device's characteristics, such as width, height, and orientation.

```css
/* Example of a media query */
@media screen and (max-width: 768px) {
  body {
    background-color: lightblue; /* Styles for devices with width <= 768px */
  }
}
```

### Standard Breakpoints

```css
/* Mobile First Approach */
/* Mobile: 0px - 767px (default) */

/* Tablet */
@media screen and (min-width: 768px) {
  /* Styles for tablet and up */
}

/* Desktop */
@media screen and (min-width: 1024px) {
  /* Styles for desktop and up */
}

/* Large Desktop */
@media screen and (min-width: 1440px) {
  /* Styles for large screens */
}
```

## Grid Layout Examples

### Responsive Card Grid

```css
.card-grid {
  display: grid;
  gap: 1rem;
  padding: 1rem;

  /* Mobile: Single column */
  grid-template-columns: 1fr;
}

@media screen and (min-width: 768px) {
  .card-grid {
    /* Tablet: Two columns */
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
}

@media screen and (min-width: 1024px) {
  .card-grid {
    /* Desktop: Three columns */
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
  }
}
```

<!--
### Sidebar Layout

```css
.layout {
  display: grid;
  gap: 1rem;
  padding: 1rem;

  /* Mobile: Stacked layout */
  grid-template-areas:
    "header"
    "main"
    "sidebar"
    "footer";
}

@media screen and (min-width: 1024px) {
  .layout {
    /* Desktop: Sidebar layout */
    grid-template-columns: 250px 1fr;
    grid-template-areas:
      "header header"
      "sidebar main"
      "footer footer";
  }
}

.header {
  grid-area: header;
}
.main {
  grid-area: main;
}
.sidebar {
  grid-area: sidebar;
}
.footer {
  grid-area: footer;
}
``` -->

## Flexbox Examples

### Responsive Navigation

```css
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #333;
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  /* Mobile: Vertical stack (when menu is open) */
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: #333;
  transform: translateY(-100%);
  opacity: 0;
  transition: all 0.3s ease;
}

.nav-menu.active {
  transform: translateY(0);
  opacity: 1;
}

@media screen and (min-width: 768px) {
  .nav-menu {
    /* Tablet/Desktop: Horizontal layout */
    flex-direction: row;
    position: static;
    transform: none;
    opacity: 1;
    width: auto;
  }

  .menu-toggle {
    display: none;
  }
}
```

### Flexible Card Layout

```css
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 1rem;
}

.card {
  flex: 1 1 100%; /* Mobile: Full width */
  min-width: 280px;
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 8px;
}

@media screen and (min-width: 768px) {
  .card {
    flex: 1 1 calc(50% - 0.5rem); /* Tablet: Two per row */
  }
}

@media screen and (min-width: 1024px) {
  .card {
    flex: 1 1 calc(33.333% - 0.67rem); /* Desktop: Three per row */
  }
}
```

## Essential RWD Techniques

### 1. Viewport Meta Tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
```

<!--
### 2. Fluid Typography

```css
.heading {
  font-size: clamp(1.5rem, 4vw, 3rem);
}

.body-text {
  font-size: clamp(1rem, 2.5vw, 1.125rem);
}
``` -->

### 2. Responsive Images

```css
img {
  max-width: 100%;
  height: auto;
}

.hero-image {
  width: 100%;
  height: 50vh;
  object-fit: cover;
}
```

<!-- ### 4. Container Queries (Modern Approach)

```css
.card-container {
  container-type: inline-size;
}

@container (min-width: 400px) {
  .card {
    display: flex;
    align-items: center;
  }
}
``` -->

## Best Practices

### Mobile-First Design

- Start with mobile styles as the base
- Use `min-width` media queries to enhance for larger screens
- Progressively enhance the experience

### Performance Considerations

```css
/* Optimize for touch devices */
.button {
  min-height: 44px; /* Minimum touch target size */
  min-width: 44px;
}

/* Reduce animations on slower devices */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### Testing Your Design

- Use browser dev tools device simulation
- Test on actual devices when possible
- Consider different orientations (portrait/landscape)
- Test with different content lengths
<!--

## Common Patterns

### Holy Grail Layout

```css
.holy-grail {
  display: grid;
  min-height: 100vh;
  grid-template-rows: auto 1fr auto;
}

@media screen and (min-width: 768px) {
  .holy-grail {
    grid-template-columns: 200px 1fr 200px;
    grid-template-areas:
      "header header header"
      "nav main aside"
      "footer footer footer";
  }
}
```

### Responsive Typography Scale

```css
:root {
  --text-sm: clamp(0.875rem, 0.8rem + 0.375vw, 1rem);
  --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem);
  --text-lg: clamp(1.125rem, 1rem + 0.625vw, 1.25rem);
  --text-xl: clamp(1.25rem, 1.1rem + 0.75vw, 1.5rem);
  --text-2xl: clamp(1.5rem, 1.3rem + 1vw, 2rem);
}
```

Remember: Always test your responsive designs across different devices and screen sizes to ensure optimal user experience! -->

## Practice Exercise

### Build a Responsive Portfolio Layout

Create a responsive portfolio website with the following requirements:

#### HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Portfolio</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header">
      <nav class="navbar">
        <div class="logo">Portfolio</div>
        <ul class="nav-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div class="menu-toggle">☰</div>
      </nav>
    </header>

    <main>
      <section class="hero">
        <h1>John Doe</h1>
        <p>Web Developer & Designer</p>
      </section>

      <section class="projects">
        <h2>My Projects</h2>
        <div class="project-grid">
          <div class="project-card">
            <h3>Project 1</h3>
            <p>Description of project 1</p>
          </div>
          <div class="project-card">
            <h3>Project 2</h3>
            <p>Description of project 2</p>
          </div>
          <div class="project-card">
            <h3>Project 3</h3>
            <p>Description of project 3</p>
          </div>
        </div>
      </section>
    </main>

    <footer class="footer">
      <p>&copy; 2024 John Doe. All rights reserved.</p>
    </footer>
  </body>
</html>
```

<!--
#### Your Task

1. Create responsive navigation (hamburger menu on mobile)
2. Make the project grid responsive (1 column on mobile, 2 on tablet, 3 on desktop)
3. Add fluid typography using `clamp()`
4. Ensure touch-friendly button sizes (44px minimum)
5. Test on different screen sizes

#### Bonus Challenges

- Add smooth transitions for the mobile menu
- Implement a responsive image gallery
- Create a contact form with responsive layout
- Add CSS animations that respect `prefers-reduced-motion` -->

## Summary

Responsive Web Design is essential for creating websites that provide a great user experience across all devices. By using media queries, flexible layouts, and responsive images, you can ensure your site adapts seamlessly to different screen sizes. Always test your designs on various devices to ensure functionality and aesthetics are preserved.
