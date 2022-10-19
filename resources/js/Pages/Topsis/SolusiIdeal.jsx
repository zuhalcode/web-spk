import FormButton from "@/Components/FormButton";
import TableData from "@/Components/Table/TableData";
import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function SolusiIdeal({ ymaxmin }) {
    return (
        <AppLayout titleContent="Solusi Ideal">
            <div className="px-2">
                <table className="mx-2 mt-3">
                    <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-t border-gray-200 hover:bg-gray-100">
                            <th className="py-3 px-6 text-center">Max(y+)</th>
                            {ymaxmin.ymax.map((ymax, index) => (
                                <TableData key={index} text={ymax} />
                            ))}
                        </tr>
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                            <th className="py-3 px-6 text-center">Max(y+)</th>
                            {ymaxmin.ymin.map((ymin, index) => (
                                <TableData key={index} text={ymin} />
                            ))}
                        </tr>
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}
