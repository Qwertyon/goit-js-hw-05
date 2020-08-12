// class Storage {
//   constructor(items) {
//     this.items = items;
//   }
// }

// Storage.prototype.getItems = function () {
//   return this.items;
// };

// Storage.prototype.addItem = function (item) {
//   items.push(item);
// };

// Storage.prototype.removeItem = function (item) {
//   const indexOfItem = items.indexOf(item);
//   if (indexOfItem !== -1) {
//     items.splice(indexOfItem, 1);
//   }
// };

// const storage = new Storage([
//   "Нанитоиды",
//   "Пролонгер",
//   "Железные жупи",
//   "Антигравитатор",
// ]);

// const items = storage.getItems();
// console.table(items);

// storage.addItem("Дроид");
// console.table(storage.items);

// storage.removeItem("Пролонгер");
// console.table(storage.items);

class Storage {
  constructor(items) {
    this.items = items;
  }
  getItems = function () {
    return this.items;
  };

  addItem = function (item) {
    items.push(item);
  };

  removeItem = function (item) {
    const indexOfItem = items.indexOf(item);
    if (indexOfItem !== -1) {
      items.splice(indexOfItem, 1);
    }
  };
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);

storage.addItem("Дроид");
console.table(storage.items);

storage.removeItem("Пролонгер");
console.table(storage.items);
