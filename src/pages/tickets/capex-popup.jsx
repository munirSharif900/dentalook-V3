import { useState } from "react";
import * as Yup from "yup";
import { Link } from "lucide-react";
import { Formik } from "formik";
import SelcatedVendor from "./selcated-vendor";
import { SubmitImgage } from "../../assets/images";
import { HighIcon, LowIcon, MediumIcon, UrgencyIcon } from "../../assets/icon";
const REQUEST_TYPES = [
    {
        id: 1,
        name: "Repair",
        description: "Repair to an existing item",
        itemPlaceholder: "e.g. Dental chair repair",
        reasonPlaceholder: "Enter reason for repair request",
        impactPlaceholder: "Describe clinical impact of repair",
    },
    {
        id: 2,
        name: "Replacement",
        description: "Replacement of an existing item",
        itemPlaceholder: "e.g. Replace X-ray unit",
        reasonPlaceholder: "Enter reason for replacement request",
        impactPlaceholder: "Describe clinical impact of replacement",
    },
    {
        id: 3,
        name: "Addition",
        description: "Addition to the clinic",
        itemPlaceholder: "e.g. Add new ultrasound machine",
        reasonPlaceholder: "Enter reason for addition",
        impactPlaceholder: "Describe clinical impact of addition",
    },
];

export default function CAPEXPopup({ onClose, onOpenCatalog, onCloseCatalog, onOpenPreview }) {
    console.log("CAPEXPopup mounted, onOpenPreview=", onOpenPreview);

    const validationSchema = Yup.object({
        requestType: Yup.string().required("Request type is required"),
        item: Yup.string().required("Item is required"),
        reason: Yup.string().required("Reason is required"),
        urgency: Yup.string().required("Urgency is required"),
        impact: Yup.string().required("Impact is required"),
    });

    const [successOpen, setSuccessOpen] = useState(false);
    const [addedItems, setAddedItems] = useState([]);

    const handleAddItem = (item) => {
        setAddedItems(prev => [...prev, item]);
    };

    // remove item at specific index without affecting other rows
    const handleRemoveItem = (indexToRemove) => {
        setAddedItems(prev => prev.filter((_, i) => i !== indexToRemove));
    };

    const [activeTypeId, setActiveTypeId] = useState(3);
    const activeType = REQUEST_TYPES.find((type) => type.id === activeTypeId);


    const [selectedVendor, setSelectedVendor] = useState("");


    const [activeId, setActiveId] = useState(1);
    const URGENCY_BUTTONS = [
        { id: 1, icon: UrgencyIcon, text: "Immediate", },
        { id: 2, icon: HighIcon, text: "High (Within 1 week)", },
        { id: 3, icon: MediumIcon, text: "Medium (Within 2-3 weeks)", },
        { id: 4, icon: LowIcon, text: "Low (within 3 - 4 weeks)", },
    ]



    return (
        <div className="bg-white max-w-130 md:max-w-195 w-full rounded-2xl py-6">
            <div className="flex justify-between gap-5 items-center sticky top-0 z-20 px-6 rounded-2xl bg-white">
                <h2 className="text-lg font-semibold">NEW CAPEX Request</h2>
                <button onClick={onClose} className="text-gray-500 cursor-pointer">✕</button>
            </div>
            <Formik
                initialValues={{
                    requestType: 3,
                    item: "",
                    reason: "",
                    urgency: "",
                    impact: "",
                }}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                    console.log("Submitted Values:", values);

                    setSuccessOpen(true);

                    window._resetFormikForm = resetForm;

                }}
            >

                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleSubmit,
                    setFieldValue,
                }) => (

                    <form onSubmit={handleSubmit}>
                        <div className="bg-white rounded-2xl w-full mt-6">
                            <div className="overflow-y-auto h-[76vh] px-6">
                                <div className="mb-4 md:mb-8">
                                    <h3 className="text-sm font-medium text-[#63716E] mb-1.5">
                                        Is this addition, a repair, or a replacement?
                                    </h3>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                                        {REQUEST_TYPES.map((type) => (
                                            <div
                                                key={type.id}
                                                onClick={() => {
                                                    setActiveTypeId(type.id);
                                                    setFieldValue("requestType", type.id);
                                                }}
                                                className={`cursor-pointer rounded-md px-3 py-2 border ${values.requestType === type.id
                                                    ? "border-blue-500 text-[#087BB3] bg-blue-50"
                                                    : "border-gray-200 text-[#203430] bg-[#F7F7F7]"
                                                    }`}
                                            >
                                                <p className="font-medium mb-1 text-sm">{type.name}</p>
                                                <p className="text-xs text-[#203430] font-normal">{type.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                    {touched.requestType && errors.requestType && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.requestType}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4 md:mb-8">
                                    <div className="flex md:flex-row flex-col justify-between items-start md:items-center mb-1">
                                        <label className="text-sm text-[#63716E] font-medium">
                                            What is the equipment/item?{" "}
                                            <span className="text-xs">(Type the item below or search from our catalog)</span>
                                        </label>


                                    </div>

                                    <input
                                        name="item"
                                        value={values.item}
                                        onChange={handleChange}
                                        className="mt-1 w-full shadow-xs rounded-lg px-3 py-2 bg-[#F7F7F7] text-[#B1B1B1] font-normal text-xs"
                                        placeholder={activeType.itemPlaceholder}
                                    />
                                    {touched.item && errors.item && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.item}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4 md:mb-8">
                                    <label className="text-sm text-[#63716E] font-medium">
                                        What’s the reason of this request?
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="reason"
                                            value={values.reason}
                                            onChange={handleChange}
                                            className="text-[#B1B1B1] font-normal text-xs w-full resize-none h-18 shadow-xs rounded-lg px-3 py-2 bg-[#F7F7F7]"
                                            placeholder={activeType.reasonPlaceholder}
                                        />
                                        {touched.reason && errors.reason && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.reason}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                <div className="mb-6">
                                    <label className="text-sm font-medium text-[#63716E]">
                                        What is the urgency of this request?
                                    </label>

                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mt-2">
                                        {URGENCY_BUTTONS.map((card) => (
                                            <button
                                                key={card.id}
                                                type="button"
                                                onClick={() => {
                                                    setActiveId(card.id);
                                                    setFieldValue("urgency", card.id);
                                                }}
                                                className={`flex items-center cursor-pointer gap-2.5 px-3 py-2 rounded-md text-sm font-medium 
                                                           ${values.urgency === card.id
                                                        ? "bg-[rgba(8,123,179,0.05)] text-[#087BB3] border border-[#087BB3]"
                                                        : "bg-[#F7F7F7] text-[#203430]"
                                                    }`}
                                            >
                                                <card.icon />
                                                {card.text}
                                            </button>
                                        ))}
                                    </div>

                                    {touched.urgency && errors.urgency && (
                                        <p className="text-red-500 text-xs mt-1">
                                            {errors.urgency}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4 md:mb-8">
                                    <label className="text-sm text-[#63716E] font-medium">
                                        Please describe how this item affect's day-to-day operations.
                                    </label>
                                    <div className="mt-1">
                                        <textarea
                                            name="impact"
                                            value={values.impact}
                                            onChange={handleChange}
                                            className="w-full bg-[#F7F7F7] resize-none shadow-xs rounded-lg h-20 text-[#B1B1B1] px-3 py-2 font-normal text-xs"
                                            placeholder={activeType.impactPlaceholder}
                                        />
                                        {touched.impact && errors.impact && (
                                            <p className="text-red-500 text-xs mt-1">
                                                {errors.impact}
                                            </p>
                                        )}
                                    </div>
                                </div>
                                {activeType.name !== "Repair" && (
                                    <div>

                                        <h3 className="text-sm font-medium text-[#63716E] mb-2">Vendor Selection</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 mb-4 md:mb-8">
                                            <div
                                                onClick={() => {
                                                    onOpenCatalog(true, handleAddItem);
                                                    setSelectedVendor("own");
                                                }}

                                                className={`cursor-pointer rounded-lg px-3 py-2 border transition
                                     ${selectedVendor === "own"
                                                        ? "bg-[rgba(8,123,179,0.05)] text-[#087BB3] border-[#087BB3]"
                                                        : "bg-[#F7F7F7] border-transparent"
                                                    }`}
                                            >
                                                <p className="font-medium text-sm  mb-2.5">
                                                    DL Preferred Vendor
                                                </p>
                                                <p className="text-[#203430] text-xs font-normal">
                                                    Use our standardized vendor and pricing from the reference quotation
                                                </p>
                                            </div>

                                            <div
                                                onClick={() => {
                                                    setSelectedVendor("dl");
                                                    onCloseCatalog(false);
                                                }

                                                }
                                                className={`cursor-pointer rounded-lg px-3 py-2 border transition
                                     ${selectedVendor === "dl"
                                                        ? "bg-[rgba(8,123,179,0.05)] text-[#087BB3] border-[#087BB3]"
                                                        : "bg-[#F7F7F7] border-transparent"
                                                    }`}
                                            >
                                                <p className="font-medium text-sm  mb-2.5">
                                                    Use my own vendor
                                                </p>
                                                <p className="text-[#203430] text-xs font-normal">
                                                    Choose a different vendor based on your own quotation(s)
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}



                                <h4 className="text-sm font-medium text-[#63716E] mb-4">
                                    Quotations details and suggested choices
                                </h4>


                                <SelcatedVendor
                                    addedItems={addedItems}
                                    onRemove={handleRemoveItem}
                                    onPreview={onOpenPreview}
                                />
                                {/* console log for inspection */}
                                {false && console.log("CAPEXPopup passing onOpenPreview", onOpenPreview)}


                                {/* {selectedVendor === "dl" && (
                                    <SelcatedVendor addedItems={addedItems} />
                                )} */}



                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="bg-[#087BB3] text-white cursor-pointer px-4 py-2 rounded-lg text-sm w-50 h-8 flex items-center justify-center font-medium"
                                    >
                                        Submit Request
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                )}
            </Formik>
            {successOpen && (
                <div className="fixed inset-0 bg-[#00000085] z-65 flex items-center justify-center px-4">
                    <div className="bg-white rounded-2xl shadow-lg max-w-150 w-full text-center" >
                        <div className="p-4 md:p-8">
                            <div className="flex justify-between items-center mb-2 md:mb-8">
                                <div>
                                    <h2 className="text-xl font-semibold text-[#333] text-start mb-4">Request Submitted Successfully</h2>
                                    <p className="text-base text-[#333] font-medium text-start">What would you like to do next?</p>
                                </div>
                                <div>
                                    <img src={SubmitImgage} alt="sumbint-tick" width={100} height={100} loading="lazy" />
                                </div>
                            </div>
                            <div className="flex md:flex-row flex-col items-start md:items-center justify-end gap-2">
                                <a
                                    href="/dashboard"
                                    className="px-3 py-2 hover:bg-gray-100 bg-white text-black w-42 text-sm font-medium border border-black rounded-lg"
                                >
                                    Go to My Dashboard
                                </a>
                                <button

                                    onClick={() => {
                                        setSuccessOpen(false);

                                        if (window._resetFormikForm) {
                                            window._resetFormikForm();
                                        }
                                    }}

                                    className="cursor-pointer px-3 py-2 w-60 bg-[#087BB3] text-sm font-medium text-white rounded-lg"
                                >
                                    Submit Another CAPEX Request
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            )}


        </div>
    );
}