// Decrypt
import CryptoJS from "crypto-js";

export default function Decrypt(text) {
  const bytes = CryptoJS.AES.decrypt(
    text + "",
    `${process.env.NEXT_PUBLIC_D_KEY}`
  );
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}
