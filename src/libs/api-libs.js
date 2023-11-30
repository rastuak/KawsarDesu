
export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}

export const getNestedAnimeResponse = async(resource, objectProperty) => {
    const response = await getAnimeResponse(resource)
    return response.data.flatMap(item => item[objectProperty])


}

export const getAnimeEpisodeById = async (id) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/anime/${id}/episodes`)
    const anime = await response.json()
    return anime
}

export const randomNums = (data, gap) => {
    const much = data.length-gap
    const first = Math.floor(Math.random()*much)-1
    const last = first+gap
    return data.slice(first,last)
}