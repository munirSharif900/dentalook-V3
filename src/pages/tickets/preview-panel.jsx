export default function PreviewPanel({ file, onClose }) {
  if (!file) return null;

  return (
    <div className="bg-white max-w-130 md:w-150 rounded-xl shadow-lg">
      <div className="flex items-center justify-between p-3 border-b">
        <p className="text-sm font-medium truncate">{file.name}</p>
        <button onClick={onClose} className="text-sm">
          ✕
        </button>
      </div>
      <div className="p-3 overflow-auto h-[calc(100%-48px)]">
        {file.type.startsWith("image/") && (
          <img
            src={file.url}
            alt="preview"
            className="w-full rounded"
          />
        )}

        {file.type.includes("pdf") && (
          <iframe
            src={file.url}
            title="PDF Preview"
            className="w-full h-[70vh]"
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
  );
}
