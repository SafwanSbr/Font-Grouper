import React from "react";

const InputField = ({ index, font, availableFonts, handleFontChange, onRemove }) => {
  return (
    <div className="flex items-center mb-2">
      <input
        type="text"
        placeholder={`Font Name ${index + 1}`}
        className="p-2 border rounded w-full mr-2"
        value={font.name}
        onChange={(e) => handleFontChange(index, "name", e.target.value)}
      />

      <select
        value={font.font}
        onChange={(e) => handleFontChange(index, "font", e.target.value)}
        className="p-2 border rounded w-full"
      >
        <option value="">Select a font</option>
        {availableFonts.map((f, i) => (
          <option key={i} value={f.name}>
            {f.name}
          </option>
        ))}
      </select>

      {index > 0 && (
        <button type="button" onClick={() => onRemove(index)} className="ml-2 p-2 bg-red-500 text-white rounded">
          Remove
        </button>
      )}
    </div>
  );
};

export default InputField;
