const withPWA = require("next-pwa");
module.exports = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
  images: {
    domains: ["https://images.unsplash.com", "images.pexels.com"],
  },
});

// module.exports = withPWA({
//   pwa: {
//     dest: "public",
//     register: true,
//     skipWaiting: true,
//   },
// });
