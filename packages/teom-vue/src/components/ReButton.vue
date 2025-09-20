<script setup lang="ts">
import { Primitive } from "reka-ui";
import type { ButtonHTMLAttributes } from "vue";
import {
  type ReButtonBaseProps,
  buttonVariant,
} from "@runtimezen/teom-shared";
import LoadingIcon from "~icons/line-md/loading-twotone-loop";

export type ReButtonProps = ReButtonBaseProps
  & /* @vue-ignore */ ButtonHTMLAttributes;

const {
  asChild = false,
  color = "primary",
  loading = false,
  size = "base",
  ...props
} = defineProps<ReButtonProps>();
const variant = buttonVariant({ color, size });
</script>

<template>
  <Primitive
    v-bind="props"
    as="button"
    :disabled="props.disabled || loading"
    :as-child="asChild"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <LoadingIcon
      v-if="loading"
      :class="variant({ slot: 'stater' })"
    />
    <slot v-else />
  </Primitive>
</template>
