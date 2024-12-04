import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "./firebase"; // accessing the storage Firebase storage which is a premium service 

const upload = async (file: any) => {
  const date = new Date();
  const storageRef = ref(storage, `images/${date + file.name}`);  // the file in firebase storage in folder called images/date + filename
  const uploadTask = uploadBytesResumable(storageRef, file);  // upload the file

  return new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("upload is " + progress + "% done");
      },
      (error) => {
        reject("Something went wrong!" + error?.code);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((getDownloadURL) => {
          resolve(getDownloadURL);
        });
      }
    );
  });
};

export default upload;
