import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function NilaiPreferensi(props) {
    const headTable = ["No", "Nama", "Kriteria"];
    return (
        <AppLayout titleContent="Nilai Preferensi">
            <Link href={"/data-matriks/create"}></Link>
            <div className="px-2">
                <TableMatriks head={headTable} data={props.matrices} />
            </div>
        </AppLayout>
    );
}
