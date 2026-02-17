import { useState } from "react";
import RepairModel from "./Repair-model";
import AdditionModel from "./addition-model";
import ReplacementModel from "./replacement";

export default function PopupWithTabs({ open, onClose }) {
    const [activeTab, setActiveTab] = useState(0);

    if (!open) return null;

    const tabs = [
        { heading:"Repair", label: "Repair to an existing item", content: <RepairModel /> },
        { heading:"Replacement", label: "Replacement of an existing item", content: <ReplacementModel /> },
        { heading:"Addition", label: "Addition to the clinic", content: <AdditionModel /> },
    ];

    return (
        <div className="fixed z-100 inset-0 flex items-center justify-center bg-black/40">
            <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl max-h-[90vh] p-4">

                {/* Header */}
                <div className="flex justify-between items-center pb-2">
                    <h2 className="text-lg font-semibold">NEW CAPEX Request</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 cursor-pointer hover:text-black text-xl"
                    >
                        x
                    </button>
                </div>

                {/* Tab Buttons */}
                <div className="grid grid-cols-3 gap-2 mt-3">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveTab(index)}
                            className={`px-3 py-2 rounded-md text-start transition-all
                                ${activeTab === index
                                    ? "bg-[rgba(8,123,179,0.05)] border border-[#087BB3] text-[#087BB3]"
                                    : "bg-[#F7F7F7] border border-transparent hover:bg-gray-200"}
                            `}
                        >
                            <h3 className="font-medium">{tab.heading}</h3>
                            <p className="text-xs text-gray-600">{tab.label}</p>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="mt-4 p-3 ">
                    {tabs[activeTab].content}
                </div>

            </div>
        </div>
    );
}
