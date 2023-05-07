import { useRef,useState,useEffect } from 'react' ;

import './App.css' ;
import { uploadFile } from './service/Api';

function App() {

  const [file,setFile]= useState('');
  const [result,setResult] =useState('');
  const fileRef = useRef();

  useEffect(()=>{
    const getImage=async()=>{
      if(file){
        const data =new FormData();
        data.append("name",file.name);
        data.append("file",file);

       let response =await uploadFile(data);
       setResult(response.path);

      }
    }
    getImage();
  },[file])

  const onUpload=()=>{
    fileRef.current.click();
  }
  
  return (
   <>
 
   <div className='container'>
    <h1 className='head'>Upload files and share genrated link to download your file fromany where</h1>
    <div className='wrapper'>
      <h1>Simple file sharing</h1>
      <p>Upload your file & share among people!</p>

      <button onClick={()=>onUpload()}>Upload</button>
      <input
         type="file"
         ref={fileRef}
         style={{ display:"none"}}
         onChange={(e)=>setFile(e.target.files[0])}  // files return a array , we acceing 1st elemne in thr array

         />

      <a href={result}  >z{result}</a>
    </div>
   </div>


   </>

  )
}

export default App
