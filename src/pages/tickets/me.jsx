// import React, { useState } from "react";
// import TicketModal from "../../components/ticket-model/ticket-model";
// import TicketSuccessModal from "../../components/ticket-model/ticket-model-sucess";
// import PopupWithTabs from "../../components/ticket-model/mean-model";

// export default function HeroHome() {

//     const [openForm, setOpenForm] = useState(false);
//     const [openSuccess, setOpenSuccess] = useState(false);

//     const HERO_CARDS = [
//         {
//             id: 1,
//             title: 'Dental Equipment',

//         },
//         {
//             id: 2,
//             title: 'Clinic Renovation and Expansion',

//         },
//         {
//             id: 3,
//             title: 'Office Equipment',

//         },
//         {
//             id: 4,
//             title: 'Specialty Dental Supplies',

//         },

//     ]
//     return (
//         <section>
//             <div className="md:py-8">
//                 <div className="px-8 py-8 bg-white rounded-2xl border border-[#E2E8F0]">
//                     <h2 className="text-2xl text-black font-bold">Capital Expenditure Request Workflow</h2>
//                     <p className="text-sm font-normal text-[#757575]">Use this form to initiate a new capital expenditure request (CAPEX Request Workflow)</p>
//                 </div>
//                 <div className="px-8 py-8 bg-white rounded-2xl border border-[#E2E8F0] mt-4">
//                     <div className="grid sm:grid-cols-2 gap-2">
//                         {HERO_CARDS.map(card =>
//                             <button onClick={() => setOpenForm(true)} className="px-4 py-4 cursor-pointer bg-white rounded-lg hover:border-[#087BB3] border border-[#E2E8F0]" key={card.id}>
//                                 <h3 className="text-base text-center text-[#131313] font-semibold">{card.title}</h3>
//                                 {/* <p className="text-xs text-center font-semibold text-[#757575]">{card.description}</p> */}
//                             </button>
//                         )}
//                         {/* <TicketModal
//                             open={openForm}
//                             onClose={() => setOpenForm(false)}
//                             onSuccess={() => {
//                                 setOpenForm(false);
//                                 setOpenSuccess(true);
//                             }}
//                         /> */}
//                         <PopupWithTabs
//                             open={openForm}
//                             onClose={() => setOpenForm(false)}
//                         />

//                         <TicketSuccessModal
//                             open={openSuccess}
//                             onClose={() => setOpenSuccess(false)}
//                             onAnother={() => {
//                                 setOpenSuccess(false);
//                                 setOpenForm(true);
//                             }}
//                         />
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }
