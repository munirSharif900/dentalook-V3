import { useRef, useState } from "react";
// import { ButtonIcon, ButtonnIcon, InputIcon, OpenIcon, ResolvedIcon, TotalIcon } from "../../assets/icon";
import TableComponents from "./table";
import TabButton from "./button";
import TicketDetails from "./ticket-detail";
import TicketHistory from "./ticket-history";
import TicketReveiw from "./ticket-review";
import FilterHeader from "../../components/main-component/main-comonent";
import { ArrowAssignedIcon, ArrowCompletedIcon, ArrowReceivedIcon, ArrowStuckIcon, AttachFileIcon, SendMessageIcon, StarsIcon, } from "../../assets/icon";
import TicketModal from "./dashboard-prop";
const DASHBOARD_CHART_OPTIONS = [
    {
        id: 1,
        text: "All Tickets",
        value: 52,
        data: [
            {
                name: "Dashboard UI",
                date: "Aug 15",
                rm: "Mandi",
                dlpm: "Aspire",
                dept: "HR",
                assignee: "+1",
                deadline: "15 July 2025",
                days: "12 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
        ],
    },
    {
        id: 2,
        text: "Received Tickets",

        value: 3,
        data: [
            {
                icon: ArrowReceivedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                icon: ArrowReceivedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                icon: ArrowReceivedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                icon: ArrowReceivedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                icon: ArrowReceivedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
        ],
    },
    {
        id: 3,
        text: "Assigned Tickets",
        value: 5,
        data: [
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            }, {
                icon: ArrowAssignedIcon,
                name: "Admin Panel",
                date: "Aug 14",
                rm: "Ali",
                dlpm: "John",
                dept: "IT",
                assignee: "+2",
                deadline: "18 July 2025",
                days: "8 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
            {
                icon: ArrowAssignedIcon,
                name: "Payment Fix",
                date: "Aug 08",
                rm: "Hassan",
                dlpm: "Mark",
                dept: "Hr",
                assignee: "+3",
                deadline: "10 July 2025",
                days: "2 Days",
            },
        ],
    },
    {
        id: 4,
        text: "Stuck Tickets",
        value: 7,
        data: [
            {
                icon: ArrowStuckIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowStuckIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowStuckIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
        ],
    },
    {
        id: 5,
        text: "Completed Tickets",
        value: 2,
        data: [
            {
                icon: ArrowCompletedIcon,
                name: "Report Issue",
                date: "Aug 01",
                rm: "Bilal",
                dlpm: "Sam",
                dept: "Ops",
                assignee: "+1",
                deadline: "05 July 2025",
                days: "1 Day",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
            {
                icon: ArrowCompletedIcon,
                name: "HR Portal",
                date: "Aug 12",
                rm: "Nida",
                dlpm: "Zara",
                dept: "HR",
                assignee: "+2",
                deadline: "22 July 2025",
                days: "9 Days",
            },
        ],
    },
];
export default function Dashboard() {
    const [selectedTitle, setSelectedTitle] = useState("");
    const [open, setOpen] = useState(false);

    const [activeId, setActiveId] = useState(1);

    const DASHBOARD_BOX = [
        { id: 1, icon: ArrowReceivedIcon, text: 'Received Tickets', title: '5', span: 'Tickets' },
        { id: 2, icon: ArrowAssignedIcon, text: 'Assigned Tickets', title: '30', span: 'Tickets' },
        { id: 3, icon: ArrowStuckIcon, text: 'Stuck Tickets', title: '3', span: 'Tickets' },
        { id: 4, icon: ArrowCompletedIcon, text: 'Completed Tickets', title: '17', span: 'Tickets' },
    ];

    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = () => {
        if (!input.trim()) return;

        setMessages([
            ...messages,
            {
                id: Date.now(),
                text: input,
                sender: "me",
                name: "Nicole Li",
                time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                avatar: "https://i.pravatar.cc/40?img=2"
            }
        ]);
        setInput("");
    };

    const fileRef = useRef(null);
    const openFilePicker = () => {
        fileRef.current.click();
    };
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        console.log("Selected file:", file);
    };

    const [activeTab, setActiveTab] = useState("details");

    const badgeColors = {
        1: "bg-[#000]",
        2: "bg-[#2F80ED]",
        3: "bg-[#FF5C00]",
        4: "bg-[#800000]",
        5: "bg-[#339D5C]",
    };

    const getBadgeColor = (id) => {
        switch (id) {
            case 2:
                return "bg-[#2F80ED]";
            case 3:
                return "bg-[#FF5C00]";
            case 4:
                return "bg-[#800000]";
            case 5:
                return "bg-[#339D5C]";
        }
    };

    const DROPDOWN_BUTTON = [
        { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] grow" },
        { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 grow" },
        { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] grow" },
        { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] grow" },
        { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 grow" },
    ];
    return (
        <section>
            <div>
                <FilterHeader
                    title="Service Desk Dashboard"
                    subtitle="Monitor ticket volume, progress, and performance"
                    dropdowns={DROPDOWN_BUTTON}
                />

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-8">
                    {DASHBOARD_BOX.map(card =>
                        <div className="px-4 py-4 bg-white rounded-2xl border border-[#E2E8F0]" key={card.id}>
                            <div className="flex items-center gap-2 pb-3">
                                <span><card.icon /></span>
                                <span className="text-[#757575] text-sm font-medium">{card.text}</span>
                            </div>
                            <div className="flex gap-1 items-center">
                                <h3 className="text-[#0F172B] text-3xl font-bold">{card.title}</h3>
                                <span className="text-[#757575] text-xs font-medium">{card.span}</span>
                            </div>
                        </div>
                    )}
                </div>

                <div className="px-4 py-2 bg-white rounded-2xl border border-[#E2E8F0] grid grid-cols-3 sm:grid-cols-5 gap-2">
                    {DASHBOARD_CHART_OPTIONS.map(card => (
                        <button
                            key={card.id}
                            onClick={() => setActiveId(card.id)}
                            className={`px-3 cursor-pointer py-2 flex items-center justify-center gap-4 rounded-xl
                            ${activeId === card.id ? "bg-white shadow-sm" : ""}`}>
                            <p className="text-sm font-medium">{card.text}</p>
                            <span
                                className={`text-white text-xs px-2 py-1 rounded-full
                                         ${badgeColors[card.id] || "bg-[#2F80ED]"}`}>
                                {card.data.length}
                            </span>
                        </button>
                    ))}
                </div>

                {activeId === 1 ? (
                    DASHBOARD_CHART_OPTIONS
                        .filter(item => item.id !== 1)
                        .map(section => (
                            <div key={section.id} className="mb-4 rounded-xl">
                                <TableComponents
                                    title={section.text}
                                    count={section.data.length}
                                    data={section.data}
                                    bgColor={
                                        section.id === 2 ? "#2F80ED" :
                                            section.id === 3 ? "#FF5C00" :
                                                section.id === 4 ? "#800000" :
                                                    "#339D5C"
                                    }
                                    onRowClick={(row) => {
                                        setSelectedTitle(row.title);
                                        setOpen(true);
                                    }}
                                />
                            </div>
                        ))
                ) : (
                    <TableComponents
                        title={DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.text}
                        count={DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.data.length}
                        data={DASHBOARD_CHART_OPTIONS.find(i => i.id === activeId)?.data}
                        bgColor={getBadgeColor(activeId)}
                        onRowClick={(row) => {
                            setSelectedTitle(row.title);
                            setOpen(true);
                        }}
                    />
                )}

                <TicketModal
                    open={open}
                    onClose={() => setOpen(false)}
                    activeTab={activeTab}
                    setActiveTab={setActiveTab}
                    messages={messages}
                    input={input}
                    setInput={setInput}
                    sendMessage={sendMessage}
                    openFilePicker={openFilePicker}
                    fileRef={fileRef}
                    handleFileChange={handleFileChange}
                    TicketDetails={TicketDetails}
                    TicketHistory={TicketHistory}
                    TicketReveiw={TicketReveiw}
                    TabButton={TabButton}
                    StarsIcon={StarsIcon}
                    AttachFileIcon={AttachFileIcon}
                    SendMessageIcon={SendMessageIcon}
                />

            </div>
        </section>
    );
}