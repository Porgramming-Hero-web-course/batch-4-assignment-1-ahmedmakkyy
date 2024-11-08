# Understanding Union and Intersection Types in TypeScript

If you're new to TypeScript, you might have heard about **union types** and **intersection types**. These are some of the coolest features that make TypeScript so powerful! Let’s break them down in the simplest way possible.

## What are Union Types?

Imagine you have a box that can hold either a ball or a book. In TypeScript, **union types** let you declare a variable that can hold multiple types of values, just like the box can hold different objects.

For example, let’s say we want a variable that can hold either a `string` or a `number`:

```typescript
let myVar: string | number;

myVar = "Hello, TypeScript!"; // Valid
myVar = 42; // Valid
myVar = true; // Error: Type 'boolean' is not assignable to type 'string | number'
