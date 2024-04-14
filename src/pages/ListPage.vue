<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import ListingService from "@/services/ListingService";

import GotoButton from "@/components/GotoButton.vue";
import PhotoItem from "@/components/PhotoItem.vue";
import { IFavoriteItem } from "@/types/FavoriteItem";

const photos = ref<IFavoriteItem[]>([]);
const page = ref(1);
const limit = 5;
const list = ref<HTMLElement | null>(null);
const loading = ref("idle");

const loadData = async () => {
  try {
    loading.value = "loading";

    const listingData: IFavoriteItem[] = await ListingService.getListings(
      page.value,
      limit
    );

    photos.value.push(...listingData);
    loading.value = listingData.length < limit ? "complete" : "idle";
    page.value++;
  } catch (error) {
    console.error("Error fetching data:", error);
    loading.value = "error";
    setTimeout(() => (loading.value = "idle"), 5000);
  }
};

const handleScroll = async () => {
  if (
    loading.value == "idle" &&
    list?.value &&
    list.value.getBoundingClientRect().bottom < window.innerHeight
  ) {
    loading.value = "loading";
    await loadData();
  }
};

//infinite scroll
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});
onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <div class="list-page">
    <GotoButton to="dashboard" title="Go to Dashboard" />
    <ul class="list-page__list" ref="list">
      <li v-for="photo in photos" :key="photo.id" class="list-page__item">
        <photo-item :photo="photo"></photo-item>
      </li>
    </ul>
    <span
      class="list-page__status list-page__status--loading"
      v-if="loading === 'loading'"
    >
      Loading...
    </span>
    <span
      class="list-page__status list-page__status--error"
      v-if="loading === 'error'"
    >
      Error. Try Again
    </span>
  </div>
</template>

<style scoped lang="scss">
button {
  padding: 10px;
  border: 1px solid $primary-color;
  background-color: $quaternary-color;
  border-radius: 5px;
}

.list-page {
  &__list {
  }

  &__item {
  }

  &__status {
    position: fixed;
    top: 4rem;
    right: 1rem;
    padding: 0.2rem 0.5rem;
    color: $primary-color;
  }

  &__status--loading {
    color: $primary-color;
  }

  &__status--error {
    color: $error-color;
  }

  &__status--complete {
    color: $success-color;
  }
}
</style>
