<script setup lang="ts">
import { Label, type LabelProps } from "reka-ui";
import type { LabelHTMLAttributes } from "vue";
import { labelVariant } from "@runtimezen/teom-shared";

export type ReLabelProps = LabelProps
  & /* @vue-ignore */ LabelHTMLAttributes;

const props = defineProps<ReLabelProps>();
const variant = labelVariant();
</script>

<template>
  <Label
    v-bind="props"
    :class="variant({ classes: props.class })"
  >
    <slot />
  </Label>
</template>
