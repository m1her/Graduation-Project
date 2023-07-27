import Card from "components/Card";
import { useRouter } from "next/navigation";
const CatagoryCard = ({
  bgUrl,
  cardClassname,
  textClassname,
  children,
  catagory,
  ...rest
}) => {
  const cardClassName = `cursor-pointer select-none text-3xl font-extrabold font-mono text-black hover:text-white w-full h-36 justify-center items-center flex bg-opacity-40 hover:bg-black hover:bg-opacity-30 ${
    cardClassname ?? ""
  }`;
  const router = useRouter();
  const handleCatagoryNavegation = () => {
    router.push(`Category?type=${catagory}`);
  };

  return (
    <div
      className={`${bgUrl} bg-cover rounded-lg`}
      onClick={() => handleCatagoryNavegation(catagory)}
    >
      <Card className={cardClassName} {...rest}>
        {children}
      </Card>
    </div>
  );
};
export default CatagoryCard;
