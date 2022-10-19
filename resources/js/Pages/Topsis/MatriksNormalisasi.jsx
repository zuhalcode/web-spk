import NormalizeTable from "@/Components/Table/NormalizeTable";
import AppLayout from "@/Layouts/AppLayout";

export default function MatriksNormalisasi({ normalize }) {
    const headTable = ["No", "Nama", "C1", "C2", "C3", "C4", "C5"];
    return (
        <AppLayout titleContent="Matriks Normalisasi">
            <div className="px-2">
                <NormalizeTable head={headTable} data={normalize} />
            </div>
        </AppLayout>
    );
}
