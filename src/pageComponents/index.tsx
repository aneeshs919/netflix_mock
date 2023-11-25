import { useEffect, useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import GridCard from "@/components/gridCard"
import Modal from "@/components/modal"
import HeroBanner from "./components/HeroBanner"
import MovieDetails from "./components/MoveDetails"
import dataType from "@/pageComponents/type"

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
