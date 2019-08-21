export const removeItem = <T>(items: T[], toBeFileredItem: T): T[] =>
  items.filter((item): boolean => item !== toBeFileredItem);

export const removeItems = <T>(items: T[], itemsToBeRemoved: T[]): T[] =>
  items.filter((item): boolean => !itemsToBeRemoved.includes(item));

export const listContainslist = <T>(list1: T[], list2: T[]): boolean =>
  list1.every((item): boolean => list2.includes(item));
