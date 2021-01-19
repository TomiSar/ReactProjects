import React, { useState } from "react";
import { Button } from "@material-ui/core";
import firebase from "firebase";
import { storage, db } from './firebase';
import './ImageUpload.css';

function ImageUpload({username}) {
  const [image, setImage] = useState(null);
  const [progress, setProgress] = useState(0);
  const [caption, setCaption] = useState('');
//   const [url, setUrl] = useState("");

  const handleChange = (event) => {
      if (event.target.files[0]) {
          setImage(event.target.files[0]);
      }
};

  const handleUpLoad = () => {
      // storage image from (drive etc) and put (load) image 
      const uploadTask = storage.ref(`images/${image.name}`).put(image);

      // viusualizing the progress of the upload in progress bar
      uploadTask.on(
          "state_changed",
          (snapshot) => {
              // progress function...
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100.0);
              setProgress(progress);
          },
          (error) => {
              // error function...
              console.log(error.message);
              alert(error.message);
          },
          () => {
              // complete function... this function gets the download link
              storage.ref("images").child(image.name).getDownloadURL()
              .then(url => {
                  // post image inside db
                  db.collection("posts").add({
                      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                      caption: caption,
                      imageUrl: url,
                      username: username 
                  });
                  // no values after completing function
                  setProgress(0);
                  setCaption("");
                  setImage(null);
              });
          }
      );
  };

  return (
    <div className="imageupload">
      <progress className="imageupload__progress" value={progress} max="100" />
      <input type="text" placeholder="Enter a caption..." onChange={(event) => setCaption(event.target.value)} value={caption} />
      <input type="file" onChange={handleChange} />
      <Button onClick={handleUpLoad}>Upload</Button>
    </div>
  );
}

export default ImageUpload;
