// It's like having a homemaker who takes care of the cleaning, cooking, and washing while we focus on what matters most... in our code

// Web workers handles tasks like complex calculations, or data processing without slowing down main thread on a separate thread.
// Can handle API requests without blocking the main thread

// Web workers operate in a different global context(Self), not the familiar window

// Web workers communicate with the main thread through messaging pipeline to send or receive messages

// Main Thread: I need to stay focused on keeping the UI responsive
// Web Worker: Got it! I will handle the tough stuff like data fetching

// postMessage -- send data to the worker
// onMessage -- receive processed data from the worker
// onError -- handles errors

self.onmessage = function (e) {
  const number = e.data.number;
  const result = fibonacci(number);
  postMessage(result);
};

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example 1: Sorting a Massive Array
// Sorting a huge array can take a lot of time. Let’s let a Web Worker handle that.
self.onmessage = function (e) {
  const array = e.data.largeArray;
  array.sort((a, b) => a - b);
  postMessage(array);
};

// Example 2: Fetching Data from an API
self.onmessage = async function (e) {
  console.log(e, "appi worker");

  const url = e.data.url;
  console.log(url);

  try {
    const response = await fetch(url);
    console.log(response, "resp");

    const data = await response.json();
    postMessage(data);
  } catch (err) {
    postMessage({ error: "Failed to fetch data from API" });
  }
};
