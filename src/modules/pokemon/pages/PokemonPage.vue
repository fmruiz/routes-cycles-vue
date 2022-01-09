<template>
  <h1>Pokemon Page</h1>
  <span>{{ id }}</span>
</template>

<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style></style>
