import FormButton from "@/Components/FormButton";
import Table from "@/Components/Table";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function DataKriteria(props) {
    const headTable = [
        "No",
        "Kriteria",
        "Bobot",
        "Poin 1",
        "Poin 2",
        "Poin 3",
        "Poin 4",
        "Poin 5",
        "Sifat",
        "Aksi",
    ];

    return (
        <AppLayout titleContent="Data Kriteria">
            <Link href={"data-kriteria/create"}>
                <FormButton text="Tambah Data" />
            </Link>
            <div className="px-2">
                <Table head={headTable} data={props.criterias} />
            </div>
        </AppLayout>
    );
}
