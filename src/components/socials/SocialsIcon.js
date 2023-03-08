import { tv } from 'tailwind-variants';
 
const SocialsIcon = tv({
  base: "text-4xl align-center justify-center text-white p-2 hover:bg-green-800 cursor-pointer ",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-4xl",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
    },
  ],
  defaultVariants: {
    size: "md",
  }
});

export default SocialsIcon