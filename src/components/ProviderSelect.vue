<template>
  <div class="provider-select w-full">
    <SelectRoot v-model="currentModel">
      <SelectTrigger
        class="h-[40px] w-full flex items-center justify-between rounded-md border border-gray-300 p-2 shadow-sm cursor-pointer outline-none data-[placeholder]:text-gray-400"
      >
        <SelectValue placeholder="select a model" />
        <Icon icon="radix-icons:chevron-down" class="w-5 h-5" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent class="bg-white rounded-md shadow-md z-[100] border">
          <SelectViewport class="p-2">
            <div v-for="item in item" :key="item.id">
              <SelectLabel class="flex items-center px-6 h-7 text-gray-500">
                <img
                  :src="item.avatar"
                  :alt="item.name"
                  class="h-5 w-5 mr-2 rounded"
                />
                {{ item.name }}
              </SelectLabel>
              <SelectGroup>
                <SelectItem
                  v-for="model in item.models"
                  :key="model"
                  :value="`${item.id}/${model}`"
                  class="outline-none rounded flex items-center h-7 px-6 text-green-700 cursor-pointer data-[highlighted]:bg-green-700 data-[highlighted]:text-white"
                >
                  <SelectItemIndicator class="absolute left-2 w-6">
                    <Icon icon="radix-icons:check" />
                  </SelectItemIndicator>
                  <SelectItemText>{{ model }}</SelectItemText>
                </SelectItem>
              </SelectGroup>
              <SelectSeparator
                class="h-[1px] my-2 bg-gray-200"
              ></SelectSeparator>
            </div>
          </SelectViewport>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
<script lang="ts" setup>
import {
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectPortal,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectGroup,
  SelectLabel,
  SelectContent,
  SelectSeparator,
  SelectItemIndicator,
} from "radix-vue";
import { ProviderProps } from "../type";
import { Icon } from "@iconify/vue";
defineProps<{ item: ProviderProps[] }>();
const currentModel = defineModel<string>();
</script>
