import TableMatriks from "@/Components/TableMatriks";
import AppLayout from "@/Layouts/AppLayout";

export default function MatriksNormalisasi(props) {
    const headTable = ["No", "Nama", "Kriteria"];
    return (
        <AppLayout titleContent="Matriks Normalisasi">
            <div className="px-2">
                <TableMatriks head={headTable} data={props.matrices} />
            </div>
        </AppLayout>
    );
}
