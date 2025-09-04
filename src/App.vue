<!--
 * @Author: 袁锐城
 * @Date: 2025-09-02 00:40:08
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2025-09-05 01:00:48
 * @Description: 
-->
<template>
  <div class="flex items-center justify-between h-screen">
    <div class="w-[300px] bg-gray-200 h-full border-r border-gray-300">
      <div class="h-[90%] overflow-y-auto">
        <ConversationList :conversations="conversationsDataList" />
      </div>
      <div class="h-10% grid grid-cols-2 gap-2 p-2">
        <button
          class="shadow-sm inline-flex items-center justify-center bg-green-700 text-white hover:bg-green-700/90 border border-green-700 h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]"
        >
          <Icon icon="ri:chat-1-line" class="mr-2" />
          新建聊天
        </button>
        <button
          class="shadow-sm inline-flex items-center justify-center bg-blue-700 text-white hover:bg-blue-700/90 border border-blue-700 h-[32px] py-[8px] px-[15px] text-sm rounded-[4px]"
        >
          <Icon icon="akar-icons:gear" class="mr-2" />
          应用设置
        </button>
      </div>
    </div>
    <div class="h-full flex-1 flex items-center">
      <div class="w-[80%] mx-auto h-full">
        <div class="h-[85%] flex items-center">
          <ProviderSelect :item="providerDataList" v-model="currentModel" />
        </div>
        <div class="h-[15%] flex items-center">
          <MessageInput />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ConversationProps, ProviderProps } from "./type";
import ConversationList from "./components/ConversationList.vue";
import ProviderSelect from "./components/ProviderSelect.vue";
import MessageInput from "./components/MessageInput.vue";
import { Icon } from "@iconify/vue";
const currentModel = ref<string>("");
const conversationsDataList: ConversationProps[] = [
  {
    id: "1",
    title: "testtesttesttesttesttesttesttesttesttesttest",
    // ...
    selectedModel: "testtesttesttest",
    createdAt: 1,
    updatedAt: 1,
    providerId: 1,
  },
  {
    id: "2",
    title: "testtesttesttesttesttesttesttesttest",
    selectedModel: "test2",
    createdAt: 2,
    updatedAt: 2,
    providerId: 2,
  },
  {
    id: "3",
    title: "testtesttesttesttesttesttesttesttesttesttesttest",
    selectedModel: "test3",
    createdAt: 3,
    updatedAt: 3,
    providerId: 3,
  },
  {
    id: "4",
    title: "testtesttesttesttesttesttesttesttesttesttesttest",
    selectedModel: "test3",
    createdAt: 3,
    updatedAt: 3,
    providerId: 3,
  },
  {
    id: "5",
    title: "testtesttesttesttesttesttesttesttesttesttesttest",
    selectedModel: "test3",
    createdAt: 3,
    updatedAt: 3,
    providerId: 3,
  },
  {
    id: "6",
    title: "testtesttesttesttesttesttesttesttesttesttesttest",
    selectedModel: "test3",
    createdAt: 3,
    updatedAt: 3,
    providerId: 3,
  },
  {
    id: "7",
    title: "testtesttesttesttesttesttesttesttesttesttesttest",
    selectedModel: "test3",
    createdAt: 3,
    updatedAt: 3,
    providerId: 3,
  },
  {
    id: "8",
    title: "testtesttesttesttesttesttesttesttesttesttesttest",
    selectedModel: "test3",
    createdAt: 3,
    updatedAt: 3,
    providerId: 3,
  },
];
const providerDataList: ProviderProps[] = [
  {
    id: 1,
    name: "文心一言",
    avatar: "https://www.radix-vue.com/logo.svg",
    createdAt: "2025-09-04",
    updatedAt: "2025-09-04",
    models: ["文心一言4.0", "文心一言3.5", "文心一言3.0"],
  },
  {
    id: 2,
    name: "通义千问",
    avatar: "https://www.radix-vue.com/logo.svg",
    createdAt: "2025-09-04",
    updatedAt: "2025-09-04",
    models: ["通义千问4.0", "通义千问3.5", "通义千问3.0"],
  },
];
</script>
