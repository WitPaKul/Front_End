<template>
  <navbar></navbar>
  <slideteam></slideteam>
  <div class="flex flex-col justify-center">
    <h1 class="font-semibold text-4xl text-blue pt-9">Our Team</h1>
    <teammember ></teammember>
  </div>
  <footerbar></footerbar>
</template>


<script>
import Slideteam from '../components/slideteam.vue';
import teammember from "../components/teammember.vue";

export default {
  components: {
    teammember,
    Slideteam,
  },

};
</script>
