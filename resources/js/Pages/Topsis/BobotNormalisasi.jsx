import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function BobotNormalisasi(props) {
    const headTable = ["No", "Nama", "Kriteria"];
    return (
        <AppLayout titleContent="Bobot Normalisasi">
            <Link href={"/data-matriks/create"}></Link>
            <div className="p-3">
                <TableMatriks head={headTable} data={props.matrices} />
            </div>
        </AppLayout>
    );
}
