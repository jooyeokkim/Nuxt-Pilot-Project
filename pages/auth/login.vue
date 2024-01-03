<template>
  <div class="ms-10 mt-10">
    <FormKit type="form" :actions=false @submit="submitHandler">
      <FormKit
        label="Email"
        name="email"
        placeholder="name@address.com"
      />
      <FormKit
        type="password"
        name="password"
        label="Password"
      />
      <FormKit
        type="submit"
        label="Login"
      />
    </FormKit>
  </div>
</template>

<script setup>
import stringify from 'fast-json-stable-stringify';

onMounted(() => {
  if(Auth.isLoggedIn()) {
    navigateTo('/');
  }
  // AuthToken.set('', true);
});
// onMounted : 컴포넌트가 마운트될 때 실행
const submitHandler = async (data, node) => {
  const token = await AuthService.createToken(data, node);
  if (token) {
    AuthToken.set(token.auth_token, true);
  }

  const user = await UserService.me();
  localStorage.setItem('user', stringify(user));

  if (user) {
    alert('Login Success');
    navigateTo('/');
  }
};
</script>
