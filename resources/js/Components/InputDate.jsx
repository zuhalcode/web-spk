export default function InputDate() {
    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold">Tanggal Masuk :</label>
            <input
                type="text"
                placeholder="Tanggal Masuk"
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                onFocus={(e) => (e.target.type = "date")}
                required
            />
        </div>
    );
}
