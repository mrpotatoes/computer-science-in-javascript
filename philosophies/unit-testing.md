I will normally write tests in two fashions.

1. I will co-locate tests to the implementation.
1. I will have a `./test` dir co-located with the `./src` or `./lib` dirs and it mimics it exactly.

My toplevel describe is the file or class, the next child describe is the function, every it within there is each path that a function can take.
