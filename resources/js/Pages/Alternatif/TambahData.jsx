import FormButton from "@/Components/FormButton";
import InputDate from "@/Components/InputDate";
import InputForm from "@/Components/InputForm";
import InputOnlyNumber from "@/Components/InputOnlyNumber";
import InputSelection from "@/Components/InputSelection";
import SelectionPoin from "@/Components/SelectionPoin";
import SelectionType from "@/Components/SelectionType";
import AppLayout from "@/Layouts/AppLayout";

export default function TambahData() {
    return (
        <AppLayout titleContent="Tambah Data Alternatif">
            <div className=" w-2/3 pb-2">
                <form
                    action="/data-alternatif"
                    className="flex flex-col space-y-3 my-3"
                    method="POST"
                >
                    <input type="hidden" name="_token" value={csrf_token} />
                    <InputForm name={"name"} placeholder="Nama Alternatif" />
                    <FormButton text="Simpan" className="ml-12" />
                </form>
            </div>
        </AppLayout>
    );
}
