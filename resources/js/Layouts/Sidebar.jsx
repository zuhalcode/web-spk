import { Link } from "@inertiajs/inertia-react";
import { useRef } from "react";

export default function Sidebar() {
    const listMenuPenilaian = [
        "data pegawai",
        "departemen",
        "data variabel",
        "rule fuzzy",
        "penilaian",
    ];

    const penilaianMenuRef = useRef();
    const keputusanMenuRef = useRef();

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

    const penilaianOnclick = (e) => {
        classToggle(e);
        penilaianMenuRef.current.classList.toggle("hidden");
    };

    const keputusanOnclick = (e) => {
        classToggle(e);
        keputusanMenuRef.current.classList.toggle("hidden");
    };

    return (
        <div className="w-[300px] ">
            <h1 className="uppercase px-3 py-2 bg-gray-800 font-bold text-2xl text-white text-center">
                Fuzzy Website
            </h1>
            <ul className="min-h-[568px] bg-black font-bold text-white ">
                <li
                    className="sidebar-hover relative hover:bg-[#2b332d] cursor-pointer flex justify-between px-2 items-center uppercase"
                    onClick={(e) => penilaianOnclick(e)}
                >
                    <p className="mx-2 py-3 px-3">Penilaian</p>
                    {arrowLeft}
                </li>

                <ul
                    className="w-full hidden bg-gray-800 transition-all duration-500"
                    ref={penilaianMenuRef}
                >
                    {listMenuPenilaian.map((menu, index) => (
                        <li
                            key={index}
                            className="relative hover:bg-[#05220b] cursor-pointer flex justify-between px-2 items-center"
                        >
                            <Link href={menu.split(" ").join("-")}>
                                <p className="mx-2 py-3 px-3">
                                    {menu.charAt(0).toUpperCase() +
                                        menu.slice(1).toLowerCase()}
                                </p>
                            </Link>
                        </li>
                    ))}
                </ul>

                <li
                    className="sidebar-hover relative hover:bg-[#151916] cursor-pointer flex justify-between px-2 items-center uppercase"
                    onClick={(e) => keputusanOnclick(e)}
                >
                    <p className="mx-2 py-3 px-3">Keputusan</p>
                    {arrowLeft}
                </li>
                <ul
                    className="w-full hidden bg-gray-800 transition-all duration-500"
                    ref={keputusanMenuRef}
                >
                    <li className="relative hover:bg-[#05220b] cursor-pointer flex justify-between px-2 items-center">
                        <Link href={"hasil-analisa"}>
                            <p className="mx-2 py-3 px-3">Hasil Analisa</p>
                        </Link>
                    </li>
                </ul>
            </ul>
        </div>
    );
}
