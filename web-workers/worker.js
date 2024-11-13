// It's like having a homemaker who takes care of the cleaning, cooking, and washing while we focus on what matters most... in our code

// Web workers handles tasks like complex calculations, or data processing without slowing down main thread on a separate thread.
// Can handle API requests without blocking the main thread

// Web workers operate in a different global context(Self), not the familiar window

// Web workers communicate with the main thread through messaging pipeline to send or receive messages

// postMessage -- send data to the worker
// onMessage -- receive processed data from the worker
// onError -- handles errors

self.onmessage = function (e) {
  const number = e.data;
  const result = fibonacci(number);
  postMessage(result);
};
j;

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
