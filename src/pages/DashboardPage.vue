<script setup lang="ts">
import { useFavorites } from "@/composables/useFavorites";
import PhotoItem from "@/components/PhotoItem.vue";
import GotoButton from "@/components/GotoButton.vue";

const { itemList } = useFavorites();
const goToPage = {
  to: "list",
  title: "Go to list",
};
</script>

<template>
  <GotoButton
    :to="goToPage.to"
    :title="goToPage.title"
    aria-label="Go to the photo list page"
  />

  <div class="dashboard-page">
    <section v-if="!!itemList.length" class="favorites-section">
      <ul class="dashboard-page__list">
        <li
          v-for="photo in itemList"
          :key="photo.id"
          class="dashboard-page__list__item"
        >
          <photo-item :photo="photo"></photo-item>
        </li>
      </ul>
    </section>
    <section v-else class="dashboard-page__section">
      No Favourite items.
    </section>
  </div>
</template>
