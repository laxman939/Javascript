// Create a new Web Worker using Worker()
const worker = new Worker("worker.js");

const data = {
  number: 40,
};
// Send data to the worker.
worker.postMessage(data);

// Receive data from the worker
worker.onmessage = function (e) {
  console.log("The result is: ", e.data, e);
};

// Handle worker errors
worker.onerror = function (err) {
  console.log("worker error: ", err);
};
// Practical examples
//Example 1: Sorting a Massive Array
const largeArray = Array.from({ length: 1000 }, () =>
  Math.floor(Math.random() * 1000000)
);
data.largeArray = largeArray;
worker.postMessage(data);

worker.onmessage = function (e) {
  console.log("Sorted arrray: ", e.data, e);
};

// Example 2: Fetching Data from an API

worker.postMessage({ url: "https://fakestoreapi.com/products" });
worker.onmessage = function (e) {
  if (e.data.error) {
    console.log("API Error: ", e.data.error);
  } else {
    console.log("Fetched data: ", e.data);
  }
};

// Why Web workers executing before main thread?
