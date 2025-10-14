<script setup lang="ts">
import {
  textVariant,
  type ReTextBaseProps,
} from "@runtimezen/teom-shared";
import type { HTMLAttributes } from "vue";

export type ReTextProps = ReTextBaseProps
  & /* @vue-ignore */ HTMLAttributes;

const {
  as = "p",
  color = "primary",
  size = "base",
  ...props
} = defineProps<ReTextProps>();
const variant = textVariant({ color, size });
</script>

<template>
  <component
    v-bind="props"
    :is="as"
    :class="variant({ classes: props.class })"
  >
    <slot />
  </component>
</template>
