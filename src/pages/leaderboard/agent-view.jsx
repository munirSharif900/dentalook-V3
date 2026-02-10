import React, { useState, useMemo } from "react";
import { ProfileIcon } from "../../assets/images";

const data = [
    { province: "IT Support", avatar: 'https://i.pravatar.cc/40?img=1', provincee: 'Lala Wijaya', total: 12, received: 8, assigned: 6, stuck: 6, completed: 6, days: 30 },
    { province: "Procurement", avatar: 'https://i.pravatar.cc/40?img=2', provincee: 'Fanny Rizal', total: 9, received: 6, assigned: 4, stuck: 2, completed: 7, days: 25 },
    { province: "Payroll", avatar: 'https://i.pravatar.cc/40?img=3', provincee: 'Clara Mentari', total: 15, received: 10, assigned: 8, stuck: 3, completed: 12, days: 20 },
    { province: "HR", avatar: 'https://i.pravatar.cc/40?img=4', provincee: 'Arifin Maulana', total: 7, received: 5, assigned: 3, stuck: 1, completed: 6, days: 18 },
    { province: "Quebec", avatar: 'https://i.pravatar.cc/40?img=5', provincee: 'Fanny Rizal', total: 20, received: 14, assigned: 11, stuck: 5, completed: 15, days: 22 },
    { province: "IT Support", avatar: 'https://i.pravatar.cc/40?img=8', provincee: 'Fanny Rizal', total: 11, received: 9, assigned: 6, stuck: 2, completed: 9, days: 21 },
    { province: "Procurement", avatar: 'https://i.pravatar.cc/40?img=7', provincee: 'Arifin Maulana', total: 8, received: 6, assigned: 4, stuck: 1, completed: 7, days: 19 },
];
export default function AgentView({ pageSize = 3, headding, description, avatar }) {

    const [page, setPage] = useState(1);
    const [sortKey, setSortKey] = useState("province");
    const [sortDir, setSortDir] = useState("asc");

    const sorted = useMemo(() => {
        return [...data].sort((a, b) => {
            if (a[sortKey] < b[sortKey]) return sortDir === "asc" ? -1 : 1;
            if (a[sortKey] > b[sortKey]) return sortDir === "asc" ? 1 : -1;
            return 0;
        });
    }, [sortKey, sortDir]);

    const totalPages = Math.max(1, Math.ceil(sorted.length / pageSize));
    const start = (page - 1) * pageSize;
    const current = sorted.slice(start, start + pageSize);

    const handleSort = (key) => {
        if (sortKey === key) setSortDir(d => d === "asc" ? "desc" : "asc");
        else { setSortKey(key); setSortDir("asc"); }
        setPage(1);
    };

    function Th({ label, onClick }) {
        return (
            <th onClick={onClick} className="px-6 py-4 text-left cursor-pointer select-none hover:text-black">
                {label}
            </th>
        );
    }

    function Badge({ color, value }) {
        const map = {
            blue: "bg-blue-100 max-w-[74px] w-full text-blue-700",
            orange: "bg-orange-100 max-w-[74px] w-full text-orange-700",
            red: "bg-red-100 max-w-[74px] w-full text-red-700",
            green: "bg-green-100 max-w-[74px] w-full text-green-700",
            gray: "bg-gray-100 max-w-[121px] w-full text-gray-700",
        };

        return (
            <span
                className={`inline-block px-4 py-1.5 rounded-md font-medium text-center ${map[color]}`}
            >
                {value}
            </span>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-sm border border-[#E2E8F0] p-6">
            <div className="mb-6">
                <h2 className="text-xl font-semibold text-[#333]">{headding}</h2>
                <p className="text-xs text-[#63716E] font-normal">{description}</p>
            </div>

            <div className="">
                <table className="w-full text-sm">
                    <thead className="text-gray-500 border-b border-[#E5E6E6]">
                        <tr>
                            <th className="py-4 text-start">Agent</th>
                            <Th onClick={() => handleSort("province")} label="Department" />
                            <Th onClick={() => handleSort("total")} label="Total" />
                            <th className="px-6 py-4 text-center">Received</th>
                            <th className="px-6 py-4 text-center">Assigned</th>
                            <th className="px-6 py-4 text-center">Stuck</th>
                            <th className="px-6 py-4 text-center">Completed</th>
                            <th className="px-6 py-4 text-center">Resolution Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {current.map((row, i) => (
                            <tr key={i} className="border-b border-[#E5E6E6] last:border-none">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={ProfileIcon}
                                        className="w-8 h-8 rounded-full"
                                    />
                                    <td className="py-4 font-medium text-gray-800">{row.provincee}</td>
                                </div>
                                <td className="px-6 py-4 font-medium text-gray-800">{row.province}</td>
                                <td className="px-9 py-4 ">{row.total}</td>
                                <td className="px-6 py-4 text-center"><Badge color="blue" value={row.received} /></td>
                                <td className="px-6 py-4 text-center"><Badge color="orange" value={row.assigned} /></td>
                                <td className="px-6 py-4 text-center"><Badge color="red" value={row.stuck} /></td>
                                <td className="px-6 py-4 text-center"><Badge color="green" value={row.completed} /></td>
                                <td className="px-6 py-4 text-center"><Badge color="gray" value={row.days} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-between items-center mt-4">

                <p className="text-sm text-gray-500">
                    Showing {start + 1} to {Math.min(start + pageSize, sorted.length)} of {sorted.length}

                </p>

                <div className="flex gap-1">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(p => Math.max(1, p - 1))}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                    >
                        ‹
                    </button>

                    {Array.from({ length: totalPages }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setPage(i + 1)}
                            className={`px-3 py-1 rounded cursor-pointer ${page === i + 1
                                ? "bg-[#087BB3] text-white"
                                : "bg-gray-200"
                                }`}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button
                        disabled={page === totalPages || totalPages === 0}
                        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                        className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                    >
                        ›
                    </button>

                </div>
            </div>
        </div>
    );
}

