import data from "./ProductsData"
import { useState } from "react"

let CartProducts = {}

function useHandleCart() {
    
    const [add, remove] = useState(useHandleCart)

    function add(itemAdd) {
        {Object.values(data).map((product) => {
        if (product === itemAdd) {
            CartProducts.push(product)
        }
    })}
    }
}

export default useHandleCart