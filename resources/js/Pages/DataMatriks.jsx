import FormButton from "@/Components/FormButton";
import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function DataMatriks(props) {
    const headTable = ["No", "Nama", "Kriteria"];
    return (
        <AppLayout titleContent="Data Matriks">
            <Link href={"/data-matriks/create"}>
                <FormButton text="Tambah Data" />
            </Link>
            <div className="px-2">
                <TableMatriks head={headTable} data={props.matrices} />
            </div>
        </AppLayout>
    );
}
