import Link from 'next/link'

const Header = ({ headerTitle, linkTitle, linkHref }) => {
    return (
        <div>
            <div className='flex justify-between px-4 font-bold'>
                <h1 className='text-2xl pl-1 pt-4'>{headerTitle}</h1>
                {linkHref && linkTitle
                    ?
                    <Link href={linkHref}
                        className='hover:text-paletKuning-coba text-xl pt-6 pr-2 text-md'
                    >{linkTitle}
                    </Link>
                    :
                    null
                }
            </div>
        </div>
    )
}

export default Header