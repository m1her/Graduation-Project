import Card from "components/Card";
import { useRouter } from "next/navigation";
<<<<<<< HEAD:src/components/CatagoryCard/index.js
=======

>>>>>>> 0a551231507c155c36be0e6f6beafce51fca115a:graduation-project/src/components/CatagoryCard/index.js
const CatagoryCard = ({
  bgUrl,
  cardClassname,
  textClassname,
  children,
<<<<<<< HEAD:src/components/CatagoryCard/index.js
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
=======
  text,
  ...rest
}) => {
  const cardClassName = `cursor-pointer select-none text-3xl font-extrabold font-mono text-black hover:text-white w-full h-40 justify-center items-center flex bg-opacity-40 hover:bg-black hover:bg-opacity-30 ${cardClassname ??
    ""}`;
>>>>>>> 0a551231507c155c36be0e6f6beafce51fca115a:graduation-project/src/components/CatagoryCard/index.js

  const router = useRouter();
  const handlePage = () => {
    router.push(`/web/Category/${text.replace(/\s/g, "-")}`);
  };
  return (
<<<<<<< HEAD:src/components/CatagoryCard/index.js
    <div
      className={`${bgUrl} bg-cover rounded-lg`}
      onClick={() => handleCatagoryNavegation(catagory)}
    >
=======
    <div className={`${bgUrl} bg-cover rounded-lg`} onClick={handlePage}>
>>>>>>> 0a551231507c155c36be0e6f6beafce51fca115a:graduation-project/src/components/CatagoryCard/index.js
      <Card className={cardClassName} {...rest}>
        {text}
      </Card>
    </div>
  );
};
export default CatagoryCard;
