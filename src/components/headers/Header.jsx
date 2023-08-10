import { logo } from "../../assets/index"
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { allItems } from "../../constants";
import HeaderBottom from "./HeaderBottom";




const Header = () => {


  const [showAll, setShowAll] = useState(false)

 
  return (
    <div className="w-full sticky top-0 z-50">
      {/* image start here*/}
      <div className="w-full bg-amazon_blue text-white py-3 px-4 flex items-center gap-4">
        <div className="px-2 h-[80%] flex items-center  border-transparent hover:border-white cursor-pointer duration-100">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>

        {/* image end here*/}
        {/* Deliver  start here*/}
        <div className="px-2 h-[80%] flex items-center  border-transparent hover:border-white cursor-pointer duration-100">
          <LocationOnIcon />
          <p className=" text-sm text-lightText font-light flex flex-col">Delivery to <span className="text-sm font-semibold -mt-1 text-whiteText">Kartik</span></p>
        </div>
        {/* Deliver end here*/}
        {/* search start here*/}
        <div className="h-10 rounded-md flex flex-grow relative">
          <span onClick={()=>setShowAll(!showAll)}
            className="w-14 h-full bg-gray-200 hover:bg-gray-300 border-2 cursor-pointer duration-300 text-sm text-amazon_blue font-titleFont flex items-center justify-center rounded-tl-md rounded-bl-md">
            All
            <span></span> <ArrowDropDownIcon /> </span>
          <input className="h-full text-base text-amazon_blue flex-grow outline-none border-none px-2" type="text" />
          <span className="w-12 h-full flex items-center justify-center bg-amazon_yellow hover:bg-[#f3a847] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
          {
            showAll && (
              <div>
                <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                  {
                    allItems.map((item) => (
                      <li key={item._id}>{item.title }</li>
                    ))
                 }
                 
                </ul>
              </div>
            )
          }

        </div>
        {/* search end here*/}
        {/* SighnIn  start here*/}

        <div  className="flex flex-col items-start justify-center ">
        <p className="text-xs text-lightText font-light">Hello, sign in</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText"> Accounts & Lists <span><ArrowDropDownIcon /></span></p>
        </div>

        {/* Sigin End here*/}
        {/* order start here*/}

        <div className="flex flex-col items-start justify-center headerHover">
        <p className="text-xs text-lightText font-light">Returns</p>
        <p className="text-sm font-semibold -mt-1 text-whiteText">& Orders</p>
      </div>
        {/* order end here*/}
        {/* Cart start here*/}

        <div className="flex items-start justify-center headerHover relative">
          <ShoppingCartIcon />
          <p className="text-xs font-semibold mt-3 text-whiteText">Cart
            <span  className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center'>0</span></p>
        </div>

        {/* Cart End here*/}

      </div>

      {/* bottom header is here*/}
      <HeaderBottom/>

    </div>
  );

}

export default Header