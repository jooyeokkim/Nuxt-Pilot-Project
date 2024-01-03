<template>

</template>

<script setup>
import {AuthToken} from "../../utils/authToken";

onMounted(() => {
  AuthToken.set('', true);
  navigateTo('/');
});
</script>