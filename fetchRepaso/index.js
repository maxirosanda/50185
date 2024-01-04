const base_url = "https://bakerapp2-daf6b-default-rtdb.firebaseio.com/"

const getProducts = async () => {
   const response = await fetch(base_url + "products.json")
   const data = await response.json()
    console.log(data)
}

const getProduct = async (id) => {
    const response = await fetch(base_url + `products/${id}.json`)
    const data = await response.json()
     console.log(data)
 }

const createProduct = async (newProduct) => {
    const response = await fetch(base_url + `products.json`,{
        method:"POST",
        body: JSON.stringify(newProduct) 
    })
    const data = await response.json()
     console.log(data)
}

const updateProduct = async (id,newData) => {
    const response = await fetch(base_url + `products/${id}.json`,{
        method:"PATCH",
        body: JSON.stringify(newData) 
    })
    const data = await response.json()
     console.log(data)
}

const deleteProduct = async (id) => {
    const response = await fetch(base_url + `products/${id}.json`,{
        method:"DELETE"
    })
    const data = await response.json()
     console.log(data)
 }


 deleteProduct("-NnFZUcWG6YJpDBRUA52")