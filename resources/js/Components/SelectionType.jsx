export default function SelectionType() {
    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold">Jenis :</label>
            <select
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sms"
                name="type"
            >
                <option value="benefit">Benefit</option>
                <option value="cost">Cost</option>
            </select>
        </div>
    );
}
