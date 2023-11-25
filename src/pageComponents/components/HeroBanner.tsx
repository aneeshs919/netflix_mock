import { useRouter } from "next/router"
import dataType from "@/pageComponents/type"
import Image from "next/image"
import PlayButton from "./PlayButton"

const HeroBanner = ({
  popularPick,
  handleMoreInfo,
}: {
  popularPick: dataType
  handleMoreInfo: () => void
}) => {
  return (
    <div className="relative flex flex-col lg:flex-row max-w-max_container h-[300px] lg:h-[600px]  lg:w-full m-auto items-bottom items-end">
      <div className="lg:absolute w-full bg-black" />
      <div
        className="h-[300px] lg:h-[550px] overflow-hidden bg-cover bg-top static opacity-[.4] lg:absolute w-full rounded-md"
        style={{ backgroundImage: `url(${popularPick.banner})` }}></div>

      <div className="z-10 relative p-4 lg:p-14 w-full lg:max-w-max_container">
        <div className="text-2xl lg:text-5xl mb-2 lg:mb-6 font-weight w-full lg:w-1/2">
          {popularPick.title}
        </div>
        <div className="text-xl hidden lg:flex w-full lg:w-1/2">
          {popularPick.overview}
        </div>
        <div className="text-xl capitalize gap-4 mt-4 hidden lg:flex">
          {popularPick.genre.map((item) => (
            <div key={item.id}>{item.name} .</div>
          ))}
        </div>
        <div className=" mt-2 lg:mt-8">
          <div className="flex gap-4 items-center">
            <div className="flex justify-center items-center gap-4 ">
              <PlayButton movie={popularPick} />
            </div>
            <div
              onClick={handleMoreInfo}
              className="bg-gray-600 cursor-pointer flex justify-between rounded-sm p-4 px-8 gap-2  items-center hover:scale-110 hover:delay-75 duration-300">
              More Info
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
