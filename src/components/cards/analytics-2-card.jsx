
import ReactECharts from "echarts-for-react";
import { useState } from "react";
import { getBarOptions } from "./bar";

export default function TicketsByStageChart({
    title,
    tabs,
    xAxis,
    series,
    barData,
    defaultView = "bar",
}) {
    const [view, setView] = useState(defaultView);
    const [activeTab, setActiveTab] = useState(tabs[0]);

    const lineOptions = {
        tooltip: { trigger: "axis" },
        grid: { left: "4%", right: "4%", bottom: "8%", containLabel: true },

        xAxis: {
            type: "category",
            data: xAxis,
            boundaryGap: false,
            axisLine: { show: false },
            axisTick: { show: false },
        },

        yAxis: {
            type: "value",
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { lineStyle: { color: "#E5E7EB" } },
        },

        series: series.map(item => ({
            name: item.name,
            type: "line",
            smooth: true,
            symbol: "circle",
            symbolSize: 8,
            data: item.data,
            lineStyle: { width: 3, color: item.color },
            itemStyle: {
                color: "#fff",
                borderWidth: 3,
                borderColor: item.color,
            },
        })),
    };

    return (
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
           
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold">{title}</h2>

                <div className="flex items-center gap-3">

                    <div className="hidden sm:flex flex-wrap">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`px-4 py-1 border border-[#E2E8F0] text-[#809FB8] text-sm whitespace-nowrap cursor-pointer`}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    <div className="flex border border-[#EFEFEF] rounded-lg  overflow-hidden">
                        <button
                            onClick={() => setView("bar")}
                            className={`px-4 py-1 cursor-pointer ${view === "bar"
                                    ? "bg-[#087BB3] text-white"
                                    : "text-[#64748B]"
                                }`}
                        >
                            Bar
                        </button>

                        <button
                            onClick={() => setView("line")}
                            className={`px-4 py-1 cursor-pointer ${view === "line"
                                    ? "bg-[#087BB3] text-white"
                                    : "text-[#64748B]"
                                }`}
                        >
                            Line
                        </button>
                    </div>
                </div>
            </div>

            <ReactECharts
                key={view}
                option={
                    view === "bar"
                        ? getBarOptions(barData)
                        : lineOptions
                }
                style={{ height: 320 }}
            />
        </div>
    );
}
