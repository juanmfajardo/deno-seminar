import * as d3 from "d3";
import _ from "lodash";
import moment from "moment";
import * as uuid from "uuid";

console.log("-".repeat(80));
// Testing D3
console.log("Max Number in Array: %s", d3.max([1, 2, 3]));
console.log("-".repeat(80));

// Testing Lodash
console.log("Random Odd Number Between 1 and 7: %s", _.sample([1, 3, 5, 7]));
console.log("-".repeat(80));

// Testing Moment
console.log("Current Time (in seconds since epoch): %s", moment.now());
console.log("-".repeat(80));

// Testing Deno's uuid standard library
console.log("UUID/GUID v4: %s", uuid.v4.generate());
console.log("-".repeat(80));

// deno run --importmap=importmap.json index.js
