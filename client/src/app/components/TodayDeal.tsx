import { TodayDealData } from "../data";
import { TodayDealCard } from "./ProductCard";

const TodayDeal = () => {
  return (
    <div className="max-w-5xl px-16 my-12 mx-auto">
      <h1 className="text-4xl font-bold my-8">Today's Deal</h1>
      <div className="pb-10 rounded-2xl grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-20  drop-shadow-md">
        {
          TodayDealData.map((product,index)=>{
            return(
              <TodayDealCard 
              image={product.image} 
              altTxt={product.altTxt} 
              discount={product.discount} 
              name={product.name} 
              description={product.description} 
              discountPrice={product.discountPrice}
              price={product.price}/>
            )
          })
        }
      </div>
    </div>
  );
};  
export default TodayDeal;
