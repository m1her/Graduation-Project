import type { CardType } from "../types";

export const Card: CardType = ({ children, className, ...rest }) => {
  const cardClassName = `bg-white p-4 rounded-lg shadow-md ${className ?? ""}`;

  return (
    <div className={cardClassName} {...rest}>
      {children}
    </div>
  );
};

export default Card;
