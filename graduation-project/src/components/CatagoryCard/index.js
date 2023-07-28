import Card from "components/Card";
import { useRouter } from "next/navigation";

const CatagoryCard = ({
  bgUrl,
  cardClassname,
  textClassname,
  children,
  text,
  ...rest
}) => {
  const cardClassName = `cursor-pointer select-none text-3xl font-extrabold font-mono text-black hover:text-white w-full h-40 justify-center items-center flex bg-opacity-40 hover:bg-black hover:bg-opacity-30 ${cardClassname ??
    ""}`;

  const router = useRouter();
  const handlePage = () => {
    router.push(`/web/Category/${text.replace(/\s/g, "-")}`);
  };
  return (
    <div className={`${bgUrl} bg-cover rounded-lg`} onClick={handlePage}>
      <Card className={cardClassName} {...rest}>
        {text}
      </Card>
    </div>
  );
};
export default CatagoryCard;
