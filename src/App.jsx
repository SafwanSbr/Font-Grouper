import { useState } from 'react'
import FontGroup from './Components/FontGroup';
import Upload from './Components/Upload'

function App() {
  const [uploadedFonts, setUploadedFonts] = useState([]);
  const onDelete = (fontName) =>{
    const afterDelete = uploadedFonts.filter((font)=>font.name !== fontName);
    console.log(afterDelete);
    setUploadedFonts(afterDelete);
  }
  return (
    <>
      <div>
        <Upload uploadedFonts={uploadedFonts} setUploadedFonts={setUploadedFonts} onDelete={onDelete}/>
        <FontGroup uploadedFonts={uploadedFonts} />
      </div>
    </>
  )
}

export default App
