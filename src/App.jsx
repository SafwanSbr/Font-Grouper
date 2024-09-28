import { useState } from 'react'
import GroupMaker from './Components/GroupMaker'
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
        <GroupMaker uploadedFonts={uploadedFonts}/>
        <Upload uploadedFonts={uploadedFonts} setUploadedFonts={setUploadedFonts} onDelete={onDelete}/>
      </div>
    </>
  )
}

export default App
