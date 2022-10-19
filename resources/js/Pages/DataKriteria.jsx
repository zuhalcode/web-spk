import FormButton from "@/Components/FormButton";
import Table from "@/Components/Table";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function DataKriteria(props) {
    const headTable = ["No", "Kriteria", "Bobot", "Sifat", "Aksi"];

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
