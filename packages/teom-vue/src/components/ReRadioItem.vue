<script setup lang="ts">
import {
  RadioGroupIndicator,
  RadioGroupItem,
  type RadioGroupItemProps,
} from "reka-ui";
import type { HTMLAttributes } from "vue";
import { radioItemVariant } from "@runtimezen/teom-shared";

export type ReRadioItemProps = RadioGroupItemProps & /* @vue-ignore */ HTMLAttributes;

const props = defineProps<ReRadioItemProps>();
const variant = radioItemVariant();
</script>

<template>
  <RadioGroupItem
    v-bind="props"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <Transition
      enter-from-class="rdo-transit-from"
      enter-active-class="rdo-transit-from-act"
      leave-to-class="rdo-transit-to"
      leave-active-class="rdo-transit-to-act"
    >
      <RadioGroupIndicator :class="variant({ slot: 'indicator' })" />
    </Transition>
  </RadioGroupItem>
</template>
