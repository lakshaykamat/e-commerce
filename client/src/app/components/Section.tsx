import ProductCard from "./ProductCard";
import { ProductSectionData } from "../data";
const ProductSection = () => {

  return (
    <div className="max-w-5xl px-8 my-12 mx-auto">
      {
        ProductSectionData.map((section,i)=>{
          return(
            <Section key={i} name={section.name} productArray={section.items}/>
          )
        })
      }
    </div>
  );
};

const Section = ({ name, productArray }:{name:string,productArray:Array<any>}) => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold my-8">{name}</h1>
      <div className="grid grid-cols-1 min-[400px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 sm:gap-10">
        {productArray.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            name={product.name}
            price={product.price}
            description={product.description}
          />
        ))}
      </div>
      </div>
  );
};
export default ProductSection;
