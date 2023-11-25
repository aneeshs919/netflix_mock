import Head from "next/head"
import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/footer"

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

const Player = () => {
  let playerRef = useRef<HTMLVideoElement>(null)
  const [movieData, setMOvieData] = useState<dataType | null>(null)
  const [showPlatButton, setSelectedMovieData] = useState(true)
  const storedMovieString =
    typeof window !== "undefined" ? localStorage.getItem("movie") : null
  const movie: dataType | null = storedMovieString
    ? JSON.parse(storedMovieString)
    : null

  useEffect(() => {
    if (movie) setMOvieData(movie)
  }, [])

  const handlePlay = () => {
    playerRef.current?.play()
    setSelectedMovieData(false)
  }

  return (
    <div>
      <Head>
        <title>{movieData?.title}</title>
      </Head>
      <Header />
      <div className="max-w-max_container m-auto pb-[100px]">
        <div className="relative justify-center items-center">
          <video
            ref={playerRef}
            className="max-w-max_container w-full h-[200px] lg:h-[500px] rounded-lg "
            width="640"
            height="360"
            poster={movieData?.banner}
            controls={false}>
            <source
              src="https://s3-dub-2.cf.trailer.row.aiv-cdn.net/f31b/6c71/b3ef/4d72-8b4a-822632ed9d7a/bbecbc43-f57c-47b8-a70b-89270e1394b5_video_6000_audio_aaclc_128.mp4?Expires=1700492048&Signature=bjgQks5M9Bfg7hDHoBDVkZv1ijTYP6hDmwGVxNTHLCDZ6mzizTYm7AvhGwsUHi3A--fRlJd7Bew-Vp4gxA~12RMj41R4K3QN6zndrMJHM8ghaNHzs0btoOR0SKQPdxtkaCvMuKtEMF-1qbEIN6nuwK4QRPvurVSnCMwc2~HmRyEsZlHybB4RkQ4K5TAMgnJuTcmS9fb3mQ6ImQXeZll-UUCQbeadboEKozl2Upenb9pezQ9i5NAo48ANOYXY4v~cmfBmZcJmeOqFAKFsfWEL7TpwdFlYFjIVejE-kuKCGEGWh6K1rSxC3fuJQ9UT0YoJtUGXHD1RMKWCaNzihl3Bjw__&Key-Pair-Id=APKAJIYEUF5P2E3CCYTA"
              type="video/mp4"
            />
          </video>
          {showPlatButton && (
            <div
              onClick={handlePlay}
              className="bg-white absolute z-10 flex w-24 h-20 justify-center items-center rounded-sm  gap-2 text-black hover:scale-110 hover:delay-75 duration-300 m-auto left-0 right-0 top-0 bottom-0">
              <Image src={"/play.png"} width={"30"} height={"30"} alt="play" />
            </div>
          )}
        </div>
        <div className="z-10 relative p-4 lg:p-14 w-full lg:max-w-max_container">
          <div className="text-2xl lg:text-5xl mb-2 lg:mb-6 font-weight w-full lg:w-1/2">
            {movieData?.title}
          </div>
          <div className="text-xl w-full lg:w-1/2">{movieData?.overview}</div>
          <div className="text-xl capitalize gap-4 mt-4 flex">
            {movieData?.genre.map((item) => (
              <div key={item.id}>{item.name} .</div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Player
