import Image from "next/image"
import pic from "../../public/images/Pictures/gif.gif"
export default function Home(){
  return(
      <div className=" h-screen flex items-center">
          
          
          <div className=" w-1/2 h-96 flex flex-col gap-9">
            <h2 className="bg-white font-bold text-5xl ml-5">Welcome to our website.</h2>
            <p className="text-3xl ml-5 font-sans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque perferendis esse quasi eligendi necessitatibus recusandae eius enim quas veniam commodi?</p>
         
         <button className="bg-slate-500 h- w-72 ml-16">Contact us</button>
          </div>


          <div className="bg-red-400 w-80 h-55 ml-56 ">
          <Image src={pic} alt="pic" ></Image>
          </div>
</div>
  )}
          
          
           
          
  