import Browse from '@/pageComponents';
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

export default function Details({ popular, horror }: {
    popular: dataType[];
    horror: dataType[];
}) {
    return <Browse popular={popular} horror={horror} />
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
    return {
        props: {
            popular: popular.data,
            horror: horror.data
        },
    }
}