<script setup lang="ts">
import type { ProgressRootProps } from "reka-ui";
import { ProgressIndicator, ProgressRoot } from "reka-ui";
import {
  progressVariant,
  type ReProgressBaseProps,
} from "@runtimezen/teom-shared";
import { type HTMLAttributes } from "vue";

export type ReProgressProps = ProgressRootProps
  & ReProgressBaseProps
  & /* @vue-ignore */ HTMLAttributes;

const value = defineModel<number>();
const {
  color = "primary",
  ...props
} = defineProps<ReProgressProps>();
const variant = progressVariant({ color });
</script>

<template>
  <ProgressRoot
    v-bind="props"
    v-model="value"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <ProgressIndicator
      :class="variant({ slot: 'indicator' })"
      :style="`transform: translate3d(-${value ? 100 - value : 100}%, 0, 0)`"
    />
  </ProgressRoot>
</template>
