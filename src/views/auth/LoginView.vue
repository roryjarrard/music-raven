<template>
  <form @submit.prevent="handleSubmit">
    <h3>Login</h3>
    <input type="email" placeholder="Email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <div v-if="error" class="error">{{ error }}</div>
    <button v-if="!isPending">Log in</button>
    <button v-if="isPending" disabled>Loading...</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useLogin from "@/composables/useLogin";
export default {
  setup() {
    const { error, login, isPending } = useLogin();

    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      if (!email.value || !password.value) {
        error.value = "Please fill in both fields";
        return;
      }
      const res = await login(email.value, password.value);
      if (!error.value) {
        console.log("user logged in", res);
      }
    };

    return {
      email,
      password,
      isPending,
      error,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>