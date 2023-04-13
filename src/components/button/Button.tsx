import clsx from "clsx";
import { forwardRef, PropsWithChildren, ReactNode } from "react";
interface IButton {
  variant?: "primary" | "ghost" | "secondary";
  text?: string;
  children?: ReactNode;
  href?: string;
  className?: string;
}
export type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> &
  IButton;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props: PropsWithChildren<IButton>, ref) => {
    const {
      text,
      children,
      href,
      variant,
      className: customClassName,
      ...rest
    } = props;

    const isHyperlink = href;

    const isPrimary = variant === "primary";
    const isGhost = variant === "ghost";
    //   const isSecondary = variant === "secondary";
    if (href) {
      return <a href={href}>{text} </a>;
    }
    return (
      <button
        className={clsx(
          isGhost && "bg-transparent",
          isHyperlink && "bg-transparent",
          isPrimary &&
            "bg-white rounded-lg border border-solid border-gray-300",
          "font-medium text-sm",
          customClassName,
        )}
        ref={ref}
        {...rest}
      >
        {text || children}{" "}
      </button>
    );
  },
);

Button.displayName = "Button";
