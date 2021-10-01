// Decrypt
import CryptoJS from "crypto-js";

export default function Decrypt(text) {
  const bytes = CryptoJS.AES.decrypt(text?.toString() + "", "1292939191922121");
  const decryptedData = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedData;
}
