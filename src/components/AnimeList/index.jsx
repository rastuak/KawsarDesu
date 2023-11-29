import Image from "next/image"
import Link from "next/link"

const Animelist = ({ api }) => {
  return (
    <div className='p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-7 pt-1'>
      {api.data.map(data => {
        return (
          <Link href={`/anime/${data.mal_id}`} key={data.mal_id} className='rounded-xl shadow-xl hover:text-white hover:bg-paletAbu-900 overflow-hidden'>
              <div className="group hover:cursor-pointer transition-all h-full">
                <div className="transition-all group-hover:scale-105 duration-100">
                  <Image
                    width={350}
                    height={400}
                    objectfitimages="cover"
                    src={data.images.webp.image_url}
                    alt=""
                    className="w-full max-h-64"
                  />
                </div>
                <h1 className="p-1 font-bold text-center text-sm lg:text-lg">{data.title}</h1>
              </div>
            </Link>
        )
      })}

    </div>

  )
}

export default Animelist