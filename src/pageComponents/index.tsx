
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router'
import Header from '@/components/header';
import Image from 'next/image';
import GridCard from '@/components/gridCard'
import Modal from '@/components/modal'
import { type } from 'os';

type dataType = {
    id: number;
    title: string;
    rating: number;
    overview: string;
    poster: string;
    banner: string;
    genre: {
        id: number;
        name: string;
    }[];
};

const HeroDetails = ({ popularPick }: { popularPick: dataType }) => {
    return (
        <div className='relative flex flex-col lg:flex-row max-w-max_container h-[300px] lg:h-[600px]  lg:w-full m-auto items-bottom items-end'>
            <div className='lg:absolute w-full bg-black' />
            <div
                // className='overflow-hidden bg-black absolute w-full'
                className='h-[300px] lg:h-[550px] overflow-hidden bg-cover bg-top static opacity-[.4] lg:absolute w-full rounded-md'
                style={{ backgroundImage: `url(${popularPick.banner})` }}
            >
                {/* <Image className='w-full h-[600px] opacity-50 rounded-md' src={popularPick.banner} width={'1200'} height={'300'} alt='hero_image' /> */}
            </div>

            <div className='z-10 relative p-4 lg:p-14 w-full lg:w-3/5'>
                <div className='text-2xl lg:text-5xl mb-2 lg:mb-6 font-weight'>{popularPick.title}</div>
                {/* <div onClick={() => videoRef.current.play()}>PLay</div> */}

                <div className='text-xl hidden lg:flex'>{popularPick.overview}</div>
                {/* <div className='gap-4 mt-4 text-gray-400 hidden lg:flex'>
                    <div className='text-xl'>{DETAILS_DATA_STRUCTURE.runTime} min</div>
                    <div className='text-xl'>{DETAILS_DATA_STRUCTURE.released}</div>
                </div> */}
                <div className='text-xl capitalize gap-4 mt-4 hidden lg:flex'>{popularPick.genre.map(item => <div key={item.id}>{item.name} .</div>)}</div>
                <div className=' mt-2 lg:mt-8'>
                    <div className='flex gap-4 items-center'>
                        <div className='flex justify-center items-center gap-4 '>
                            <div className='bg-white flex justify-between rounded-sm p-4 px-8 gap-2 text-black items-center hover:scale-110 hover:delay-75 duration-300'>
                                <Image src={'/play.png'} width={'20'} height={'20'} alt='play' />
                                <div>Play</div>
                            </div>
                        </div>
                        <div className='bg-gray-600 w-14 h-14 rounded-full flex justify-center items-center hover:scale-110 hover:delay-75 duration-300'>
                            <Image src={'/plus.png'} width={'30'} height={'30'} alt='wishlist' />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}


type MovieDetailsProps = {
    movie: dataType;
    horror: dataType[];
}

const MovieDetails = ({ movie, horror }: MovieDetailsProps) => {
    return (
        <div>
            <div className='flex flex-col relative'>
                <div
                    // className='overflow-hidden bg-black absolute w-full'
                    className='h-[300px] lg:h-[300px] overflow-hidden bg-cover bg-top  w-full rounded-md opacity-[.4]'
                    style={{ backgroundImage: `url(${movie.banner})` }}
                >
                    {/* <Image className='w-full h-[600px] opacity-50 rounded-md' src={popularPick.banner} width={'1200'} height={'300'} alt='hero_image' /> */}
                </div>
            </div>

            <div className='mt-2 relative p-5 flex flex-col text-white '>
                <div className='text-2xl pb-1'>{movie.title}</div>
                <div className='py-3 max-h-20 overflow-y-auto'>{movie.overview}</div>
                <div className='capitalize gap-4 mt-4 flex'>{movie.genre.map(item => <div key={item.id}>{item.name} .</div>)}</div>

                <div className='flex gap-4 mt-4 items-center'>
                    <div className='flex justify-center items-center gap-4 '>
                        <div className='bg-white flex justify-between rounded-sm p-4 px-8 gap-2 text-black items-center hover:scale-110 hover:delay-75 duration-300'>
                            <Image src={'/play.png'} width={'20'} height={'20'} alt='play' />
                            <div>Play</div>
                        </div>
                    </div>
                    <div className='bg-gray-600 w-14 h-14 rounded-full flex justify-center items-center hover:scale-110 hover:delay-75 duration-300'>
                        <Image src={'/plus.png'} width={'30'} height={'30'} alt='wishlist' />
                    </div>
                    <div className='bg-gray-600 w-14 h-14 rounded-full flex justify-center items-center hover:scale-110 hover:delay-75 duration-300'>
                        <Image src={'/like.png'} width={'30'} height={'30'} alt='wishlist' />
                    </div>

                </div>
            </div>

            <div className='mt-10'>
                <div className='ml-4 mb-4 text-2xl'>Recommended movies</div>
                <div className='flex justify-between gap-6 px-4 p-10 -mt-8 overflow-auto no-scrollbar'>
                    {horror.map(item => {
                        return <GridCard key={item.id} removeAction={true} id={item.id} banner={item.banner} title={item.title} genre={item.genre} rating={item.rating} />
                    })}
                </div>
            </div>
        </div>
    )
}


const Title = (props: { title: string }) => {
    return (
        <div className='text-2xl pl-[50px] lg:pl-[100px]'>{props.title}</div>
    )
}

const Browse = ({ popular, horror }: {
    popular: dataType[];
    horror: dataType[];
}) => {
    const [loader, setLoader] = useState(true)
    const [showModal, setShowModal] = useState(false)
    const [selectedMovie, setSelectedMovie] = useState<dataType>({} as dataType)
    const router = useRouter()
    const randomDigit = Math.floor(Math.random() * 10);
    const popularPick = popular[randomDigit]
    useEffect(() => {
        if (popular.length) setLoader(false)
    }, [popular])


    const handleOpenModal = (movie: {
        id: number;
        title: string;
        rating: number;
        overview: string;
        poster: string;
        banner: string;
        genre: {
            id: number;
            name: string;
        }[]
    }) => {
        setShowModal(true)
        setSelectedMovie(movie)
    };


    console.log('selectedMovie', selectedMovie)
    if (loader) return <div className='flex justify-center items-center h-screen'>Loading...</div>
    return (
        <div className='m-auto pb-[100px] mt-[-30px]'>
            <HeroDetails popularPick={popularPick} />
            <div className='mt-10'>
                <Title title={'Popular on Netflix'} />
                <div className='flex justify-between gap-6 p-10 mt-[-30px] pb-[150px] pl-[50px] lg:pl-[100px] overflow-auto no-scrollbar'>
                    {popular.map(item => {
                        return <GridCard key={item.id} openModal={() => handleOpenModal(item)} id={item.id} banner={item.banner} title={item.title} genre={item.genre} rating={item.rating} />
                    })}
                </div>
            </div>

            <div className='mt-[-120px]'>
                <Title title={'Horror Movies'} />
                <div className='flex justify-between gap-6 p-10 mt-[-30px] pl-[50px] pb-[150px]  lg:pl-[100px] overflow-auto no-scrollbar'>
                    {horror.map(item => {
                        return <GridCard key={item.id} openModal={() => handleOpenModal(item)} id={item.id} banner={item.banner} title={item.title} genre={item.genre} rating={item.rating} />
                    })}
                </div>
            </div>


            {showModal ?
                <Modal onClose={() => setShowModal(false)}>
                    <MovieDetails movie={selectedMovie} horror={horror} />
                </Modal>
                : null
            }

        </div>
    )
}
export default Browse;