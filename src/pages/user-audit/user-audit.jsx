import { useState, useMemo } from "react";
import { SearchIcon } from "../../assets/icon";
import SinglePieCard from "../../components/cards/single-pie";
import FilterHeader from "../../components/main-component/main-comonent";
import { ProfileIcon } from "../../assets/images";

const employees = [
    {
        id: "EMP-0234",
        name: "Olivia Mason",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0172",
        name: "Mahmoud Tayem",
        image: ProfileIcon,
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0192",
        name: "Maria Hart",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0233",
        name: "Laura Nilson",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0173",
        name: "John Doe",
        image: ProfileIcon,
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0193",
        name: "Navendhu Oray",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0232",
        name: "Maria Hart",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0174",
        name: "Mahmoud Tayem",
        image: ProfileIcon,
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0194",
        name: "Maria Hart",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0237",
        name: "Olivia Mason",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0175",
        name: "Mahmoud Tayem",
        image: ProfileIcon,
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0195",
        name: "Olivia Mason",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0236",
        name: "Olivia Mason",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0176",
        name: "Olivia Mason",
        image: ProfileIcon,
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0196",
        name: "Maria Hart",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
    {
        id: "EMP-0235",
        name: "Mahmoud Tayem",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0178",
        name: "Navendhu Oray",
        image: ProfileIcon,
        role: "UI/UX Lead",
        region: "CN-West",
        clinic: "My Dental Home",
        logins: 81,
        tickets: 3,
        lastLogin: "27 Oct 2023",
    },
    {
        id: "EMP-0199",
        name: "Maria Hart",
        image: ProfileIcon,
        role: "Regional Manager",
        region: "AB-North",
        clinic: "67th Street Dental",
        logins: 31,
        tickets: 4,
        lastLogin: "26 Oct 2023",
    },
];

const CARD_DATA = [
    {
        id: 1,
        title: "Login by Region",
        centerText: {
            value: 240,
            label: "Logins",
        },
        data: [
            { name: "Provider", value: 17, color: "#2871FF" },
            { name: "Practice Manager", value: 15, color: "#FF9502" },
            { name: "Leadership", value: 16, color: "#64CB98" },
            { name: "Support Team", value: 9, color: "#34B3F1" },
        ],
    },
    {
        id: 2,
        title: "Login by Province",
        centerText: {
            value: 240,
            label: "Logins",
        },
        data: [
            { name: "22 Logins", value: 17, color: "#2871FF" },
            { name: "24 Logins", value: 15, color: "#FF9502" },
            { name: "26 Logins", value: 16, color: "#64CB98" },
            { name: "27 Logins", value: 9, color: "#34B3F1" },
        ],
    },];


const USERAUDIT_BOX = [
    {
        id: 1,
        description: 'Users',
        heading: '80',
        para: 'Users',
    },
    {
        id: 2,
        description: 'Logins',
        heading: '3950',
        para: 'Logins',
    },
    {
        id: 3,
        description: 'Avg/User',
        heading: '49.7',
        para: 'Users',
    },
    {
        id: 4,
        description: 'Leave Request',
        heading: '221',
        para: 'Request',
    },
]

const DROPDOWN_BUTTON = [
    { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] grow" },
    { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 grow" },
    { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] grow" },
    { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] grow" },
    { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 grow" },
];

export default function UserAudit() {
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");

    const perPage = 6;

    const filtered = useMemo(() => {
        return employees.filter(
            (e) =>
                e.name.toLowerCase().includes(search.toLowerCase()) ||
                e.id.toLowerCase().includes(search.toLowerCase()) ||
                e.role.toLowerCase().includes(search.toLowerCase())
        );
    }, [search]);

    const totalPages = Math.ceil(filtered.length / perPage);
    const data = filtered.slice((page - 1) * perPage, page * perPage);

    const toggleAll = (e) => {
        if (e.target.checked) {
            setSelected(data.map(emp => emp.id));
        } else {
            setSelected([]);
        }
    };

    const toggleOne = (id) => {
        setSelected(prev =>
            prev.includes(id)
                ? prev.filter(x => x !== id)
                : [...prev, id]
        );
    };



    return (
        <div className="min-h-screen">
            <FilterHeader
                title="Users Audit"
                dropdowns={DROPDOWN_BUTTON}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 mb-4">
                {USERAUDIT_BOX.map(card =>
                    <div className="px-4 py-4 bg-white border border-[#E2E8F0] rounded-2xl " key={card.id}>
                        <p className="text-sm font-medium text-[#757575] mb-4">{card.description}</p>
                        <div className="flex items-center gap-1">
                            <h2 className="text-[#0F172B] font-semibold text-3xl">{card.heading}</h2>
                            <span className="text-xs font-medium mt-3 text-[#757575]">{card.para}</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-2xl  shadow p-8">

                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-lg text-[#17181A] font-bold">Employee List</h2>

                    <div className="flex items-center max-w-56 shadow-xs  w-full gap-2 bg-[#F7F7F7] rounded-lg px-2.5 py-2">
                        <span><SearchIcon /></span>
                        <input
                            type="text"
                            placeholder="Search employee"
                            value={search}
                            onChange={(e) => {
                                setSearch(e.target.value);
                                setPage(1);
                            }}
                            className="text-xs text-[#63716E] font-normal outline-none"
                        />
                    </div>

                </div>

                <div className="overflow-x-auto">
                    <table className="min-w-275 w-full text-sm whitespace-nowrap">
                        <thead className="rounded-xl bg-[#F7F7F7]">
                            <tr>
                                <th className="px-4 py-3">
                                    <input
                                        type="checkbox"
                                        checked={data.length > 0 && selected.length === data.length}
                                        onChange={toggleAll}
                                    />
                                </th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Employee ID</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Name</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Role</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Region</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Clinic</th>
                                <th className="px-6 py-3 text-[#63716E] text-left"># Logins</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Tickets</th>
                                <th className="px-6 py-3 text-[#63716E] text-left">Last Login</th>
                            </tr>
                        </thead>

                        <tbody>
                            {data.map((emp) => (
                                <tr key={emp.id} className="border-b border-[#E5E6E6] hover:bg-[#087BB30D]">
                                    <td className="px-4 py-4">
                                        <input
                                            type="checkbox"
                                            checked={selected.includes(emp.id)}
                                            onChange={() => toggleOne(emp.id)}
                                        />
                                    </td>
                                    <td className="px-6 py-4 text-[#333]">{emp.id}</td>
                                    <td className="flex items-center gap-3 px-6 py-4">
                                        <img
                                            src={ProfileIcon}
                                            className="w-8 h-8 rounded-full"
                                        />
                                        <span className="font-medium text-[#333]">{emp.name}</span>
                                    </td>
                                    <td className="px-6 py-4 text-[#333]">{emp.role}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.region}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.clinic}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.logins}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.tickets}</td>
                                    <td className="px-6 py-4 text-[#333]">{emp.lastLogin}</td>
                                </tr>
                            ))}

                            {data.length === 0 && (
                                <tr>
                                    <td colSpan="9" className="text-center py-6 text-gray-400">
                                        No result found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>

                <div className="flex justify-between items-center mt-4">
                    <p className="text-sm text-gray-500">
                        Showing {(page - 1) * perPage + 1} to{" "}
                        {Math.min(page * perPage, filtered.length)} of{" "}
                        {filtered.length}
                    </p>

                    <div className="flex gap-1">
                        <button
                            disabled={page === 1}
                            onClick={() => setPage((p) => p - 1)}
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
                            onClick={() => setPage((p) => p + 1)}
                            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50 cursor-pointer"
                        >
                            ›
                        </button>
                    </div>
                </div>
            </div>

            <div className="pt-4 grid sm:grid-cols-2  gap-6">
                {CARD_DATA.map(card => (
                    <SinglePieCard
                        key={card.id}
                        title={card.title}
                        data={card.data}
                        centerText={card.centerText}

                    />
                ))}
            </div>
        </div>
    );
}