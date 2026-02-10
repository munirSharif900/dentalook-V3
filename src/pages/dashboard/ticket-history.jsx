import { ProfileIcon } from "../../assets/images"

export default function TicketHistory() {
    const TCKETS_HISTORY = [
        {
            id: 1,
            text: 'Ticket Created',
            description: 'Surya Rana | Aug 11, 2025 at 02:22 PM'
        },
        {
            id: 2,
            text: 'Ticket Moved to ',
            button: 'Received',
            description: 'Surya Rana | Aug 11, 2025 at 02:22 PM'
        },
        {
            id: 3,
            text: 'Ticket Moved to ',
            button: 'Assigned - In Progress',
            description: 'Surya Rana | Aug 11, 2025 at 02:22 PM'
        },
        {
            id: 4,
            text: 'Ticket Moved to ',
            button: 'Stuck',
            description: 'Surya Rana | Aug 11, 2025 at 02:22 PM'
        },
        {
            id: 5,
            text: 'Ticket Moved to ',
            button: 'Complete',
            description: 'Surya Rana | Aug 11, 2025 at 02:22 PM'
        },
    ]
    return (
        <div className="flex flex-col gap-8">
            {TCKETS_HISTORY.map((card) => (
                <div key={card.id}>
                    <div className="flex items-center gap-4 justify-between">
                        <h2 className="text-[#475569] text-sm font-semibold pb-2">
                            {card.text}
                        </h2>

                        {card.id !== 1 && (
                            <span
                                className={`text-[10px] px-3 py-1 font-semibold rounded-2xl
                                           ${card.button === "Complete"
                                        ? "text-[#339D5C] border border-[#339D5C] bg-green-50"
                                        : card.button === "Stuck"
                                            ? "text-[#FF5C00] border border-[#EB5757] bg-red-50"
                                            : card.button === "Assigned - In Progress"
                                                ? "text-[#FF5C00] border border-[#FF5C00] bg-yellow-50"
                                                : "text-[#087BB3] border border-[#087BB3] bg-blue-50"
                                    }`}
                            >
                                {card.button}
                            </span>
                        )}
                    </div>
                    <div className="flex items-center gap-1">
                        <img
                            src={ProfileIcon}
                            className="w-6 h-6 rounded-full"
                        />
                        <p className="text-xs font-normal text-[#5A5A5A]">
                            {card.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    )
}