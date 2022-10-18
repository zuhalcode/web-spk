export default function Content({ children, titleContent }) {
    return (
        <div className="w-full">
            <div className="w-full bg-gray-100 h-full">
                <div className="bg-white min-h-[450px] mx-2 rounded-md mt-1">
                    <h1 className="w-full bg-blue-800 text-white text-xl font-bold px-2 py-1 rounded-t-md">
                        {titleContent}
                    </h1>
                    {children}
                </div>
            </div>
        </div>
    );
}
