# https://developer.mozilla.org/en-US/docs/WebAssembly/Text_format_to_wasm
wattowasm:
	wat2wasm simple.wat -o simple2.wasm
view_wat:
	wat2wasm simple.wat -v