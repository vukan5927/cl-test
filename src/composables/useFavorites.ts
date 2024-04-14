import { ref, watch, Ref } from "vue";
import { IFavoriteItem } from "@/types/FavoriteItem";

const itemList: Ref<IFavoriteItem[]> = ref<IFavoriteItem[]>([]);

export function useFavorites(): {
  itemList: Ref<IFavoriteItem[]>;
  addItem: (item: IFavoriteItem) => void;
  removeItem: (itemId: number) => void;
  isFavorite: (itemId: number) => boolean;
} {
  const addItem = (item: IFavoriteItem): void => {
    if (!isFavorite(item.id)) {
      // Prevent duplicates
      itemList.value.push(item);
    } else {
      console.info("Item is already a favorite");
    }
  };

  const removeItem = (itemId: number): void => {
    itemList.value = itemList.value.filter(
      (item: IFavoriteItem): boolean => item.id !== itemId
    );
  };

  const isFavorite = (itemId: number): boolean => {
    return itemList.value.some(
      (item: IFavoriteItem): boolean => item.id === itemId
    );
  };

  function loadFavorites(): IFavoriteItem[] {
    try {
      const storedFavorites = localStorage.getItem("favorites");
      return storedFavorites ? JSON.parse(storedFavorites) : [];
    } catch (error) {
      console.error("Error loading favorites:", error);
      return [];
    }
  }

  function saveFavorites(): void {
    localStorage.setItem("favorites", JSON.stringify(itemList.value));
  }

  // Load initial data on creation
  itemList.value = loadFavorites();

  // Potentially adjust functions to call saveFavorites after updates
  watch(itemList, () => saveFavorites(), { deep: true }); // Save on changes

  return {
    itemList,
    addItem,
    removeItem,
    isFavorite,
  };
}
