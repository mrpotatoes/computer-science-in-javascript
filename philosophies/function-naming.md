# Function Naming
> We care not what the function does or how it does it but what we get from it. We name it thusly - Grand Coder LibreSinn

## Tao of Naming
> A function's return value is most important <br />
> Name functions and methods according to their side-effects <br />
> Those without side-effects should read as noun phrases <br />
> Those with side-effects should read as imperative verbs <br />
> A side effected function, ideally, should return void <br />

## About Naming
Writing functions using verbs conceals the purpose of the function and reveals it's imperative nature. What I care about is how to use it in my project. Take for instance `createTwitterAccount()` tells me the function will create a twitter account but what does that really mean? Is it to to make a new account or register a user or login? What am I getting back or how do I use this in my project?

How about `file.isFile(filePath)` or `file.containsString(str)`? If the language supports it (or you have a library that supports it) then it's better to just return the file object and do a truthy check against that and your code will be better for it.

You could do this
```js
// It is a file, horray!
if (file.isFile(filePath)) {
}

// Returns a boolean and on true you'll have to search for it again.
if (file.containsString(str)) {
}
```

Or you could live a better life.
```js
if (file.exists(filePath)) {
}

// This can return a null or a string position and use truthyness instead.
if (file.find(str)) {
  console.log('The key was found!')
}

// Alternative if you still need the key.
const key = file.find(str)
if (key) {
  console.log(key)
}
```

Verbing a function means obscuring what it returns. What does `create_database` return? A connection object? The name of the database? Nothing at all? So, instead, I’ve actually taken to nouning my functions

> The information that factors into the function’s result—care of the nicely-named args you pass in. Thus, the input is clear, and the output is clear. In fact, the only thing that’s left a mystery is the process by which the function effects the input-to-output transformation, and I contend that’s of secondary importance: most of the time, I’m content just to have the output I need and don’t bother about the implementation. Isn’t that the entire point of abstracting functions to begin with?
>
> Naming variables to make clear their types. Name an arg `connectionSeq` or `connectionMap`, and callers can probably guess what kind of data structure to pass in without reading any docs. Combine this with function-nouning, and you make two things automatically clear.

A big benefit to this method of naming is that you don't litter your code with `is` and `do` and `get` before all your methods making your code look stupid as shit. Or, if you're like me, now you won't be worried about if your classes contain too many of those prefixes.

## RULES
> Name functions and methods according to their side-effects
> 1. Those without side-effects should read as noun phrases.
>     * Name functions using nouns based on return value
> 1. Those with side-effects should read as [imperative verb](https://www.grammarly.com/blog/imperative-verbs/) phrases.
> 1. A side effected function, ideally, should return void. 
>     * This is to tell the user of your API that this function contains a side effect.

## Examples
If I have a function that returns a collection then I would name it `collection()`. 

If I wanted part of a collection then perhaps `collectionPart(prop)`.

Also, `collection().inOrder()` would return a newly sorted array so it wouldn't need to modify the list and is side-effect free. Lastly `collection.sorted()` no side effect so ideally it should always return a value.

These all have side effects. Meaning that each of these will modify state, call to an API or modify the collection itself. None of these will return as they modify the contents within. Assuming `collection()` gets a collection then these all are side-effected functions. They don't "need" to return as per the rule
* `collection().sort()`
* `collection().order(ASC|DESC)`
* `collection().remove(id)`
* `collection().find(id)`
* `collection().pop()`
* `collection().insert({})`

And honestly `.sort()` and `.remove()` can be handed via `.map()` or `.filter()` respectively. 

...

So think about it now, `csv_file_reader(x)` in lieu of `create_csv_file_reader(x)` or something similar is more natural and if following these rules you can see how it'll always be more readable and easier to follow.

# On the `is` prefix
Fucking stop that bullshit got damn.

You want your code to flow and tell you what it is trying to do not how it is doing things. 

Good luck.
