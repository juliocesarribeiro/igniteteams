import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppError } from '@utils/AppError';

import { groupGetAll } from './groupGetAll';
import { GROUP_COLLECTION } from '@storage/storageConfig';

export async function groupCreate(newGroupName: string) {
  try {
    const storedGroups = await groupGetAll();

    const groupAlreadyExists = storedGroups.includes(newGroupName);
    if (groupAlreadyExists) {
      throw new AppError('Turma já existe');
    }

    const storage = JSON.stringify([...storedGroups, newGroupName]);
    await AsyncStorage.setItem(GROUP_COLLECTION, storage)
  } catch (error) {
    throw error;

  }
}