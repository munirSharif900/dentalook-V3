/* ========= PILL ========= */
export default function Pill({ text, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`px-4 py-2 rounded-full border border-[#D0D5DD] text-sm transition
        ${active
          ? "bg-[#087BB3] text-white border-[#087BB3]"
          : "bg-gray-100 text-gray-700 hover:bg-gray-200"
        }`}
    >
      {text}
    </button>
  );
}

export function Input({
  label,
  required,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <input
        type="text"
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 rounded-lg border outline-none
          ${error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
          }
          focus:ring-2`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

export function Textarea({
  label,
  required,
  value,
  onChange,
  placeholder,
  error,
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>

      <textarea
        rows={4}
        value={value || ""}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-3 py-2 rounded-lg border outline-none resize-none
          ${error
            ? "border-red-500 focus:ring-red-500"
            : "border-gray-300 focus:ring-blue-500"
          }
          focus:ring-2`}
      />

      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
}

import { useState } from "react";
import Button from "../button/button";
export function FileUpload({ label }) {
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="w-full">

      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}

      <div className="flex items-center gap-3">
        <label className="flex items-center w-full justify-center px-4 py-9 rounded-lg border border-dashed border-gray-300 cursor-pointer hover:bg-gray-50 transition">
          <input
            type="file"
            className="hidden"
            onChange={handleChange}
          />
          <span className="text-sm text-gray-600">
            {file ? file.name : "Choose File"}
          </span>
        </label>
      </div>
    </div>
  );
}

