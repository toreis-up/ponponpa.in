<template>
  <div class="wrapper">
    <div class="content">
      <rainbow>
        NOT FOUND
      </rainbow>
      <Mylink href="/">
        Back to home
      </Mylink>
    </div>
  </div>
</template>

<script>
import Mylink from './components/MyLink/mylink.vue';

  export default {
    props: ["error"],
    layout: "error" // you can set a custom layout for the error page
    ,
    components: { Mylink }
}
</script>

<style>
.wrapper {
  height: calc(100vh - 50px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.wrapper .content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.content {
  padding-top: 20px;
}

</style>
<style lang="scss">
* {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
