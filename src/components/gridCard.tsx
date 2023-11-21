import Image from 'next/image';
import { useRouter } from 'next/router'

// export default function Page() {
//   const router = useRouter()
//   return <p>Post: {router.query.slug}</p>
// }

interface GridCardProps {
    id: number;
    banner: string;
}

const GridCard = ({ id, banner }: GridCardProps) => {
    const router = useRouter()
    const navigateToDetails = () => {
        router.push(
            `/details?id=${id}`,
            undefined,
            { shallow: true }
        )
    }
    // onClick={() => router.push(`/details/?id=${id}`)} 
    console.log('router', router)
    return (
        <div key={id} onClick={navigateToDetails} className='flex w-[200px] shrink-0 hover:scale-125 hover:delay-75 duration-300' >
            <Image className='rounded-md' src={banner} width={'300'} height={'100'} alt='wishlist' />
        </div >
    )
}

export default GridCard;