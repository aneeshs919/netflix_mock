import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import GridCard from "@/components/gridCard"
import Modal from "@/components/modal"

type dataType = {
  id: number
  title: string
  rating: number
  overview: string
  poster: string
  banner: string
  genre: {
    id: number
    name: string
  }[]
}

// Component PlayButton ,
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

// Component HeroBanner ,
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

// Component MovieDetails ,
const MovieDetails = ({
  movie,
  horror,
}: {
  movie: dataType
  horror: dataType[]
}) => {
  return (
    <div>
      <div className="flex flex-col relative">
        <div
          className="h-[300px] lg:h-[300px] overflow-hidden bg-cover bg-top  w-full rounded-md"
          style={{ backgroundImage: `url(${movie.banner})` }}></div>
      </div>

      <div className="mt-2 relative p-5 flex flex-col text-white ">
        <div className="flex gap-4 mb-4 items-center">
          <div className="flex justify-center items-center gap-4 ">
            <PlayButton movie={movie} />
          </div>
          <div className="bg-gray-600 w-14 h-14 rounded-full flex justify-center items-center hover:scale-110 hover:delay-75 duration-300">
            <Image
              src={"/plus.png"}
              width={"30"}
              height={"30"}
              alt="wishlist"
            />
          </div>
          <div className="bg-gray-600 w-14 h-14 rounded-full flex justify-center items-center hover:scale-110 hover:delay-75 duration-300">
            <Image
              src={"/like.png"}
              width={"30"}
              height={"30"}
              alt="wishlist"
            />
          </div>
        </div>
        <div className="text-2xl pb-1">{movie.title}</div>
        <div className="py-3">{movie.overview}</div>
        <div className="capitalize gap-4 mt-4 flex">
          {movie.genre.map((item) => (
            <div key={item.id}>{item.name} .</div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <div className="ml-4 mb-4 text-2xl">Recommended movies</div>
        <div className="flex justify-between gap-6 px-4 p-10 -mt-8 overflow-auto no-scrollbar">
          {horror.map((item) => {
            return (
              <GridCard
                key={item.id}
                removeAction={true}
                id={item.id}
                banner={item.banner}
                title={item.title}
                genre={item.genre}
                rating={item.rating}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}

// Component Title ,
const Title = (props: { title: string }) => {
  return (
    <div className="text-xl lg:text-2xl pl-4 lg:pl-[40px]">{props.title}</div>
  )
}

const Browse = ({
  popular,
  horror,
}: {
  popular: dataType[]
  horror: dataType[]
}) => {
  const [loader, setLoader] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [selectedMovie, setSelectedMovie] = useState<dataType>({} as dataType)
  const router = useRouter()
  const randomDigit = Math.floor(Math.random() * 10)
  const popularPick = popular[15]
  useEffect(() => {
    if (popular.length) setLoader(false)
  }, [popular])

  //  Handles opening the modal and setting the selected movie.
  const handleOpenModal = (movie: dataType) => {
    setShowModal(true)
    setSelectedMovie(movie)
  }

  if (loader)
    return (
      <div className="flex justify-center items-center h-screen">
        <Image src={"/netflix.png"} width={"64"} height={"64"} alt="netflix" />
      </div>
    )
  return (
    <div>
      <Header />
      <div className="max-w-max_container m-auto pb-[100px] mt-[-30px]">
        <HeroBanner
          popularPick={popularPick}
          handleMoreInfo={() => {
            handleOpenModal(popularPick)
          }}
        />
        <div className="mt-10">
          <Title title={"Popular on Netflix"} />
          <div className="flex justify-between gap-6 p-10 mt-[-30px] pb-[150px] pl-4 lg:pl-[40px] overflow-auto no-scrollbar">
            {popular.map((item) => {
              return (
                <GridCard
                  key={item.id}
                  openModal={() => handleOpenModal(item)}
                  id={item.id}
                  banner={item.banner}
                  title={item.title}
                  genre={item.genre}
                  rating={item.rating}
                  overview={item.overview}
                />
              )
            })}
          </div>
        </div>

        <div className="mt-[-120px]">
          <Title title={"Horror Movies"} />
          <div className="flex justify-between gap-6 p-10 mt-[-30px] pl-4 pb-[150px]  lg:pl-[40px] overflow-auto no-scrollbar">
            {horror.map((item) => {
              return (
                <GridCard
                  key={item.id}
                  openModal={() => handleOpenModal(item)}
                  id={item.id}
                  banner={item.banner}
                  title={item.title}
                  genre={item.genre}
                  rating={item.rating}
                  overview={item.overview}
                />
              )
            })}
          </div>
        </div>

        {showModal ? (
          <Modal onClose={() => setShowModal(false)}>
            <MovieDetails movie={selectedMovie} horror={horror} />
          </Modal>
        ) : null}
      </div>
      <Footer />
    </div>
  )
}
export default Browse
