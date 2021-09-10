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
    checkdb();
  }
};

// check if there is a connection error
request.onerror = function (event) {
  console.log("Error: Cannot connected to database " + event.target.errorCode);
};

// adds record to store
function saveRecord(record) {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  store.add(record);
}

function checkdb() {
  const transaction = db.transaction(["pending"], "readwrite");
  const store = transaction.objectStore("pending");
  const all = store.getAll();

  all.onsuccess = function () {
    if (all.result.length > 0) {
      fetch("/api/transaction/bulk", {
        method: "POST",
        body: JSON.stringify(all.result),
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json"
        }
      })
        .then(response => response.json())
        .then(() => {
          const transaction = db.transaction(["pending"], "readwrite");
          const store = transaction.objectStore("pending");
          store.clear();
        });
    }
  };
}

// add event listener for when it's back online
window.addEventListener("online", checkDatabase);