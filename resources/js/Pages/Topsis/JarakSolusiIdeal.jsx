import FormButton from "@/Components/FormButton";
import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function JarakSolusiIdeal(props) {
    const headTable = ["No", "Nama", "Kriteria"];
    return (
        <AppLayout titleContent="Jarak Solusi Ideal">
            <Link href={"/data-matriks/create"}></Link>
            <div className="px-2">
                <TableMatriks head={headTable} data={props.matrices} />
            </div>
        </AppLayout>
    );
}
