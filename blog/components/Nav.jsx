import Link from 'next/link'
const Nav = () => {
  return (
    <nav className="bg-white border-gray-200 px-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
            <a href="#">
                <span className="self-center text-lg font-semibold whitespace-nowrap">Brad Hankee</span>

            </a>

            <div className="hidden md:block w-full md:w-auto" id="mobile-menu">
            <ul className="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
                <Link href="/" passHref >
                    <h2 className="bg-blue-700 md:bg-transparent text-white block pl-3 pr-4 py-2 md:text-blue-700 md:p-0 rounded">Home</h2>
                </Link>
                <Link href="/bio" passHref>
                    <p className="text-gray-700 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-blue-700 md:p-0">Bio</p>
                </Link>
            </ul>

            </div>
        </div>


    </nav>




  )
}
export default Nav

