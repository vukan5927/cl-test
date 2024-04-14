<script setup lang="ts">
/* eslint-disable */
import { useFavorites } from "@/composables/useFavorites";
import { IFavoriteItem } from "@/types/FavoriteItem"; // Assuming your type is defined

defineProps<{
  photo: IFavoriteItem;
}>();

const { addItem, removeItem, isFavorite } = useFavorites();

const addToFavorite = (photo: IFavoriteItem) => addItem(photo);
const removeFromFavorite = (id: number) => removeItem(id);
</script>
<template>
  <div class="photo-item">
    <img :src="photo.thumbnailUrl" alt="Listing" class="photo-item__image" />
    <h2 class="photo-item__title capitalize">
      {{ photo.title }}
      <button
        v-if="!isFavorite(photo.id)"
        @click="addToFavorite(photo)"
        class="photo-item__button photo-item__button--favorite pointer"
      >
        <v-icon
          name="md-star"
          fill="#cdcdcd"
          scale="1.3"
          :hover="true"
          animation="pulse"
        />
      </button>
      <button
        v-if="isFavorite(photo.id)"
        @click="removeFromFavorite(photo.id)"
        class="photo-item__button photo-item__button--unfavorite pointer"
      >
        <v-icon
          name="md-star"
          fill="#003366"
          scale="1.3"
          :hover="true"
          animation="pulse"
        />
      </button>
    </h2>

    <p class="photo-item__album-id">Album ID {{ photo.albumId }}</p>
    <p class="photo-item__photo-id">Photo ID {{ photo.id }}</p>
  </div>
</template>
<style scoped lang="scss">
.photo-item {
  margin-bottom: 20px;
  border: 1px solid $quinary-color;
  height: 150px;
  padding: 10px;
  color: $primary-color;
  border-radius: 5px;

  &__image {
    float: left;
    margin-right: 15px;
    width: 150px;
    border-radius: 5px;
  }
  &__button {
    background-color: $white;
    border: none;
  }
}
</style>
