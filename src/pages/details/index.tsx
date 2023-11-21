// import Header from '@/components/header';
// import Image from 'next/image';
import Browse from '@/pageComponents';

// const DETAILS_DATA_STRUCTURE = {
//     title: 'To Catch a Killer',
//     description: `Baltimore. New Year's Eve. A talented but troubled police officer (Shailene Woodley) is recruited by the FBI's chief investigator (Ben Mendelsohn) to help profile and track down a disturbed individual terrorizing the city.`,
//     tag: ['suspense', 'action', 'drama'],
//     runTime: '1 h 59',
//     released: '2023'
// }



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

export default function Details({ popular }: { popular: dataType[] }, horror: dataType[]) {
  
    return <Browse popular={popular} />
}



// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps() {
    // Call an external API endpoint to get posts.
    // You can use any data fetching library
    // const res = await fetch('https://run.mocky.io/v3/f29d179c-4304-4bc3-89df-393f35a07a5e')
    // const data = await res.json()
    const popular = await fetch("https://run.mocky.io/v3/f29d179c-4304-4bc3-89df-393f35a07a5e").then((res) => res.json());
    const horror = await fetch("https://run.mocky.io/v3/de5d08c9-1308-4067-8be5-a4bcd12a37f6").then((res) => res.json());
    const responses = await Promise.all([popular, horror])

    // console.log('data', data)
    // By returning { props: { posts } }, the Blog component
    // will receive `posts` as a prop at build time
    return {
        props: {
            popular: responses[0].data,
            horror: responses[1].data
        },
    }
}