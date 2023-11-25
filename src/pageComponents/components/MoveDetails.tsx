import Image from "next/image"
import dataType from "@/pageComponents/type"
import GridCard from "@/components/gridCard"
import PlayButton from "./PlayButton"

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

export default MovieDetails
