<template>
  <div class="about">
    <h1>{{this.$store.state.count}}</h1>
    <h2>{{this.getState}}</h2>
    <button @click="addFn">+</button>
    <button @click="redFn(8)">-</button>
    <button @click="numberFn">{{this.$store.state.num}}</button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["getState"])
  },
  mounted() {
    console.log(this.$store.state.count);
    console.log(this.$store.getters.getState);
    console.log(this.$store);
  },
  methods: {
    addFn() {
      this.$store.dispatch("addFn", 10);
    },

    ...mapActions(["redFn"]),

    numberFn() {
      this.$store.dispatch("numberFn", 111).then(() => {
        alert(1233);
      });
    }
  }
};
</script>
