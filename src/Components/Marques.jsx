import React from "react";
import Marque from "./Marque";

const Marques = () => {
  var images = [
    [
      "https://cdn.prod.website-files.com/62daa8e4cb60ee2ddfd58baa/635d2986618e0a405fabc4f6_17.%20DoubleTop.png",
      "https://cdn.prod.website-files.com/62daa8e4cb60ee2ddfd58baa/635d297f23db2946f47d7b83_16.%20SolRazr.png",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d5_vimeo.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15cf_flickr.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d2_pinata.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d1_onedrive.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d6_storj.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d7_google-drive.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d0_imgur.svg"
    ],
    [
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d3_amazon.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d4_smugmug.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15ce_dropbox.svg",
      "https://cdn.prod.website-files.com/62daa8e4cb60ee2ddfd58baa/635d2986618e0a405fabc4f6_17.%20DoubleTop.png",
      "https://cdn.prod.website-files.com/62daa8e4cb60ee2ddfd58baa/635d297f23db2946f47d7b83_16.%20SolRazr.png",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d5_vimeo.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15cf_flickr.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d2_pinata.svg",
      "https://cdn.prod.website-files.com/6721150e5e804e677eef1580/6721150e5e804e677eef15d5_vimeo.svg"

    ],
  ];
  return (
    <div className="py-20 mt-20  ">
      {images.map(item=><Marque imagesurl={item}/>) }
    </div>
  );
};

export default Marques;
