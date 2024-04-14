<script setup lang="ts">
/* eslint-disable */
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});

const goToPage = () => {
  if (props.to) {
    router.push({ name: props.to });
  } else {
    console.warn("The 'name' prop is required for navigation");
  }
};
</script>
<template>
  <div class="dash-button">
    <button @click="goToPage" class="dash-button__button pointer">
      {{ props.title }}
    </button>
  </div>
</template>
<style scoped lang="scss">
.dash-button {
  &__button {
    padding: 10px;
    margin: 10px 0;
    border: 1px solid $primary-color;
    background-color: $quaternary-color;
    border-radius: 5px;
  }
}
</style>
