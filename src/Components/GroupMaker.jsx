import React, { useEffect, useState } from "react";
import InputField from "./InputField";

const GroupMaker = ({ uploadedFonts, addFontGroup }) => {
  const [fontArray, setFontArray] = useState([{ name: "", font: "" }]);

  const rowAdder = () => {
    setFontArray([...fontArray, { name: "", font: "" }]);
  };

  const rowRemover = (index) => {
    const newFontGroup = fontArray.filter((_, idx) => idx !== index);
    setFontArray(newFontGroup);
  };

  const handleFontChange = (index, field, value) => {
    setFontArray((prevFontGroup) => {
      const updatedGroup = [...prevFontGroup];
      updatedGroup[index] = { ...updatedGroup[index], [field]: value };
      return updatedGroup;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedFonts = fontArray.filter((group) => group.font !== "" && group.name !== "");

    if (selectedFonts.length < 2) {
      alert("You must select at least two fonts to create a group.");
      return;
    }

    addFontGroup(selectedFonts);
    setFontArray([{ name: "", font: "" }]); // Reset the form
  };

  return (
    <div className="font-maker bg-white shadow-lg rounded-lg p-6">
      <h3 className="text-lg font-bold mb-4">Create Font Group</h3>
      <form onSubmit={handleSubmit}>
        {fontArray.map((group, index) => (
          <InputField
            key={index}
            index={index}
            font={group}
            availableFonts={uploadedFonts}
            handleFontChange={handleFontChange}
            onRemove={rowRemover}
          />
        ))}

        <div className="mb-4">
          <button type="button" onClick={rowAdder} className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Add Row
          </button>
        </div>

        <button type="submit" className="p-2 bg-green-500 text-white rounded hover:bg-green-600">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default GroupMaker;
