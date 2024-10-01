import { useState } from 'react';
import FontGroup from './Components/FontGroup';
import Upload from './Components/Upload';

function App() {
  const [uploadedFonts, setUploadedFonts] = useState([]);

  const onDelete = (fontName) => {
    const afterDelete = uploadedFonts.filter((font) => font.name !== fontName);
    setUploadedFonts(afterDelete);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <h1 className="text-3xl font-bold text-gray-700 mb-6">Font Manager</h1>
      
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl mb-6">
        <Upload uploadedFonts={uploadedFonts} setUploadedFonts={setUploadedFonts} onDelete={onDelete} />
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <FontGroup uploadedFonts={uploadedFonts} />
      </div>
    </div>
  );
}

export default App;
