<template>
  <div class="conversation-list">
    <div
      class="item border-gray-300 border-t cursor-pointer bg-white hover:bg-gray-200 p-2"
      v-for="conversation in conversations"
      :key="conversation.id "
    >
      <a href="#">
        <div class="flex justify-between items-center text-sm leading-5 text-gray-500">
          <span>{{ conversation.selectedModel }}</span>
          <span>{{ conversation.updatedAt }}</span>
        </div>
        <div class="font-semibold leading-6 text-gray-900 truncate">{{ conversation.title }}</div>
      </a>
  </div>
  </div>
</template>
<script setup lang="ts">
import { ConversationProps } from "../type";

const props = defineProps<{
  conversations: ConversationProps[];
}>();
</script>
