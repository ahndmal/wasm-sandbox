# WASM sandbox

- use of .wat files as .wasm in browser
- AssemblyScript
- RUST, Go with native compilation

docs:

- https://webassembly.org/
- https://developer.mozilla.org/en-US/docs/WebAssembly/Text_format_to_wasm.
- https://anonyco.github.io/WasmFiddlePlusPlus/

WABT tools are used to convert wat to wasm:

```
wat2wasm FILE.wat -o FILE.wasm
wat2wasm simple.wat -v
```

VMvare examples: https://github.com/vmware-wasmstack/wasm-languages.

Given demo.wat (encoded to demo.wasm):

```wat
(module
    (import "js" "import1" (func $i1))
    (import "js" "import2" (func $i2))
    (func $main (call $i1))
    (start $main)
    (func (export "f") (call $i2))
)
```

and the following JavaScript, run in a browser:

```javascript
var importObj = {
    js: {
        import1: () => console.log("hello,"),
        import2: () => console.log("world!")
    }
};
fetch('demo.wasm').then(response =>
    response.arrayBuffer()
).then(buffer =>
    WebAssembly.instantiate(buffer, importObj)
).then(({module, instance}) =>
    instance.exports.f()
);
```