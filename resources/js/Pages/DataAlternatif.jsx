import FormButton from "@/Components/FormButton";
import Table from "@/Components/Table";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function DataAlternatif(props) {
    const headTable = [
        "No",
        "Nama",
        "Poin 1",
        "Poin 2",
        "Poin 3",
        "Poin 4",
        "Poin 5",
        "Aksi",
    ];

    return (
        <AppLayout titleContent="Data Alternatif">
            <Link href={"data-alternatif/create"}>
                <FormButton text="Tambah Data" />
            </Link>
            <div className="px-2">
                <Table head={headTable} data={props.alternatives} type="alt" />
            </div>
        </AppLayout>
    );
}
