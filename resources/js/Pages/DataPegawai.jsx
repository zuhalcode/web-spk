import FormButton from "@/Components/FormButton";
import Table from "@/Components/Table";
import AppLayout from "@/Layouts/AppLayout";
import { Link } from "@inertiajs/inertia-react";

export default function DataPegawai() {
    return (
        <AppLayout titleContent="Data Pegawai">
            <Link href={"data-pegawai/tambah-data"}>
                <FormButton text="Tambah Data" />
            </Link>
            <div className="px-2">
                <Table />
            </div>
        </AppLayout>
    );
}
