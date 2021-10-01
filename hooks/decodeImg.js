export default function decodeImg(contentType, imgData) {
  const imgSrc = `data:${contentType};base64,${imgData.toString("base64")}`;

  return imgSrc;
}
