import { useState } from "react";

export default function useProfile() {
  const [selectedImage, setSelectedImage] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0]; //mengambil file pertama dalam array (dalam hal ini, gambar yang dipilih oleh pengguna)
    const reader = new FileReader(); // Objek ini digunakan untuk membaca konten file yang dipilih oleh pengguna.

    reader.onload = (e: any) => {
      //callback yang akan dipanggil ketika pembaca telah selesai membaca file gambar yang dipilih oleh pengguna
      setSelectedImage(e.target.result);

      console.log("ini isi setSelectedImage", e.target.result);
    };

    reader.readAsDataURL(file); // pembacaan file yang dipilih oleh pengguna sebagai data URL

    console.log("ini isi selectedImage", selectedImage);
  };

  const handleFormSubmit = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("bio", bio);

    fetch("/user", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // lakukan sesuatu setelah berhasil mengirim data
        console.log("Response:", data);
      })
      .catch((error) => {
        // tangani kesalahan jika ada
        console.error("Error:", error);
      });
  };

  return {
    selectedImage,
    setSelectedImage,
    handleImageUpload,
    handleFormSubmit,
    setName,
    setEmail,
    setBio
  };
}
