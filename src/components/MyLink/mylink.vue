<template>
  <a :href="href" class="hover">
    <slot />
  </a>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MyLink',
  props: {
    href: {
      type: String,
      default: () => 'https://google.com/'
    }
  }
})
</script>

<style>
.hover {
  --b: 0.1em;
  --c: #235e72;

  color: #0000;
  padding-block: var(--b);
  background:
    linear-gradient(var(--c) 50%, #000 0) 0% calc(100% - var(--_p,0%))/100% 200%,
    linear-gradient(var(--c) 0 0) 0% var(--_p,0%)/var(--_p,0%) var(--b) no-repeat;
  -webkit-background-clip: text,padding-box;
          background-clip: text,padding-box;
  transition: .3s var(--_s,0s) linear,background-size .3s calc(.3s - var(--_s,0s));
}
.hover:hover {
  --_p: 100%;
  --_s: .3s;
}
</style>