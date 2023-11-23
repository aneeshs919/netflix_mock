import Image from 'next/image';

const LINKS = [
    {
        name: 'Home',
        path: '/'
    },
    {
        name: 'TV Shows',
        path: '/about'
    },
    {
        name: 'Movies',
        path: '/about'
    },
    {
        name: 'New & Popular',
        path: '/about'
    },
    {
        name: 'My List',
        path: '/about'
    }
]

const Header = () => {
    return (
        <div className='max-w-max_container m-auto'>
            <div className='flex justify-between items-center py-4 px-4 mb-5 lg:mb-0'>
                <div className='flex gap-4 items-center'>
                    <Image src={'/logo.webp'} width={'100'} height={'20'} alt='play' />
                    <div className='block lg:hidden'>Menu</div>
                    <div className='hidden lg:block'>
                        {LINKS.map(item => (
                            <div className='inline-block p-2' key={item.name}>
                                <a href={item.path}>{item.name}</a>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='flex items-center gap-6 cursor-pointer'>
                    <Image src={'/search.png'} width={'20'} height={'20'} alt={'search'} />
                    <Image src={'/bell.png'} width={'20'} height={'20'} alt={'bell'} />
                    <Image src={'/user.png'} width={'40'} height={'40'} alt={'user'} />
                </div>

            </div>
        </div>

    )
}

export default Header;