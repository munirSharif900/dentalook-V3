// export default function PreviewPanel({ file, onClose }) {
//   if (!file) return null;

//   return (
//     <div className="bg-white max-w-130 md:w-150 rounded-xl shadow-lg">
//       <div className="flex items-center justify-between p-3 border-b">
//         <p className="text-sm font-medium truncate">{file.name}</p>
//         <div>
//           <button className="text-[#4A5554]">Expand Quotation</button>
//         <button onClick={onClose} className="text-sm">
//           ✕
//         </button>
//         </div>
//       </div>
//       <div className="p-3 overflow-auto h-[calc(100%-48px)]">
//         {file.type.startsWith("image/") && (
//           <img
//             src={file.url}
//             alt="preview"
//             className="w-full rounded"
//           />
//         )}

//         {file.type.includes("pdf") && (
//           <iframe
//             src={file.url}
//             title="PDF Preview"
//             className="w-full h-[70vh]"
//           />
//         )}

//         {!file.type.startsWith("image/") &&
//           !file.type.includes("pdf") && (
//             <p className="text-xs text-gray-500">
//               Preview not available for this file type
//             </p>
//           )}
//       </div>
//     </div>
//   );
// }
export default function PreviewPanel({ file, onClose, mode, setMode }) {
  if (!file) return null;

  const isExpanded = mode === "expanded";

  return (
    <div
      className={
        isExpanded
          ? "fixed inset-0 bg-black/40 w-full flex items-center justify-center z-50"
          : ""
      }
    >
      <div
        className={
          isExpanded
            ? "bg-white w-[90vw] max-w-4xl rounded-xl shadow-lg"
            : "bg-white max-w-130 md:w-150 rounded-xl shadow-lg"
        }
      >
        <div className="flex items-center justify-between p-3 border-b">
          <p className="text-sm font-medium truncate">{file.name}</p>

          <div className="flex gap-4">
            <button
              onClick={() =>
                setMode(isExpanded ? "docked" : "expanded")
              }
              className="text-sm text-[#4A5554]"
            >
              {isExpanded ? "Collapse" : "Expand Quotation"}
            </button>

            <button onClick={onClose} className="text-sm">
              ✕
            </button>
          </div>
        </div>

        <div className="p-3 overflow-auto h-[calc(100%-48px)] ">
          {file.type.startsWith("image/") && (
            <img src={file.url} alt="preview" className="w-full rounded" />
          )}

          {file.type.includes("pdf") && (
            <iframe
              src={file.url}
              title="PDF Preview"
              className="w-full h-[65vh]"
            />
          )}

          {!file.type.startsWith("image/") &&
            !file.type.includes("pdf") && (
              <p className="text-xs text-gray-500">
                Preview not available for this file type
              </p>
            )}
        </div>
      </div>
    </div>
  );
}