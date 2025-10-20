<script setup lang="ts">
import {
  progressVariant,
  type ReProgressBaseProps,
} from "@runtimezen/teom-shared";
import { computed, type HTMLAttributes } from "vue";

export type ReProgressProps = ReProgressBaseProps
  & /* @vue-ignore */ HTMLAttributes;

const {
  color = "primary",
  min = 0,
  max = 100,
  value = 0,
  ...props
} = defineProps<ReProgressProps>();
const variant = progressVariant({ color });
const indicatorWidth = computed<number>(
  () => {
    const result = value / (max - min) * 100;
    if(result > max) return max;
    if(result < min) return min;
    return result;
  },
);
</script>

<template>
  <div
    v-bind="props"
    role="progressbar"
    :aria-valuemax="max"
    :aria-valuemin="min"
    :aria-valuenow="value"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <div
      :class="variant({ slot: 'indicator' })"
      :style="{ width: indicatorWidth + '%'}"
    />
  </div>
</template>
