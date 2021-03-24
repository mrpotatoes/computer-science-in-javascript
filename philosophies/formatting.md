Just some thoughts on formatting.

## 1. Semi colons are stupid. Please stop using them to "end" a line of code.

## 2. Curly braces are also stupid for anything other than JSON.
They are, unfortunatly, required in a lot of languages. JavaScript and TypeScript has some flexibility, though. You can get away with a lot by using a functional approach, lambdas (anon functions) and ternaries. Stay away from `switch` statements as you don't need them and then you'll be left with just JSON, Object literals and classes (but stay away from classes).

