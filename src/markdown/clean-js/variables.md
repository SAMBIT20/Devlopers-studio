## **Variables**

### Use meaningful and pronounceable variable names

**Bad:**

<Code language="javascript">
const yyyymmdstr = moment().format("YYYY/MM/DD");
</Code>

**Good:**

<Code language="javascript">
const currentDate = moment().format("YYYY/MM/DD");
</Code>

### Use the same vocabulary for the same type of variable

**Bad:**

<Code language="javascript">
getUserInfo();
getClientData();
getCustomerRecord();
</Code>

**Good:**

<Code language="javascript">
getUser();
</Code>

### Use searchable names

We will read more code than we will ever write. It's important that the code we
do write is readable and searchable. By _not_ naming variables that end up
being meaningful for understanding our program, we hurt our readers.
Make your names searchable. Tools like
[buddy.js](https://github.com/danielstjules/buddy.js) and
[ESLint](https://github.com/eslint/eslint/blob/660e0918933e6e7fede26bc675a0763a6b357c94/docs/rules/no-magic-numbers.md)
can help identify unnamed constants.
**Bad:**
<Code language="javascript">
// What the heck is 86400000 for?
setTimeout(blastOff, 86400000);
</Code>
**Good:**
<Code language="javascript">
// Declare them as capitalized named constants.
const MILLISECONDS_PER_DAY = 60 * 60 * 24 * 1000; //86400000;
setTimeout(blastOff, MILLISECONDS_PER_DAY);
</Code>

### Use explanatory variables

**Bad:**
<Code language="javascript">
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s\*(\d{5})?$/;
saveCityZipCode(
address.match(cityZipCodeRegex)[1],
address.match(cityZipCodeRegex)[2]
)
</Code>
**Good:**
<Code language="javascript">
const address = "One Infinite Loop, Cupertino 95014";
const cityZipCodeRegex = /^[^,\\]+[,\\\s]+(.+?)\s*(\d{5})?$/;
const [_, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
</Code>

### Avoid Mental Mapping

Explicit is better than implicit.
**Bad:**

<Code language="javascript">
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(l => {
doStuff();
doSomeOtherStuff();
// ...
// ...
// ...
// Wait, what is `l` for again?
dispatch(l);
});
</Code>

**Good:**

<Code language="javascript">
const locations = ["Austin", "New York", "San Francisco"];
locations.forEach(location => {
  doStuff();
  doSomeOtherStuff();
  // ...
  // ...
  // ...
  dispatch(location);
});
</Code>

### Don't add unneeded context

If your class/object name tells you something, don't repeat that in your
variable name.
**Bad:**
<Code language="javascript">
const Car = {
carMake: "Honda",
carModel: "Accord",
carColor: "Blue"
};
function paintCar(car, color) {
car.carColor = color;
}
</Code>
**Good:**
<Code language="javascript">
const Car = {
  make: "Honda",
  model: "Accord",
  color: "Blue"
};
function paintCar(car, color) {
  car.color = color;
}
</Code>

### Use default parameters instead of short circuiting or conditionals

Default parameters are often cleaner than short circuiting. Be aware that if you
use them, your function will only provide default values for `undefined`
arguments. Other "falsy" values such as `''`, `""`, `false`, `null`, `0`, and
`NaN`, will not be replaced by a default value.
**Bad:**
<Code language="javascript">
function createMicrobrewery(name) {
const breweryName = name || "Hipster Brew Co.";
// ...
}
</Code>
**Good:**
<Code language="javascript">
function createMicrobrewery(name = "Hipster Brew Co.") {
  // ...
}
</Code>
