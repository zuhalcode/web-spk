import FormButton from "@/Components/FormButton";
import TableData from "@/Components/Table/TableData";
import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function JarakSolusiIdeal({ dplusmin }) {
    return (
        <AppLayout titleContent="Nilai Preferensi">
            <div className="px-2">
                <table className="mx-2 mt-3">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                            <th className="py-3 px-6 text-center ">No</th>
                            <th className="py-3 px-6 text-center ">
                                Alternatif
                            </th>
                            <th className="py-3 px-6 text-center ">
                                Preferensi
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {dplusmin.map((data, index) => (
                            <tr
                                key={index}
                                className="border-b border-t border-gray-200 hover:bg-gray-100"
                            >
                                <TableData text={index + 1} />
                                <TableData text={data[0]} />
                                <TableData
                                    text={(
                                        data[7] /
                                        (data[7] + data[6])
                                    ).toFixed(3)}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
