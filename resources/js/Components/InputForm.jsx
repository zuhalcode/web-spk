export default function InputForm({ type = "text", name, placeholder }) {
    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold">{placeholder} :</label>
            <input
                type={type || "text"}
                name={name}
                placeholder={placeholder || ""}
                required
                autoComplete="off"
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
            />
        </div>
    );
}
