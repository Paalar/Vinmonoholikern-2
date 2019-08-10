export const removeItem = (items: any[], item: any) => {
  return items.filter((i) => i !== item);
};

export const removeItems = (items: any[], itemsToBeRemoved: any[]) => {
  return items.filter((item) => !itemsToBeRemoved.includes(item));
};

export const listContainslist = (list1: any[], list2: any[]) => {
  return list1.every((item) => list2.includes(item));
}
