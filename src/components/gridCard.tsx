import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/router"

interface GridCardProps {
  id: number
  banner: string
  title: string
  genre: {
    id: number
    name: string
  }[]
  rating: number
  openModal?: () => void
  removeAction?: boolean
  overview?: string
}

const GridCard = ({
  id,
  banner,
  title,
  genre,
  rating,
  openModal,
  removeAction,
  overview,
}: GridCardProps) => {
  const movie = {
    id: id,
    title: title,
    banner: banner,
    genre: genre,
    rating: rating,
    overview: overview,
  }
  const router = useRouter()
  const [showDetails, setShowDetails] = useState(false)
  const navigateToDetails = () => {
    router.push(`/details?id=${id}`, undefined, { shallow: true })
  }

  const goToPlayer = () => {
    localStorage.setItem("movie", JSON.stringify(movie))
    router.push("/player")
  }

  return (
    <div
      key={id}
      onMouseOver={() => setShowDetails(true)}
      onMouseOut={() => setShowDetails(false)}
      className="flex w-[200px] lg:w-[14rem] lg:h-[9rem] flex-col shrink-0 hover:scale-125 hover:delay-75 duration-300">
      <Image
        className="rounded-t"
        src={banner}
        width={"300"}
        height={"100"}
        alt="wishlist"
      />
      <div
        className={` bg-gray-800 p-2 rounded-b ${
          showDetails && !removeAction ? "block " : "hidden"
        }`}>
        <div className="flex gap-2 justify-space-between cursor-pointer">
          <div
            onClick={goToPlayer}
            className="bg-white w-7 h-7 rounded-full flex justify-center items-center">
            <Image
              src={"/play.png"}
              width={"16"}
              height={"16"}
              alt="wishlist"
            />
          </div>
          <div className="bg-gray-600 w-7 h-7 rounded-full flex justify-center items-center">
            <Image
              src={"/plus.png"}
              width={"16"}
              height={"16"}
              alt="wishlist"
            />
          </div>
          <div className="bg-gray-600 w-7 h-7 rounded-full flex justify-center items-center">
            <Image
              src={"/like.png"}
              width={"16"}
              height={"16"}
              alt="wishlist"
            />
          </div>
          <div
            onClick={openModal}
            className="bg-gray-600 w-7 h-7 rounded-full flex justify-center items-center">
            <Image
              src={"/arrow.png"}
              width={"16"}
              height={"16"}
              alt="down_arrow"
            />
          </div>
        </div>
        <div className="mt-2">{title}</div>
        <div className="text-green-600 text-[12px]">{rating}: Rating</div>
        <div className="flex gap-2 flex-wrap text-[12px] text-gray-400">
          {genre.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GridCard
