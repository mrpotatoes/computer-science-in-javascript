Article these tables are copied from: https://davidtang.io/2019-04-11-learning-recursion-in-javascript-part-4/
## Example 1: `isPalindrome('noon') => true`
<table>
  <thead>
    <tr>
      <th>Invocation</th>
      <th><code>firstLetter</code></th>
      <th><code>lastLetter</code></th>
      <th>Recursive call</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>isPalindrome('noon')</code></td>
      <td>n</td>
      <td>n</td>
      <td><code>isPalindrome('oo')</code></td>
    </tr>
    <tr>
      <td><code>isPalindrome('oo')</code></td>
      <td>o</td>
      <td>o</td>
      <td><code>isPalindrome('')</code></td>
    </tr>
    <tr>
      <td><code>isPalindrome('')</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Base case met. <code>true</code> is returned.</td>
    </tr>
  </tbody>
</table>

## Example 2: `isPalindrome('eve') => true`
<table border="1" cellpadding="7">
  <thead>
    <tr>
      <th>Invocation</th>
      <th><code>firstLetter</code></th>
      <th><code>lastLetter</code></th>
      <th>Recursive call</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>isPalindrome('eve')</code></td>
      <td>e</td>
      <td>e</td>
      <td><code>isPalindrome('v')</code></td>
    </tr>
    <tr>
      <td><code>isPalindrome('v')</code></td>
      <td>&nbsp;</td>
      <td>&nbsp;</td>
      <td>Base case met. <code>true</code> is returned.</td>
    </tr>
  </tbody>
</table>

## Example 3: `isPalindrome('no0n') // false`
<table border="1" cellpadding="7">
  <thead>
    <tr>
      <th>Invocation</th>
      <th><code>firstLetter</code></th>
      <th><code>lastLetter</code></th>
      <th>Recursive call</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>isPalindrome('no0n')</code></td>
      <td>n</td>
      <td>n</td>
      <td><code>isPalindrome('o0')</code></td>
    </tr>
    <tr>
      <td><code>isPalindrome('o0')</code></td>
      <td>o</td>
      <td>0</td>
      <td><code>false</code> is returned.</td>
    </tr>
  </tbody>
</table>
