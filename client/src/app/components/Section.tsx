import ProductCard from "./ProductCard";
import { ProductSectionData } from "../data";
const ProductSection = () => {

  return (
    <div className="max-w-6xl mx-auto mt-8">
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
    <>
      <h1 className="text-3xl font-bold my-8">{name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
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
    </>
  );
};
export default ProductSection;
