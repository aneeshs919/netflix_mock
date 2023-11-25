import Image from "next/image"
import { useState } from "react"
const LINKS = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "TV Shows",
    path: "/about",
  },
  {
    name: "Movies",
    path: "/about",
  },
  {
    name: "New & Popular",
    path: "/about",
  },
  {
    name: "My List",
    path: "/about",
  },
]

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className="max-w-max_container m-auto relative">
      <div className="flex justify-between items-center py-4 px-4 mb-5 lg:mb-0">
        <div className="flex gap-4 items-center">
          <Image src={"/logo.webp"} width={"100"} height={"20"} alt="play" />
          <div
            onClick={() => setShowMenu(!showMenu)}
            className="block lg:hidden">
            <div>Menu</div>
          </div>
          <div className="hidden lg:block">
            {LINKS.map((item) => (
              <div className="inline-block p-2" key={item.name}>
                <a href={item.path}>{item.name}</a>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-6 cursor-pointer">
          {!showSearch ? (
            <Image
              src={"/search.png"}
              width={"20"}
              height={"20"}
              alt={"search"}
              onClick={() => setShowSearch(true)}
            />
          ) : (
            <Image
              src={"/closeWhite.png"}
              width={"20"}
              height={"20"}
              alt={"close"}
              onClick={() => setShowSearch(false)}
            />
          )}
          <Image src={"/bell.png"} width={"20"} height={"20"} alt={"bell"} />
          <Image src={"/user.png"} width={"40"} height={"40"} alt={"user"} />
        </div>
      </div>

      {showSearch && (
        <div className="absolute w-full flex justify-center items-start z-20 pt-4 pb-4 top-[62px]  bg-gray-600">
          <input
            className={`bg-gray-200 w-4/5 lg:w-1/2 appearance-none border-2 border-gray-200 rounded  py-4 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
            type="text"
            placeholder="Search"
          />
        </div>
      )}

      {showMenu && (
        <div className="absolute w-full flex flex-col lg:hidden justify-center items-start z-20 pt-4 pb-4 top-[62px]  bg-gray-600">
          {LINKS.map((item) => (
            <div className="p-4" key={item.name}>
              <a href={item.path}>{item.name}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Header
