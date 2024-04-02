<template>
  <div>
    <figure>
      <img alt="StockConnect Logo" src="../assets/logo.png" />
    </figure>
    <section>
      <Login />
    </section>
  </div>
</template>

<script>
import Login from "@/components/Login.vue";

export default {
  name: "LoginView",
  components: {
    Login,
  },
};
</script>
