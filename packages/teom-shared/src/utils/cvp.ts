// CVP - Class Variance Provider.
// A readable, simple, and minimalistic alternative
// for the great Joe Bell's CVA.
// Due to its nature, CVP is intended for use within 
// component libraries and omits certain features.

import { clsx } from "clsx";

type ToBoolean<T> = T extends "true" | "false" ? boolean : T;

// There are two types of VariantEntry values:
// CVPClass — global (all-slots) class names.
// CVPClassSlotted — slot-specific class names.
export type CVPClass = string | boolean | undefined | CVPClass[];
export type CVPClassSlotted = Record<string, CVPClass>;

export type CVPVariantEntry = Record<string, CVPClass | CVPClassSlotted>;
export type CVPVariants = Record<string, CVPVariantEntry>;
export type CVPSlots = Record<string, CVPClass>;

// Generates available to use variants and slots using the options.
export type CVPAvailableVariants<V extends CVPVariants> = {
  [K in keyof V]?: ToBoolean<keyof V[K]>;
};

export type CVP = <V extends CVPVariants, S extends CVPSlots>(
  options: {
    base?: CVPClass;
    variants?: V;
    slots?: S;
  }
) => (
  selected?: CVPAvailableVariants<V>,
) => (
  { slot, classes }: {
    slot?: keyof S;
    classes?: CVPClass;
  }
) => string;

export const cvp: CVP = (options) => {
  const { variants, base, slots } = options;
  return (selected) => {
    const slotClasses: Record<string, CVPClass[]> = {};
    const baseClasses: CVPClass[] = base ? [base] : [];
    if(slots) Object.keys(slots).forEach(
      (slot) => slotClasses[slot] = [slots[slot]],
    );

    if(variants && selected) {
      Object.keys(selected).forEach(
        (key) => {
          const selectedKey = selected[key]!;
          const availableKeys = variants[key];
          if(availableKeys) {
            const selectedClasses: CVPClass | CVPClassSlotted = availableKeys[selectedKey];
            if(typeof selectedClasses === "object") {
              const slottedClasses = selectedClasses as CVPClassSlotted;
              Object.keys(slottedClasses).forEach(
                (key) => slotClasses[key]!.push(slottedClasses[key]),
              );
            }
            else baseClasses.push(selectedClasses);
          }
        },
      );
    }
    return ({ slot, classes }) => (
      clsx(baseClasses, slot && slotClasses[slot as string], classes)
    );
  };
};
