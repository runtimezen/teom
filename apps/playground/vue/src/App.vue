<script setup lang="ts">
import "virtual:uno.css";
import "@runtimezen/teom-shared/style.css";
import "@fontsource/geologica/400.css";

import {
  ReButton,
  ReCard,
  ReCheckbox,
  ReInput,
  ReLabel,
  ReNumber,
  ReRadioGroup,
  ReRadioItem,
  ReSlider,
  ReSwitch,
} from "@runtimezen/teom-vue";
import { useColorMode } from "@vueuse/core";
import { ref } from "vue";

import AlertIcon from "~icons/line-md/arrow-right";

const numberValue = ref(0);

const mode = useColorMode({
  attribute: "class",
  modes: {
    sepia: "sepia",
  },
});
</script>

<template>
  <ReCard class="m-3 w-102">
    <div>
      <ReText
        element="h1"
        size="title"
      >
        Welcome to the Teom Design!
      </ReText>
      <ReText color="description">
        You you can try all the components here.
      </ReText>
    </div>
    <div class="flex flex-col gap-5">
      <div class="flex flex-col gap-1">
        <ReText
          variant="h2"
          size="title"
        >
          ReButton
        </ReText>
        <div class="flex gap-2">
          <ReLabel class="flex flex-col gap-1">
            Primary
            <ReButton class="w-24">
              Click
            </ReButton>
          </ReLabel>
          <ReLabel class="flex flex-col gap-1">
            Secondary
            <ReButton
              class="w-24"
              color="secondary"
            >
              Click
            </ReButton>
          </ReLabel>
          <ReLabel class="flex flex-col gap-1">
            Accent
            <ReButton
              class="w-24"
              color="accent"
              @click="() => mode === 'light' ? mode = 'dark' : mode = 'light'"
            >
              Toggle
            </ReButton>
          </ReLabel>
          <ReLabel class="flex flex-col gap-1">
            Icon
            <ReButton
              color="error"
              size="icon"
            >
              <AlertIcon />
            </ReButton>
          </ReLabel>
        </div>
        <div class="mt-1 flex gap-2">
          <ReLabel class="flex flex-col gap-1">
            Loading
            <ReButton
              class="w-24"
              :loading="true"
            >
              Loading
            </ReButton>
          </ReLabel>
          <ReLabel class="flex flex-col gap-1">
            Disabled
            <ReButton
              class="w-24"
              disabled
            >
              Disabled
            </ReButton>
          </ReLabel>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <ReText
          variant="h2"
          size="title"
        >
          ReCheckbox
        </ReText>
        <div class="flex gap-3">
          <ReLabel class="flex items-center gap-2">
            <ReCheckbox />
            Primary
          </ReLabel>
          <ReLabel class="flex items-center gap-2">
            <ReCheckbox color="accent" />
            Accent
          </ReLabel>
          <ReLabel class="flex items-center gap-2">
            <ReCheckbox
              :model-value="true"
              disabled
            />
            Disabled
          </ReLabel>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <ReText
          variant="h2"
          size="title"
        >
          ReSwitch
        </ReText>
        <div class="flex gap-3">
          <ReLabel class="flex items-center gap-2">
            <ReSwitch />
            Primary
          </ReLabel>
          <ReLabel class="flex items-center gap-2">
            <ReSwitch color="accent" />
            Accent
          </ReLabel>
          <ReLabel class="flex items-center gap-2">
            <ReSwitch
              :model-value="true"
              disabled
            />
            Disabled
          </ReLabel>
        </div>
      </div>
      <div class="flex flex-col gap-1">
        <ReText
          variant="h2"
          size="title"
        >
          ReNumber
        </ReText>
        <ReNumber
          v-model="numberValue"
          :min="0"
          :step="0.01"
          :max="1"
          :format-options="{
            style: 'percent',
          }"
        />
      </div>
      <div class="flex flex-col gap-1">
        <ReText
          variant="h2"
          size="title"
        >
          ReRadio
        </ReText>
        <div class="flex flex-col gap-3">
          <ReRadioGroup
            orientation="horizontal"
            class="flex gap-3"
          >
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="one" />
              One
            </ReLabel>
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="two" />
              Two
            </ReLabel>
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="three" />
              Three
            </ReLabel>
          </ReRadioGroup>
          <ReRadioGroup
            orientation="vertical"
            class="flex flex-col gap-2"
          >
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="one" />
              One
            </ReLabel>
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="two" />
              Two
            </ReLabel>
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="three" />
              Three
            </ReLabel>
          </ReRadioGroup>
          <ReRadioGroup
            class="flex gap-3"
            orientation="horizontal"
            model-value="two"
            disabled
          >
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="one" />
              Disabled
            </ReLabel>
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="two" />
              Disabled
            </ReLabel>
            <ReLabel class="flex items-center gap-2">
              <ReRadioItem value="three" />
              Disabled
            </ReLabel>
          </ReRadioGroup>
        </div>
      </div>
      <div class="flex flex-col gap-2">
        <ReText
          variant="h2"
          size="title"
        >
          ReInput
        </ReText>
        <ReLabel class="flex flex-col gap-1">
          Primary
          <ReInput placeholder="Placeholder" />
        </ReLabel>
        <ReLabel class="flex flex-col gap-1">
          Error
          <ReInput
            color="error"
            placeholder="Placeholder"
          />
        </ReLabel>
        <ReLabel class="flex flex-col gap-1">
          File
          <ReInput
            type="file"
            placeholder="Placeholder"
          />
        </ReLabel>
      </div>
      <div class="flex flex-col gap-2"> 
        <ReText
          variant="h2"
          size="title"
        >
          ReSlider
        </ReText>
        <ReSlider />
      </div>
    </div>
  </ReCard>
</template>
