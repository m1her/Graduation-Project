// import { useRouter } from "next/router";
import { Card, IconButton } from "components";
import { ChevronLeftIconMini } from "lib/@heroicons";
import type { RegistrationCardType } from "../../types";

export const RegistrationCard: RegistrationCardType = ({
  children,
  className,
  formTitle,
  formCaption,
  withBackButton = false,
  ...rest
}) => {
  // const router = useRouter();
  const cardClassName = `rounded-sm w-full max-w-[410px] relative py-8 px-12 min-[440px]:px-12 ${
    className || ""
  }`;

  return (
    <Card {...rest} className={cardClassName}>
      {withBackButton && (
        <IconButton className="absolute top-10 sm:left-9">
          <ChevronLeftIconMini />
        </IconButton>
      )}
      {/* <div className="flex items-center gap-4  justify-center">
        <Logo />
        <h1 className="text-base font-medium tracking-wider text-center">
          LeapStart
        </h1>
      </div> */}

      <div>
        {formTitle && <h6 className="text-xl my-4">{formTitle}</h6>}
        {children}
      </div>
      {formCaption && <p className="text-sm text-center mt-8">{formCaption}</p>}
    </Card>
  );
};

export default RegistrationCard;
