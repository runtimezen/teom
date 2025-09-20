import { cvp } from "../utils/cvp";

export type ReSliderColor = "primary" | "accent";
export interface ReSliderBaseProps {
  color?: ReSliderColor;
}

export const sliderVariant = cvp({
  slots: {
    range: "sld-range",
    root: "sld-root",
    thumb: "sld-thumb focus-accent",
    track: "sld-track",
  },
});
