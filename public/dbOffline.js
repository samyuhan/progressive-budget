let db;

const request = indexedDB.open("budget", 1);

// create new object store
request.onupgradeneeded = function (event) {
  const db = event.target.result;
  db.createObjectStore("pending", { autoIncrement: true });
};

// check if online
request.onsuccess = function (event) {
  db = event.target.result;

  if (navigator.onLine) {
    // make a checkdb() function;
  }
};

// check if there is a connection error
request.onerror = function (event) {
  console.log("Error: Cannot connected to database " + event.target.errorCode);
};

