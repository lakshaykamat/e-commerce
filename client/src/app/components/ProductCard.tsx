import Image from 'next/image'
type ProductCardProps = {
    image:string,
    name:string
    description:string
    price:string
}

type TodayDealCardProps = {
  image:string,
  name:string
  description:string
  price:string
  altTxt:string,
  discount:string
  discountPrice:string

}
export const TodayDealCard = ({discount,altTxt,image,name,description,price,discountPrice}:TodayDealCardProps) => {
  return (
    <div className="relative bg-slate-100 flex items-center justify-center flex-col border p-4 rounded-lg shadow-md">
      {/* <div className="relative"> */}
        <Image
          src={image}
          width={150}
          height={150}
          alt={altTxt}
        />
        <span className="absolute top-5 left-3 bg-red-400 text-white px-2 py-1 rounded">
          {discount}
        </span>
      {/* </div> */}
      <div className="mt-4">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500 mt-2">{description}</p>
        <div className="flex justify-between items-center mt-4">
          <div>
            <span className="text-xl font-semibold text-blue-600">{discountPrice}</span>
            <span className="block text-gray-400 line-through">{price}</span>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
const ProductCard = ({image,name,description,price}:ProductCardProps) => {
    return (
      <div className="flex bg-slate-100 flex-col border p-4 rounded-lg shadow-md">
        <div className="flex justify-center">
          <Image
            src={image}
            width={250}
            height={250}
            alt="Monitor"
          />
        </div>
        <div className="mt-4">
          <h1 className="text-2xl font-semibold">{name}</h1>
          <p className="text-gray-500 mt-2">
            {description}
          </p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <span className="text-2xl font-bold text-blue-600">
                {price}
              </span>
            </div>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              View Details
            </button>
          </div>
        </div>
      </div>
    );
  };
  
export default ProductCard