import { PATH_DB } from '../constants/contacts.js';
import { readFile } from 'node:fs/promises';

export const readContacts = async () => {
  try {
    const jsonData = await readFile(PATH_DB, { encoding: 'utf8' });
    return JSON.parse(jsonData);
  } catch (error) {
    console.error('File reading error:', error);
  }
};
