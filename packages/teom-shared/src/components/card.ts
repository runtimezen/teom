import { cvp } from "../utils/cvp";

export type ReCardMaterial = "paper" | "glass"; 
export interface ReCardBaseProps {
  material?: ReCardMaterial;
}

export const cardVariant = cvp({
  base: "crd",
  variants: {
    material: {
      paper: "crd-paper",
      glass: "crd-glass",
    },
  },
});
