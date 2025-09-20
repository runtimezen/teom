import { cvp } from "../utils/cvp";

export type ReSwitchColor = "primary" | "accent";
export interface ReSwitchBaseProps {
  color?: ReSwitchColor;
}

export const switchVariant = cvp({
  base: "sch-base",
  slots: {
    root: "sch-root",
    thumb: "sch-thumb",
  },
  variants: {
    color: {
      primary: {
        root: "sch-root-primary focus-primary",
        thumb: "sch-thumb-primary",
      },
      accent: {
        root: "sch-root-accent focus-accent",
        thumb: "sch-thumb-accent",
      },
    },
  },
});
