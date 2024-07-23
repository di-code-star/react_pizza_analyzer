
const Header = () => {
    return (
        <header>
            <nav className="bg-gray-300 py-4 text-lg font-bold">
                <div className="container mx-auto px-4 flex justify-between">
                    <h1 className="text-black text-2xl">Pizza Analyzer</h1>
                    {/* <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" id="back-btn">
                        Back
                    </button> */}
                </div>
            </nav>
        </header>
    )
}

export default Header;