import FormButton from "@/Components/FormButton";
import AppLayout from "@/Layouts/AppLayout";
import { capitalizeEachWord } from "@/Utils/function";

export default function TambahData({ alternatives, criterias }) {
    return (
        <AppLayout titleContent="Tambah Data Matriks">
            <div className=" w-2/3 pb-2">
                <form
                    action="/data-matriks"
                    className="flex flex-col space-y-3 my-3"
                    method="POST"
                >
                    <input type="hidden" name="_token" value={csrf_token} />
                    <div className="flex space-x-3 items-center justify-end">
                        <label className="text-end font-bold">
                            Alternatif :
                        </label>
                        <select
                            className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sms"
                            name="alternative"
                        >
                            {alternatives.map((alt) => (
                                <option key={alt.id} value={alt.name}>
                                    {alt.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    {criterias.map((crt, index) => (
                        <div
                            key={crt.id}
                            className="flex space-x-3 items-center justify-end"
                        >
                            <label className="text-center font-bold">
                                {capitalizeEachWord(crt.name)} :
                            </label>
                            <select
                                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sms"
                                name={`c${index + 1}`}
                            >
                                <option>{crt.poin1}</option>
                                <option>{crt.poin2}</option>
                                <option>{crt.poin3}</option>
                                <option>{crt.poin4}</option>
                                <option>{crt.poin5}</option>
                            </select>
                        </div>
                    ))}

                    <FormButton text="Tambah Data" className="ml-12" />
                </form>
            </div>
        </AppLayout>
    );
}
