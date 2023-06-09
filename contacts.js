// npm - package
const fs = require("node:fs");

// cek apakah file .json sudah dibuat
const path = "./data";
if (!fs.existsSync(path)) {
  fs.mkdirSync(path);
}
const dataPath = "./data/data.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContacts = () => {
  // baca file tersebut menggunakan konsep synchronous
  const file = fs.readFileSync("./data/data.json", "utf-8");
  //   convert format string yang terbaca tersebut menjadi format json
  const jsonParse = JSON.parse(file);

  return jsonParse;
};

const detailContact = (nama) => {
  const contacts = loadContacts();
  const contact = contacts.find((contact) => contact.nama.toLowerCase() === nama.toLowerCase());

  return contact;
};

const saveContacts = (contacts) => {
  fs.writeFileSync("./data/data.json", JSON.stringify(contacts));
};

const addContact = (data) => {
  const contacts = loadContacts();
  contacts.push(data);
  saveContacts(contacts);
};

const cekDuplikat = (data) => {
  const contacts = loadContacts();
  const find = contacts.find((contact) => contact.nama === data);
  return find;
};

const deleteContact = (data) => {
  const contacts = loadContacts();
  const filter = contacts.filter((contact) => contact.nama !== data);
  saveContacts(filter);
  // console.log(filter);
};
const updateContact = (newContact) => {
  const contacts = loadContacts();
  // hilangkan contact lama yang namanya sama dengan oldNama
  const filter = contacts.filter((contact) => contact.nama !== newContact.oldNama);
  // saveContacts(filter);
  delete newContact.oldNama;
  filter.push(newContact);
  saveContacts(filter);
};

module.exports = { loadContacts, detailContact, addContact, cekDuplikat, deleteContact, updateContact };
