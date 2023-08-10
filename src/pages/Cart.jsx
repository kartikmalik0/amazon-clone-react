import  { useState ,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { decrementQuantity, deleteItem, incrementQuantity, resetCart } from '../redux/amazonSlice';
import { emptyCart } from '../assets/index'
import { Link } from 'react-router-dom';





const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.amazon.products)
    const [totalPrice,setTotalPrice] = useState('')
    useEffect(() => {
        let total = 0
        products.map((item) => {
            total += item.price * item.quantity
            return setTotalPrice(total.toFixed(2))
        })
    },[products])
    return (
        <div className=' w-full bg-gray-100 p-4' >
            {
                products.length > 0 ?( <div className='container mx-auto h-auto grid grid-cols-5 gap-8'>
                <div className=' w-full h-full bg-white px-4 col-span-4'>
                    <div className=' font-titleFont flex items-center justify-between border-b-[1px] border-b-gray-400 py-3'>
                        <h2 className=' text-3xl font-medium '>Shooping Cart</h2>
                        <h4 className=' text-xl font-normal'>Subtitle</h4>
                    </div>
                    {/*Products start here*/}
                    <div>
                        {
                            products.map((item) => (
                                <div key={item.id} className=' w-full border-b-[1px] border-b-gray-300 p-4 flex items-center gap-6' >
                                    
                                    <div className='w-full flex items-center gap-6 '>
                                    
                                    <div className=' w-52 '>
                                    <img className='  h-44 object-contain' src={item.image} alt="ProductImgs" />
                                  </div>
                                  <div className=' w-4/5'>
                                      <h2 className=' font-semibold text-lg'>{item.title}</h2>
                                      <p className='  text-sm'>{item.description.substring(0,100)}...</p>
                                      <p className=' text-base'>Unit Price 
                                          <span className=' font-semibold'>
                                              ${item.price}
                                          </span>
                                      </p>
                                      <div className=' bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md'>
                                          <p>Qty:</p>
                                          <p onClick={()=>dispatch(decrementQuantity(item.id))} className=' cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>
                                              -
                                          </p>
                                          <p>{item.quantity}</p>
                                          <p onClick={()=>dispatch(incrementQuantity(item.id))} className=' cursor-pointer bg-gray-200 px-1 rounded-md hover:bg-gray-400 duration-300'>
                                              +
                                          </p>
                                  
                                      </div>
                                      <button onClick={()=>dispatch(deleteItem(item.id))} className=' bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300'>Delete Button</button>
                                  </div>
                                  <div >
                                      <p className=' text-lg font-titleFont font-semibold'>
                                          ${item.price * item.quantity}
                                      </p>
                                  </div>
                                        
                                    </div>
                                    
                                </div>
                            ))
                        }
                    </div>
                    <div className=' w-full py-2'>
                        <button onClick={()=>dispatch(resetCart())} className=' bg-red-500 w-36 py-1 rounded-lg text-white mt-2 hover:bg-red-700 active:bg-red-900 duration-300' >
                            Clear Cart
                        </button>
                    </div>
                </div>
                <div className=' w-full  h-52 bg-white col-span-1 flex flex-col justify-center items-center p-4' >
                    <p className='flex gap-2 items-start text-sm'>
                        <span><CheckCircleIcon className=' bg-white text-green-500 rounded-full' /> </span>
                        Your order qualifies for FREE Shipping Choose this option at checkout. See details...
                    </p>
                    <div>
                        <p className=' font-semibold px-10 gap-2 py-1 flex items-center justify-between'>
                            Total :
                            <span className=' text-lg font-bold'>
                                ${totalPrice}
                            </span>
                        </p>
                    </div>
                    <button  className=" w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yellow-to-border-yellow-500 hover:border-yellow-700  active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                        Proceed to Pay
                    </button>
                </div>
                </div>) :
                    <div className='flex justify-center items-center gap-4 py-10'>
                        <div>
                            <img className=' w-80 rounded-lg p-4 mx-auto' src={emptyCart} alt="emptyCartImg" />
                        </div> 
                        <div className=' w-96 bg-white flex flex-col items-center rounded-md shadow-lg'>
                            <h1 className='font-titleFont text-xl font-bold'>Your Cart Feels Lonely.</h1>
                            <p className='text-sm text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus rem odit optio voluptatibus distinctio omnis culpa, vero at veniam, perferendis recusandae, earum vitae doloremque nostrum sit odio quas nesciunt laborum.
                            </p>
                            <Link to={'/'} className='w-full'>
                            <button  className=" w-full font-titleFont font-medium text-base bg-gradient-to-tr from-yellow-400 to-yellow-200 hover:from-yellow-300 hover:to-yellow-to-border-yellow-500 hover:border-yellow-700  active:bg-gradient-to-bl active:from-yellow-400 active:to-yellow-500 duration-200 py-1.5 rounded-md mt-3">
                            Continue Shopping
                        </button>
                            </Link>
                        </div>
                    </div>
           }
        </div>
    )
}

export default Cart
