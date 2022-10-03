export default function InputSelection({ gender = true }) {
    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold">
                {gender ? "Jenis Kelamin" : "Departemen"} :
            </label>
            <select
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sms"
                name="country_code"
            >
                {gender ? (
                    <>
                        <option value="+62">Laki-Laki</option>
                        <option value="+62">Perempuan</option>
                    </>
                ) : (
                    <>
                        <option value="+62">
                            Pengembangan Sumber Daya Manusia
                        </option>
                        <option value="+62">Luar Negeri</option>
                        <option value="+62">Dalam Negeri</option>
                        <option value="+62">Minat dan Bakat</option>
                    </>
                )}
            </select>
        </div>
    );
}
