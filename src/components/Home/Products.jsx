import { useLoaderData } from "react-router-dom"



const Products = () => {
    const data = useLoaderData()
    const productsData = data.data
    console.log(productsData)
  return (
    <div>
      Products
    </div>
  )
}

export default Products





// useEffect(() => {
//     async function ProductsData() {
//         let data = await axios.get('https://fakestoreapi.com/products')
//         console.log(data)
//     }
// ProductsData()
// },[])