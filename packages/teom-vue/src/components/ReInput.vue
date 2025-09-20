<script setup lang="ts">
import { Primitive } from "reka-ui";
import type { InputHTMLAttributes } from "vue";
import {
  type ReInputBaseProps,
  inputVariant,
} from "@runtimezen/teom-shared";

export type ReInputProps = ReInputBaseProps
  & /* @vue-ignore */ InputHTMLAttributes;

const value = defineModel<string>();
const {
  color = "primary",
  asChild = false,
  ...props
} = defineProps<ReInputProps>();
const variant = inputVariant({ color });
</script>
<template>
  <Primitive
    v-bind="props"
    v-model="value"
    as="input"
    :as-child="asChild"
    :class="variant({ classes: props.class })"
  >
    <slot />
  </Primitive>
</template>
