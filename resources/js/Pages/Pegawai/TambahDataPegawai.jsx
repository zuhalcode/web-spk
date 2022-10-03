import FormButton from "@/Components/FormButton";
import InputDate from "@/Components/InputDate";
import InputForm from "@/Components/InputForm";
import InputOnlyNumber from "@/Components/InputOnlyNumber";
import InputSelection from "@/Components/InputSelection";
import AppLayout from "@/Layouts/AppLayout";

export default function TambahDataPegawai() {
    return (
        <AppLayout titleContent="Tambah Data Pegawai">
            <div className=" w-2/3 mr-10 ">
                <form action="" className="flex flex-col space-y-3 mt-3">
                    <InputForm name={"name"} placeholder="Nama Lengkap" />
                    <InputForm
                        name={"email"}
                        placeholder="Email"
                        type="email"
                    />
                    <InputDate />
                    <InputOnlyNumber />
                    <InputSelection />
                    <InputSelection gender={false} />
                    <FormButton text="Tambah Data" className="mx-12 mt-5" />
                </form>
            </div>
        </AppLayout>
    );
}
