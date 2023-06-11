<template>
  <div class="wrapper">
    <div class="content">
      <rainbow>
        pͪoͣnͬpͣoͥnͭpͣa͡inͥ
      </rainbow>
    </div>
    <div class="footer">
      <footer>©{{ year }}
      <my-link href="https://twitter.com/toreis_up">
        toreis-up
      </my-link>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import MyLink from '~/components/MyLink/mylink.vue';

export default defineComponent({
  components: { MyLink },
  computed: {
    year: {
      get(): Number {
        return new Date().getFullYear()
      }
    }
  },
})
</script>

<style lang="scss" scoped>
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

.footer {
  font-size: 1.3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute; /* 追加 */
  bottom: 8px; /* 追加 */
}
</style>
<style lang="scss">
* {
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
</style>
