import { useState } from "react";
import Pill, { Input, Textarea, FileUpload } from "./ticket-model-component.jsx";
import Button from "../button/button.jsx";

export default function Ticket_Modal({ open, onClose, onSuccess }) {
  if (!open) return null;
  const [issue, setIssue] = useState([]);
  const [assistance, setAssistance] = useState([]);
  const [computerName, setComputerName] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState({});

  const toggleAssistance = (value) => {
    setAssistance((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const AssistanceOne = ["General", "Software", "Hardware"];
  const AssistanceTwo = ["Imaging", "Computer", "Phones", "X-Rays", "Printers", "Scanners"];

  const toggleIssue = (value) => {
    setIssue((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value]
    );
  };

  const validate = () => {
    const newErrors = {};

    if (assistance.length === 0)
      newErrors.assistance = "Select at least one option";

    if (issue.length === 0)
      newErrors.issue = "Select at least one option";

    if (!computerName.trim())
      newErrors.computerName = "Computer name is required";

    if (!location.trim())
      newErrors.location = "Location is required";

    if (!description.trim())
      newErrors.description = "Description is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    console.log({
      assistance,
      issue,
      computerName,
      location,
      description,
    });

    onSuccess();
  };


  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-xl max-h-[90vh] flex flex-col">
        <div className="flex justify-between px-6 py-4 border-b border-gray-300">
          <h2 className="font-semibold">IT Tickets Form</h2>
          <button className="cursor-pointer" onClick={onClose}>✕</button>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex-1 overflow-y-auto px-6 py-5 space-y-5"
        >

          <div>
            <p className="text-sm font-medium mb-2">
              What would you like assistance with?
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {AssistanceOne.map((item) => (
                <Pill
                  key={item}
                  text={item}
                  active={assistance.includes(item)}
                  onClick={() => toggleAssistance(item)}
                />
              ))}
            </div>

            {errors.assistance && (
              <p className="text-red-500 text-xs mt-1">
                {errors.assistance}
              </p>
            )}
          </div>

          <div>
            <p className="text-sm font-medium mb-2">
              Which device you have an issue with?
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
              {AssistanceTwo.map((item) => (
                <Pill
                  key={item}
                  text={item}
                  active={issue.includes(item)}
                  onClick={() => toggleIssue(item)}
                />
              ))}
            </div>

            {errors.issue && (
              <p className="text-red-500 text-xs mt-1">
                {errors.issue}
              </p>
            )}
          </div>

          <Input
            label="Computer name"
            required
            value={computerName}
            onChange={(e) => setComputerName(e.target.value)}
            error={errors.computerName}
            placeholder="Enter computer name"
          />

          <Input
            label="Where is the computer located at? "
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            error={errors.location}
            placeholder="Enter Computer Location"
          />

          <Textarea
            label="Please provide a detailed description of the issue."
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            error={errors.description}
            placeholder="Enter Ticket Details Here..."
          />

          <div className="w-full ">
            <FileUpload label="Attach file (optional)" />
          </div>

          <div className="grid grid-cols-2 gap-3 pt-4">
            <Button type="button" onClick={onClose} className="border border-gray-300 px-2 rounded!" text="Cancel" />
            <Button type="submit" className="bg-[#087BB3] text-white px-2 rounded!" text="Submit" />
          </div>

        </form>
      </div>
    </div>
  );
}


