;; 0000000: 0061 736d              ; WASM_BINARY_MAGIC
;; 0000004: 0100 0000              ; WASM_BINARY_VERSION

(module
    (memory 1)
    (func (param i32) (param i32) (result f64))
    (func (param i32) (param f32) (local f64)
        local.get 0
        local.get 1
        local.get 2)
    (func (param $p1 i32) (param $p2 f32) (local $loc f64) 
        local.get $p1 )

    (func (param $p i32)
        (result i32)
        local.get $p
        local.get $p
        i32.add)

)

