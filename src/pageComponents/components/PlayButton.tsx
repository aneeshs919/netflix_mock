import { useRouter } from "next/router"
import dataType from "@/pageComponents/type"
import Image from "next/image"

const PlayButton = ({ movie }: { movie: dataType }) => {
  const router = useRouter()
  const goToPlayer = () => {
    localStorage.setItem("movie", JSON.stringify(movie))
    router.push("/player")
  }
  return (
    <div
      onClick={goToPlayer}
      className="bg-white flex justify-between rounded-sm p-4 px-8 gap-2 text-black cursor-pointer items-center hover:scale-110 hover:delay-75 duration-300">
      <Image src={"/play.png"} width={"20"} height={"20"} alt="play" />
      <div>Play</div>
    </div>
  )
}

export default PlayButton
