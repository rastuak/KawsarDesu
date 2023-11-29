
export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime
}