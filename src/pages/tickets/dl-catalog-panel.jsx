import { useState } from "react";
import { DentalChair } from "../../assets/images";
import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp, X } from "lucide-react";

export default function DLCatalogPanel({ onClose, item, onAddItem }) {

  const [openId, setOpenId] = useState(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const images = [DentalChair, DentalChair, DentalChair, DentalChair];
  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const [showItemDetails, setShowItemDetails] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("Vendor");

  const options = ["Vendor", "Vendor", "Vendor"];


  const CATEGORIES = [
    {
      id: 1,
      title: "CAD/CAM & Scanners / Lab Equipment",
      items: [
        { id: 1, subheading: 'CAD/CAM & Scanners', hedding: "Scanner A", span: "Digital", text: "Model X", desc: "Fast scan", price: "$1200" },
        { id: 2, subheading: 'CAD/CAM & Scanners', hedding: "Scanner B", span: "Digital", text: "Model Y", desc: "HD scan", price: "$1500" },
        { id: 3, subheading: 'CAD/CAM & Scanners', hedding: "Scanner C", span: "Digital", text: "Model Z", desc: "Ultra scan", price: "$1800" },
      ],
    },
    {
      id: 2,
      title: "Dental Chairs & Stools",
      items: [
        { id: 1, subheading: 'Dental Chairs & Stools', hedding: "Chair A", span: "Comfort", text: "Basic", desc: "Manual", price: "$900" },
        { id: 2, subheading: 'Dental Chairs & Stools', hedding: "Chair B", span: "Premium", text: "Auto", desc: "Electric", price: "$1400" },
        { id: 3, subheading: 'Dental Chairs & Stools', hedding: "Chair C", span: "Luxury", text: "Smart", desc: "AI assist", price: "$2000" },
        { id: 4, subheading: 'Dental Chairs & Stools', hedding: "Chair D", span: "Standard", text: "Plus", desc: "Durable", price: "$1100" },
      ],
    },
    {
      id: 3,
      title: "Handpieces & Motors",
      items: [
        { id: 1, subheading: 'Handpieces & Motors', hedding: "X-Ray A", span: "Portable", text: "Mini", desc: "Low rad", price: "$700" },
        { id: 2, subheading: 'Handpieces & Motors', hedding: "X-Ray B", span: "Digital", text: "Pro", desc: "HD", price: "$1300" },
      ],
    },
    {
      id: 4,
      title: "Imaging / X-Ray",
      items: [
        { id: 1, subheading: 'Imaging / X-Ray', hedding: "Unit A", span: "Steam", text: "Auto", desc: "Fast", price: "$600" },
        { id: 2, subheading: 'Imaging / X-Ray', hedding: "Unit B", span: "Dry", text: "Manual", desc: "Compact", price: "$500" },
        { id: 3, subheading: 'Imaging / X-Ray', hedding: "Unit C", span: "Hybrid", text: "Smart", desc: "Energy save", price: "$800" },
      ],
    },
    {
      id: 5,
      title: "IT Hardware",
      items: [
        { id: 1, subheading: 'IT Hardware', hedding: "Accessory A", span: "Tool", text: "Basic", desc: "Steel", price: "$120" },
        { id: 2, subheading: 'IT Hardware', hedding: "Accessory B", span: "Tool", text: "Pro", desc: "Alloy", price: "$180" },
        { id: 3, subheading: 'IT Hardware', hedding: "Accessory C", span: "Tool", text: "Ultra", desc: "Titanium", price: "$250" },
        { id: 4, subheading: 'IT Hardware', hedding: "Accessory D", span: "Tool", text: "Max", desc: "Carbon", price: "$300" },
        { id: 5, subheading: 'IT Hardware', hedding: "Accessory E", span: "Tool", text: "Lite", desc: "Aluminum", price: "$90" },
      ],
    },
  ];


  const SPAN_INPUT = [
    { id: 1, heading: 'Item Name', value: 'EVOGUE Q33 Dental Chair', },
    { id: 2, heading: 'Vendor', value: 'Maple Dental Equipment', },
    { id: 3, heading: 'Purchase Price', value: '$1,590.00', },
    { id: 4, heading: 'Estimated Delivery Time', value: '5 Days', },
  ]

  const TABLE_HEADING = [
    { id: 1, text: 'Category', },
    { id: 2, text: 'Item', },
    { id: 3, text: 'Vendor', },
    { id: 4, text: 'Purchase Price', },
  ]
  return (
    <div className="bg-white max-w-130 md:w-150 rounded-xl shadow-lg">
      <div className="">

        {!showItemDetails && (
          <>
            <div className="sticky top-0 bg-white z-20 rounded-2xl">
              <div className="flex justify-between items-center rounded-t-2xl py-4 px-4 pb-8">
                <h2 className="text-md font-semibold">Dentalook Catalog</h2>
                <div className="flex gap-1 items-center" onClick={onClose}>
                  <h3 className="text-[#4A5554] font-medium text-[10px] cursor-pointer">Close Catalog</h3>
                  <button className="text-gray-500 cursor-pointer">✕</button>
                </div>
              </div>
              <div className="flex items-center gap-2 py-2 px-4 border-b border-[#E0E0E0]">
                <div className="relative text-xs">
                  <div
                    onClick={() => setOpen(!open)}
                    className="flex gap-2  items-center justify-between cursor-pointer
                      border border-[#E0E0E0] rounded-3xl px-3 py-2 text-[#757575]"
                  >
                    <span>{value}</span>
                    {open ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </div>

                  {open && (
                    <div className="absolute mt-1 w-full bg-white border border-[#E0E0E0] rounded-xl shadow-sm z-10">
                      {options.map((item, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setValue(item);
                            setOpen(false);
                          }}
                          className="px-3 py-2 hover:bg-gray-100 cursor-pointer rounded-xl"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex items-center  border border-[#E0E0E0] rounded-3xl px-3 py-2">
                  <input
                    placeholder="Search item"
                    className="text-sm outline-none"
                  />
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 10L14 14M6.66667 11.3333C4.08934 11.3333 2 9.244 2 6.66667C2 4.08934 4.08934 2 6.66667 2C9.244 2 11.3333 4.08934 11.3333 6.66667C11.3333 9.244 9.244 11.3333 6.66667 11.3333Z" stroke="#809FB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
                </div>
              </div>
              <div className="px-8 flex gap-6 justify-between bg-[#F9FAFB] border-b border-[#E0E0E0]">
                {TABLE_HEADING.map((heading) => (
                  <h4 key={heading.id} className="text-left px-4 py-3.5 text-xs font-medium text-[#63716E]">
                    {heading.text}
                  </h4>
                ))}
              </div>
            </div>

            <div className="overflow-y-auto h-[60vh] ff_dm_sans rounded-2xl">
              {CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-white rounded-2xl">
                  <button
                    onClick={() =>
                      setOpenId(openId === cat.id ? null : cat.id)
                    }
                    className="w-full hover:bg-gray-50 text-start flex px-8 py-4 gap-2 border-b border-[#E0E0E0]  cursor-pointer 
                 text-xs font-medium text-[#131313] "
                  >
                    <span className="text-xs font-medium text-[#131313]">
                      {openId === cat.id ? "−" : "+"}
                    </span>
                    {cat.title}
                  </button>

                  {openId === cat.id && (
                    <div>
                      {cat.items.map((item) => (
                        <div
                          key={item.id}
                          onClick={() => {
                            setSelectedItem(item);
                            setShowItemDetails(true);
                          }}
                          className="py-4 px-8 flex items-center gap-6 justify-between
                       border-b border-[#E0E0E0] cursor-pointer
                       hover:bg-gray-50"
                        >
                          <p className="text-xs text-gray-400">{item.subheading}</p>
                          <div className="flex gap-2 items-end">
                            <img src={DentalChair} width={28} />
                            <div>
                              <h4 className="text-xs font-medium">{item.hedding}</h4>
                              <p className="text-[10px] text-gray-400">{item.span}</p>
                            </div>
                          </div>

                          <div>
                            <h4 className="text-xs font-medium">{item.text}</h4>
                            <p className="text-[10px] text-gray-400">{item.desc}</p>
                          </div>

                          <p className="text-sm font-medium">{item.price}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </>
        )}

        {showItemDetails && selectedItem && (
          <div className="bg-white rounded-xl">
            <div className="flex items-center sticky top-0 rounded-t-2xl px-6 pt-6 bg-white z-20 justify-between gap-2 pb-3 border-b border-[#E0E0E0]">
              <h2 className="text-lg text-[#0E121B] font-semibold">Item Details</h2>
              <button
                onClick={() => {
                  setShowItemDetails(false);
                  setSelectedItem(null);
                }}
                className="flex items-center gap-2 text-[10px] font-medium text-[#4A5554]"
              >
                Close Item Details
                <p className="cursor-pointer text-base text-[#4B5C6C]">✕</p>
              </button>
            </div>
            <div className="p-6 overflow-y-auto h-[76vh] ff_dm_sans rounded-2xl">
              <div className="border border-[#F2F2F2] shadow-xs rounded-2xl mb-4 md:mb-8">
                <div className="relative mt-5 h-60  flex items-center justify-center">
                  <ChevronLeft
                    className="absolute left-4 text-black cursor-pointer rounded-full hover:bg-gray-50"
                    onClick={handlePrev}
                  />
                  <img
                    src={images[activeIndex]}
                    className="h-45 object-contain"
                  />
                  <ChevronRight
                    className="absolute right-4 text-black rounded-full hover:bg-gray-50 cursor-pointer"
                    onClick={handleNext}
                  />
                </div>

                <div className="flex justify-center gap-4 mb-4 mt-4">
                  {images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      onClick={() => setActiveIndex(i)}
                      className={`h-12 w-12 cursor-pointer bg-cover bg-center transition-all
                              ${activeIndex === i
                          ? "opacity-100"
                          : "opacity-[0.35]"
                        }`}
                    />

                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {SPAN_INPUT.map((card =>
                  <div className="flex flex-col">
                    <p className="mb-1 text-sm font-medium text-[#0E121B]">{card.heading}</p>
                    <span className="p-2.5 border border-[#F2F2F2] text-[#0E121B] text-xs font-normal rounded-[10px]">{card.value}</span>
                  </div>
                ))}
              </div>

              <button type="submit" onClick={() => onAddItem(selectedItem)} className="mt-6 cursor-pointer w-full bg-[#087BB3] text-white py-3 rounded-xl">
                Add Item
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}