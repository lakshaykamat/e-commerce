import Image from "next/image";

interface Category {
  id: number;
  name: string;
  imageSrc: string; // Add image source property
}

const ProductNavigation = ({ categories }:{categories:any}) => {
  return (
    <>
    <div className="max-w-6xl px-16 my-12 mx-auto">

      <div className="grid  sm:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-10 ">
        {categories.map((item:any, index:any) => {
          return <Card  key={index} title={item.title} products={item.products} />;
        })}
      </div>
        </div>
    </>
  );
};

const Card = ({
  title,
  products,
}: {
  title: string;
  products: Array<{ image: string; label: string }>;
}) => {
  return (
    <>
      <div className="bg-slate-100 p-5">
        <h1 className="text-lg font-bold mb-6">{title}</h1>
          <div className="grid gap-3  grid-cols-2  place-items-center">
            {products.slice(0, 4).map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center"
                >
                  <Image
                    src={item.image}
                    alt="Product"
                    width={200}
                    height={200}
                  />
                  <p className="text-sm mt-2">{item.label}</p>
                </div>
              );
            })}
          </div>
          <button className="bg-blue-500 mt-6  hover:bg-blue-600 text-white text-sm px-2 py-1 rounded">
            View all
          </button>
        </div>
    </>
  );
};
export default ProductNavigation;
