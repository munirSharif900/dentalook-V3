import { useState, useEffect } from "react";
import ChartToggleCard from "../../components/cards/analytics-card";
import TicketsByStageChart from "../../components/cards/analytics-2-card";
import FilterHeader from "../../components/main-component/main-comonent";

export default function Analytics() {
  
     const DROPDOWN_BUTTONS = [
        { id: 1, title: "Province", options: ["Punjab", "Sindh", "KPK", "Balochistan"], extraClass: "sm:w-[100px] grow" },
        { id: 2, title: "Region", options: ["Region 1", "Region 2", "Region 3", "Region 4"], extraClass: "sm:w-23 grow" },
        { id: 3, title: "Clinics", options: ["Clinic 1", "Clinic 2", "Clinic 3", "Clinic 4"], extraClass: "sm:w-[92px] grow" },
        { id: 4, title: "Department", options: ["Department 1", "Department 2", "Department 3", "Department 4"], extraClass: "sm:w-[122px] grow" },
        { id: 5, title: "Users", options: ["User 1", "User 2", "User 3", "User 4"], extraClass: "sm:w-22 grow" },
    ];

    const CARDS_DATA = [
        {
            id: 1,
            title: "All Tickets",
            centerText: {
                value: 800,
                label: "Resolved Tickets",
            },
            data: [
                { name: "Resolved Tickets", value: 17, color: "#339D5C" },
                { name: "Active Tickets", value: 30, color: "#FF5C00" },
                { name: "Received Tickets", value: 5, color: "#2F80ED" },
                { name: "Stuck Tickets", value: 3, color: "#EB5757" },
            ],
        },
        {
            id: 2,
            title: "Tickets by Department",
             centerText: {
                value:66 ,
                label: "Total Tickets",
            },
            data: [
                { name: "HR (50 75.8%)", value:50 , color: "#EB5757" },
                { name: "IT (12 18.2%) ", value: 12, color: "#FF9502" },
                { name: "Payroll (4 6.1%)", value: 4, color: "#2F80ED" },
            ],
        },
         {
            id: 3,
            title: "Resolution Time",
             centerText: {
                value: 2486,
                label: "Resolved Tickets",
            },
            data: [
                { name: "Below Average (84.6%)", value: 84, color: "#B3D2A4" },
                { name: "Above Average (15.4%)", value: 15, color: "#D69992" },
              
            ],
        },
         {
            id: 4,
            title: "Resolution Time",
             centerText: {
                value: 2486,
                label: "Resolved Tickets",
            },
            data: [
                { name: "Below Average (84.6%)", value: 84, color: "#B3D2A4" },
                { name: "Above Average (15.4%)", value: 15, color: "#D69992" },
              
            ],
        },
         {
            id: 5,
            title: "All Tickets",
            centerText: {
                value: 800,
                label: "Resolved Tickets",
            },
            data: [
                { name: "Resolved Tickets", value: 17, color: "#339D5C" },
                { name: "Active Tickets", value: 30, color: "#FF5C00" },
                { name: "Received Tickets", value: 5, color: "#2F80ED" },
                { name: "Stuck Tickets", value: 3, color: "#EB5757" },
            ],
        },
         {
            id: 6,
            title: "All Tickets",
            centerText: {
                value: 0,
                label: "Resolved Tickets",
            },
            data: [
                { value: 0, color: "rgba(231, 231, 231, 0.50)" },
                
            ],
        },
    ];

    const TICKETS_CHARTS = [
        {
            id: 1,
            title: "Tickets by Stage",
            tabs: ["Received", "Completed", "Assigned", "Stuck"],

            xAxis: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

            series: [
                {
                    name: "Received",
                    color: "#FF6A00",
                    data: [45, 55, 60, 60, 55, 48,40,50,58,42,53,60],
                },
                {
                    name: "Completed",
                    color: "#2F9E44",
                    data: [32, 36, 38, 38, 36, 34,30,32,34,36,38,40],
                },
            ],

            barData: [
                { name: "Resolved", value: 17, color: "#339D5C" },
                { name: "Active", value: 30, color: "#FF5C00" },
                { name: "Received", value: 5, color: "#2F80ED" },
                { name: "Stuck", value: 3, color: "#EB5757" },

            ],
        },
         {
            id: 2,
            title: "Tickets by Stage",
            tabs: ["Received", "Completed", "Assigned", "Stuck"],

            xAxis: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul","Aug","Sep","Oct","Nov","Dec"],

            series: [
                {
                    name: "Received",
                    color: "#FF6A00",
                    data: [0, 0, 0, 0, 0, 0,0,0,0,0,0,0],
                },
                {
                    name: "Completed",
                    color: "#2F9E44",
                    data: [0, 0, 0, 0, 0, 0,0,0,0,0,0,0],
                },
            ],

            barData: [
                { name: "Resolved", value: 0, color: "#339D5C" },
                { name: "Active", value: 0, color: "#FF5C00" },
                { name: "Received", value: 0, color: "#2F80ED" },
                { name: "Stuck", value: 0, color: "#EB5757" },

            ],
        },
    ];


    return (
        <section>    
            <FilterHeader
                title="Analytics"
                subtitle="Monitor ticket volume, progress"
                dropdowns={DROPDOWN_BUTTONS}
            />

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {CARDS_DATA.map(card => (
                    <ChartToggleCard
                        key={card.id}
                        title={card.title}
                        data={card.data}
                        centerText={card.centerText}
                        defaultView="pie"
                    />
                ))}
            </div>

            <div className="pt-4 grid grid-cols-1 gap-6">
                {TICKETS_CHARTS.map(item => (
                    <TicketsByStageChart
                        key={item.id}
                        title={item.title}
                        tabs={item.tabs}
                        xAxis={item.xAxis}
                        series={item.series}
                        barData={item.barData}
                    />
                ))}
            </div>
        </section >
    );
}
