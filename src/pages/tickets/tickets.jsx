import { useState } from "react";
import PopupContainer from "./popup-container";


export default function Tickets() {
  const [showPopup, setShowPopup] = useState(false);   
  const [selectedTitle, setSelectedTitle] = useState(null);

  const HERO_CARDS = [
    { id: 1, title: "Dental Equipment" },
    { id: 2, title: "Clinic Renovation and Expansion" },
    { id: 3, title: "Office Equipment" },
    { id: 4, title: "Specialty Dental Supplies" },
  ];

  return (
    <section>
      <div className="py-8">
        <div className="px-8 py-8 bg-white rounded-2xl border border-[#E2E8F0]">
          <h2 className="text-2xl font-bold">
            Capital Expenditure Request Workflow
          </h2>
          <p className="text-sm text-gray-500">
            Use this form to initiate a new capital expenditure request (CAPEX Request Workflow)
          </p>
        </div>

        <div className="px-8 py-8 bg-white rounded-2xl border border-[#E2E8F0] mt-4">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-3">
            {HERO_CARDS.map((card) => (
              <button
                key={card.id}
                onClick={() => {
                  setSelectedTitle(card.title); 
                  setShowPopup(true);           
                }}
                className="px-4 py-4 cursor-pointer bg-white rounded-lg border border-[#E2E8F0] hover:border-[#087BB3]"
              >
                <h3 className="text-base text-center font-semibold pb-1">
                  {card.title}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {showPopup && (
          <PopupContainer
            selectedTitle={selectedTitle}
            onClose={() => setShowPopup(false)}
          />
        )}
      </div>
    </section>
  );
}