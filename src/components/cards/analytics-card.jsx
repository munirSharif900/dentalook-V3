import { useState } from "react";
import ReactECharts from "echarts-for-react";

export default function ChartToggleCard({
    title,
    data,
    centerText,
    defaultView = "pie",
}) {
    const [view, setView] = useState(defaultView);

    const pieOptions = {
        tooltip: { trigger: "item" },
        

        graphic: centerText
            ? [
                {
                    type: "text",
                    left: "center",
                    top: "44%",
                    style: {
                        text: centerText.value,
                        fontSize: 26,
                        fontWeight: "bold",
                        fill: "#111",
                    },
                },
                {
                    type: "text",
                    left: "center",
                    top: "54%",
                    style: {
                        text: centerText.label,
                        fontSize: 13,
                        fill: "#64748B",
                    },
                },
            ]
            : [],

        series: [
            {
                type: "pie",
                radius: ["55%", "75%"],
                avoidLabelOverlap: true,

                
                label: {
                    show: true,
                    width: 90,
                    overflow: "hidden",
                    fontSize: 12,
                    color: "#475569",
                    formatter: "{b}\n({c})",
                },

                labelLine: {
                    length: 15,
                    length2: 10,
                    smooth: true,
                },

              
                emphasis: {
                    scale: true,
                    scaleSize: 8, 
                    itemStyle: {
                        shadowBlur: 15,
                        shadowOffsetX: 0,
                        shadowColor: "rgba(0,0,0,0.25)",
                    },

                    label: {
                        show: true,
                        fontSize: 14,        
                        fontWeight: "600",
                        color: "#000",      
                    },

                    labelLine: {
                        show: true,
                        length: 18,
                        length2: 12,
                    },
                },

                data: data.map(i => ({
                    value: i.value,
                    name: i.name,
                })),

                color: data.map(i => i.color),
            },
        ],
    };

    const barOptions = {
        tooltip: { trigger: "axis", axisPointer: { type: "shadow" } },

        grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
        },

        xAxis: {
            type: "category",
            data: data.map(i => i.name),
            axisLine: { show: false },
            axisTick: { show: false },
            axisLabel: {
                interval: 1,
                overflow: "hidden",
                width: 90,
            },
        },

        yAxis: {
            type: "value",
            axisLine: { show: false },
            axisTick: { show: false },
            splitLine: { show: false }, 
        },

        series: [
            {
                type: "bar",
                barWidth: "60%",
                label: {
                    show: true,
                    position: "top",
                    fontSize: 12,
                },
                data: data.map(i => ({
                    value: i.value,
                    itemStyle: { color: i.color },
                })),
            },
        ],
    };

    return (
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-6">
    
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold md:max-w-35">{title}</h2>

                <div className="flex max-w-31 border border-[#E2E8F0] rounded-lg overflow-hidden">
                    <button
                        onClick={() => setView("bar")}
                        className={`px-4 py-1 text-sm cursor-pointer ${view === "bar"
                            ? "bg-[#087BB3] text-white"
                            : "text-gray-500"
                            }`}
                    >
                        Bar
                    </button>
                    <button
                        onClick={() => setView("pie")}
                        className={`px-4 py-1 text-sm cursor-pointer ${view === "pie"
                            ? "bg-[#087BB3] text-white"
                            : "text-gray-500"
                            }`}
                    >
                        Pie
                    </button>
                </div>
            </div>

            <ReactECharts
                key={view}
                option={view === "pie" ? pieOptions : barOptions}
                style={{ height: 280 }}
            />
        </div>
    );
}
