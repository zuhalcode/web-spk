import { capitalizeEachWord } from "@/Utils/function";

export default function TableData({ text, textCenter = true }) {
    return (
        <td className={` py-3 px-6 `}>
            <div
                className={`flex ${
                    textCenter ? "justify-center" : "justify-start"
                }`}
            >
                <span className={`font-medium text-center`}>
                    {typeof text === "string" ? capitalizeEachWord(text) : text}
                </span>
            </div>
        </td>
    );
}
