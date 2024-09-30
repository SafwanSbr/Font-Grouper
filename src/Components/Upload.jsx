import React, { useState, useEffect } from 'react';

const Upload = ({ uploadedFonts, setUploadedFonts, onDelete }) => {
  const dropBoxRef = React.useRef(null);

  const handleFileUpload = (file) => {
    if (file) {
      const fileType = file.name.split('.').pop().toLowerCase();
      if (fileType === 'ttf') {
        const fontURL = URL.createObjectURL(file);
        const fontName = file.name.replace(/\.[^/.]+$/, ''); // Remove file extension

        const newFont = { name: fontName, url: fontURL };
        setUploadedFonts((prevFonts) => [...prevFonts, newFont]);
      } else {
        alert('Please upload a valid font file (.TTF).');
      }
    }
  };

  const onUpload = (e) => {
    const file = e.target.files[0];
    handleFileUpload(file);
  };

  const onDragOver = (e) => {
    e.preventDefault();
    dropBoxRef.current.classList.add('bg-blue-100');
  };

  const onDragLeave = () => {
    dropBoxRef.current.classList.remove('bg-blue-100');
  };

  const onDrop = (e) => {
    e.preventDefault();
    dropBoxRef.current.classList.remove('bg-blue-100');
    const file = e.dataTransfer.files[0];
    handleFileUpload(file);
  };

  const loadFont = (fontName, fontUrl) => {
    const font = new FontFace(fontName, `url(${fontUrl})`);
    font
      .load()
      .then((loadedFont) => {
        document.fonts.add(loadedFont);
      })
      .catch((err) => {
        console.error('Error loading font:', err);
      });
  };

  useEffect(() => {
    uploadedFonts.forEach((font) => {
      loadFont(font.name, font.url);
    });
  }, [uploadedFonts]);

  return (
    <div className="flex flex-col items-center justify-center">
      {/* Upload box */}
      <div
        ref={dropBoxRef}
        className="border-2 border-dashed w-full max-w-3xl border-gray-300 rounded p-6 text-center cursor-pointer hover:bg-gray-100"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        onClick={() => document.getElementById('fontUpload').click()}
      >
        <p className="text-gray-500">Drag & Drop your font file here, or click to select a file</p>
        <input
          type="file"
          accept=".ttf"
          onChange={onUpload}
          className="hidden"
          id="fontUpload"
        />
      </div>

      {/* Uploaded Fonts */}
      <div className="mt-8 w-full max-w-3xl">
        <h2 className="text-lg font-bold mb-4 text-center">Uploaded Fonts:</h2>
        {uploadedFonts.length > 0 ? (
          <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
            <thead>
              <tr className="bg-gray-800 text-white">
                <th className="py-3 px-4">Font Name</th>
                <th className="py-3 px-4">Preview</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {uploadedFonts.map((font, index) => (
                <tr key={index} className="border-t">
                  <td className="py-3 px-4">{font.name}</td>
                  <td className="py-3 px-4" style={{ fontFamily: font.name }}>
                    Example of the font
                  </td>
                  <td className="py-3 px-4 text-red-600 hover:cursor-pointer hover:text-red-800" onClick={() => onDelete(font.name)}>
                    Delete
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <div className="text-center text-gray-600">No Font Uploaded</div>
        )}
      </div>
    </div>
  );
};

export default Upload;
