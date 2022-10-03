export default function FormButton({ text = "", className = "" }) {
    return (
        <button
            className={`px-3 py-2 rounded-sm hover:bg-blue-500 bg-blue-600 text-white font-bold m-2 uppercase w-[150px] text-center ${className} `}
        >
            {text}
        </button>
    );
}
