import { ArtBoardIcon1, ArtBoardIcon2, ArtBoardIcon3, ArtBoardIcon4, ArtBoardIcon5, } from "../../assets/icon";

export default function TicketReveiw() {

    return (
        <div className="py-8">
            <div className="mb-8">
                <h2 className="text-[11px] font-medium text-[#63716E] pb-4">How would you rate the experience?</h2>
                <div className="flex items-center justify-between">
                    <ArtBoardIcon1 />
                    <ArtBoardIcon2/>
                    <ArtBoardIcon3/>
                    <ArtBoardIcon4/>
                    <ArtBoardIcon5/>     
                </div>
            </div>
            <div>
                <h3 className="text-[11px] font-medium text-[#63716E] pb-1.5">Please provide details on your experience with this ticket</h3>
                <input type="text" className="bg-[#F7F7F7] border border-[#D5D7DA] px-3 py-2 rounded-lg h-9 shadow-xs text-xs font-normal text-black w-full" placeholder="Description" name="" id="" />
            </div>
        </div>
    )
}