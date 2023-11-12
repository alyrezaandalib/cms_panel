"use client";
import Image from "next/image";
import { useRef, useState } from "react";
import IMG_Uploader from "@/public/img uploader.svg";
import { BiFullscreen } from "react-icons/bi";
import { BsTrash } from "react-icons/bs";

export default function SelectImage() {
  const inputRef = useRef(null);
  const [image, setImage]: any = useState("");
  const [imageName, setImageName]: any = useState("");
  const handleImageClick = () => {
    // @ts-ignore
    inputRef.current.click();
  };

  const handleImageChang = (e: any) => {
    setImage(e.target.files[0]);
    setImageName(e.target.files[0].name);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  const handleDrop = (e: any) => {
    e.preventDefault();
    setImage(e.dataTransfer.files[0]);
    setImageName(e.dataTransfer.files[0].name);
  };

  return (
    <div>
      {image ? (
        <div className={"relative"}>
          {/*// ** uploaded image ///////////////////////////////////*/}

          <div className={"w-full mb-2"}>{imageName}</div>
          <Image
            className={"rounded-lg"}
            src={URL.createObjectURL(image)}
            alt={"selected Image"}
            width={300}
            height={100}
          />
          <div
            style={{
              background: "linear-gradient(0deg, #278ED5, rgba(255,255,255,.0)",
            }}
            className={
              "absolute w-full h-16 bottom-0 flex items-end p-2 rounded-b-lg"
            }
          >
            <div
              className={
                "bg-gray-800 opacity-70 text-accent rounded-lg p-1 text-lg"
              }
              onClick={() => window.fullWidthImage.showModal()}
            >
              <BiFullscreen />
            </div>
            <div
              className={
                "bg-gray-800 opacity-70 text-red-500 rounded-lg p-1 ml-1 text-lg"
              }
              onClick={() => {
                setImage("");
                setImageName("");
              }}
            >
              <BsTrash />
            </div>
          </div>

          {/*// ** dialog ///////////////////////////////////*/}

          <dialog id="fullWidthImage" className="modal">
            <div className="modal-box">
              <Image
                className={"rounded-lg"}
                src={URL.createObjectURL(image)}
                alt={"selected Image"}
                width={1000}
                height={100}
              />
            </div>
            <form method="dialog" className="modal-backdrop">
              <button>close</button>
            </form>
          </dialog>
        </div>
      ) : (
        // ** base image ///////////////////////////////////
        <div
          onClick={handleImageClick}
          onDragOver={handleDragOver}
          onDrop={handleDrop}
        >
          <Image
            src={IMG_Uploader}
            alt={"IMG Uploader"}
            className={
              "cursor-pointer border-2 rounded-lg border-dashed border-accent"
            }
          />
          <input
            type={"file"}
            ref={inputRef}
            className={"hidden"}
            onChange={handleImageChang}
          />
        </div>
      )}
    </div>
  );
}

declare global {
  interface Window {
    fullWidthImage: any;
  }
}
