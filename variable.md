---
title: CSS Variable
description: CSS Variable
outline: deep
---

# CSS Variable (Custom Properties)

CSS Variables (also known as Custom Properties) allow you to store values that can be reused throughout your stylesheet. They make your CSS more maintainable and flexible.

## Basic Syntax

CSS Variables are defined using the `--` prefix and accessed using the `var()` function:

```css
:root {
  --primary-color: #3498db;
  --font-size: 16px;
}

.element {
  color: var(--primary-color);
  font-size: var(--font-size);
}
```

## Defining Variables

### Global Variables (Root Level)

```css
:root {
  --main-bg-color: #ffffff;
  --main-text-color: #333333;
  --border-radius: 8px;
  --spacing-unit: 1rem;
}
```

### Local Variables (Element Level)

```css
.card {
  --card-padding: 2rem;
  --card-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);

  padding: var(--card-padding);
  box-shadow: var(--card-shadow);
}
```

## Using Variables

### Basic Usage

```css
.button {
  background-color: var(--primary-color);
  color: var(--button-text-color);
  padding: var(--spacing-unit);
}
```

### Fallback Values

```css
.element {
  /* If --custom-color is not defined, use #000000 */
  color: var(--custom-color, #000000);

  /* Multiple fallbacks */
  font-family: var(--custom-font, var(--system-font, sans-serif));
}
```

## Practical Examples

### Theme System

```css
:root {
  /* Light theme */
  --bg-color: #ffffff;
  --text-color: #333333;
  --accent-color: #007bff;
}

.dark {
  /* Dark theme */
  --bg-color: #121212;
  --text-color: #ffffff;
  --accent-color: #4fc3f7;
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

.button {
  background-color: var(--accent-color);
  color: var(--bg-color);
}
```

### Variable Calculations

```css
:root {
  --base-spacing: 1rem;
  --header-height: 60px;
}

.content {
  /* Using calc() with variables */
  padding: calc(var(--base-spacing) * 2);
  margin-top: calc(var(--header-height) + var(--base-spacing));
}
```

## Best Practices

### 1. Use Meaningful Names

```css
/* Good */
:root {
  --color-primary: #007bff;
  --spacing-large: 2rem;
  --font-size-heading: 2rem;
}

/* Avoid */
:root {
  --blue: #007bff;
  --big: 2rem;
  --size1: 2rem;
}
```

### 2. Organize Variables

```css
:root {
  /* Colors */
  --color-primary: #007bff;
  --color-secondary: #6c757d;
  --color-success: #28a745;
  --color-danger: #dc3545;

  /* Typography */
  --font-family-base: "Helvetica Neue", Arial, sans-serif;
  --font-size-base: 1rem;
  --line-height-base: 1.5;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;

  /* Layout */
  --container-max-width: 1200px;
  --border-radius: 4px;
  --box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
```

### 3. Use Fallbacks

```css
.element {
  /* Always provide fallbacks for better browser support */
  color: #333333; /* Fallback */
  color: var(--text-color, #333333);
}
```

## Browser Support

CSS Variables are supported in all modern browsers:

- Chrome 49+
- Firefox 31+
- Safari 9.1+
- Edge 15+

For older browsers, use fallbacks or consider using a CSS preprocessor like Sass.

## Common Use Cases

- **Theme switching** (light/dark mode)
- **Responsive design** (changing values at breakpoints)
- **Component customization**
- **Design system implementation**
- **Dynamic styling with JavaScript**
- **Reducing code repetition**

## Conclusion

CSS Variables are a powerful feature that makes your stylesheets more maintainable, flexible, and dynamic. They're particularly useful for creating design systems, implementing themes, and building responsive layouts. Start incorporating them into your projects to write cleaner, more organized CSS.
