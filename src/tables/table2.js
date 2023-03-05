const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  const result =
    got === expected
      ? `SUCCESS! Got: ${got}<br>`
      : `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
  output.innerHTML += `Testing ${msg}: ${result}`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "getting initial value from wasm",
      instance.exports.getGlobal(),
      0
    );
    global.value = 42;
    assertEq(
      "getting JS-updated value from wasm",
      instance.exports.getGlobal(),
      42
    );
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
  }
);
