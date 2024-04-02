<template>
  <div>
    <section>
      <Producto />
    </section>
  </div>
</template>

<script>
import Producto from "@/components/Producto.vue";
export default {
  name: "ProductoView",
  components: {
    Producto,
  },
};
</script>
