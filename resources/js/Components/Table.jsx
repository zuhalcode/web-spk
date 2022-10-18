import TableData from "./Table/TableData";

export default function Table({ head = [], data = [], type = "" }) {
    return (
        <table className="">
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                    {head.map((head, index) => (
                        <th key={index} className="py-3 px-6 text-center ">
                            {head}
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                {data.map((data, index) => (
                    <tr
                        key={index}
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        {type === "Alternatif" ? (
                            <>
                                <TableData text={index + 1} />
                                <TableData text={data.name} />
                            </>
                        ) : (
                            <>
                                <TableData text={index + 1} />
                                <TableData
                                    text={data.name}
                                    textCenter={false}
                                />
                                <TableData text={data.weight} />
                                <TableData text={data.poin1} />
                                <TableData text={data.poin2} />
                                <TableData text={data.poin3} />
                                <TableData text={data.poin4} />
                                <TableData text={data.poin5} />
                                <TableData text={data.type} />
                            </>
                        )}

                        <td className="py-3 px-6 text-center">
                            <div className="flex item-center justify-center">
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                        />
                                    </svg>
                                </div>
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                        />
                                    </svg>
                                </div>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
