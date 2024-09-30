import React, { useEffect, useState } from "react";
import InputField from "./InputField";

const GroupMaker = ({ uploadedFonts, addFontGroup }) => {
  const [fontArray, setFontArray] = useState([{ name: "", font: "" }]);

  console.log(addFontGroup);
  useEffect(() => {
    console.log("addFontGroup:", addFontGroup);
  }, [addFontGroup]);
  
  const rowAdder = () => {
    setFontArray([...fontArray, { name: "", font: "" }]);
  };

  const rowRemover = (index) => {
    const newFontGroup = fontArray.filter((_, idx) => idx !== index);
    setFontArray(newFontGroup);
  };

  // Handle font and name changes in the rows
  const handleFontChange = (index, field, value) => {
    setFontArray((prevFontGroup) => {
      const updatedGroup = [...prevFontGroup];
      updatedGroup[index] = { ...updatedGroup[index], [field]: value };
      return updatedGroup;
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedFonts = fontArray.filter((group) => group.font !== "" && group.name !== "");

    if (selectedFonts.length < 2) {
      alert("You must select at least two fonts to create a group.");
      return;
    }

    // Pass the new font group to the parent (FontGroup)
    console.log(addFontGroup);  // Should output the function if it's correctly passed
    addFontGroup(selectedFonts);
    setFontArray([{ name: "", font: "" }]); // Reset the form
  };

  return (
    <div className="font-maker">
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
          <button type="button" onClick={rowAdder} className="p-2 bg-blue-500 text-white rounded">
            Add Row
          </button>
        </div>

        <button type="submit" className="p-2 bg-green-500 text-white rounded">
          Create Group
        </button>
      </form>
    </div>
  );
};

export default GroupMaker;
