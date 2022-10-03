export default function Content({ children, titleContent }) {
    return (
        <div className="w-full">
            <div className="w-full px-5 py-[10px] bg-[#494949]">
                <p className="text-right font-bold text-xl text-white">Admin</p>
            </div>
            <div className="w-full bg-gray-100 h-[568px]">
                <h1 className="text-2xl uppercase font-semibold px-5 py-2">
                    Dashboard
                </h1>
                <div className="bg-white min-h-[450px] mx-2 rounded-md">
                    <h1 className="w-full bg-blue-800 text-white text-xl font-bold px-2 py-1 rounded-t-md">
                        {titleContent}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
