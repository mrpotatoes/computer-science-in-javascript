# Computer Science in JavaScript
![Macbook with code on it](./docs/hero-image.jpg) <br />
*Photo by [Clément Hélardot](https://unsplash.com/@clemhlrdt)* [^hero-image]

This is my personal reference for computer science (w/o the math sadly) with all the code written in `JavaScript`. I use it as both a study guide and a reference. Everything written is in a casual voice.

## Attributions
### Credits
1. Not all of this code is my own. In those cases I will note it within the code and any `README` files referencing said code. Like I said this is just a repo for me to learn, re-learn, or to setup as a reference for myself.
1. For all code or articles written within this repo, for which I have put in considerable effort, it needs to be known that I used many sources for **EVERY** article or code bit. I wanted to be as extensive as possible and I cited *everything* I used.
1. Image: [^hero-image]: [JavaScript in progress](https://unsplash.com/photos/95YRwf6CNw8) by [Clément Hélardot](https://unsplash.com/@clemhlrdt)
1. System design secttion is heavily influenced by [Donne Martin's](https://github.com/donnemartin/system-design-primer) work

## Todos
- Convert to `TypeScript`
  - Branch: `feature/typescript`
  - Remove `babel-plugin-namespace` plugin
- Perhaps use [11ty](https://www.11ty.dev/docs/) to generate a docs website
  - Branch: `feature/gh-pages`
  - Use a "docs" theme
  - Needs to pull in the content from the `./src` directory
    - Anything in here should also pull in code snippets
      - I think there is a `markdown-it` plugin for this
  - Use `.eleventyignore` to ignore directories & files from the root directory
- Reorganize `./philosophies/`
  - Branch: `feature/reorg-docs`
  - `./philosophies/` → `./docs`
- Create my own designs
- Merge `system-design/designing-applications/topics/` with `./philosophies/system-design/core/`
- Recreate all the diagrams into my own (draw.io)
- Rename all `README.md` files to `index.md` except for repo-root one
- Redo the tables in `designing-applications/` `README.md` so it doesn't look so wierd


```
.
|____docs
| |____interview-questions
| | |____general
| | |____interview-questions.jpg
| | |____leet-code
| |____anti-patterns
| | |____software-development-antipatterns
| | |____project-management-antipatterns
| |____systems-patterns
| | |____microservices
| | |____cqrs
| | |____ddd
| | |____code-apis
| | |____event-sourcing
| | |____rest
| | |____hypermedia
| | |____pseudocode
| |____big-o
| |____system-design
| | |____basics
| | |____core
| | |____designs
| | |_____assets
| | |____topics
| |____best-practices
| | |____typescript
| | |____code-styles
| | |____react
| | |____functional
```
