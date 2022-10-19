import TableData from "./TableData";

export default function NormalizeTable({ data, head }) {
    return (
        <table className="mx-2 mt-3">
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
                        key={data.id}
                        className="border-b border-gray-200 hover:bg-gray-100"
                    >
                        <TableData text={index + 1} />
                        <TableData text={data[0]} />
                        <TableData text={data[1]} />
                        <TableData text={data[2]} />
                        <TableData text={data[3]} />
                        <TableData text={data[4]} />
                        <TableData text={data[5]} />
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
