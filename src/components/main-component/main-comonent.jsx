import { useEffect, useState } from "react";
import { addDays, subDays, startOfMonth, endOfMonth } from "date-fns";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { CalenderIcon, DownArrowIcon } from "../../assets/icon";
import Button from "../button/button";

export default function FilterHeader({ title, subtitle, dropdowns }) {
    const [state, setState] = useState([
        {
            startDate: subDays(new Date(), 29),
            endDate: new Date(),
            key: "selection",
        },
    ]);

    const [showPicker, setShowPicker] = useState(false);

    const formatDateRange = (start, end) => {
        return `${start.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })} - ${end.toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
        })}`;
    };

    const DROPDOWN_BUTTON = [
        { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:max-w-[97px] grow" },
        { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:max-w-22 grow" },
        { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:max-w-[84px] grow" },
        { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:max-w-[122px] grow" },
        { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:max-w-20 grow" },
    ];
    const [dropdownState, setDropdownState] = useState(
        DROPDOWN_BUTTON.reduce((acc, cur) => {
            acc[cur.id] = { open: false, search: "", selected: [] };
            return acc;
        }, {})
    );

    const toggleOpen = (id) => {
        setDropdownState(prev => {
            const updated = {};

            Object.keys(prev).forEach(key => {
                updated[key] = {
                    ...prev[key],
                    open: Number(key) === id ? !prev[key].open : false,
                };
            });

            return updated;
        });
    };




    const setSearch = (id, value) => {
        setDropdownState((prev) => ({
            ...prev,
            [id]: { ...prev[id], search: value },
        }));
    };

    const setSelected = (id, value) => {
        setDropdownState(prev => {
            const selected = prev[id].selected;

            return {
                ...prev,
                [id]: {
                    ...prev[id],
                    selected: selected.includes(value)
                        ? selected.filter(v => v !== value)
                        : [...selected, value],
                },
            };
        });
    };
    const getButtonLabel = (state, title) => {
        if (state.selected.length === 0) return title;
        if (state.selected.length === 1) return state.selected[0];
        return `${state.selected[0]}, +${state.selected.length - 1}`;
    };

    const isCompact = true;

    return (
        <div className={` z-50 pb-4  ${isCompact ? "sm:sticky sm:top-0 pt-0" : "pt-2 sm:pt-4"}`}>
            <div className="ff_roboto px-8 flex flex-col sm:flex-row justify-between items-start gap-4 py-8 bg-white rounded-2xl border border-[#E2E8F0]">
                <div className="md:min-w-40 lg:min-w-71 mb-4">
                    <h2 className="ff_roboto text-2xl font-bold">{title}</h2>
                    <p className="text-sm text-[#757575]">{subtitle}</p>
                </div>
                <div className="grid grid-cols-2 sm:flex items-center sm:justify-end flex-wrap gap-2">
                    {dropdowns.map(({ id, title, options, extraClass }) => {
                        const state = dropdownState[id];

                        return (
                            <div key={id} className="relative">

                                <button
                                    onClick={() => toggleOpen(id)}
                                    className={`
                                          inline-flex items-center justify-between gap-2
                                           px-3 py-2 border border-[#E0E0E0] rounded-3xl
                                           text-sm text-gray-500 bg-white cursor-pointer
                                           w-full
                                            ${extraClass}
                                        `}

                                >
                                    <span
                                        className={`
                                                truncate text-left
                                        ${state.selected.length > 0
                                                ? "text-[#0A0E1A] font-medium "
                                                : "text-gray-500 w-full h-full"}
                                                  `}
                                    >
                                        {getButtonLabel(state, title)}
                                    </span>

                                    <span>  <DownArrowIcon className="shrink-0 w-4 h-4" /></span>
                                </button>

                                {state.open && (
                                    <div
                                        className="absolute right-0 left-auto w-32 z-50 mt-1 p-2 shadow-sm border border-[#E0E0E0] rounded-xl bg-white"

                                    >
                                        <input
                                            className="w-full px-3 py-2 text-xs border border-gray-300 rounded focus:outline-none focus:border-[#3CB097]"
                                            placeholder="Search options"
                                            value={state.search}
                                            onChange={(e) => setSearch(id, e.target.value)}
                                        />

                                        {options
                                            .filter((d) => d.toLowerCase().includes(state.search.toLowerCase()))
                                            .map((d, i) => (
                                                <label
                                                    key={i}
                                                    className="p-1.5 flex items-center gap-1.5 rounded-lg hover:bg-gray-200 cursor-pointer text-xs"
                                                >
                                                    <input
                                                        type="checkbox"
                                                        checked={state.selected.includes(d)}
                                                        onChange={() => setSelected(id, d)}
                                                        className="w-4 h-4"
                                                    />
                                                    {d}
                                                </label>
                                            ))}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                    <div className="relative">
                        <div
                            className="flex items-center justify- gap-2 bg-white cursor-pointer px-3 py-2 border border-[#E0E0E0] rounded-3xl w-full"
                            onClick={() => setShowPicker(!showPicker)}
                        >
                            <span><CalenderIcon /></span>
                            <span className="text-sm font-medium text-gray-500">{formatDateRange(state[0].startDate, state[0].endDate)}</span>
                            <span> <DownArrowIcon /></span>
                        </div>

                        {showPicker && (
                            <div>
                                <DateRangePicker
                                    onChange={(item) => setState([item.selection])}
                                    showSelectionPreview={true}
                                    moveRangeOnFirstSelection={false}
                                    months={1}
                                    ranges={state}
                                    direction="horizontal"
                                    rangeColors={["#087BB3"]}
                                />
                                <div className="flex justify-end mt-2">
                                    <Button className="px-2 py-1! bg-[#087BB3] text-white rounded hover:bg-[#087BB3]" text=" Apply" onClick={() => setShowPicker(false)} />
                                </div>
                            </div>
                        )}
                    </div>
                    <Button className="px-1 text-sm text-[#1976D2] hover:bg-blue-50 whitespace-nowrap" text="Clear Filters" />
                </div>
            </div>
        </div>
    )
}