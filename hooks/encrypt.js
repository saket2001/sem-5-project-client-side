const CryptoJS = require("crypto-js");

export default function encrypt(text) {
  return CryptoJS.AES.encrypt(
    text,
    `${process.env.NEXT_PUBLIC_D_KEY}`
  ).toString();
}
