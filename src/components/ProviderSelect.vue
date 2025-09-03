<template>
  <div class="provider-select">
    <SelectRoot>
      <SelectTrigger>
        <SelectValue placeholder="select a model" />
      </SelectTrigger>
      <SelectPortal>
        <SelectContent>
          <SelectViewport>
            <SelectItem value="apple">
              <SelectItemText>apple</SelectItemText>
            </SelectItem>
            <SelectItem value="banana">
              <SelectItemText>banana</SelectItemText>
            </SelectItem>
            <SelectItem value="orange">
              <SelectItemText>orange</SelectItemText>
            </SelectItem>
          </SelectViewport></SelectContent
        >
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
  SelectContent,
} from "radix-vue";
</script>
