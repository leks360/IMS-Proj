import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase.js';


 const uploadFile=(file,where,setLink,setProgres)=>{
    console.log("UPLOADING ROYALTY SLIPS");
    console.log(file,"FILE SIZE");
    if(file.size>1024*1024*5){
        console.log("sorry it cant be uploaded");
        alert("File size must under 2MiB!");
        
        
    }else{
    const storage = getStorage(app);
    const filename=new Date().getTime()+file.name;
    const storageRef = ref(storage, `${where}/` +filename);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
// Listen for state changes, errors, and completion of the upload.

uploadTask.on('state_changed',
(snapshot) => {
    if(snapshot.totalBytes>1024*1024*5){
        console.log("THE FILE CANNOT BE UPLOADE");
        
    }else{
    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        setProgres(progress);
        switch (snapshot.state) {
        case 'paused':
            console.log('Upload is paused');
            break;
        case 'running':
            console.log('Upload is running');
            break;
        }
    }}, 
(error) => {console.log("There is an error",error.message)}, () => {
    // Upload completed successfully, now we can get the download URL
        console.log("uploaded");
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        setLink(downloadURL);
        
        console.log(downloadURL);
    });
}
)}
}
export default uploadFile;