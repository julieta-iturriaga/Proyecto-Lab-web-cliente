export function getProducts(){
    let result = fetch('https://fakestoreapi.com/products/')
            .then(res=>res.json())
            .then((data) => data);

    return result
}