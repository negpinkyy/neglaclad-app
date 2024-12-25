import { assets } from "../assets/frontend_assets/assets"
const Hero = () => {
  return (
    <div className="flex flex-col border border-gray-400 sm:flex-row">
      {/* Hero Left Side */}
      <div className="flex items-center justify-center w-full py-10 sm:w-1/2 sm:py-0">
      <div className="text-[#414141">
        <div className="flex items-center gap-2"> 
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="text-sm font-medium md:text-base">Our BestSellers</p>
        </div>
        <h1 className="text-3xl leading-relaxed prata-regular sm:py-3 lg:text-5xl">Latest Arrival</h1>
        <div className="flex items-center gap-2">
            <p className="text-sm font-semibold md:text-base">Shop Now</p>
            <p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
        </div>
        </div>
        </div>
        {/* hero Right side */}
        <img src={assets.hero_img} alt="" className="w-full sm:w-1/2" />
    </div>
  )
}

export default Hero
