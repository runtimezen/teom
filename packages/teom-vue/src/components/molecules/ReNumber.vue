<script setup lang="ts">
import {
  NumberFieldDecrement,
  NumberFieldIncrement,
  NumberFieldInput,
  NumberFieldRoot,
  type NumberFieldRootProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { numberVariant } from "@runtimezen/teom-shared";
import ReButton from "../atoms/ReButton.vue";
import IconMinus from "~icons/tabler/minus";
import IconPlus from "~icons/tabler/plus";

export type ReNumberProps = NumberFieldRootProps
  & /* @vue-ignore */ HTMLAttributes;

const value = defineModel<number>();
const props = defineProps<ReNumberProps>();

const variant = numberVariant();
</script>

<template>
  <NumberFieldRoot
    v-bind="props"
    v-model="value"
  >
    <div :class="variant({ slot: 'root', classes: props.class })">
      <NumberFieldDecrement as-child>
        <ReButton
          size="icon"
          color="secondary"
        >
          <slot name="icon-left">
            <IconMinus :class="variant({ slot: 'icon' })" />
          </slot>
        </ReButton>
      </NumberFieldDecrement>
      <NumberFieldInput :class="variant({ slot: 'input' })" />
      <NumberFieldIncrement as-child>
        <ReButton
          size="icon"
          color="secondary"
        >
          <slot name="icon-right">
            <IconPlus :class="variant({ slot: 'icon' })" />
          </slot>
        </ReButton>
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>
