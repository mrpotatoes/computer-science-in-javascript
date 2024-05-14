# Writing APIs
Write your code in such a fashion that the consumer of said code can build as if it is a throught through API but it's declarative.

```js
// This is better than
const students = collection('users')
  .alphabetical(FIRST_NAME)     // Filters by alphabetical
  .year(FRESHMEN)               // Filters by first year
  .degree(BA)                   // Finally filter by BA degree
  .ethnicity(DOMINCAN|AMERICA)  // Cuz that's what I be.

// this nonsense
const students = getCollection('users')
  .sortAlphaBy(FIRST_NAME)     // Filters by alphabetical
  .whichYear(FRESHMEN)               // Filters by first year
  .whichDegree(BA)                   // Finally filter by BA degree
  .whatEthnicity(DOMINCAN|AMERICA)  // Cuz that's what I be.
  .sort()
```

Don't ask, just do.

Just look at the difficulty building the chain using the second method. Granted that is an issue of multiple people working on the same codebase and with different perspectives and live experiances but here is a "better" version.

```js
const students = getCollection('users')
  .sortAlphaBy(FIRST_NAME)        // Filters by alphabetical
  .isYear(FRESHMEN)               // Filters by first year
  .isDegree(BA)                   // Finally filter by BA degree
  .isEthnicity(DOMINCAN|AMERICA)  // Cuz that's what I be.
  .sort()

```

Reading that is still more difficult and in terms of API usage more fragile/less flexible. If we built it where each function is a noun (what it returns) and each param is our command (filter by in these examples) then it is a lot faster and easier to read.

Not to mention the sort at the end. Granted this is something that can be done w/o but often you'll see this because state is managed within the class. It'll modify the object inside of the class and to call the filterable functions in any order you need to sort at the end. Whereas the version above is `functional` and is always returning new state.

Mind you this chain can be easily replicated using a class. Also, should be noted, that the the functions in the functional version is using `map` and `filter` but always returning new state.
