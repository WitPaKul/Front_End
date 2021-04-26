<template>
  <section class="text-gray-600 body-font">
    <div
      class="container mx-auto flex px-10 py-5 md:flex-row flex-col items-center"
    >
      <!-- box -->
      <div class="lg:max-w-lg lg:w-1/4 md:w-1/4 p-5 w-full">
        <img
          class="object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>
      <!--  -->
      <div
        class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
      >
        <h1
          class="title-font sm:text-3xl text-3xl mb-4 font-medium text-purple-dark"
        >
          {{ member.idname }}
        </h1>
        <h1
          class="title-font sm:text-3xl text-3xl mb-4 font-medium text-purple-dark"
        >
          {{ member.myname }}
        </h1>
        <h3
          class="title-font sm:text-2xl text-3xl mb-4 font-medium text-purple-dark"
        >
          {{ member.rolls }}
        </h3>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "slideteam",
  props: ["member"],
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Mitr";
h1,
h2,
h3,
p {
  font-family: "Mitr", sans-serif;
}
</style>