import item from './item.js';

const items = [];
const hideCheckedItems = false;


const findById = function(id) {
    return items.find(item => item.id === id);
}


const addItem = function(name) {
    try {
            item.validateName(name);
            this.items.push(item.create(name));
          }
          catch(error) {
            console.log(`Cannot find item: ${error.message}`)
    }
}


const findAndToggleChecked = function(id) {
    const foundItem = this.findById(id);
    foundItem.checked = !foundItem.checked;
}

const findAndUpdateName = function(id, newName) {
    try {
        item.validateName(newName);
        this.findById(id).name = newName;
      }
      catch(error) {
        console.log(`Cannot update name: ${error.message}`)
}   
}

const findAndDelete = function (id) {
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
}

const toggleCheckedFilter = function () {
    this.hideCheckedItems = !this.hideCheckedItems;
}
    
export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
  };
