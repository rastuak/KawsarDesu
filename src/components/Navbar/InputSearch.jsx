"use client"
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"



const InputSearch = () => {
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value

        if (!keyword || keyword.trim() == "" ) {return}

        if (event.key === "Enter" || event.type === "click") {
                event.preventDefault()
                router.push(`/search/${keyword}`)
            }
        }

        return (
            <div className="relative top-2.5">
                <form onSubmit={handleSearch} onKeyDown={handleSearch}>
                    <input placeholder='Search anime...'
                        className='w-full p-1.5 left-0 right-0 rounded-xl'
                        ref={searchRef}
                    />
                </form>
                <button>
                    <MagnifyingGlass
                        size={24}
                        className="absolute top-1 end-1"
                        onClick={handleSearch}
                    />
                </button>
            </div>
        )
    }

    export default InputSearch