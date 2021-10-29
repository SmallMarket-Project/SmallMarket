import { Item } from '../model/item.js';
import { getItemData } from '../itemParsing.js';

export async function findByName(itemName) {
  return Item.findOne({ where: { itemName } });
}

export async function findById(id) {
  return Item.findByPk(id);
}

export async function findAll() {
  return Item.findAll();
}

export async function itemInitData() { 
  const datas = await getItemData();
  for(let i = 0; i < datas.length; i++) {
    const items = datas[i];
    Item.create(items).then(item => console.log(item.id)).catch(error => console.log(error));
  }
}