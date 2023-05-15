import Card from "components/Card";

const CatagoryCard = ({
  bgUrl,
  cardClassname,
  textClassname,
  children,
  ...rest
}) => {
  const cardClassName = `cursor-pointer select-none text-3xl font-extrabold font-mono text-black hover:text-white w-64 h-36 justify-center items-center flex bg-opacity-40 hover:bg-black hover:bg-opacity-30 ${
    cardClassname ?? ""
  }`;

  return (
    <div className={`${bgUrl} bg-cover rounded-lg`}>
      <Card className={cardClassName} {...rest}>
        {children}
      </Card>
    </div>
  );
};
export default CatagoryCard;
