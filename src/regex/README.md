# REGEX
If there is one part of computer science where I am honestly very weak would be regexes.

Check these out.
* [w3resource.com exercises](http://www.w3resource.com/javascript-exercises/javascript-regexp-exercises.php)
* [sketchengine.co.uk](https://regex.sketchengine.co.uk/)
* [sketchengine.co.uk Quiz](https://regex.sketchengine.co.uk/extra_regexps.html)

## Write regex functions to:

### General String Regexes
1. Test the first character of a string is uppercase or not.
    * `firstLetterUppercase(string)`
1. A trim function (string) using regular expression.
    * Remove white-space from start and end position: `trimBookends(string)`
    * Convert 2 or more spaces to 1: `convertSpaces(string)`
    * Exclude newline with a start spacing: `excludeNewline(string)`
1. Count number of words in string.
    * `countWords(string)`
1. Count the number of vowels in a given string. (Table 1)
    * `matchAllColumnOne(column1,`
1. Match all items in first column but not the other
    * [Sample Data 1](https://regex.sketchengine.co.uk/cgi/ex1.cgi)
    * [Sample Data 2](https://regex.sketchengine.co.uk/cgi/ex2.cgi)
    * [Sample Data 2](https://regex.sketchengine.co.uk/cgi/ex3.cgi)

### Personal Information
1. Check whether a given value is US zip code or not.
    * `isZipCode(string)`
1. Check whether a given value is UK Post Code or not.
    * `isPostCode(string)`
1. Check whether a given value is Canada Post Code or not.
    * `isCanadianPostCode(string)`
1. Check whether a given value is a social security number or not.
    * `isSocialSecurityNumber(string)`
1. Check a credit card number.
    * `isCreditCardNumber(string)`

### Numbers and Dates
1. Print an integer with commas as thousands separators. (Table 2)
    * `numberFormatting(string)`
1. Check whether a given value is time string or not.
    * `isTimeString(string)`
1. Search a date within a string.
    * `findDateExists(string)`

### ¡INTERNET! shenanigans
1. Check whether a given value is hexadecimal value or not.
    * `validateHex(string)`
1. Check whether a given value is hex color value or not.
    * `validateHexColor(string)`
1. Check whether a given value represents a domain or not.
    * `validateDomain(string)`
1. Check whether a given value is html or not.
    * `validateHTML(string)`
1. Check whether a given value is a valid url or not.
    * `validateUrl(string)`
1. Check whether a given value is IP value or not.
    * `validateIP(string)`
1. Matches [all] e-mail addresses.
    * `validateEmail(string)`
    * The personal information part contains the following ASCII characters.
        * Uppercase (A-Z) and lowercase (a-z) English letters.
        * Digits (0-9).
        * Characters: `! # $ % & ' * + - / = ? ^ _ ` { | } ~`
        * Character `.` (period, dot or full stop)
            * Provided that it is not the first or last character and it will not come one after the other.

### Misc
These two seem to be the same huh?
1. Check a given value contains alpha, dash and underscore.
    * `validateASCII(string)`
1. Check whether a given value is alpha numeric or not.
    * `validateAlphaNumeric(string)`

<hr />

## Table Data
Table 1

| TEST DATA  | OUTPUT  |
|---|---|
| `getVowels('United States')` | `"SUadeeinsttt"`

Table 2

| TEST DATA  | OUTPUT  |
|---|---|
| `thousandsSeparators('1000')` | `'1,000'`
| `thousandsSeparators('10000.23')` | `'10,000.23'`
| `thousandsSeparators('100000')` | `'100,000'`
