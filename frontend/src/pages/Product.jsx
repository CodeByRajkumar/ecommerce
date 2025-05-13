import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {

  const {productId} = useParams();
  const {products, currency, addToCart} = useContext(ShopContext);
  const [productData,setProductData] = useState(false);
  const [image, setImage] = useState('');
  const [size,setSize] = useState('');

  const fetchProductData = async () =>{
    products.map((item)=>{
      if(item._id===productId){
        setProductData(item)
        setImage(item.image[0])
        return null;
      }
    })
  }
  useEffect(()=>{
    fetchProductData();
  },[productId, products])
  return productData ?  (
    <div className='pt-10 transition-opacity duration-500 ease-in border-t-2 opacity-100'>
      {/* Product Data */}
      <div className="flex flex-col gap-12 sm:gap-12 sm:flex-row">
        {/* Product Images */}
        <div className="flex flex-col-reverse flex-1 gap-3 sm:flex-row">
          <div className="flex justify-between w-1/4 gap-2 overflow-x-auto sm:flex-col sm:overflow-y-scroll sm:justify-normal">
            {
              productData.image.map((item,index)=>(
                <img onClick={()=>setImage(item)} src={item} key={index} className='flex-shrink-0 border border-gray-200 rounded-md cursor-pointer w--full sm:mb-3' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img src={image} className='w-full h-auto' alt="" />
          </div>
        </div>

        {/* Product information */}
        <div className='flex-1 '>
          <h1 className='mt-2 text-2xl font-medium'>{productData.name}</h1>
          <div className='flex items-center gap-1 mt-2'>
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_icon} alt="" className="w-3" />
            <img src={assets.star_dull_icon} alt="" className="w-3" />
            <p className='pl-2'>(122)</p>
          </div>
          <p className='mt-5 text-3xl font-medium'>{currency} {productData.price}</p>
          <p className="mt-5 text-gray-500 md:w-4/5">{productData.description}</p>
          <div className="flex flex-col gap-4 my-8">
            <p className="">Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item,index)=>(
                <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-600':''}`} key={index}>{item}</button>
              ))}
            </div>
          </div>
          <button onClick={()=>addToCart(productData._id,size)} className='px-8 py-3 text-sm text-white bg-black active:bg-gray-700'>ADD TO CART</button>
          <hr className='mt-8 sm:w-4/5' />
          <div className='flex flex-col gap-1 mt-5 text-sm text-gray-500'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>
      {/* Description and Review Section */}
      <div className="mt-20">
        <div className="flex">
          <b className='px-5 py-3 text-sm border'>Description</b>
          <p className="px-5 py-3 text-sm border">Review (122)</p>
        </div>
        <div className="flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate vel facere quaerat itaque necessitatibus. Optio ipsum quae labore cum accusamus dolorum. Necessitatibus obcaecati laudantium corrupti cupiditate repellendus sunt molestiae veritatis.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, at rerum! Adipisci sapiente doloremque non tenetur voluptas, est molestiae quisquam.</p>
        </div>
      </div>
      {/* display related products */}
      <RelatedProducts category={productData.category} subCategory={productData.subCategory} ></RelatedProducts>
    </div>
  ) : <div className='opacity-0'></div>
}

export default Product
