# WASM sandbox

Mainly use of .wat files.

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
