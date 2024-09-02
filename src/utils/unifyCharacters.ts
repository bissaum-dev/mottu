import { CharacterSchema } from '@/app/.types';

export function unifyCharacters(array: CharacterSchema[]): CharacterSchema[] {
  const unifiedObject: Record<string, CharacterSchema> = array.reduce((acc, item) => {
    if (!acc[item.id]) {
      acc[item.id] = { ...item };
    } else {
      acc[item.id] = { ...acc[item.id], ...item };
    }
    return acc;
  }, {} as Record<string, CharacterSchema>);

  return Object.values(unifiedObject);
}
