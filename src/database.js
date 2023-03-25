import { openDB } from 'idb';

const initdb = async () =>
  openDB('Riley', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('Riley')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('Riley', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });


// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb is not implemented');

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb is not implemented');
initdb();