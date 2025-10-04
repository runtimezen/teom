<script setup lang="ts">
import {
  CheckboxIndicator,
  CheckboxRoot,
  type CheckboxRootProps,
} from "reka-ui";
import { type HTMLAttributes } from "vue";
import IconCheck from "~icons/tabler/check";
import {
  type ReCheckboxBaseProps,
  checkboxVariant,
} from "@runtimezen/teom-shared";

export type ReCheckboxProps = ReCheckboxBaseProps
  & CheckboxRootProps
  & /* @vue-ignore */ HTMLAttributes;

const value = defineModel<boolean>();
const {
  color = "primary",
  ...props
} = defineProps<ReCheckboxProps>();
const variant = checkboxVariant({ color });
</script>

<template>
  <CheckboxRoot
    v-bind="props"
    v-model="value"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <Transition
      enter-from-class="chx-transit-from"
      enter-active-class="chx-transit-from-act"
      leave-to-class="chx-transit-to"
      leave-active-class="chx-transit-to-act"
    >
      <CheckboxIndicator :class="variant({ slot: 'indicator' })">
        <IconCheck :class="variant({ slot: 'icon' })" />
      </CheckboxIndicator>
    </Transition>
  </CheckboxRoot>
</template>
