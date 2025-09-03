<!--
 * @Author: 袁锐城
 * @Date: 2025-09-02 00:40:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-09-04 00:13:49
 * @Description: 
-->
<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="bg-white p-8 rounded-lg shadow-lg h-full">
      <h1 class="text-3xl font-bold text-blue-600 mb-4">💖 Hello World!</h1>
      <p class="text-gray-700">Welcome to your Electron application.</p>
      <button
        class="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Click me!
      </button>
    </div>
  </div>
</template>

<script setup>
console.log('👋 This message is being logged by "App.vue", included via Vite');
</script>
