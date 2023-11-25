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

export default dataType;