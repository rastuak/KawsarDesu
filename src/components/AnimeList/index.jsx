import Image from "next/image"
import Link from "next/link"
import nonePict from "@/components/pict/none.jpeg"

const Animelist = ({ api }) => {
  return (
    <div className='p-3 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 pt-1'>
      {api.data?.map(data => {
        return (
          <Link href={`/anime/${data.mal_id}`} key={data.mal_id} className='group rounded-xl shadow-xl hover:bg-paletAbu-900 overflow-hidden hover:scale-110 duration-300'>
              <div className="group hover:cursor-pointer transition-all group-hover:text-white">
                <div className="transition-all group-hover:scale-105 duration-300">
                  <Image
                    width={350}
                    height={400}
                    objectfitimages="cover"
                    src={data.images.webp.image_url}
                    alt={nonePict}
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