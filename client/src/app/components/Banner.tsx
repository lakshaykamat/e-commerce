import Image from "next/image"
type BannerProps = {
    heading:string
    subHeading:string
    callToAction:string
    image:string
}
const Banner = ({heading,subHeading,callToAction,image}:BannerProps) => {
  return (
    <div className='rounded flex justify-center items-center  bg-slate-100 drop-shadow  my-2 py-12 mx-auto'>
        <Image src={image} width={300} height={300} alt="Banner Image"/>
        <div className="flex flex-col gap-4">
        <h1 className="text-5xl font-bold">{heading}</h1>
        <p>{subHeading}</p>
        <button className="w-fit px-3 py-2 text-white rounded-md bg-blue-500">{callToAction}</button>
        </div>
    </div>
  )
}

export const getServerSideProps = async()=>{
    return {
        props:{
            heading:"DD"
        }
    }
  }
export default Banner