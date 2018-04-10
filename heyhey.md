Move me to the right place.

https://www.grinchcentral.com/function-names-to-verb-or-not-to-verb


> Name functions and methods according to their side-effects
> Those without side-effects should read as noun phrases.
> Those with side-effects should read as imperative verb phrases.

As in: `collection.sort() // side effect; ideally, should always return void.`<br />
versus: `collection.sorted() // no side effect; ideally, should always return a value.`

This is also the keystone of command-query separation principle.

Same for the file reader; preferring `csv_file_reader(x)` in lieu of `create_csv_file_reader(x)` or something similar is more natural.
