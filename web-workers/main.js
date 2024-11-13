// Create a new Web Worker using Worker()
const worker = new Worker("worker.js");

// Send data to the worker.
worker.postMessage(4);

// Receive data from the worker
worker.onmessage = function (e) {
  console.log("The result is: ", e.data, e);
};

// Handle worker errors
worker.onerror = function (err) {
  console.log("worker error: ", err);
};
