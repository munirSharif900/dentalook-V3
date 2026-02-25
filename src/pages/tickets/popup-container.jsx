import { useState } from "react";
import CAPEXPopup from "./capex-popup";
import DLCatalogPanel from "./dl-catalog-panel";
import PreviewPanel from "./preview-panel";

export default function PopupContainer({ onClose }) {
  const [showCatalog, setShowCatalog] = useState(false);
  const [onAddItemCallback, setOnAddItemCallback] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);

  const openPreview = (file) => {
    if (!file) return;
    console.log("PopupContainer: openPreview", file);
    setShowCatalog(false);
    setPreviewFile(file);
  };

  const closePreview = () => setPreviewFile(null);

  const handleClose = () => {
    setShowCatalog(false);
    setPreviewFile(null);
    if (onClose) onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-100">
      <div className="flex md:flex-row flex-col gap-2.5 px-4">

        <CAPEXPopup
          onClose={handleClose}
          onOpenCatalog={(show, callback) => {
            setShowCatalog(show);
            setOnAddItemCallback(() => callback);
            if (show) {
              setPreviewFile(null);
            }
          }}
          onCloseCatalog={() => setShowCatalog(false)}
          onOpenPreview={openPreview}
        />

        {showCatalog && !previewFile && (
          <DLCatalogPanel
            onClose={() => setShowCatalog(false)}
            onAddItem={onAddItemCallback}
          />
        )}

        {previewFile && (
          <PreviewPanel file={previewFile} onClose={closePreview} />
        )}

      </div>
    </div>
  );
}