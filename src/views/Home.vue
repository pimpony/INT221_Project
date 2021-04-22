<template>
  <div class="min-h-screen">
    <video autoplay muted loop id="myVideo" class="fixed bg-cover min-w-screen min-h-screen -z-99">
      <source src="../assets/bg-case-main-2.mp4" type="video/mp4" />
    </video>

    <div class="h-screen w-screen text-center flex justify-center items-center text-blue-600">
      <div>
        <h1 class="text-3xl font-bold">Welcome to the PICKA CASE</h1>
       
        <br />
        <router-link to="/case">
          <base-button
            buttonLabel="Case"
            buttonColor="bg-gray-400"
            textColor="text-white"
            borderColor="border-transparent"
            class="text-xl"
          />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>


export default {
  name: "Home",
  components: {},
};
</script>
