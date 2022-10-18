import TableData from "./Table/TableData";

export default function TableMatriks({ head = [], data = [] }) {
    const thC = ["C1", "C2", "C3", "C4", "C5"];
    return (
        <table>
            <thead>
                <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
                    {head.map((head, index) =>
                        head === "Kriteria" ? (
                            <th key={index} className="text-center">
                                {head}
                                <div className=" pt-1 text-center flex space-x-2">
                                    {thC.map((c, index) => (
                                        <div key={index} className="px-5 py-1">
                                            {c}
                                        </div>
                                    ))}
                                </div>
                            </th>
                        ) : (
                            <th key={index} className="py-3 px-6 text-center ">
                                {head}
                            </th>
                        )
                    )}
                </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
                {data.map((data, index) => (
                    <tr
                        key={data.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <TableData text={index + 1} />
                        <TableData text={data.alternative} />
                        <td>
                            <table>
                                <tbody>
                                    <tr className="flex space-x-[11px]">
                                        <TableData text={data.c1} />
                                        <TableData text={data.c2} />
                                        <TableData text={data.c3} />
                                        <TableData text={data.c4} />
                                        <TableData text={data.c5} />
                                    </tr>
                                </tbody>
                            </table>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
