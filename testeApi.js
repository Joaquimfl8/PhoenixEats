import { useState, useEffect } from "react"

const url = "https://free-food-menus-api-two.vercel.app/best-foods";

// pegar comidas da api (fora do return)
    const [apiProducts, setApiProducts] = useState([]);
    
    useEffect(() => {
        async function chamarApi() { 
            const result = await fetch(url);
            if (result.ok === true) {
                const productJson = await result.json();
                console.log(productJson)
                setApiProducts(productJson);
            }
        }
        chamarApi();
    }, []);


// no return
{apiProducts.map(function(product, index) {
                    return (
                        <Products
                            ProductTitle={product.name}
                            ProductDesc={product.dsc}
                            ProductImg={product.img}
                            ProductPrice={`R$${product.price}`}
                            onImgError={() => setApiProducts(prev => prev.filter(p => p.img !== product.img))}
                        />
                    )
                })}