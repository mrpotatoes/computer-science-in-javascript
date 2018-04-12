# Variable Naming
> Write your code in such a fashion that the consumer of said code can build as if it is a throught through API but it's declarative. - Me

One thing I notice in many parts of code is where we will write functions so long that we require variables to have complex names in order to keep track of what each of them do. Here is some simple code from another one of my docs:
```js
// This is better than
const students = collection('users')
  .alphabetical(FIRST_NAME)     // Filters by alphabetical
  .year(FRESHMEN)               // Filters by first year
  .degree(BA)                   // Finally filter by BA degree
  .ethnicity(DOMINCAN|AMERICA)  // Cuz that's what I be.
```

In a small enough function we'll only have one students variable and we know what it is. It's a filtered and sorted students collection. In any other function that is much taller we could have `studentsBA` and `studentsBS` collections.

In small enough functions you won't need either of these (call functions directly).

Good luck.
