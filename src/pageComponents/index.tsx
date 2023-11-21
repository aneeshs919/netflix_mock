
import { useRouter } from 'next/router'
import Header from '@/components/header';
import Image from 'next/image';
import GridCard from '@/components/gridCard'
import Modal from '@/components/modal'

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


const DETAILS_DATA_STRUCTURE = {
    title: 'To Catch a Killer',
    description: `Baltimore. New Year's Eve. A talented but troubled police officer (Shailene Woodley) is recruited by the FBI's chief investigator (Ben Mendelsohn) to help profile and track down a disturbed individual terrorizing the city.`,
    tag: ['suspense', 'action', 'drama'],
    runTime: '1 h 59',
    released: '2023'
}

const HeroDetails = ({title, overview, rating}) => {
    return (
        <div className='relative h-[550px] flex items-bottom items-end'>
            <div className='max-h-[550px] overflow-hidden bg-black absolute w-full'>
                <Image className='w-full h-[100%] opacity-50' src={'/hero.webp'} width={'1200'} height={'300'} alt='hero_image' />
            </div>
            <div className='z-10 relative p-14 w-3/5'>
                <div className='text-5xl mb-6 font-weight'>{DETAILS_DATA_STRUCTURE.title}</div>
                <div className='text-xl'>{DETAILS_DATA_STRUCTURE.description}</div>
                <div className='flex gap-4 mt-4 text-gray-400'>
                    <div className='text-xl'>{DETAILS_DATA_STRUCTURE.runTime} min</div>
                    <div className='text-xl'>{DETAILS_DATA_STRUCTURE.released}</div>
                </div>
                <div className='flex text-xl capitalize gap-4 mt-4'>{DETAILS_DATA_STRUCTURE.tag.map(item => <div key={item}>{item} .</div>)}</div>
                <div className='mt-8'>
                    <div className='flex gap-4 items-center'>
                        <div className='flex justify-center items-center gap-4 text-2xl'>
                            <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center hover:scale-110 hover:delay-75 duration-300'>
                                <Image src={'/play.png'} width={'35'} height={'35'} alt='play' />
                            </div>
                            <div>Play</div>
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

const Title = (props: { title: string }) => {
    return (
        <div className='text-2xl pl-[100px]'>{props.title}</div>
    )
}

const Browse = ({ popular }: { popular: dataType[] }) => {
    const router = useRouter()
    const randomDigit = Math.floor(Math.random() * 10);
    const banner = popular[randomDigit].banner

    console.log('popular333', popular)
    return (
        <div className='m-auto'>
            <HeroDetails />
            <div className='mt-5'>
                <Title title={'Popular on Netflix'} />
                <div className='flex justify-between gap-4 p-6 pl-[100px] overflow-auto no-scrollbar'>
                    {popular.map(item => {
                        return <GridCard key={item.id} id={item.id} banner={item.banner} />
                    })}
                </div>
            </div>

            {router.query.id ?
                <Modal onClose={() => router.back()}>
                    dsad
                </Modal>
                : null
            }

        </div>
    )
}
export default Browse;