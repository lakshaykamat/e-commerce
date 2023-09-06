import Image from "next/image";

const Section = () => {
  return (
    <div className="max-w-5xl my-6 mx-auto">
      <h1 className="text-4xl font-bold mb-6">Electronics</h1>
      <div className="grid grid-cols-4 gap-20">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex flex-col">
      <Image
        src={"/assets/earphones_a_1.webp"}
        width={300}
        height={300}
        alt="DD"
      />
      <div className="flex mt-4 items-center justify-between">
        <h1 className="text-xl">{"Monitor"}</h1>
        <span>{"From $49"}</span>
      </div>
    </div>
  );
};
export default Section;
