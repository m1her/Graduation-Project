"use client";
import { Card, Spinner } from "components";
import { useState } from "react";
import Cropper from "react-easy-crop";

const CropImage = (props) => {
  const [selectedImage, setSelectedImage] = useState("");
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  const formData = new FormData();

  const file = props.Image;
  const reader = new FileReader();

  reader.onload = (event) => {
    const imageDataUrl = event.target.result;
    setSelectedImage(imageDataUrl);
  };

  reader.readAsDataURL(file);

  const confirmHandler = () => {
    if (formData.has(props.imageType)) {
      const croppedImage = formData.get(props.imageType);
      console.log("cropped"); // Print the specific entry from FormData
      props.onConfirm(formData);
    } else {
      formData.append(props.imageType, props.Image);
      console.log("not");
      props.onConfirm(formData);
    }
  };
  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    try {
      const croppedImage = await getCroppedImg(
        selectedImage,
        croppedAreaPixels
      );

      formData.append(props.imageType, croppedImage);
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  };
  function getCroppedImg(imageSrc, croppedAreaPixels) {
    return new Promise((resolve, reject) => {
      const image = new Image();
      image.src = imageSrc;

      image.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        canvas.width = croppedAreaPixels.width;
        canvas.height = croppedAreaPixels.height;

        ctx.drawImage(
          image,
          croppedAreaPixels.x,
          croppedAreaPixels.y,
          croppedAreaPixels.width,
          croppedAreaPixels.height,
          0,
          0,
          croppedAreaPixels.width,
          croppedAreaPixels.height
        );

        canvas.toBlob(
          (blob) => {
            resolve(
              new File([blob], "cropped_image.jpeg", { type: "image/jpeg" })
            );
          },
          "image/jpeg",
          1
        );
      };

      image.onerror = (error) => {
        reject(error);
      };
    });
  }

  return (
    <div className="z-50 fixed top-0 left-0 min-h-screen h-full w-full bg-[#000000b7] grid place-items-center">
      <Card className="p-10 relative w-[500px] h-[500px]">
        {selectedImage && (
          <div className="">
            <Cropper
              classes={{ containerClassName: "absolute" }}
              image={selectedImage}
              crop={crop}
              zoom={zoom}
              aspect={props.imageType === "profileImage" ? 3 / 3 : 6 / 3}
              onCropChange={setCrop}
              onZoomChange={setZoom}
              onCropComplete={onCropComplete}
            />
          </div>
        )}
      </Card>
      <button
        className="bg-indigo-500 -mt-10 px-2 py-1 text-white text-lg rounded-sm"
        onClick={confirmHandler}
      >
        {imageLoading ? <Spinner /> : "Confirm"}
      </button>
    </div>
  );
};

export default CropImage;
