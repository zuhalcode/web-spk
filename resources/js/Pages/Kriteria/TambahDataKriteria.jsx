import FormButton from "@/Components/FormButton";
import InputDate from "@/Components/InputDate";
import InputForm from "@/Components/InputForm";
import InputOnlyNumber from "@/Components/InputOnlyNumber";
import InputSelection from "@/Components/InputSelection";
import SelectionPoin from "@/Components/SelectionPoin";
import SelectionType from "@/Components/SelectionType";
import AppLayout from "@/Layouts/AppLayout";

export default function TambahDataKriteria() {
    return (
        <AppLayout titleContent="Tambah Data Kriteria">
            <div className=" w-2/3 pb-2">
                <form
                    action="/data-kriteria"
                    className="flex flex-col space-y-3 my-3"
                    method="POST"
                >
                    <input type="hidden" name="_token" value={csrf_token} />
                    <InputForm name={"name"} placeholder="Nama Kriteria" />
                    <InputForm name={"weight"} placeholder="Bobot" />
                    <SelectionPoin label={"Poin 1"} name="poin1" />
                    <SelectionPoin label={"Poin 2"} name="poin2" />
                    <SelectionPoin label={"Poin 3"} name="poin3" />
                    <SelectionPoin label={"Poin 4"} name="poin4" />
                    <SelectionPoin label={"Poin 5"} name="poin5" />
                    <SelectionType />
                    <FormButton text="Tambah Data" className="ml-12" />
                </form>
            </div>
        </AppLayout>
    );
}
