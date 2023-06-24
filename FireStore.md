## Upload Images in Firebase Storage using ReactJS

```
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {auth,db, storage};
export default app;

```


## Create a UploadForm component

```
const UploadForm = ()=>{

const [file, setFile] = useState(null);


const [error, setError] = useState(null);

const fileType = ["image/png", "image/jpeg"];

const changeHandeler = (e)=>{

    let selectedFile = e.target.files[0];
if(selectedFile && fileType.includes(selectedFile.type)){
    setFile(selectedFile);
    
}else{
setFile(null);
setError("Please select an image file");

}

}


    return <>
    
    <form> 
    
    <input type = "file" onChange = {changeHandeler}>
    
<div className = "output">
{error && <div class = "error" > {error} </div>}

{file && <div> {file.name}</div>}
</div>

    </form>


    </>
}

export default UploadForm;

```

Now our UploadForm is working, it is cheacking error as well as showing file name if correct file type is selected.

Let's create a custom hook `useStorage` to interact with firebase storage. create a file named
`useStorage.js`, `storage` from `fireConfig.js` file and import `useState` and `useEffect`;
This hook will return url of upload file, progress of uploading and error if any occors.



```
const useStorage = (file) =>{
 
 const [progress, setProgress] = useState(0);

 const [error, setError] = useState(null);

 const [url, setUrl] = useState(null);


useEffect (()=>{
// referenct
const storageRef = ref(storage, `/profiles/${file.name}`);


storageRef.put(file).on("state_changed", (snap)=>{

    let percentage =  Math.round((snap.bytesTransferred/snap.totalBytes))*100;
    setProgress(percentage);
}, (err)=>{
    setError(err);

}, async()=>{
    const url = await storageRef.getDownloadURL();
    setUrl(url);
}
})


},[file])

return {progress, url, error}
}

export default useStorage;

```


Now, let's create a progressbar with a name `ProgressBar.js` and import `useStorage` custom hook;


```
const ProgressBar = ({file, setFile})=>{

const {progress, url} = useStorage(file);

useEffect (()=>{
if(url){
    setFile(null);
    }

},[url, setFile])

    return<>
    
    <div className = "progressBar">  Progress</>
    
    </>
}

export default ProgressBar

```

saving doc

let ref = collection(db, "imageDoc");
 await addDoc(ref,mydoc);


 // ImageGrid

 imageGrid.js

 const imageGrid = ()=>{


    return <>
    
    
    </>
 }

 export default imageGrid.js

 import in app.js



 useFirestore.js

useState, useEffect
storage

const useFirestore = (query) =>{

const [docs , setDocs] = useState([]);

useEffect(()=>{
    let documents = [];
const unsub = onSnapShot(query, (snap)=>{
snap.forEach(doc=>{
    documents.push({id:doc.id,...doc.data()});
})
setDocs(documents);
})

return unsub();
},[query])


return {docs}

}

