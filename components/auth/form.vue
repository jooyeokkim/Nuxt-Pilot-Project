<template>
  <div>
    <template v-if="alert">
      <b-alert v-model="alert.show" dismissible fade variant="danger"
        >{{ alert.contents }}
      </b-alert>
    </template>
    <h1 class="display-4 text-center mb-3">{{ title }}</h1>
    <slot :input-errors="inputErrors" :on-submit="onSubmit" name="form" />
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String
  }
})
const inputErrors = ref({});
const alert = ref({});

const onSubmit = async (submit) => {
  try {
    await submit();
  } catch (error) {
    if (error.response && error.response.inputErrors) {
      inputErrors.value = error.response.inputErrors;
    }
    alert.value = error.response.errors;
  }
};
</script>
