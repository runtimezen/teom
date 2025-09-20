<script setup lang="ts">
import {
  RadioGroupRoot,
  type RadioGroupRootProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";

export type ReRadioGroupProps = RadioGroupRootProps
  & /* @vue-ignore */ HTMLAttributes;

const value = defineModel<string>();
const props = defineProps<ReRadioGroupProps>();
</script>

<template>
  <RadioGroupRoot
    v-bind="props"
    v-model="value"
  >
    <slot />
  </RadioGroupRoot>
</template>
