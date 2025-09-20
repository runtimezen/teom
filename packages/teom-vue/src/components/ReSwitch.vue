<script setup lang="ts">
import {
  SwitchRoot,
  type SwitchRootProps,
  SwitchThumb,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import {
  type ReSwitchBaseProps,
  switchVariant,
} from "@runtimezen/teom-shared";

export type ReSwitchProps = ReSwitchBaseProps
  & SwitchRootProps
  & /* @vue-ignore */ HTMLAttributes;

const value = defineModel<boolean>();
const { color = "primary", ...props } = defineProps<ReSwitchProps>();
const variant = switchVariant({ color });
</script>

<template>
  <SwitchRoot
    v-bind="props"
    v-model="value"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <SwitchThumb :class="variant({ slot: 'thumb' })" />
  </SwitchRoot>
</template>
