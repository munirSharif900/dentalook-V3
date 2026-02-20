import { useState } from "react";
import CAPEXPopup from "./capex-popup";
import DLCatalogPanel from "./dl-catalog-panel";

export default function PopupContainer({ onClose }) {
  const [showCatalog, setShowCatalog] = useState(false);
  const [onAddItemCallback, setOnAddItemCallback] = useState(null);

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-100">
      <div className="flex md:flex-row flex-col gap-2.5 px-4">

        <CAPEXPopup
          onClose={onClose}
          onOpenCatalog={(show, callback) => {
            setShowCatalog(show);
            setOnAddItemCallback(() => callback);
          }}
          onCloseCatalog={() => setShowCatalog(false)}
        />

        {showCatalog && (
          <DLCatalogPanel
            onClose={() => setShowCatalog(false)}
            onAddItem={onAddItemCallback}
          />
        )}

      </div>
    </div>
  );
}