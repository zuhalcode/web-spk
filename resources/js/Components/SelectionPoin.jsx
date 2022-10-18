export default function SelectionPoin({ label, name }) {
    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold">{label} :</label>
            <select
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sms"
                name={name}
            >
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
        </div>
    );
}
