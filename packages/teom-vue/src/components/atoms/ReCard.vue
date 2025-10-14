<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import { type ReCardBaseProps, cardVariant } from "@runtimezen/teom-shared";

export type ReCardProps = ReCardBaseProps
  & /* @vue-ignore */ HTMLAttributes;

const { material = "paper", ...props } = defineProps<ReCardProps>();
const variant = cardVariant({ material });
</script>

<template>
  <div
    v-bind="props"
    :class="variant({ classes: props.class })"
  >
    <slot />
  </div>
</template>
