<template>
  <h1 class="rainbow"><slot /></h1>
</template>

<script lang="ts">
import './rainbow.css'
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'rainbow'
})
</script>