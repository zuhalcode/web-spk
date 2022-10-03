import { useState } from "react";

export default function InputOnlyNumber() {
    const [phoneValue, setPhoneValue] = useState("");

    const inputOnChange = (e) => {
        setPhoneValue(e.target.value.replace(/\D/g, ""));
    };

    return (
        <div className="flex space-x-3 items-center justify-end">
            <label className="text-end font-bold"> Nomor Telepon :</label>
            <input
                type="text"
                name="phone"
                className="w-9/12 font-bold border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm"
                placeholder="Nomor Telepon"
                autoComplete="none"
                required
                value={phoneValue}
                onChange={(e) => inputOnChange(e)}
            />
        </div>
    );
}
