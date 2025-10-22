<script setup lang="ts">
import SkButton from '@skiyee/uni-ui/components/sk-button.vue'
import { ref } from 'vue'

const name = ref('Uni UnoCSS')
</script>

<template>
  <div class="h-screen text-center flex select-none transition-all">
    <div class="ma">
      <div class="text-3xl m-2.5 fw600 animate-bounce-alt animate-count-infinite animate-duration-1s">
        {{ name }}
      </div>

      <!-- 注释内容 -->
      <div class="op30 text-lg fw300 m1 mb6">
        采用更激进的语法在 UniApp 中使用 UnoCSS
      </div>

      <SkButton label="Love from skiyee/ui" />

      <div class="m2 flex justify-center text-2xl op30 translate-x-10 hover-op80 sk-unit:(py-6 my-8)">
        <a href="https://github.com/skiyee/unocss-preset-uni" target="_blank" class="i-carbon-logo-github text-inherit" />
      </div>
    </div>
  </div>
  <div class="absolute bottom-5 right-0 left-0 text-center op30 fw300">
    Thanks @<a href="https://github.com/unocss/unocss" target="_blank" class="text-inherit">UnoCSS</a>
    And @<a href="https://github.com/unocss-applet/unocss-applet" target="_blank" class="text-inherit">UnoCSS Applet</a>
  </div>
</template>
