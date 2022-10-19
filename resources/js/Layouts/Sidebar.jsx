import { capitalizeEachWord } from "@/Utils/function";
import { Link } from "@inertiajs/inertia-react";
import { useRef } from "react";

export default function Sidebar() {
    const listTopsisMenu = [
        "matriks normalisasi",
        "normalisasi terbobot",
        "solusi ideal",
        "jarak solusi ideal",
        "nilai preferensi",
    ];

    const kriteriaMenuRef = useRef();
    const alternatifMenuRef = useRef();
    const matriksMenuRef = useRef();
    const topsisMenuRef = useRef();

    const arrowLeft = (
        <svg
            className="w-5 h-5 transition-all duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
            ></path>
        </svg>
    );

    const classToggle = (e) => {
        if (e.target.tagName === "P") {
            e.target.parentNode.childNodes[1].classList.toggle(
                "rotate-[-90deg]"
            );
            e.target.parentNode.classList.toggle("sidebar-active");
            e.target.parentNode.classList.toggle("bg-[#151916]");
        } else if (e.target.tagName === "LI") {
            e.target.childNodes[1].classList.toggle("rotate-[-90deg]");
            e.target.classList.toggle(["sidebar-active"]);
            e.target.classList.toggle("bg-[#151916]");
        } else if (e.target.tagName === "svg") {
            e.target.classList.toggle("rotate-[-90deg]");
            e.target.parentNode.classList.toggle("sidebar-active");
            e.target.parentNode.classList.toggle("bg-[#151916]");
        }
    };

    const kriteriaOnclick = (e) => {
        classToggle(e);
        kriteriaMenuRef.current.classList.toggle("hidden");
    };

    const alternatifOnclick = (e) => {
        classToggle(e);
        alternatifMenuRef.current.classList.toggle("hidden");
    };

    const matriksOnclick = (e) => {
        classToggle(e);
        matriksMenuRef.current.classList.toggle("hidden");
    };

    const topsisOnclick = (e) => {
        classToggle(e);
        topsisMenuRef.current.classList.toggle("hidden");
    };

    return (
        <div className="w-[300px] ">
            <h1 className="uppercase px-3 py-2 bg-gray-800 font-bold text-2xl text-white text-center">
                SPK TOPSIS
            </h1>
            <ul className="min-h-[568px] bg-black font-bold text-white ">
                <li
                    className="sidebar-hover relative hover:bg-[#2b332d] cursor-pointer flex justify-between px-2 items-center uppercase"
                    onClick={(e) => kriteriaOnclick(e)}
                >
                    <p className="mx-2 py-3 px-3">Kriteria</p>
                    {arrowLeft}
                </li>
                <ul
                    className="w-full hidden bg-gray-800 transition-all duration-500"
                    ref={kriteriaMenuRef}
                >
                    <li className="relative hover:bg-[#05220b] cursor-pointer flex justify-between px-2 items-center">
                        <Link href={"/data-kriteria"}>
                            <p className="mx-2 py-3 px-3">Data Kriteria</p>
                        </Link>
                    </li>
                </ul>

                <li
                    className="sidebar-hover relative hover:bg-[#151916] cursor-pointer flex justify-between px-2 items-center uppercase"
                    onClick={(e) => alternatifOnclick(e)}
                >
                    <p className="mx-2 py-3 px-3">Alternatif</p>
                    {arrowLeft}
                </li>
                <ul
                    className="w-full hidden bg-gray-800 transition-all duration-500"
                    ref={alternatifMenuRef}
                >
                    <li className="relative hover:bg-[#05220b] cursor-pointer flex justify-between px-2 items-center">
                        <Link href={"/data-alternatif"}>
                            <p className="mx-2 py-3 px-3">Data Alternatif</p>
                        </Link>
                    </li>
                </ul>

                {/* <li
                    className="sidebar-hover relative hover:bg-[#151916] cursor-pointer flex justify-between px-2 items-center uppercase"
                    onClick={(e) => matriksOnclick(e)}
                >
                    <p className="mx-2 py-3 px-3">Nilai Matriks</p>
                    {arrowLeft}
                </li>
                <ul
                    className="w-full hidden bg-gray-800 transition-all duration-500"
                    ref={matriksMenuRef}
                >
                    <li className="relative hover:bg-[#05220b] cursor-pointer flex justify-between px-2 items-center">
                        <Link href={"/data-matriks"}>
                            <p className="mx-2 py-3 px-3">Data Matriks</p>
                        </Link>
                    </li>
                </ul> */}

                <li
                    className="sidebar-hover relative hover:bg-[#151916] cursor-pointer flex justify-between px-2 items-center uppercase"
                    onClick={(e) => topsisOnclick(e)}
                >
                    <p className="mx-2 py-3 px-3">Hasil Topsis</p>
                    {arrowLeft}
                </li>
                <ul
                    className="w-full hidden bg-gray-800 transition-all duration-500"
                    ref={topsisMenuRef}
                >
                    {listTopsisMenu.map((menu, index) => (
                        <li
                            key={index}
                            className="relative hover:bg-[#05220b] cursor-pointer flex justify-between px-2 items-center"
                        >
                            <Link href={`/${menu.split(" ").join("-")}`}>
                                <p className="mx-2 py-3 px-3 w-full">
                                    {capitalizeEachWord(menu)}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </div>
    );
}
