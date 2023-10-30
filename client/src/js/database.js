import { openDB } from "idb";

const initdb = async () =>
  openDB("jate", 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains("jate")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("jate", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// Added logic to a method that puts content into the database
export const putDb = async (content) => {
    console.error("putDb not implemented");
    
    // Creates a connection to the database and version that is wanted to be used
    const jateDb = await openDB("jate", 1);

    // Creates a new transaction and specifies the database and data privileges
    const tx = jateDb.transaction("jate", "readwrite");

    // Opens up the desired object store
    const store = tx.objectStore("jate");

    // Uses the .put() method on the store and passes in the content
    const request = store.put({ id: 1, content: content });

    // Gets confirmation of the request
    const result = await request;
    console.log("🚀 - data saved to the database", result);
};

// Added logic for a method that gets all the content from the database
export const getDb = async () => {
    console.error("getDb not implemented");

    // Creates a connection to the database and version that is wanted to be used
    const jateDb = await openDB("jate", 1);

    // Creates a new transaction and specifies the database and data privileges
    const tx = jateDb.transaction("jate", "readonly");

    // Opens up the desired object store
    const store = tx.objectStore("jate");

    // Uses the .getAll() method to get all data in the database
    const request = store.getAll();

    // Gets confirmation of the request
    const result = await request;
    console.log("result.value", result);
    // return result;
};

// Starts the database
initdb();