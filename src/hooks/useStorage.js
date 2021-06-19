import { useEffect, useState } from "react";
import { projectFirestore, projectStorage, timestamp } from "../firebase";

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    //refernces
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection("images");

    storageRef.put(file).on(
      "state_changes",
      (snap) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const urls = await storageRef.getDownloadURL();
        const createdAt = timestamp();
        await collectionRef.add({ urls, createdAt });
        setUrl(urls);
      }
    );
  }, [file]);

  return { progress, url, error };
};

export default useStorage;
