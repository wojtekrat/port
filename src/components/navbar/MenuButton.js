import { tv } from 'tailwind-variants';
 
const MenuButton = tv({
  base: "flex justify-center items-center font-medium text-white active:opacity-80 hover:bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-500 hover:rounded-xl h-10 mt-2 mx-1 p-2",
  variants: {
    color: {
      primary: " text-white",
      secondary: "text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  }
});

export default MenuButton