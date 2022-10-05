const str = "hello hyder how r u";

console.log(str.split(" ").reverse().join(" "));

console.log(str.endsWith("u"));

console.log(...new Set(str));

const num = [1, 2, 3, 1, 3, 5, 7, 8, 2];

const filtered = num.filter((item, index) => num.indexOf(item) === index);

function omelette() {
  console.log(arguments);
}

omelette("🥚", "🧀");

(function () {
  console.log("hyder here");
})();
function higherOrder(fn) {
  fn();
}

higherOrder(function () {
  console.log("Hello world");
});
