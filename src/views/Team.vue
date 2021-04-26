<template>
  <navbar></navbar>
  <slideteam></slideteam>
  <div class="flex flex-col justify-center">
    <h1 class="font-semibold text-4xl text-blue pt-9">Our Team</h1>
    <teammember
      v-for="member in members"
      :key="member.id"
      :member="member"
    ></teammember>
  </div>
</template>


<script>
import Slideteam from '../components/slideteam.vue';
import teammember from "../components/teammember.vue";

export default {
  components: {
    teammember,
    Slideteam,
  },
  data() {
    return {
      members: [
        {
          idname: "62130500074",
          myname: "Pawat Munkong",
          rolles: "details : เทพ",
        },
        {
          idname: "62130500082",
          myname: "Worawit Makkasan",
          roles: "sdetails : กุ๊กๆๆๆ",
        },
        {
          idname: "62130500090",
          myname: "Sakulthip Rassameecharoentham",
          roles: "details : หยกกกกกก",
        },
      ],
    };
  },
};
</script>
