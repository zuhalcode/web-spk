export default function SelectionAlternative({ label, name, data = [] }) {
    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold">{label} :</label>
            <select
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sms"
                name={name}
            >
                {data.map((data) => (
                    <option key={data.id} value={data.name}>
                        {data.name}
                    </option>
                ))}
            </select>
        </div>
    );
}
