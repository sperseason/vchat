<template>
  <div class="message-input-container">
    <div class="p-4 bg-white border-t border-gray-200">
      <!-- 输入框区域 -->
      <div class="relative">
        <textarea
          ref="textareaRef"
          v-model="message"
          placeholder="输入消息..."
          class="w-full min-h-[44px] max-h-[120px] px-4 py-3 pr-16 border border-gray-300 rounded-xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
          @keydown="handleKeydown"
          @input="handleInput"
        ></textarea>

        <!-- 发送按钮 -->
        <button
          @click="handleSend"
          :disabled="!canSend"
          class="absolute bottom-2 right-2 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all duration-200 shadow-sm hover:shadow-md"
          :class="{ 'opacity-50': !canSend }"
        >
          <Icon icon="ri:send-plane-fill" class="w-4 h-4" />
        </button>

        <!-- 字符计数 -->
        <div class="absolute bottom-2 right-12 text-xs text-gray-400">
          {{ message.length }}/1000
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, nextTick } from "vue";
import { Icon } from "@iconify/vue";

// 定义事件
const emit = defineEmits<{
  send: [message: string];
}>();

// 响应式数据
const message = ref("");
const textareaRef = ref<HTMLTextAreaElement>();

// 计算属性
const canSend = computed(() => {
  return message.value.trim().length > 0 && message.value.length <= 1000;
});

// 自动调整输入框高度
const adjustTextareaHeight = () => {
  if (textareaRef.value) {
    textareaRef.value.style.height = "auto";
    textareaRef.value.style.height =
      Math.min(textareaRef.value.scrollHeight, 120) + "px";
  }
};

// 处理输入事件
const handleInput = () => {
  adjustTextareaHeight();
};

// 处理键盘事件
const handleKeydown = (event: KeyboardEvent) => {
  // Enter 发送消息（Shift+Enter 换行）
  if (event.key === "Enter" && !event.shiftKey) {
    event.preventDefault();
    handleSend();
  }
};

// 发送消息
const handleSend = () => {
  if (!canSend.value) return;

  const messageText = message.value.trim();
  if (messageText) {
    // 发送事件给父组件
    emit("send", messageText);

    // 清空输入框
    message.value = "";

    // 重置输入框高度
    nextTick(() => {
      if (textareaRef.value) {
        textareaRef.value.style.height = "auto";
      }
    });
  }
};

// 暴露方法给父组件
defineExpose({
  focus: () => {
    textareaRef.value?.focus();
  },
  clear: () => {
    message.value = "";
    nextTick(() => {
      if (textareaRef.value) {
        textareaRef.value.style.height = "auto";
      }
    });
  },
});
</script>

<style scoped>
.message-input-container {
  @apply w-full;
}

/* 自定义滚动条 */
textarea::-webkit-scrollbar {
  width: 4px;
}

textarea::-webkit-scrollbar-track {
  background: transparent;
}

textarea::-webkit-scrollbar-thumb {
  background: #cbd5e0;
  border-radius: 2px;
}

textarea::-webkit-scrollbar-thumb:hover {
  background: #a0aec0;
}
</style>
