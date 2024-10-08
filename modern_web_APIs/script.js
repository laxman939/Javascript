// Payment Request API
// Secure context: This feature is available only in secure contexts (HTTPS), in some or all supporting browsers.
// const paymentRequest = new PaymentRequest(
//   paymentMethods,
//   paymentDetails,
//   options
// );
// paymentRequest
//   .show()
//   .then((paymentResponse) => {
//     // Process the payment
//   })
//   .catch((error) => {
//     console.error("Payment error:", error);
//   });

let btnElement = document.querySelector("#pay_button");
console.log(btnElement, "Payment");

//2. Storage APIs: Managing Data Efficiently ---> localStorage API, sessionStorage API, indexedDB API, cokkie store API

// 3. DOM API

// 4. Canvas API: Creating Dynamic Graphics
// The Canvas API opens up a world of possibilities for 2D and 3D graphics, games, and data visualization.
const canvas = document.getElementById("myCanvas");
// const ctx = canvas.getContext("2d");
// ctx.fillStyle = "blue";
// ctx.fillRect(10, 10, 150, 100);

// 5. History API: Managing Browser History
// The History API allows manipulation of the browser session history, enabling single-page applications to update the URL without a full page reload.

// Example:
history.pushState({ page: 2 }, "Page 2", "/page2");

// 7. Clipboard API: Improving Copy-Paste Functionality
// Example:
// navigator.clipboard
//   .writeText("Hello, Clipboard!")
//   .then(() => console.log("Text copied to clipboard"))
//   .catch((err) => console.error("Failed to copy: ", err));

//   8. Fullscreen API: Immersive User Experiences
// The Fullscreen API allows web applications to use the entire screen, perfect for video players, games, and presentations.
document.getElementById("fullscreenButton").addEventListener("click", () => {
  document.documentElement.requestFullscreen();
});

// 9. Drag and Drop API: Interactive User Interfaces
// The Drag and Drop API allows you to create intuitive interfaces where users can drag elements around the page.

// Example:
const draggable = document.getElementById("draggable");
draggable.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

// 10. Geolocation API: Location-Aware Web Apps
navigator.geolocation.getCurrentPosition(
  (position) => {
    console.log(
      `Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`
    );
  },
  (error) => {
    console.error("Geolocation error:", error);
  }
);

// React Tips and Tricks
// 10. Move data that doesn't rely on the component props/state outside of it for cleaner (and more efficient) code
