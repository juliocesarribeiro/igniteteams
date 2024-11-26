import AsyncStorage from "@react-native-async-storage/async-storage";
import { GROUP_COLLECTION, PLAYER_COLLECTION } from "@storage/storageConfig";

import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDelete: string) {
  try {
    const storageGroups = await groupGetAll();

    const groups = storageGroups.filter(group => group !== groupDelete);
    await AsyncStorage.setItem(GROUP_COLLECTION, JSON.stringify(groups));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDelete}`);

  } catch (error) {
    console.log(error);
  }
}