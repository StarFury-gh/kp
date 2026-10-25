import type { ReactElement, ReactNode } from "react";
import { Children, cloneElement } from "react";

interface ButtonGroupProps {
  children?: ReactNode;
}

type ClonedChildProps = { className?: string; [key: string]: unknown };

function ButtonGroup(props: ButtonGroupProps) {
  const { children } = props;

  const renderedChildren = Children.map(children, (child, index) => {
    if (typeof child !== "object" || child === null || !("props" in child)) {
      return child;
    }

    const total = Children.count(children);
    const isFirst = index === 0;
    const isLast = index === total - 1;

    const childClass =
      ((child.props as ClonedChildProps)?.className as string) || "";
    let className = `${childClass} rounded-none border-0`.trim();

    if (isFirst && isLast) {
      className = `${childClass} rounded-full border-0`.trim();
    } else if (isFirst) {
      className = `${childClass} rounded-l-full rounded-r-none border-0`.trim();
    } else if (isLast) {
      className = `${childClass} rounded-r-full rounded-l-none border-0`.trim();
    }

    return cloneElement(child as ReactElement<ClonedChildProps>, {
      ...(child.props as Record<string, unknown>),
      className,
    });
  });

  return (
    <div className="inline-flex overflow-hidden border border-primary">
      {renderedChildren}
    </div>
  );
}

export default ButtonGroup;
