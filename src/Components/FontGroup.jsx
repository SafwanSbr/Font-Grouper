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
    <div className="font-group">
      <h3 className="text-lg font-bold mb-4">Font Group Management</h3>

      {/* Pass addFontGroup as a prop to GroupMaker */}
      <GroupMaker uploadedFonts={uploadedFonts} addFontGroup={addFontGroup} />

      {/* Pass onDeleteGroup to GroupViewer */}
      <GroupViewer fontGroups={fontGroups} onDeleteGroup={onDeleteGroup} />
    </div>
  );
};

export default FontGroup;
