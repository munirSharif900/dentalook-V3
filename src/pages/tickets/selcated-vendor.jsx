import { FileIcon, HeaderIcon } from "../../assets/icon";

export default function SelcatedVendor({ addedItems = [] }) {
    return (
        <div className="mb-8 rounded-lg">
            <p className="max-w-140 text-xs font-medium text-[#63716E]"> <span className="text-[#1E1E1E] font-semibold">Please note:</span> If a vendor's quotation includes multiple items or units in a single document, each item must be entered as a separate line below. You may attach the same quotation PDF for each entry.</p>
            <table className="w-full text-sm table-fixed border-collapse">
                <thead className="text-[#63716E] ">
                    <tr>
                        <th className="text-left flex items-center gap-1 px-4 py-3.5">Preferred
                            <HeaderIcon />
                        </th>
                        <th className="text-left px-4 py-3.5">Category</th>
                        <th className="text-left px-4 py-3.5">Item</th>
                        <th className="text-left px-4 py-3.5">Quotation</th>
                        <th className="text-left px-4 py-3.5">Vendor</th>
                        <th className="text-left px-4 py-3.5">Price</th>
                    </tr>
                </thead>

                <tbody className="">
                    {Array.from({ length: 4 }, (_, index) => {
                        const item = addedItems[index];
                        return (
                            <tr key={index} className="border border-[#F2F2F2] hover:bg-gray-50">
                                <td className="px-4 py-3">
                                    <input className="w-3.5 h-3.5 focus:ring-[#087BB3] focus:border-[#087BB3] cursor-pointer" name="preferred" type="radio" />
                                </td>
                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs">{item?.subheading || ''}</td>
                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs">{item?.hedding || ''}</td>
                                <td className="px-4 py-3 flex gap-2 cursor-pointer">
                                    <FileIcon />
                                    <input type="file" className="text-xs w-full cursor-pointer" />
                                </td>
                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs">{item?.text || ''}</td>
                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs font-medium">{item?.price || ''}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    )
}