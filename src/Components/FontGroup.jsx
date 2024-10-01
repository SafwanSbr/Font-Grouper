import React, { useState } from "react";
import GroupMaker from "./GroupMaker";
import GroupViewer from "./GroupViewer";

const FontGroup = ({ uploadedFonts }) => {
  const [fontGroups, setFontGroups] = useState([]);

  // Function to add a new font group
  const addFontGroup = (newGroup) => {
    setFontGroups([...fontGroups, newGroup]);
  };

  // Function to delete a font group
  const onDeleteGroup = (groupIndex) => {
    const updatedGroups = fontGroups.filter((_, index) => index !== groupIndex);
    setFontGroups(updatedGroups);
  };

  return (
    <div className="font-group bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mx-auto">
      <h3 className="text-xl font-bold mb-4 text-gray-700 text-center">Font Group Management</h3>

      {/* Pass addFontGroup as a prop to GroupMaker */}
      <GroupMaker uploadedFonts={uploadedFonts} addFontGroup={addFontGroup} />

      {/* Pass onDeleteGroup to GroupViewer */}
      <GroupViewer fontGroups={fontGroups} onDeleteGroup={onDeleteGroup} />

      {fontGroups.length === 0 && (
        <p className="text-gray-500 text-center mt-4">No font groups created yet.</p>
      )}
    </div>
  );
};

export default FontGroup;
