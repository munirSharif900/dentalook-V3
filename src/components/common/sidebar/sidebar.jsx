import { useState } from "react"
import { NavLink } from "react-router-dom"
import {
    AnalyticsIcon,
    DashboardIcon,
    LeaderboardIcon,
    SettingsIcon,
    TicketsIcon,
    UserAuditIcon
} from "../../../assets/icon"
import { ChevronRight } from "lucide-react";

const Aside_LINKS = [
    { id: 1, text: "Tickets", path: "/", Icon: TicketsIcon },
    { id: 2, text: "Dashboard", path: "/dashboard", Icon: DashboardIcon },
    { id: 3, text: "Analytics", path: "/analytics", Icon: AnalyticsIcon },
    { id: 4, text: "User Audit", path: "/user-audit", Icon: UserAuditIcon },
    { id: 5, text: "Leaderboard", path: "/leaderboard", Icon: LeaderboardIcon },
    { id: 6, text: "Settings", path: "/setting", Icon: SettingsIcon },
];

export default function Sidebar({
    mobileOpen = false,
    onMobileClose = () => { },
    collapsed = false,
    setCollapsed = () => { },
}) {

    return (
        <aside
            className={`
                              fixed md:static z-99
                              top-0 left-0 h-full bg-white
                              transition-transform md:transition-all duration-300
                              ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
                              md:translate-x-0
                              ${collapsed ? "md:w-22" : "md:w-64"}
                              w-64
                           `}>
            <button
                onClick={() => {
                    if (window.innerWidth < 768) {
                        onMobileClose()
                    } else {
                        setCollapsed(!collapsed)
                    }
                }}
                className={`
                               absolute top-6 transition-all duration-300
                               w-6 h-6 bg-white border border-gray-300 rounded-full
                               items-center justify-center shadow cursor-pointer
                               hidden md:flex -right-3
                               ${mobileOpen ? "flex md:flex" : ""}  `}
                style={{
                    display: mobileOpen ? "flex" : undefined
                }}
            >
                <ChevronRight
                    className={`w-6 h-6 transition-transform duration-300 ${collapsed ? "rotate-180" : "rotate-0"
                        }`} />
            </button>

            <nav className=" p-4">
                <ul>
                    {Aside_LINKS.map(link => (
                        <li key={link.id} className="list-none pb-2">
                            <NavLink
                                to={link.path}
                                onClick={() => {
                                    if (window.innerWidth < 768) {
                                        onMobileClose();
                                    }
                                }}
                                className={({ isActive }) =>
                                    `group flex items-center gap-3 px-4 py-3 rounded-lg transition-all
                                      ${isActive
                                        ? "bg-[#087BB3] text-white"
                                        : "text-[#63716E] hover:bg-gray-200 hover:text-gray-900"
                                    }`
                                }
                            >

                              <span><link.Icon className="w-4 h-4 text-current shrink-0" /></span>

                                <span
                                    className={`
                                        transition-all duration-300 whitespace-nowrap text-sm font-medium
                                         ${collapsed
                                            ? "opacity-0 w-0 overflow-hidden"
                                            : "opacity-100 w-auto"}
                                        `}
                                >
                                    {link.text}
                                </span>
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </aside>

    )
}
