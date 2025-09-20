<script setup lang="ts">
import type { HTMLAttributes } from "vue";
import {
  SliderRange,
  SliderRoot,
  SliderThumb,
  SliderTrack,
  type SliderRootProps,
} from "reka-ui";
import {
  sliderVariant,
  type ReSliderBaseProps,
} from "@runtimezen/teom-shared";

export type ReSliderProps = ReSliderBaseProps
  & SliderRootProps
  & /* @vue-ignore */ HTMLAttributes;

const value = defineModel<number[]>();
const {
  color = "primary",
  ...props
} = defineProps<ReSliderProps>();
const variant = sliderVariant({ color });
</script>

<template>
  <SliderRoot
    v-bind="props"
    v-model="value"
    :class="variant({ slot: 'root', classes: props.class })"
  >
    <SliderTrack :class="variant({ slot: 'track' })">
      <SliderRange :class="variant({ slot: 'range' })" />
    </SliderTrack>
    <SliderThumb
      :class="variant({ slot: 'thumb' })"
      aria-label="Volume"
    />
  </SliderRoot>
</template>
