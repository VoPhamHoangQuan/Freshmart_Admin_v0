import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase'
import { v4 as uuidv4 } from 'uuid';

function uploadImage(file) {
    const imageRef = ref(storage, `productImages/${uuidv4()}`);

    //this promise use to upload image and then will return image url 
    const downloadUrl = uploadBytes(imageRef, file)
        .then(snapshot => {
            return getDownloadURL(snapshot.ref)
        })
    return downloadUrl
}

export default uploadImage

