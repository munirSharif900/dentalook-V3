
import { useState, useEffect } from "react";
import { FileIcon, HeaderIcon } from "../../assets/icon";

export default function SelcatedVendor({ addedItems = [], onRemove, onPreview }) {
    const [preferredIndex, setPreferredIndex] = useState(null);
    const [files, setFiles] = useState({});

    useEffect(() => {
        // whenever items change, make sure preferred index is still valid
        if (addedItems.length > 0 && (preferredIndex === null || preferredIndex >= addedItems.length)) {
            setPreferredIndex(0);
        }
        if (addedItems.length === 0) {
            setPreferredIndex(null);
        }
    }, [addedItems]);

    // Cleanup object URLs
    useEffect(() => {
        return () => {
            Object.values(files).forEach(f => {
                if (f?.url) URL.revokeObjectURL(f.url);
            });
        };
    }, [files]);

    const handleFileChange = (index, file) => {
        if (!file) return;

        const fileURL = URL.createObjectURL(file);
        const fileData = {
            file,
            name: file.name,
            url: fileURL,
            type: file.type
        };

        setFiles(prev => ({
            ...prev,
            [index]: fileData
        }));

        // do not open preview automatically; wait for user to click again
        console.log("SelcatedVendor: file chosen", fileData);
    };

    const openPreview = (fileData) => {
        if (!fileData) return;
        console.log("SelcatedVendor: preview requested", fileData);
        if (onPreview) {
            onPreview(fileData);
        }
    };

    const closePreview = () => {
        // no local preview handled here
    };

    return (
        <div className="mb-8 rounded-lg">
            <p className="max-w-140 text-xs font-medium text-[#63716E]">
                <span className="text-[#1E1E1E] font-semibold">Please note:</span>
                {" "}If a vendor's quotation includes multiple items or units in a single document,
                each item must be entered separately.
            </p>

            <table className="w-full text-sm table-fixed border-collapse">
                <thead className="text-[#63716E]">
                    <tr>
                        <th className="text-left flex items-center gap-1 px-4 py-3.5">
                            Preferred <HeaderIcon />
                        </th>
                        <th className="text-left px-4 py-3.5">Vendor</th>
                        <th className="text-left px-4 py-3.5">Price</th>
                        <th className="text-left px-4 py-3.5">Quotations</th>
                        <th className="text-left px-4 py-3.5">Category</th>
                        <th className="text-left px-4 py-3.5">Actions</th>
                    </tr>
            </thead>

                <tbody>
                    {Array.from({ length: Math.max(4, addedItems.length) }, (_, index) => {
                        const item = addedItems[index];
                        return (
                            <tr key={index} className="border border-[#F2F2F2]">
                                <td className="px-4 py-3">
                                    <input
                                        type="radio"
                                        checked={preferredIndex === index}
                                        onChange={() => setPreferredIndex(index)}
                                        className="w-3.5 h-3.5 cursor-pointer"
                                    />
                                </td>

                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs">
                                    {item?.text || ""}
                                </td>

                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs font-medium">
                                    {item?.price || ""}
                                </td>

                                {/* File Upload + Preview */}
                                <td className="px-4 py-3 border border-[#F2F2F2]">
                                    <label
                                        className="text-xs flex gap-2 cursor-pointer"
                                        // when a file has already been selected, clicking the
                                        // label should open the preview instead of the input
                                        onClick={(e) => {
                                            if (files[index]) {
                                                console.log("SelcatedVendor: label clicked, opening preview", files[index]);
                                                e.preventDefault();
                                                openPreview(files[index]);
                                            }
                                        }}
                                    >
                                        {!files[index] && <FileIcon />}

                                        <span
                                            className={files[index] ? "text-[#087BB3] truncate" : "truncate"}
                                            onClick={(e) => {
                                                if (files[index]) {
                                                    console.log("SelcatedVendor: span clicked, opening preview", files[index]);
                                                    e.preventDefault();
                                                    openPreview(files[index]);
                                                }
                                            }}
                                        >
                                            {files[index]?.name || "Choice File"}
                                        </span>

                                        <input
                                            type="file"
                                            accept="application/pdf"
                                            className="hidden"
                                            onChange={(e) =>
                                                handleFileChange(index, e.target.files[0])
                                            }
                                        />
                                    </label>
                                </td>

                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs">
                                    {item?.subheading || ""}
                                </td>

                                {/* ✅ Remove Button */}
                                <td className="px-4 py-3 border border-[#F2F2F2] text-xs font-medium">
                                    {item ? (
                                        <button
                                            type="button"
                                            onClick={() => onRemove(index)}
                                            className="text-red-500 hover:text-red-700"
                                        >
                                            Remove
                                        </button>
                                    ) : null}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            {/* {previewFile && (
                <div className="absolute top-0 right-0 h-full w-[420px] bg-white shadow-xl border-l z-50">

                    <div className="flex items-center justify-between p-3 border-b">
                        <p className="text-sm font-medium truncate">
                            {previewFile.name}
                        </p>

                        <button onClick={closePreview} className="text-sm">
                            ✕
                        </button>
                    </div>

                    <div className="p-3 overflow-auto h-[calc(100%-48px)]">

                        {previewFile.type.startsWith("image/") && (
                            <img
                                src={previewFile.url}
                                alt="preview"
                                className="w-full rounded"
                            />
                        )}

                        {previewFile.type.includes("pdf") && (
                            <iframe
                                src={previewFile.url}
                                title="PDF Preview"
                                className="w-full h-[70vh]"
                            />
                        )}

                        {!previewFile.type.startsWith("image/") &&
                            !previewFile.type.includes("pdf") && (
                                <p className="text-xs text-gray-500">
                                    Preview not available for this file type
                                </p>
                            )}
                    </div>
                </div>
            )} */}
        </div>
    );
}