import { openDB, deleteDB } from "idb";

const checkIDB = (): boolean => {
  "use strict";

  if (!("indexedDB" in window)) {
    console.warn("IndexedDB not supported");
    return false;
  }
  return true;

  //...we can safely run IndexedDB code
};

const initDB = async () => {
  //...
  if (checkIDB()) {
    // if browser supports idb, execute
    const dbName = "collegedb";
    const storeName = "departments";
    const version = 1;

    const db = await openDB(dbName, version, {
      upgrade(db, oldVersion, newVersion, transaction) {
        if (!db.objectStoreNames.contains(storeName)) {
          const store = db.createObjectStore(storeName);
        }
      },
    });
    // await db.put(
    //   storeName,
    //   {
    //     name: "English",
    //     mainBuilding: {},
    //     courses: [],
    //   },
    //   "English"
    // );
    // await db.put(
    //   storeName,
    //   {
    //     name: "Mathematics",
    //     mainBuilding: {},
    //     courses: [],
    //   },
    //   "Mathematics"
    // );
  }
};

export { initDB };
